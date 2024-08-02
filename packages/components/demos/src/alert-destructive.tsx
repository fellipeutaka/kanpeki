import { Alert } from "@kanpeki/ui/alert";
import { Icons } from "@kanpeki/ui/icons";

export default function AlertDemo() {
  return (
    <Alert.Root variant="destructive">
      <Icons.Ban className="size-4" />
      <Alert.Title>Error</Alert.Title>
      <Alert.Description>
        Your session has expired. Please log in again.
      </Alert.Description>
    </Alert.Root>
  );
}
