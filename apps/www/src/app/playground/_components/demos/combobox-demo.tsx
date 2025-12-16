"use client";

import { SearchIcon } from "lucide-react";
import { useMemo, useState } from "react";
import type { Key } from "react-aria-components";
import { Autocomplete } from "~/registry/ui/autocomplete";
import { Avatar } from "~/registry/ui/avatar";
import { Combobox } from "~/registry/ui/combobox";
import { InputGroup } from "~/registry/ui/input-group";
import { Listbox } from "~/registry/ui/list-box";
import { Popover } from "~/registry/ui/popover";
import { SearchField } from "~/registry/ui/search-field";
import { Select } from "~/registry/ui/select";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

type Framework = (typeof frameworks)[number];

const users = [
  {
    id: "1",
    username: "shadcn",
  },
  {
    id: "2",
    username: "leerob",
  },
  {
    id: "3",
    username: "evilrabbit",
  },
] as const;

type User = (typeof users)[number];

const timezones = [
  {
    label: "Americas",
    timezones: [
      { value: "America/New_York", label: "(GMT-5) New York" },
      { value: "America/Los_Angeles", label: "(GMT-8) Los Angeles" },
      { value: "America/Chicago", label: "(GMT-6) Chicago" },
      { value: "America/Toronto", label: "(GMT-5) Toronto" },
      { value: "America/Vancouver", label: "(GMT-8) Vancouver" },
      { value: "America/Sao_Paulo", label: "(GMT-3) São Paulo" },
    ],
  },
  {
    label: "Europe",
    timezones: [
      { value: "Europe/London", label: "(GMT+0) London" },
      { value: "Europe/Paris", label: "(GMT+1) Paris" },
      { value: "Europe/Berlin", label: "(GMT+1) Berlin" },
      { value: "Europe/Rome", label: "(GMT+1) Rome" },
      { value: "Europe/Madrid", label: "(GMT+1) Madrid" },
      { value: "Europe/Amsterdam", label: "(GMT+1) Amsterdam" },
    ],
  },
  {
    label: "Asia/Pacific",
    timezones: [
      { value: "Asia/Tokyo", label: "(GMT+9) Tokyo" },
      { value: "Asia/Shanghai", label: "(GMT+8) Shanghai" },
      { value: "Asia/Singapore", label: "(GMT+8) Singapore" },
      { value: "Asia/Dubai", label: "(GMT+4) Dubai" },
      { value: "Australia/Sydney", label: "(GMT+11) Sydney" },
      { value: "Asia/Seoul", label: "(GMT+9) Seoul" },
    ],
  },
];

type Timezone = (typeof timezones)[number];

export function ComboboxDemo() {
  return (
    <div className="flex w-full flex-wrap items-start gap-4">
      <FrameworkCombobox frameworks={[...frameworks]} />

      <UserCombobox selectedUserId={users[0].id} users={[...users]} />
      <TimezoneCombobox
        selectedTimezone={timezones[0].timezones[0]}
        timezones={[...timezones]}
      />
      {/* <Combobox.WithCheckbox frameworks={[...frameworks]} /> */}
    </div>
  );
}

function FrameworkCombobox({ frameworks }: { frameworks: Framework[] }) {
  return (
    <Combobox.Root
      allowsEmptyCollection
      aria-label="Frameworks"
      className="w-full md:max-w-[200px]"
      menuTrigger="focus"
    >
      <Combobox.Trigger>
        <Combobox.Input placeholder="Select framework..." />
        <Combobox.Icon />
      </Combobox.Trigger>

      <Popover.Content>
        <Listbox.Root
          items={frameworks}
          renderEmptyState={() => (
            <Listbox.Empty>No frameworks found.</Listbox.Empty>
          )}
        >
          {(framework) => (
            <Listbox.Item id={framework.value}>{framework.label}</Listbox.Item>
          )}
        </Listbox.Root>
      </Popover.Content>
    </Combobox.Root>
  );
}

function UserCombobox({
  users,
  selectedUserId,
}: {
  users: User[];
  selectedUserId: string;
}) {
  return (
    <Select.Root
      aria-label="Users"
      className="w-full md:max-w-[200px]"
      defaultSelectedKey={selectedUserId}
      placeholder="Select user..."
    >
      <Select.Trigger className="w-full">
        <Select.Value />
      </Select.Trigger>

      <Popover.Content className="rounded-md border bg-popover shadow-md">
        <Autocomplete>
          <InputGroup.Root
            render={<SearchField.Root aria-label="Search" autoFocus />}
          >
            <InputGroup.Addon>
              <SearchIcon />
            </InputGroup.Addon>
            <InputGroup.Input placeholder="Search user..." />
            <InputGroup.Addon align="inline-end">
              <SearchField.Button />
            </InputGroup.Addon>
          </InputGroup.Root>
          <Listbox.Root
            className="rounded-none border-none shadow-none"
            items={users}
            renderEmptyState={() => (
              <Listbox.Empty>No user found.</Listbox.Empty>
            )}
          >
            {(user) => (
              <Listbox.Item id={user.id} textValue={user.username}>
                <Avatar.Root className="size-5">
                  <Avatar.Image
                    src={`https://github.com/${user.username}.png`}
                  />
                  <Avatar.Fallback>{user.username[0]}</Avatar.Fallback>
                </Avatar.Root>
                {user.username}
              </Listbox.Item>
            )}
          </Listbox.Root>
        </Autocomplete>
      </Popover.Content>
    </Select.Root>
  );
}

function TimezoneCombobox({
  timezones,
  selectedTimezone,
}: {
  timezones: Timezone[];
  selectedTimezone: Timezone["timezones"][number];
}) {
  const [value, setValue] = useState<Key | null>(selectedTimezone.value);

  const selectedGroup = useMemo(
    () =>
      timezones.find((group) =>
        group.timezones.find((tz) => tz.value === value)
      ),
    [value, timezones]
  );

  const selectedTimezoneLabel = useMemo(
    () => selectedGroup?.timezones.find((tz) => tz.value === value)?.label,
    [value, selectedGroup]
  );

  return (
    <Select.Root
      aria-label="Timezone"
      className="w-full md:max-w-[200px]"
      onSelectionChange={setValue}
      placeholder="Select timezone"
      selectedKey={value}
    >
      <Select.Trigger className="w-full">
        <Select.Value>
          {(values) =>
            selectedTimezone ? (
              <div className="grid justify-items-start gap-0.5">
                <span className="font-normal text-muted-foreground text-xs">
                  {selectedGroup?.label}
                </span>
                <span>{selectedTimezoneLabel}</span>
              </div>
            ) : (
              values.defaultChildren
            )
          }
        </Select.Value>
      </Select.Trigger>

      <Popover.Content className="rounded-md border bg-popover shadow-md">
        <Autocomplete>
          <InputGroup.Root
            render={<SearchField.Root aria-label="Search" autoFocus />}
          >
            <InputGroup.Addon>
              <SearchIcon />
            </InputGroup.Addon>
            <InputGroup.Input placeholder="Search timezone..." />
            <InputGroup.Addon align="inline-end">
              <SearchField.Button />
            </InputGroup.Addon>
          </InputGroup.Root>
          <Listbox.Root
            className="max-h-[300px] rounded-none border-none shadow-none"
            items={timezones}
            renderEmptyState={() => (
              <Listbox.Empty>No timezone found.</Listbox.Empty>
            )}
          >
            {(region) => (
              <Listbox.Group id={region.label}>
                <Listbox.Label>{region.label}</Listbox.Label>
                {region.timezones.map((timezone) => (
                  <Listbox.Item id={timezone.value} key={timezone.value}>
                    {timezone.label}
                  </Listbox.Item>
                ))}
              </Listbox.Group>
            )}
          </Listbox.Root>
        </Autocomplete>
      </Popover.Content>
    </Select.Root>
  );
}

// function ComboboxWithCheckbox({ frameworks }: { frameworks: Framework[] }) {
//   const [open, setOpen] = useState(false);
//   const [selectedFrameworks, setSelectedFrameworks] = useState<Framework[]>([]);

//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           // biome-ignore lint/a11y/useSemanticElements: <explanation>
//           role="combobox"
//           aria-expanded={open}
//           className="w-fit min-w-[280px] justify-between"
//         >
//           {selectedFrameworks.length > 0
//             ? selectedFrameworks.map((framework) => framework.label).join(", ")
//             : "Select frameworks (multi-select)..."}
//           <ChevronsUpDown className="text-muted-foreground" />
//         </Button>
//       </PopoverTrigger>
//       <Popover.Content className="w-[300px] p-0" align="start">
//         <Command>
//           <CommandInput placeholder="Search framework..." />
//           <CommandList>
//             <CommandEmpty>No framework found.</CommandEmpty>
//             <CommandGroup>
//               {frameworks.map((framework) => (
//                 <CommandItem
//                   key={framework.value}
//                   value={framework.value}
//                   onSelect={(currentValue) => {
//                     setSelectedFrameworks(
//                       selectedFrameworks.some((f) => f.value === currentValue)
//                         ? selectedFrameworks.filter(
//                             (f) => f.value !== currentValue
//                           )
//                         : [...selectedFrameworks, framework]
//                     );
//                   }}
//                 >
//                   <div
//                     className="pointer-events-none size-4 shrink-0 select-none rounded-[4px] border border-input transition-all data-[selected=true]:border-primary data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground *:[svg]:opacity-0 data-[selected=true]:*:[svg]:opacity-100"
//                     data-selected={selectedFrameworks.some(
//                       (f) => f.value === framework.value
//                     )}
//                   >
//                     <CheckIcon className="size-3.5 text-current" />
//                   </div>
//                   {framework.label}
//                 </CommandItem>
//               ))}
//             </CommandGroup>
//           </CommandList>
//         </Command>
//       </Popover.Content>
//     </Popover>
//   );
// }
