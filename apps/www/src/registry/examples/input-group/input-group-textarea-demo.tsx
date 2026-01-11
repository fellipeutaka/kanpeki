import { CopyIcon, CornerDownLeftIcon, RefreshCwIcon } from "lucide-react";
import { Icons } from "~/components/icons";
import { InputGroup } from "~/registry/ui/input-group";

export function InputGroupTextareaDemo() {
  return (
    <div className="grid w-full max-w-md gap-4">
      <InputGroup.Root>
        <InputGroup.Textarea
          className="min-h-50"
          id="textarea-code-32"
          placeholder="console.log('Hello, world!');"
        />
        <InputGroup.Addon align="block-end" className="border-t">
          <InputGroup.Text>Line 1, Column 1</InputGroup.Text>
          <InputGroup.Button className="ml-auto" size="sm" variant="default">
            Run <CornerDownLeftIcon />
          </InputGroup.Button>
        </InputGroup.Addon>
        <InputGroup.Addon align="block-start" className="border-b">
          <InputGroup.Text className="font-medium font-mono">
            <Icons.JavaScript />
            script.js
          </InputGroup.Text>
          <InputGroup.Button className="ml-auto" size="icon-xs">
            <RefreshCwIcon />
          </InputGroup.Button>
          <InputGroup.Button size="icon-xs" variant="ghost">
            <CopyIcon />
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup.Root>
    </div>
  );
}
