import { Button } from "~/registry/ui/button/button";
import { Input } from "~/registry/ui/input";
import { Label } from "~/registry/ui/label/label";
import { Sheet } from "~/registry/ui/sheet";
import { TextField } from "~/registry/ui/text-field";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

export function SheetDemo() {
  return (
    <div className="flex flex-col gap-6 md:flex-row">
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
                <TextField defaultValue="Pedro Duarte">
                  <Label>Name</Label>
                  <Input />
                </TextField>
                <TextField defaultValue="@peduarte">
                  <Label>Username</Label>
                  <Input />
                </TextField>
              </div>
              <Sheet.Footer className="grid w-full gap-2 *:flex *:w-full">
                <Button type="submit">Save changes</Button>
                <Button slot="close" variant="outline">
                  Close
                </Button>
              </Sheet.Footer>

              <Sheet.Close />
            </Sheet.Content>
          </Sheet.Modal>
        </Sheet.Overlay>
      </Sheet.Root>
      <div className="flex gap-2">
        {SHEET_SIDES.map((side) => (
          <Sheet.Root key={side}>
            <Button className="capitalize" variant="outline">
              {side}
            </Button>

            <Sheet.Overlay>
              <Sheet.Modal side={side}>
                <Sheet.Content>
                  <Sheet.Header>
                    <Sheet.Title>Edit profile</Sheet.Title>
                    <Sheet.Description>
                      Make changes to your profile here. Click save when
                      you&apos;re done.
                    </Sheet.Description>
                  </Sheet.Header>
                  <div className="overflow-y-auto px-4 text-sm">
                    <h4 className="mb-4 font-medium text-lg leading-none">
                      Lorem Ipsum
                    </h4>
                    {Array.from({ length: 10 }).map((_, index) => (
                      // biome-ignore lint/suspicious/noArrayIndexKey: This is fine.
                      <p className="mb-4 leading-normal" key={index}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    ))}
                  </div>
                  <Sheet.Footer>
                    <Button type="submit">Save changes</Button>
                    <Button slot="close" variant="outline">
                      Cancel
                    </Button>
                  </Sheet.Footer>

                  <Sheet.Close />
                </Sheet.Content>
              </Sheet.Modal>
            </Sheet.Overlay>
          </Sheet.Root>
        ))}
      </div>
    </div>
  );
}
