import { CheckCircle2Icon } from "lucide-react";
import { Alert } from "~/registry/ui/alert";

export function AlertDemo() {
  return (
    <Alert.Root>
      <CheckCircle2Icon />
      <Alert.Title>Success! Your changes have been saved</Alert.Title>
      <Alert.Description>
        This is an alert. with icon, title and description.
      </Alert.Description>
    </Alert.Root>
  );
}
