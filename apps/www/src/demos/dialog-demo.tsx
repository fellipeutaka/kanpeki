"use client";

import { Button } from "~/components/ui/button";
import { Dialog } from "~/components/ui/dialog";
import { Form } from "~/components/ui/form";
import { Label } from "~/components/ui/label";
import { TextField, TextFieldProvider } from "~/components/ui/textfield";

export default function DialogDemo() {
  return (
    <Dialog.Root>
      <Button variant="outline">Edit profile</Button>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Edit profile</Dialog.Title>
          <Dialog.Description>
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
        </Dialog.Header>

        <div className="grid gap-4 py-4">
          <TextFieldProvider
            defaultValue="Fellipe Utaka"
            className="grid grid-cols-4 items-center gap-4"
          >
            <Label className="ml-auto">Name</Label>
            <TextField.Root className="col-span-3">
              <TextField.Input />
            </TextField.Root>
          </TextFieldProvider>

          <TextFieldProvider
            defaultValue="@fellipeutaka"
            className="grid grid-cols-4 items-center gap-4"
          >
            <Label className="ml-auto">Username</Label>
            <TextField.Root className="col-span-3">
              <TextField.Input />
            </TextField.Root>
          </TextFieldProvider>
        </div>
        <Dialog.Footer>
          <Button variant="outline" slot="close">
            Cancel
          </Button>
          <Button slot="close">Save changes</Button>
        </Dialog.Footer>
        <Dialog.Close>
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Root>
  );
}
