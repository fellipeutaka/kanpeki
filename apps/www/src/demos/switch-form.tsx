"use client";

import { toast } from "sonner";
import { Button } from "~/components/ui/button";
import { Form } from "~/components/ui/form";
import { Label } from "~/components/ui/label";
import { Switch } from "~/components/ui/switch";

export default function SelectFormDemo() {
  return (
    <Form.Root
      className="w-full space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.currentTarget));

        toast("You submitted the following values:", {
          description: (
            <pre className="mt-2 rounded-md p-4">
              <code className="font-mono text-sm">
                {JSON.stringify(data, null, 2)}
              </code>
            </pre>
          ),
        });
      }}
    >
      <h3 className="mb-4 font-medium text-lg">Email Notifications</h3>

      <div className="w-full space-y-4">
        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <div className="flex flex-col gap-0.5">
            <Label>Marketing emails</Label>
            <p className="text-muted-fg text-sm">
              Receive emails about new products, features, and more.
            </p>
          </div>

          <Switch.Root name="marketing-emails">
            <Switch.Track>
              <Switch.Thumb />
            </Switch.Track>
          </Switch.Root>
        </div>

        <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
          <div className="flex flex-col gap-0.5">
            <Label>Security emails</Label>
            <p className="text-muted-fg text-sm">
              Receive emails about your account security.
            </p>
          </div>

          <Switch.Root name="security-emails">
            <Switch.Track>
              <Switch.Thumb />
            </Switch.Track>
          </Switch.Root>
        </div>
      </div>

      <Button className="self-start" type="submit">
        Submit
      </Button>
    </Form.Root>
  );
}
