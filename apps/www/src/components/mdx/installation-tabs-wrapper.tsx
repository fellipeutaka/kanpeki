import { Tabs, type TabsContentProps } from "../ui/tabs";

interface InstallationTabsWrapperProps {
  children: React.ReactNode;
}

export function InstallationTabsWrapper({
  children,
}: InstallationTabsWrapperProps) {
  return (
    <Tabs.Root defaultValue="cli">
      <Tabs.List>
        <Tabs.Trigger value="cli">CLI</Tabs.Trigger>
        <Tabs.Trigger value="manual">Manual</Tabs.Trigger>
      </Tabs.List>

      {children}
    </Tabs.Root>
  );
}

export function InstallationTabs(props: TabsContentProps) {
  return <Tabs.Content {...props} />;
}
