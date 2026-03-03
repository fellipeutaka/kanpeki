"use client";

import { AudioLinesIcon, PlusIcon, SendIcon } from "lucide-react";
import * as motion from "motion/react-client";
import { useState } from "react";
import { Button } from "~/registry/ui/button";
import { ButtonGroup } from "~/registry/ui/button-group";
import { InputGroup } from "~/registry/ui/input-group";
import { Tooltip } from "~/registry/ui/tooltip";
import { inView } from ".";

export function MessagesCard() {
  const [voiceEnabled, setVoiceEnabled] = useState(false);

  return (
    <motion.div
      className="flex flex-col gap-4 rounded-xl border bg-card p-6"
      variants={inView}
    >
      <div>
        <p className="font-semibold text-sm">Messages</p>
        <p className="text-muted-foreground text-xs">#kanpeki-general</p>
      </div>

      <MessageThread />

      <ButtonGroup.Root className="mt-auto w-full [--radius:9999rem]">
        <ButtonGroup.Root>
          <Button aria-label="Attach" size="icon" variant="outline">
            <PlusIcon />
          </Button>
        </ButtonGroup.Root>
        <ButtonGroup.Root className="flex-1">
          <InputGroup.Root>
            <InputGroup.Input
              disabled={voiceEnabled}
              placeholder={
                voiceEnabled ? "Recording audio…" : "Send a message…"
              }
            />
            <InputGroup.Addon align="inline-end">
              <Tooltip.Root>
                <InputGroup.Button
                  aria-label="Toggle voice mode"
                  aria-pressed={voiceEnabled}
                  className="data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700 dark:data-[active=true]:bg-orange-800 dark:data-[active=true]:text-orange-100"
                  data-active={voiceEnabled}
                  onPress={() => setVoiceEnabled((v) => !v)}
                  size="icon-xs"
                >
                  <AudioLinesIcon />
                </InputGroup.Button>
                <Tooltip.Content>
                  Voice mode
                  <Tooltip.Arrow />
                </Tooltip.Content>
              </Tooltip.Root>
            </InputGroup.Addon>
          </InputGroup.Root>
        </ButtonGroup.Root>
        <ButtonGroup.Root>
          <Button aria-label="Send" size="icon" variant="outline">
            <SendIcon />
          </Button>
        </ButtonGroup.Root>
      </ButtonGroup.Root>
    </motion.div>
  );
}

const messages = [
  {
    id: 1,
    author: "Sarah",
    initials: "SC",
    text: "Hey, did you see the new button variants?",
    mine: false,
  },
  {
    id: 2,
    author: "You",
    initials: "ME",
    text: "Yeah! The composition API is really clean.",
    mine: true,
  },
  {
    id: 3,
    author: "Sarah",
    initials: "SC",
    text: "Accessibility out of the box too 🎉",
    mine: false,
  },
] as const;

function MessageThread() {
  return (
    <ul className="flex flex-col gap-3">
      {messages.map((msg) => (
        <li
          className={`flex items-end gap-2 ${msg.mine ? "flex-row-reverse" : ""}`}
          key={msg.id}
        >
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary font-medium text-[10px] text-secondary-foreground">
            {msg.initials}
          </span>
          <span
            className={`max-w-[75%] rounded-2xl px-3 py-1.5 text-sm leading-snug ${
              msg.mine
                ? "rounded-br-sm bg-primary text-primary-foreground"
                : "rounded-bl-sm bg-secondary text-secondary-foreground"
            }`}
          >
            {msg.text}
          </span>
        </li>
      ))}
    </ul>
  );
}
