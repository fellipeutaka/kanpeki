/**
 * Registry Validation Script
 *
 * Validates the structure and naming conventions of component examples in the registry.
 *
 * Validation Rules:
 * 1. Each component folder in src/registry/examples/ must have a _registry.ts file
 * 2. Each component folder must contain at least one .tsx file
 * 3. All .tsx files must have the -demo.tsx suffix (e.g., button-demo.tsx)
 * 4. Each .tsx file must export exactly one function
 * 5. The exported function name must end with "Demo" suffix
 * 6. The exported function name must match the filename in PascalCase
 *    (e.g., button-icon-demo.tsx -> ButtonIconDemo)
 *
 * Usage:
 *   bun run registry:validate
 *
 * Performance:
 *   Sequential file reading is used intentionally. Benchmarks show that for small
 *   files (~153 files, <100KB total), sequential readFileSync (2-3ms) is 30-40%
 *   faster than parallel async reading (4-5ms) due to lower overhead.
 *
 * Exit codes:
 *   0 - All validations passed
 *   1 - Validation errors found
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

interface ValidationError {
  component: string;
  error: string;
}

interface ValidationResult {
  errors: ValidationError[];
  isValid: boolean;
}

const EXAMPLES_DIR = join(process.cwd(), "src", "registry", "examples");

/**
 * Convert kebab-case to PascalCase while preserving acronyms
 * e.g., "input-otp-demo" -> "InputOTPDemo"
 * e.g., "button-icon-demo" -> "ButtonIconDemo"
 */
function kebabToPascalCase(kebab: string): string {
  const parts = kebab.split("-");
  return parts
    .map((part) => {
      // Preserve known acronyms
      const uppercased = part.toUpperCase();
      if (["OTP"].includes(uppercased)) {
        return uppercased;
      }
      return part.charAt(0).toUpperCase() + part.slice(1);
    })
    .join("");
}

/**
 * Check if _registry.ts file exists in component directory
 */
function hasRegistryFile(componentPath: string): boolean {
  const registryFile = join(componentPath, "_registry.ts");
  try {
    statSync(registryFile);
    return true;
  } catch {
    return false;
  }
}

/**
 * Get all .tsx files in a directory
 */
function getTsxFiles(componentPath: string): string[] {
  const files = readdirSync(componentPath);
  return files.filter((file) => file.endsWith(".tsx"));
}

/**
 * Validate that all .tsx files have the -demo.tsx suffix
 */
function validateFileSuffixes(
  tsxFiles: string[],
  componentName: string
): ValidationError[] {
  const errors: ValidationError[] = [];
  const invalidSuffixes = tsxFiles.filter(
    (file) => !file.endsWith("-demo.tsx")
  );

  for (const file of invalidSuffixes) {
    errors.push({
      component: componentName,
      error: `File "${file}" must have -demo.tsx suffix (e.g., "${file.replace(".tsx", "-demo.tsx")}")`,
    });
  }

  return errors;
}

/**
 * Extract and validate exported function from file content
 */
function validateExportedFunction(
  content: string,
  file: string,
  expectedFunctionName: string,
  componentName: string
): ValidationError[] {
  const errors: ValidationError[] = [];
  const exportFunctionRegex = /export\s+function\s+(\w+)/g;
  const matches = [...content.matchAll(exportFunctionRegex)];

  if (matches.length === 0) {
    errors.push({
      component: componentName,
      error: `File "${file}" has no export function. Expected: export function ${expectedFunctionName}()`,
    });
    return errors;
  }

  if (matches.length > 1) {
    const functionNames = matches.map((m) => m[1]).join(", ");
    errors.push({
      component: componentName,
      error: `File "${file}" has multiple export functions: ${functionNames}. Must have exactly one export function.`,
    });
    return errors;
  }

  const exportedFunction = matches[0][1];

  // Check if function name ends with Demo
  if (!exportedFunction.endsWith("Demo")) {
    errors.push({
      component: componentName,
      error: `File "${file}" exports function "${exportedFunction}" which must end with "Demo" suffix. Expected: "${exportedFunction}Demo"`,
    });
  }

  // Check if function name matches expected name from filename
  if (exportedFunction !== expectedFunctionName) {
    errors.push({
      component: componentName,
      error: `File "${file}" exports function "${exportedFunction}" but expected "${expectedFunctionName}" based on filename`,
    });
  }

  return errors;
}

/**
 * Validate file content (export function and naming conventions)
 */
function validateFileContent(
  file: string,
  componentPath: string,
  componentName: string
): ValidationError[] {
  const filePath = join(componentPath, file);
  const content = readFileSync(filePath, "utf-8");

  // Extract expected function name from filename
  // e.g., button-demo.tsx -> ButtonDemo
  // e.g., button-icon-demo.tsx -> ButtonIconDemo
  // e.g., input-otp-demo.tsx -> InputOTPDemo
  const fileNameWithoutExt = file.replace(".tsx", "");
  const expectedFunctionName = kebabToPascalCase(fileNameWithoutExt);

  return validateExportedFunction(
    content,
    file,
    expectedFunctionName,
    componentName
  );
}

/**
 * Validate a single component directory
 */
function validateComponent(
  componentName: string,
  componentPath: string
): ValidationError[] {
  const errors: ValidationError[] = [];

  // Check 1: Must have _registry.ts file
  if (!hasRegistryFile(componentPath)) {
    errors.push({
      component: componentName,
      error: "Missing _registry.ts file",
    });
    return errors; // Skip other checks if _registry.ts is missing
  }

  // Check if folder contains subdirectories — if so, validate those instead
  const entries = readdirSync(componentPath, { withFileTypes: true });
  const subDirs = entries.filter((e) => e.isDirectory());

  if (subDirs.length > 0) {
    for (const subDir of subDirs) {
      const subName = `${componentName}/${subDir.name}`;
      const subPath = join(componentPath, subDir.name);
      errors.push(...validateComponent(subName, subPath));
    }
    return errors;
  }

  // Check 2: Must have at least one .tsx file
  const tsxFiles = getTsxFiles(componentPath);
  if (tsxFiles.length === 0) {
    errors.push({
      component: componentName,
      error: "No .tsx files found in component directory",
    });
    return errors;
  }

  // Check 3: All .tsx files must have -demo.tsx suffix
  errors.push(...validateFileSuffixes(tsxFiles, componentName));

  // Check 4: Each .tsx file must have exactly one export function with *Demo suffix
  for (const file of tsxFiles) {
    errors.push(...validateFileContent(file, componentPath, componentName));
  }

  return errors;
}

/**
 * Validate all component examples in the registry
 */
function validateRegistryExamples(): ValidationResult {
  const errors: ValidationError[] = [];

  // Get all directories in examples
  const entries = readdirSync(EXAMPLES_DIR, { withFileTypes: true });
  const componentDirs = entries.filter((entry) => entry.isDirectory());

  for (const dir of componentDirs) {
    const componentName = dir.name;
    const componentPath = join(EXAMPLES_DIR, componentName);

    errors.push(...validateComponent(componentName, componentPath));
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

function main() {
  const result = validateRegistryExamples();

  // Count statistics
  const entries = readdirSync(EXAMPLES_DIR, { withFileTypes: true });
  const componentDirs = entries.filter((entry) => entry.isDirectory());
  const totalComponents = componentDirs.length;

  let totalFiles = 0;
  for (const dir of componentDirs) {
    const componentPath = join(EXAMPLES_DIR, dir.name);
    const files = readdirSync(componentPath);
    totalFiles += files.filter((file) => file.endsWith(".tsx")).length;
  }

  if (result.isValid) {
    console.info("✅ Registry validation passed!\n");
    console.info("📊 Statistics:");
    console.info(`   • ${totalComponents} components validated`);
    console.info(`   • ${totalFiles} example files checked`);
    console.info("   • 0 errors found\n");
    process.exit(0);
  }

  console.error("❌ Registry validation failed!\n");

  // Group errors by component
  const errorsByComponent = result.errors.reduce(
    (acc, err) => {
      if (!acc[err.component]) {
        acc[err.component] = [];
      }
      acc[err.component].push(err.error);
      return acc;
    },
    {} as Record<string, string[]>
  );

  // Print errors grouped by component
  for (const [component, componentErrors] of Object.entries(
    errorsByComponent
  )) {
    console.error(`📦 ${component}:`);
    for (const error of componentErrors) {
      console.error(`   • ${error}`);
    }
    console.error("");
  }

  console.error("📊 Statistics:");
  console.error(
    `   • ${Object.keys(errorsByComponent).length} components with errors`
  );
  console.error(`   • ${totalComponents} total components`);
  console.error(`   • ${result.errors.length} total errors\n`);
  process.exit(1);
}

main();
