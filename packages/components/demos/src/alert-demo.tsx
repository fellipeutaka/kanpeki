import { Alert } from "@kanpeki/ui/alert";
import { Icons } from "@kanpeki/ui/icons";

export default function AlertDemo() {
  return (
    <Alert.Root>
      <Icons.Rocket className="size-4" />
      <Alert.Title>Heads up!</Alert.Title>
      <Alert.Description>
        You can add components to your app using the cli.
      </Alert.Description>
    </Alert.Root>
  );
}
