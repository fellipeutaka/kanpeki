"use client";

import {
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  MessageCircleIcon,
} from "lucide-react";
import { Icons } from "~/components/icons";
import { siteConfig } from "~/config/site";
import { useCopyToClipboard } from "~/hooks/use-copy-to-clipboard";
import { Button } from "~/registry/ui/button";
import { ButtonGroup } from "~/registry/ui/button-group";
import { Menu } from "~/registry/ui/menu";
import { Popover } from "~/registry/ui/popover";

function getPromptUrl(baseURL: string, url: string) {
  return `${baseURL}?q=${encodeURIComponent(
    `I'm looking at this kanpeki documentation: ${url}.
Help me understand how to use it. Be ready to explain concepts, give examples, or help debug based on it.`
  )}`;
}

interface DocsCopyPageProps {
  page: string;
  url: string;
}

export function DocsCopyPage({ page, url }: DocsCopyPageProps) {
  const [copyToClipboard, isCopied] = useCopyToClipboard();
  const fullUrl = `${siteConfig.url}${url}`;

  return (
    <ButtonGroup.Root className="h-8 *:h-full max-sm:order-1 max-sm:col-span-full sm:self-center sm:justify-self-end md:h-7 *:md:text-[0.8rem]">
      <Button
        className="inline-grid pressed:scale-100 pressed:bg-secondary/70 *:row-start-1"
        onPress={() =>
          copyToClipboard({
            text: page,
          })
        }
        size="sm"
        variant="secondary"
      >
        <CheckIcon
          className="col-start-1 scale-0 transition-transform data-[visible='true']:scale-100"
          data-visible={isCopied}
        />
        <CopyIcon
          className="col-start-1 scale-0 transition-transform data-[visible='true']:scale-100"
          data-visible={!isCopied}
        />
        <span>Copy Page</span>
      </Button>

      <ButtonGroup.Separator />

      <Menu.Root>
        <Button
          className="group size-8 pressed:scale-100 pressed:bg-secondary/70 md:size-7"
          size="sm"
          variant="secondary"
        >
          <ChevronDownIcon className="transition group-pressed:rotate-180" />
          <span className="sr-only">Open In</span>
        </Button>

        <Popover.Content placement="bottom end">
          <Menu.Content>
            <Menu.Group>
              <Menu.Item
                href={getPromptUrl("https://v0.dev", fullUrl)}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icons.V0 />
                Open in v0
              </Menu.Item>
              <Menu.Item
                href={getPromptUrl("https://chatgpt.com", fullUrl)}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icons.Chatgpt />
                Open in ChatGPT
              </Menu.Item>
              <Menu.Item
                href={getPromptUrl("https://claude.ai/new", fullUrl)}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icons.Claude />
                Open in Claude
              </Menu.Item>
              <Menu.Item
                href={getPromptUrl("https://scira.ai", fullUrl)}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icons.Scira />
                Open in Scira
              </Menu.Item>
              <Menu.Item
                href={getPromptUrl("https://grok.com", fullUrl)}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icons.Grok />
                Open in Grok
              </Menu.Item>
              <Menu.Item
                href={getPromptUrl("https://t3.chat/new", fullUrl)}
                rel="noopener noreferrer"
                target="_blank"
              >
                <MessageCircleIcon className="fill-current" />
                Open in T3 chat
              </Menu.Item>
            </Menu.Group>
            <Menu.Separator />
            <Menu.Group>
              <Menu.Item
                href={`${url}.mdx`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icons.Markdown />
                View as Markdown
              </Menu.Item>
              <Menu.Item
                href={`${siteConfig.links.github}/blob/main/apps/www/src/content${url}.mdx`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icons.GitHub />
                View on GitHub
              </Menu.Item>
            </Menu.Group>
          </Menu.Content>
        </Popover.Content>
      </Menu.Root>
    </ButtonGroup.Root>
  );
}
