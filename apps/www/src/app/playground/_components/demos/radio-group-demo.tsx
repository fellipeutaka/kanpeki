import { Label } from "~/registry/ui/label/label";
import { RadioGroup } from "~/registry/ui/radio-group";

const plans = [
  {
    id: "starter",
    name: "Starter Plan",
    description:
      "Perfect for small businesses getting started with our platform",
    price: "$10",
  },
  {
    id: "pro",
    name: "Pro Plan",
    description: "Advanced features for growing businesses with higher demands",
    price: "$20",
  },
] as const;

export function RadioGroupDemo() {
  return (
    <div className="flex flex-col gap-6">
      <RadioGroup.Root aria-label="Display density" defaultValue="comfortable">
        <RadioGroup.Item id="r1" value="default">
          <RadioGroup.Indicator />
          <Label>Default</Label>
        </RadioGroup.Item>

        <RadioGroup.Item id="r2" value="comfortable">
          <RadioGroup.Indicator />
          <Label>Comfortable</Label>
        </RadioGroup.Item>

        <RadioGroup.Item id="r3" value="compact">
          <RadioGroup.Indicator />
          <Label>Compact</Label>
        </RadioGroup.Item>
      </RadioGroup.Root>

      <RadioGroup.Root
        aria-label="Plan selection"
        className="max-w-sm"
        defaultValue="starter"
      >
        {plans.map((plan) => (
          <RadioGroup.Item
            className="items-start rounded-lg border selected:border-green-600 selected:bg-green-50 p-4 hover:bg-accent/50 dark:selected:border-green-900 dark:selected:bg-green-950"
            key={plan.id}
            value={plan.id}
          >
            <RadioGroup.Indicator className="group-selected:border-green-600 not-dark:group-selected:bg-green-600 [&_svg]:fill-white [&_svg]:stroke-white" />

            <div className="grid gap-1 font-normal">
              <div className="font-medium">{plan.name}</div>
              <div className="text-muted-foreground leading-snug">
                {plan.description}
              </div>
            </div>
          </RadioGroup.Item>
        ))}
      </RadioGroup.Root>
    </div>
  );
}
