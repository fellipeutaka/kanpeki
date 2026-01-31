import { Icons } from "~/components/icons";
import { Alert } from "~/registry/ui/alert";

export function AlertWarningDemo() {
  return (
    <Alert.Root variant="warning">
      <Icons.TriangleAlert />
      <Alert.Title>Warning!</Alert.Title>
      <Alert.Description>
        Please be cautious while proceeding.
      </Alert.Description>
    </Alert.Root>
  );
}
