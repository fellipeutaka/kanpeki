import { Listbox } from "~/registry/ui/list-box";
import { Popover } from "~/registry/ui/popover";

import { Select } from "~/registry/ui/select";

export function SelectScrollableDemo() {
  return (
    <Select.Root aria-label="Timezone" placeholder="Select a timezone">
      <Select.Trigger className="w-70">
        <Select.Value />
      </Select.Trigger>
      <Popover.Content>
        <Listbox.Root>
          <Listbox.Group>
            <Listbox.Label>North America</Listbox.Label>
            <Listbox.Item id="est">Eastern Standard Time (EST)</Listbox.Item>
            <Listbox.Item id="cst">Central Standard Time (CST)</Listbox.Item>
            <Listbox.Item id="mst">Mountain Standard Time (MST)</Listbox.Item>
            <Listbox.Item id="pst">Pacific Standard Time (PST)</Listbox.Item>
            <Listbox.Item id="akst">Alaska Standard Time (AKST)</Listbox.Item>
            <Listbox.Item id="hst">Hawaii Standard Time (HST)</Listbox.Item>
          </Listbox.Group>
          <Listbox.Group>
            <Listbox.Label>Europe & Africa</Listbox.Label>
            <Listbox.Item id="gmt">Greenwich Mean Time (GMT)</Listbox.Item>
            <Listbox.Item id="cet">Central European Time (CET)</Listbox.Item>
            <Listbox.Item id="eet">Eastern European Time (EET)</Listbox.Item>
            <Listbox.Item id="west">
              Western European Summer Time (WEST)
            </Listbox.Item>
            <Listbox.Item id="cat">Central Africa Time (CAT)</Listbox.Item>
            <Listbox.Item id="eat">East Africa Time (EAT)</Listbox.Item>
          </Listbox.Group>
          <Listbox.Group>
            <Listbox.Label>Asia</Listbox.Label>
            <Listbox.Item id="msk">Moscow Time (MSK)</Listbox.Item>
            <Listbox.Item id="ist">India Standard Time (IST)</Listbox.Item>
            <Listbox.Item id="cst_china">
              China Standard Time (CST)
            </Listbox.Item>
            <Listbox.Item id="jst">Japan Standard Time (JST)</Listbox.Item>
            <Listbox.Item id="kst">Korea Standard Time (KST)</Listbox.Item>
            <Listbox.Item id="ist_indonesia">
              Indonesia Central Standard Time (WITA)
            </Listbox.Item>
          </Listbox.Group>
          <Listbox.Group>
            <Listbox.Label>Australia & Pacific</Listbox.Label>
            <Listbox.Item id="awst">
              Australian Western Standard Time (AWST)
            </Listbox.Item>
            <Listbox.Item id="acst">
              Australian Central Standard Time (ACST)
            </Listbox.Item>
            <Listbox.Item id="aest">
              Australian Eastern Standard Time (AEST)
            </Listbox.Item>
            <Listbox.Item id="nzst">
              New Zealand Standard Time (NZST)
            </Listbox.Item>
            <Listbox.Item id="fjt">Fiji Time (FJT)</Listbox.Item>
          </Listbox.Group>
          <Listbox.Group>
            <Listbox.Label>South America</Listbox.Label>
            <Listbox.Item id="art">Argentina Time (ART)</Listbox.Item>
            <Listbox.Item id="bot">Bolivia Time (BOT)</Listbox.Item>
            <Listbox.Item id="brt">Brasilia Time (BRT)</Listbox.Item>
            <Listbox.Item id="clt">Chile Standard Time (CLT)</Listbox.Item>
          </Listbox.Group>
        </Listbox.Root>
      </Popover.Content>
    </Select.Root>
  );
}
