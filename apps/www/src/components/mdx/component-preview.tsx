import { getRegistryComponent } from "~/lib/registry";
import { Code } from "./code";
import { ComponentPreviewTabs } from "./component-preview-tabs";
import { ComponentSource } from "./component-source";

interface ComponentPreviewProps extends React.ComponentProps<"div"> {
  name: string;
}

export function ComponentPreview({
  name,
  className,
  ...props
}: ComponentPreviewProps) {
  const Component = getRegistryComponent(name);

  if (!Component) {
    return (
      <p className="text-muted-foreground text-sm">
        Component <Code>{name}</Code> not found in registry.
      </p>
    );
  }

  return (
    <ComponentPreviewTabs
      className={className}
      component={<Component />}
      source={<ComponentSource name={name} />}
      {...props}
    />
  );
}
