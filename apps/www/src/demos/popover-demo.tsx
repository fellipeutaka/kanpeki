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
              className="grid grid-cols-3 items-center gap-4"
              defaultValue="100%"
            >
              <Label>Width</Label>
              <TextField.Root className="col-span-2 h-8">
                <TextField.Input />
              </TextField.Root>
            </TextField.Provider>

            <TextField.Provider
              className="grid grid-cols-3 items-center gap-4"
              defaultValue="300px"
            >
              <Label>Max. width</Label>
              <TextField.Root className="col-span-2 h-8">
                <TextField.Input />
              </TextField.Root>
            </TextField.Provider>

            <TextField.Provider
              className="grid grid-cols-3 items-center gap-4"
              defaultValue="25px"
            >
              <Label>Height</Label>
              <TextField.Root className="col-span-2 h-8">
                <TextField.Input />
              </TextField.Root>
            </TextField.Provider>

            <TextField.Provider
              className="grid grid-cols-3 items-center gap-4"
              defaultValue="none"
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
