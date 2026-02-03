import { Button } from "~/registry/ui/button";
import { Dialog } from "~/registry/ui/dialog";
import { Field } from "~/registry/ui/field";
import { Input } from "~/registry/ui/input";
import { TextField } from "~/registry/ui/text-field";

export function DialogDemo() {
  return (
    <Dialog.Root>
      <Button variant="outline">Edit Profile</Button>

      <Dialog.Overlay>
        <Dialog.Modal className="sm:max-w-106.25">
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Edit profile</Dialog.Title>
              <Dialog.Description>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </Dialog.Description>
            </Dialog.Header>
            <div className="grid gap-4">
              <Field.Root render={<TextField defaultValue="Pedro Duarte" />}>
                <Field.Label>Name</Field.Label>
                <Input />
              </Field.Root>

              <Field.Root render={<TextField defaultValue="@peduarte" />}>
                <Field.Label>Username</Field.Label>
                <Input />
              </Field.Root>
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
