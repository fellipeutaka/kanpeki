import { AlertCircleIcon } from "lucide-react";
import { Alert } from "~/registry/ui/alert";

export function AlertDestructiveDemo() {
  return (
    <Alert.Root variant="destructive">
      <AlertCircleIcon />
      <Alert.Title>Something went wrong!</Alert.Title>
      <Alert.Description>
        Your session has expired. Please log in again.
      </Alert.Description>
    </Alert.Root>
  );
}
