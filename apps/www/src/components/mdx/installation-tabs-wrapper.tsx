import {
  TabsContent,
  type TabsContentProps,
  TabsList,
  TabsRoot,
  TabsTrigger,
} from "../ui/tabs";

interface InstallationTabsProps {
  children: React.ReactNode;
}

export function InstallationTabs({ children }: InstallationTabsProps) {
  return (
    <TabsRoot defaultValue="manual" className="mt-6">
      <TabsList>
        <TabsTrigger value="manual">Manual</TabsTrigger>
        <TabsTrigger value="cli" disabled>
          CLI
        </TabsTrigger>
      </TabsList>

      {children}
    </TabsRoot>
  );
}

export function InstallationTab(props: TabsContentProps) {
  return <TabsContent {...props} />;
}
