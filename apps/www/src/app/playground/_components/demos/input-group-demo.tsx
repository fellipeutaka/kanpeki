"use client";

import {
  CheckIcon,
  CopyIcon,
  HelpCircleIcon,
  MinusIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react";
import { NumberField } from "react-aria-components";
import { useCopyToClipboard } from "~/hooks/use-copy-to-clipboard";
import { Button } from "~/registry/ui/button";
import { ButtonGroup } from "~/registry/ui/button-group";
import { Field } from "~/registry/ui/field";
import { Input } from "~/registry/ui/input";
import { InputGroup } from "~/registry/ui/input-group";
import { SearchField } from "~/registry/ui/search-field";
import { Tooltip } from "~/registry/ui/tooltip";

export function InputGroupDemo() {
  return (
    <div className="flex flex-col flex-wrap gap-4 md:flex-row">
      <InputGroup.Root render={<SearchField.Root />}>
        <InputGroup.Input placeholder="Search..." />
        <InputGroup.Addon>
          <SearchIcon />
        </InputGroup.Addon>
        <InputGroup.Addon align="inline-end">
          <SearchField.Button />
        </InputGroup.Addon>
      </InputGroup.Root>

      <InputGroupTextExample />

      <InputGroupButtonExample />

      <InputGroupTooltip />

      <Field.Root render={<NumberField />}>
        <Field.Label>Label</Field.Label>
        <ButtonGroup.Root>
          <Button aria-label="Decrement" slot="decrement" variant="outline">
            <MinusIcon />
          </Button>
          <Input placeholder="Search..." />
          <Button aria-label="Increment" slot="increment" variant="outline">
            <PlusIcon />
          </Button>
        </ButtonGroup.Root>
        <Field.Description>Optional helper text.</Field.Description>
        <Field.Error />
      </Field.Root>
    </div>
  );
}

function InputGroupTextExample() {
  return (
    <InputGroup.Root>
      <InputGroup.Addon>
        <InputGroup.Text>$</InputGroup.Text>
      </InputGroup.Addon>
      <InputGroup.Input placeholder="0.00" />
      <InputGroup.Addon align="inline-end">
        <InputGroup.Text>USD</InputGroup.Text>
      </InputGroup.Addon>
    </InputGroup.Root>
  );
}

function InputGroupButtonExample() {
  const [copy, isCopied] = useCopyToClipboard();

  return (
    <InputGroup.Root>
      <InputGroup.Input placeholder="https://x.com/fellipeutaka" readOnly />
      <InputGroup.Addon align="inline-end">
        <InputGroup.Button
          aria-label="Copy"
          className="inline-grid place-items-center *:col-start-1 *:row-start-1"
          onPress={() => {
            copy({
              text: "https://x.com/fellipeutaka",
            });
          }}
          size="icon-xs"
        >
          <CheckIcon
            className="scale-0 transition-transform data-[visible='true']:scale-100"
            data-visible={isCopied}
          />
          <CopyIcon
            className="scale-0 transition-transform data-[visible='true']:scale-100"
            data-visible={!isCopied}
          />
        </InputGroup.Button>
      </InputGroup.Addon>
    </InputGroup.Root>
  );
}

function InputGroupTooltip() {
  return (
    <InputGroup.Root>
      <InputGroup.Input placeholder="Enter API key" />
      <Tooltip.Root>
        <InputGroup.Addon>
          <InputGroup.Button aria-label="Help" size="icon-xs" variant="ghost">
            <HelpCircleIcon />
          </InputGroup.Button>
        </InputGroup.Addon>

        <Tooltip.Content>
          <p>Click for help with API keys</p>
        </Tooltip.Content>
      </Tooltip.Root>
    </InputGroup.Root>
  );
}
