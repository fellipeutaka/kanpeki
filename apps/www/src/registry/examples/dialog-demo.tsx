import { Button } from "~/registry/ui/button";
import { Dialog } from "~/registry/ui/dialog";
import { Input } from "~/registry/ui/input";
import { Label } from "~/registry/ui/label";
import { Textfield } from "~/registry/ui/textfield";

export function DialogDemo() {
  return (
    <Dialog.Root>
      <Button variant="outline">Edit Profile</Button>

      <Dialog.Overlay>
        <Dialog.Modal className="sm:max-w-[425px]">
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Edit profile</Dialog.Title>
              <Dialog.Description>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </Dialog.Description>
            </Dialog.Header>
            <div className="grid gap-4">
              <Textfield autoFocus defaultValue="Pedro Duarte" name="name">
                <Label>Name</Label>
                <Input />
              </Textfield>
              <Textfield defaultValue="@peduarte" name="username">
                <Label>Username</Label>
                <Input />
              </Textfield>
            </div>
            <Dialog.Footer>
              <Button slot="close" variant="outline">
                Cancel
              </Button>
              <Button type="submit">Save changes</Button>
            </Dialog.Footer>

            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Modal>
      </Dialog.Overlay>
    </Dialog.Root>
  );
}
