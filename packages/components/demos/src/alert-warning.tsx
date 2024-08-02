import { Alert } from "@kanpeki/ui/alert";
import { Icons } from "@kanpeki/ui/icons";

export default function AlertDemo() {
  return (
    <Alert.Root variant="warning">
      <Icons.TriangleAlert className="size-4" />
      <Alert.Title>Warning</Alert.Title>
      <Alert.Description>
        Your session will expire in 5 minutes. Please save your work.
      </Alert.Description>
    </Alert.Root>
  );
}
