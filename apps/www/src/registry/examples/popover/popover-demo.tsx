import { Button } from "~/registry/ui/button/button";
import { Input } from "~/registry/ui/input";
import { Label } from "~/registry/ui/label/label";
import { Popover } from "~/registry/ui/popover";
import { TextField } from "~/registry/ui/text-field";

export function PopoverDemo() {
  return (
    <Popover.Root>
      <Button variant="outline">Open popover</Button>

      <Popover.Content className="w-80" placement="bottom start">
        <div className="grid gap-4">
          <div className="grid gap-1.5">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-muted-foreground text-sm">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <TextField
              autoFocus
              className="grid grid-cols-3 items-center gap-4"
              defaultValue="100%"
            >
              <Label>Width</Label>
              <Input className="col-span-2 h-8" />
            </TextField>
            <TextField
              className="grid grid-cols-3 items-center gap-4"
              defaultValue="300px"
            >
              <Label>Max. width</Label>
              <Input className="col-span-2 h-8" />
            </TextField>
            <TextField
              className="grid grid-cols-3 items-center gap-4"
              defaultValue="25px"
            >
              <Label>Height</Label>
              <Input className="col-span-2 h-8" />
            </TextField>
            <TextField
              className="grid grid-cols-3 items-center gap-4"
              defaultValue="none"
            >
              <Label>Max. height</Label>
              <Input className="col-span-2 h-8" />
            </TextField>
          </div>
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}
