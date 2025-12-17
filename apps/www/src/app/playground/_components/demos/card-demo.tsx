import { BathIcon, BedIcon, LandPlotIcon } from "lucide-react";
import Image from "next/image";

import { Avatar } from "~/registry/ui/avatar";
import { Badge } from "~/registry/ui/badge/badge";
import { Button } from "~/registry/ui/button/button";
import { Card } from "~/registry/ui/card";
import { Input } from "~/registry/ui/input";
import { Label } from "~/registry/ui/label/label";

export function CardDemo() {
  return (
    <div className="flex flex-col items-start gap-4">
      <Card.Root className="w-full max-w-sm">
        <Card.Header>
          <Card.Title>Login to your account</Card.Title>
          <Card.Description>
            Enter your email below to login to your account
          </Card.Description>
        </Card.Header>
        <Card.Content>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="m@example.com"
                  required
                  type="email"
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    href="/"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" required type="password" />
              </div>
            </div>
          </form>
        </Card.Content>
        <Card.Footer className="flex-col gap-2">
          <Button className="w-full" type="submit">
            Login
          </Button>
          <Button className="w-full" variant="outline">
            Login with Google
          </Button>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a className="underline underline-offset-4" href="/">
              Sign up
            </a>
          </div>
        </Card.Footer>
      </Card.Root>
      <Card.Root>
        <Card.Header>
          <Card.Title>Meeting Notes</Card.Title>
          <Card.Description>
            Transcript from the meeting with the client.
          </Card.Description>
        </Card.Header>
        <Card.Content className="text-sm">
          <p>
            Client requested dashboard redesign with focus on mobile
            responsiveness.
          </p>
          <ol className="mt-4 flex list-decimal flex-col gap-2 pl-6">
            <li>New analytics widgets for daily/weekly metrics</li>
            <li>Simplified navigation menu</li>
            <li>Dark mode support</li>
            <li>Timeline: 6 weeks</li>
            <li>Follow-up meeting scheduled for next Tuesday</li>
          </ol>
        </Card.Content>
        <Card.Footer>
          <div className="flex -space-x-2 *:data-[slot=avatar-root]:ring-2 *:data-[slot=avatar-root]:ring-background *:data-[slot=avatar-root]:grayscale">
            <Avatar.Root>
              <Avatar.Image alt="@shadcn" src="https://github.com/shadcn.png" />
              <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root>
              <Avatar.Image alt="@leerob" src="https://github.com/leerob.png" />
              <Avatar.Fallback>LR</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root>
              <Avatar.Image
                alt="@evilrabbit"
                src="https://github.com/evilrabbit.png"
              />
              <Avatar.Fallback>ER</Avatar.Fallback>
            </Avatar.Root>
          </div>
        </Card.Footer>
      </Card.Root>
      <Card.Root>
        <Card.Header>
          <Card.Title>Is this an image?</Card.Title>
          <Card.Description>This is a card. with an image.</Card.Description>
        </Card.Header>
        <Card.Content className="px-0">
          <Image
            alt="Photo by Drew Beamer"
            className="aspect-video object-cover"
            height={500}
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            width={500}
          />
        </Card.Content>
        <Card.Footer className="flex items-center gap-2">
          <Badge variant="outline">
            <BedIcon /> 4
          </Badge>
          <Badge variant="outline">
            <BathIcon /> 2
          </Badge>
          <Badge variant="outline">
            <LandPlotIcon /> 350m²
          </Badge>
          <div className="ml-auto font-medium tabular-nums">$135,000</div>
        </Card.Footer>
      </Card.Root>
      <div className="flex w-full flex-wrap items-start gap-8 md:*:data-[slot=card-root]:basis-1/4">
        <Card.Root>
          <Card.Content className="text-sm">Content Only</Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Header>
            <Card.Title>Header Only</Card.Title>
            <Card.Description>
              This is a card. with a header and a description.
            </Card.Description>
          </Card.Header>
        </Card.Root>
        <Card.Root>
          <Card.Header>
            <Card.Title>Header and Content</Card.Title>
            <Card.Description>
              This is a card. with a header and a content.
            </Card.Description>
          </Card.Header>
          <Card.Content className="text-sm">Content</Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Footer className="text-sm">Footer Only</Card.Footer>
        </Card.Root>
        <Card.Root>
          <Card.Header>
            <Card.Title>Header + Footer</Card.Title>
            <Card.Description>
              This is a card. with a header and a footer.
            </Card.Description>
          </Card.Header>
          <Card.Footer className="text-sm">Footer</Card.Footer>
        </Card.Root>
        <Card.Root>
          <Card.Content className="text-sm">Content</Card.Content>
          <Card.Footer className="text-sm">Footer</Card.Footer>
        </Card.Root>
        <Card.Root>
          <Card.Header>
            <Card.Title>Header + Footer</Card.Title>
            <Card.Description>
              This is a card. with a header and a footer.
            </Card.Description>
          </Card.Header>
          <Card.Content className="text-sm">Content</Card.Content>
          <Card.Footer className="text-sm">Footer</Card.Footer>
        </Card.Root>
      </div>
    </div>
  );
}
