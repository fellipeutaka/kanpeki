"use client";

import { CheckIcon, CopyIcon, InfoIcon, StarIcon } from "lucide-react";
import { useState } from "react";
import { useCopyToClipboard } from "~/hooks/use-copy-to-clipboard";
import { InputGroup } from "~/registry/ui/input-group";
import { Popover } from "~/registry/ui/popover";

export function InputGroupButtonExample() {
  const [copy, isCopied] = useCopyToClipboard();
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup.Root>
        <InputGroup.Input placeholder="https://x.com/fellipeutaka" readOnly />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Button
            aria-label="Copy"
            // title="Copy"
            onPress={() => {
              copy({
                text: "https://x.com/fellipeutaka",
              });
            }}
            size="icon-xs"
          >
            {isCopied ? <CheckIcon /> : <CopyIcon />}
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root className="[--radius:9999px]">
        <Popover.Root>
          <InputGroup.Addon>
            <InputGroup.Button size="icon-xs" variant="secondary">
              <InfoIcon />
            </InputGroup.Button>
          </InputGroup.Addon>
          <Popover.Content
            className="max-w-[256px] space-y-1 rounded-xl text-sm"
            offset={8}
          >
            <p className="font-medium">Your connection is not secure.</p>
            <p>You should not enter any sensitive information on this site.</p>
          </Popover.Content>
        </Popover.Root>
        <InputGroup.Addon className="pl-1.5 text-muted-foreground">
          https://
        </InputGroup.Addon>
        <InputGroup.Input id="input-secure-19" />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Button
            onClick={() => setIsFavorite((s) => !s)}
            size="icon-xs"
          >
            <StarIcon
              className="data-[favorite=true]:fill-blue-600 data-[favorite=true]:stroke-blue-600"
              data-favorite={isFavorite}
            />
          </InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup.Root>
      <InputGroup.Root>
        <InputGroup.Input placeholder="Type to search..." />
        <InputGroup.Addon align="inline-end">
          <InputGroup.Button variant="secondary">Search</InputGroup.Button>
        </InputGroup.Addon>
      </InputGroup.Root>
    </div>
  );
}
