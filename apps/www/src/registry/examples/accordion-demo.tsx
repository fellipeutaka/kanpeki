import { Accordion } from "~/registry/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion.Root
      className="w-full max-w-96"
      defaultExpandedKeys={["item-1"]}
    >
      <Accordion.Item id="item-1">
        <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It adheres to the WAI-ARIA design pattern.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item id="item-2">
        <Accordion.Trigger>Is it styled?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item id="item-3">
        <Accordion.Trigger>Is it animated?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It's animated by default, but you can disable it if you prefer.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}
