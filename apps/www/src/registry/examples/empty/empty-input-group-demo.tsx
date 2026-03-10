import { SearchIcon } from "lucide-react";
import { Empty } from "~/registry/ui/empty";
import { InputGroup } from "~/registry/ui/input-group";
import { Keyboard } from "~/registry/ui/keyboard";

export function EmptyInputGroupDemo() {
  return (
    <Empty.Root>
      <Empty.Header>
        <Empty.Title>404 - Not Found</Empty.Title>
        <Empty.Description>
          The page you&apos;re looking for doesn&apos;t exist. Try searching for
          what you need below.
        </Empty.Description>
      </Empty.Header>
      <Empty.Content>
        <InputGroup.Root className="sm:w-3/4">
          <InputGroup.Input placeholder="Try searching for pages..." />
          <InputGroup.Addon>
            <SearchIcon />
          </InputGroup.Addon>
          <InputGroup.Addon align="inline-end">
            <Keyboard>/</Keyboard>
          </InputGroup.Addon>
        </InputGroup.Root>
        <Empty.Description>
          Need help? <a href="/docs/components/empty">Contact support</a>
        </Empty.Description>
      </Empty.Content>
    </Empty.Root>
  );
}
