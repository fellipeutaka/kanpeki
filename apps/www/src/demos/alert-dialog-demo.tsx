"use client";

import { Button } from "~/components/ui/button";
import { Dialog } from "~/components/ui/dialog";

export default function AlertDialogDemo() {
  return (
    <Dialog.Root>
      <Button variant="outline">Show Dialog</Button>

      <Dialog.Content role="alertdialog">
        <Dialog.Header>
          <Dialog.Title>Are you absolutely sure?</Dialog.Title>
          <Dialog.Description>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer>
          <Button variant="outline" slot="close">
            Cancel
          </Button>
          <Button slot="close">Continue</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  );
}
