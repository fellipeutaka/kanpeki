import { Button } from "~/registry/ui/button/button";
import { Dialog } from "~/registry/ui/dialog";
import { Input } from "~/registry/ui/input";
import { Label } from "~/registry/ui/label/label";
import { Textfield } from "~/registry/ui/textfield";

export function DialogDemo() {
  return (
    <div className="flex flex-col items-start gap-4 md:flex-row">
      <DialogWithForm />
      <DialogScrollableContent />
      <DialogWithStickyFooter />
    </div>
  );
}

function DialogWithForm() {
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

function DialogScrollableContent() {
  return (
    <Dialog.Root>
      <Button variant="outline">Scrollable Content</Button>

      <Dialog.Overlay>
        <Dialog.Modal className="sm:max-w-[425px]">
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Scrollable Content</Dialog.Title>
              <Dialog.Description>
                This is a dialog. with scrollable content.
              </Dialog.Description>
            </Dialog.Header>
            <div className="-mx-6 max-h-[500px] overflow-y-auto px-6 text-sm">
              <h4 className="mb-4 font-medium text-lg leading-none">
                Lorem Ipsum
              </h4>
              {Array.from({ length: 10 }).map((_, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <p className="mb-4 leading-normal" key={index}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              ))}
            </div>

            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Modal>
      </Dialog.Overlay>
    </Dialog.Root>
  );
}

function DialogWithStickyFooter() {
  return (
    <Dialog.Root>
      <Button variant="outline">Sticky Footer</Button>

      <Dialog.Overlay>
        <Dialog.Modal>
          <Dialog.Content className="sm:max-w-lg">
            <Dialog.Header>
              <Dialog.Title>Scrollable Content</Dialog.Title>
              <Dialog.Description>
                This is a dialog. with scrollable content.
              </Dialog.Description>
            </Dialog.Header>
            <div className="-mx-6 max-h-[500px] overflow-y-auto px-6 text-sm">
              <h4 className="mb-4 font-medium text-lg leading-none">
                Lorem Ipsum
              </h4>
              {Array.from({ length: 10 }).map((_, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                <p className="mb-4 leading-normal" key={index}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              ))}
            </div>
            <Dialog.Footer>
              <Button slot="close" variant="outline">
                Close
              </Button>
            </Dialog.Footer>

            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Modal>
      </Dialog.Overlay>
    </Dialog.Root>
  );
}
