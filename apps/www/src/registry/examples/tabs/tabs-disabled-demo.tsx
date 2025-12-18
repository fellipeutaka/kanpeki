import { Tabs } from "~/registry/ui/tabs";

export function TabsDisabledDemo() {
  return (
    <Tabs.Root aria-label="Disabled tabs example">
      <Tabs.List>
        <Tabs.Trigger id="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger id="tab2" isDisabled>
          Tab 2
        </Tabs.Trigger>
        <Tabs.Trigger id="tab3">Tab 3</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content id="tab1">Content for Tab 1</Tabs.Content>
      <Tabs.Content id="tab2">Content for Tab 2</Tabs.Content>
      <Tabs.Content id="tab3">Content for Tab 3</Tabs.Content>
    </Tabs.Root>
  );
}
