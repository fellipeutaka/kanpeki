import { Button } from "~/registry/ui/button/button";
import { Card } from "~/registry/ui/card";
import { Input } from "~/registry/ui/input";
import { Label } from "~/registry/ui/label/label";

export function CardDemo() {
  return (
    <Card.Root className="w-full max-w-sm">
      <Card.Header>
        <Card.Title>Login to your account</Card.Title>
        <Card.Description>
          Enter your email below to login to your account
        </Card.Description>
        <Card.Action>
          <Button variant="link">Sign Up</Button>
        </Card.Action>
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
                  href="/reset-password"
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
      </Card.Footer>
    </Card.Root>
  );
}
