import { Button } from "~/registry/ui/button/button";
import { Dialog } from "~/registry/ui/dialog";

export function AlertDialogDemo() {
  return (
    <Dialog.Root>
      <Button variant="outline">Show Dialog</Button>

      <Dialog.Overlay isDismissable={false}>
        <Dialog.Modal>
          <Dialog.Content role="alertdialog">
            <Dialog.Header>
              <Dialog.Title>Are you absolutely sure?</Dialog.Title>
              <Dialog.Description>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </Dialog.Description>
            </Dialog.Header>
            <Dialog.Footer>
              <Button slot="close" variant="outline">
                Cancel
              </Button>
              <Button>Continue</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Modal>
      </Dialog.Overlay>
    </Dialog.Root>
  );
}
