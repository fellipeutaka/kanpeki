"use client";

import { AudioLinesIcon, PlusIcon } from "lucide-react";
import * as React from "react";
import { Button } from "~/registry/ui/button";
import { ButtonGroup } from "~/registry/ui/button-group";
import { InputGroup } from "~/registry/ui/input-group";
import { Tooltip } from "~/registry/ui/tooltip";

export function ButtonGroupInputGroupDemo() {
  const [voiceEnabled, setVoiceEnabled] = React.useState(false);

  return (
    <ButtonGroup.Root className="[--radius:9999rem]">
      <ButtonGroup.Root>
        <Button size="icon" variant="outline">
          <PlusIcon />
        </Button>
      </ButtonGroup.Root>
      <ButtonGroup.Root>
        <InputGroup.Root>
          <InputGroup.Input
            disabled={voiceEnabled}
            placeholder={
              voiceEnabled ? "Record and send audio..." : "Send a message..."
            }
          />
          <InputGroup.Addon align="inline-end">
            <Tooltip.Root>
              <InputGroup.Button
                aria-pressed={voiceEnabled}
                className="data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700 dark:data-[active=true]:bg-orange-800 dark:data-[active=true]:text-orange-100"
                data-active={voiceEnabled}
                onClick={() => setVoiceEnabled(!voiceEnabled)}
                size="icon-xs"
              >
                <AudioLinesIcon />
              </InputGroup.Button>
              <Tooltip.Content>
                Voice Mode
                <Tooltip.Arrow />
              </Tooltip.Content>
            </Tooltip.Root>
          </InputGroup.Addon>
        </InputGroup.Root>
      </ButtonGroup.Root>
    </ButtonGroup.Root>
  );
}
