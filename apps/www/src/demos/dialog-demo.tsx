import { Button } from "~/components/ui/button";
import { Dialog } from "~/components/ui/dialog";
import { Label } from "~/components/ui/label";
import { TextField } from "~/components/ui/textfield";

export default function DialogDemo() {
  return (
    <Dialog.Root>
      <Button variant="outline">Edit profile</Button>

      <Dialog.Overlay>
        <Dialog.Modal>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Edit profile</Dialog.Title>
              <Dialog.Description>
                Make changes to your profile here. Click save when you're done.
              </Dialog.Description>
            </Dialog.Header>

            <div className="grid gap-4 py-4">
              <TextField.Provider
                className="grid grid-cols-4 items-center gap-4"
                defaultValue="Fellipe Utaka"
              >
                <Label className="ml-auto">Name</Label>
                <TextField.Root className="col-span-3">
                  <TextField.Input />
                </TextField.Root>
              </TextField.Provider>

              <TextField.Provider
                className="grid grid-cols-4 items-center gap-4"
                defaultValue="@fellipeutaka"
              >
                <Label className="ml-auto">Username</Label>
                <TextField.Root className="col-span-3">
                  <TextField.Input />
                </TextField.Root>
              </TextField.Provider>
            </div>
            <Dialog.Footer>
              <Button slot="close" variant="outline">
                Cancel
              </Button>
              <Button slot="close">Save changes</Button>
            </Dialog.Footer>
            <Dialog.Close>
              <svg
                aria-hidden="true"
                className="size-4"
                fill="none"
                height={24}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                width={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Modal>
      </Dialog.Overlay>
    </Dialog.Root>
  );
}
