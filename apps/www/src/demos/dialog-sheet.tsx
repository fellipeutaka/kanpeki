import { Button } from "~/components/ui/button";
import { Dialog } from "~/components/ui/dialog";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

export default function DialogSheetDemo() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SHEET_SIDES.map((side) => (
        <Dialog.Root key={side}>
          <Button variant="outline">{side}</Button>

          <Dialog.Overlay>
            <Dialog.Modal side={side}>
              <Dialog.Content>
                <Dialog.Header>
                  <Dialog.Title>Are you absolutely sure?</Dialog.Title>
                  <Dialog.Description>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </Dialog.Description>
                </Dialog.Header>
                <Dialog.Footer>
                  <Button slot="close" variant="outline">
                    Cancel
                  </Button>
                  <Button slot="close">Continue</Button>
                </Dialog.Footer>
              </Dialog.Content>
            </Dialog.Modal>
          </Dialog.Overlay>
        </Dialog.Root>
      ))}
    </div>
  );
}
