import { InputGroup } from "~/registry/ui/input-group";

export function InputGroupTextDemo() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup.Root>
        <InputGroup.Addon>
          <InputGroup.Text>$</InputGroup.Text>
        </InputGroup.Addon>
        <InputGroup.Input placeholder="0.00" />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Text>USD</InputGroup.Text>
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Addon>
          <InputGroup.Text>https://</InputGroup.Text>
        </InputGroup.Addon>
        <InputGroup.Input className="pl-0.5!" placeholder="example.com" />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Text>.com</InputGroup.Text>
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Input placeholder="Enter your username" />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Text>@company.com</InputGroup.Text>
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Textarea placeholder="Enter your message" />
        <InputGroup.Addon align="block-end">
          <InputGroup.Text className="text-muted-foreground text-xs">
            120 characters left
          </InputGroup.Text>
        </InputGroup.Addon>
      </InputGroup.Root>
    </div>
  );
}
