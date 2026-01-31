"use client";

import { Button } from "~/registry/ui/button/button";
import { Field } from "~/registry/ui/field";
import { Input } from "~/registry/ui/input";
import { Sheet } from "~/registry/ui/sheet";
import { TextField } from "~/registry/ui/text-field";

export function SheetDemo() {
  return (
    <Sheet.Root>
      <Button variant="outline">Open</Button>

      <Sheet.Overlay>
        <Sheet.Modal side="right">
          <Sheet.Content>
            <Sheet.Header>
              <Sheet.Title>Edit profile</Sheet.Title>
              <Sheet.Description>
                Make changes to your profile here. Click save when you&apos;re
                done.
              </Sheet.Description>
            </Sheet.Header>
            <div className="grid flex-1 auto-rows-min gap-6 px-4">
              <Field.Root render={<TextField defaultValue="Pedro Duarte" />}>
                <Field.Label>Name</Field.Label>
                <Input />
              </Field.Root>

              <Field.Root render={<TextField defaultValue="@peduarte" />}>
                <Field.Label>Username</Field.Label>
                <Input />
              </Field.Root>
            </div>
            <Sheet.Footer>
              <Button type="submit">Save changes</Button>
            </Sheet.Footer>

            <Sheet.Close />
          </Sheet.Content>
        </Sheet.Modal>
      </Sheet.Overlay>
    </Sheet.Root>
  );
}
