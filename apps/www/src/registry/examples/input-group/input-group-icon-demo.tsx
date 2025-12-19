import {
  CheckIcon,
  CreditCardIcon,
  InfoIcon,
  MailIcon,
  SearchIcon,
  StarIcon,
} from "lucide-react";
import { InputGroup } from "~/registry/ui/input-group";

export function InputGroupIcon() {
  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup.Root>
        <InputGroup.Input placeholder="Search..." />
        <InputGroup.Addon>
          <SearchIcon />
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Input placeholder="Enter your email" type="email" />
        <InputGroup.Addon>
          <MailIcon />
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Input placeholder="Card number" />
        <InputGroup.Addon>
          <CreditCardIcon />
        </InputGroup.Addon>
        <InputGroup.Addon align="inline-end">
          <CheckIcon />
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Input placeholder="Card number" />
        <InputGroup.Addon align="inline-end">
          <StarIcon />
          <InfoIcon />
        </InputGroup.Addon>
      </InputGroup.Root>
    </div>
  );
}
