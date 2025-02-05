import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Popover } from "~/components/ui/popover";
import { TextField } from "~/components/ui/textfield";

export default function PopoverDemo() {
  return (
    <Popover.Root>
      <Button>Click me</Button>
      <Popover.Content className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-muted-fg text-sm">
              Set the dimensions for the layer.
            </p>
          </div>

          <div className="grid gap-2">
            <TextField.Provider
              defaultValue="100%"
              className="grid grid-cols-3 items-center gap-4"
            >
              <Label>Width</Label>
              <TextField.Root className="col-span-2 h-8">
                <TextField.Input />
              </TextField.Root>
            </TextField.Provider>

            <TextField.Provider
              defaultValue="300px"
              className="grid grid-cols-3 items-center gap-4"
            >
              <Label>Max. width</Label>
              <TextField.Root className="col-span-2 h-8">
                <TextField.Input />
              </TextField.Root>
            </TextField.Provider>

            <TextField.Provider
              defaultValue="25px"
              className="grid grid-cols-3 items-center gap-4"
            >
              <Label>Height</Label>
              <TextField.Root className="col-span-2 h-8">
                <TextField.Input />
              </TextField.Root>
            </TextField.Provider>

            <TextField.Provider
              defaultValue="none"
              className="grid grid-cols-3 items-center gap-4"
            >
              <Label>Max. height</Label>
              <TextField.Root className="col-span-2 h-8">
                <TextField.Input />
              </TextField.Root>
            </TextField.Provider>
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}
