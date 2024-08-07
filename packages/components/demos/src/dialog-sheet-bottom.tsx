import { Button } from "@kanpeki/ui/button";
import { Dialog } from "@kanpeki/ui/dialog";
import { Icons } from "@kanpeki/ui/icons";
import { Label } from "@kanpeki/ui/label";
import { TextField } from "@kanpeki/ui/text-field";

export default function DialogSheetBottomDemo() {
  return (
    <Dialog.Root sheet>
      <Dialog.Trigger>
        <Button variant="outline">Edit Profile</Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content side="bottom">
          <Dialog.Header>
            <Dialog.Title>Edit profile</Dialog.Title>
            <Dialog.Description>
              Make changes to your profile here. Click save when you're done.
            </Dialog.Description>
          </Dialog.Header>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <TextField.Root className="col-span-3">
                <TextField.Input id="name" defaultValue="Fellipe Utaka" />
              </TextField.Root>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <TextField.Root className="col-span-3">
                <TextField.Input id="username" defaultValue="@fellipeutaka" />
              </TextField.Root>
            </div>
          </div>
          <Dialog.Footer>
            <Dialog.Close asChild>
              <Button variant="outline">Cancel</Button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Button>Save changes</Button>
            </Dialog.Close>
          </Dialog.Footer>
          <Dialog.Close>
            <Icons.X className="size-4" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
