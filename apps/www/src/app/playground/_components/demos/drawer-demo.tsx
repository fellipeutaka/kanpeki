"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useCallback, useState } from "react";
import { Bar, BarChart, ResponsiveContainer } from "recharts";
import { Button } from "~/registry/ui/button";
import { Drawer } from "~/registry/ui/drawer";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

export function DrawerDemo() {
  return (
    <div className="flex flex-wrap items-start gap-4">
      <DrawerBottom />
      <DrawerScrollableContent />
      <DrawerDirections />
    </div>
  );
}

function DrawerBottom() {
  const [goal, setGoal] = useState(350);

  const onClick = useCallback((adjustment: number) => {
    setGoal((prevGoal) => Math.max(200, Math.min(400, prevGoal + adjustment)));
  }, []);

  return (
    <Drawer.Root>
      <Button variant="outline">Open Drawer</Button>

      <Drawer.Overlay>
        <div className="mx-auto w-full max-w-sm">
          <Drawer.Header>
            <Drawer.Title>Move Goal</Drawer.Title>
            <Drawer.Description>
              Set your daily activity goal.
            </Drawer.Description>
          </Drawer.Header>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                className="h-8 w-8 shrink-0 rounded-full"
                isDisabled={goal <= 200}
                onPress={() => onClick(-10)}
                size="icon"
                variant="outline"
              >
                <MinusIcon />
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="font-bold text-7xl tracking-tighter">
                  {goal}
                </div>
                <div className="text-[0.70rem] text-muted-foreground uppercase">
                  Calories/day
                </div>
              </div>
              <Button
                className="h-8 w-8 shrink-0 rounded-full"
                isDisabled={goal >= 400}
                onPress={() => onClick(10)}
                size="icon"
                variant="outline"
              >
                <PlusIcon />
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]">
              <ResponsiveContainer height="100%" width="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="goal"
                    style={
                      {
                        fill: "var(--primary)",
                        opacity: 0.9,
                      } as React.CSSProperties
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <Drawer.Footer className="gap-2 sm:flex-col sm:space-x-0">
            <Button>Submit</Button>
            <Button slot="close" variant="outline">
              Cancel
            </Button>
          </Drawer.Footer>
        </div>
      </Drawer.Overlay>
    </Drawer.Root>
  );
}

function DrawerScrollableContent() {
  return (
    <Drawer.Root>
      <Button variant="outline">Scrollable Content</Button>

      <Drawer.Overlay side="right">
        <Drawer.Header>
          <Drawer.Title>Move Goal</Drawer.Title>
          <Drawer.Description>Set your daily activity goal.</Drawer.Description>
        </Drawer.Header>
        <div className="overflow-y-auto px-4 text-sm">
          <h4 className="mb-4 font-medium text-lg leading-none">Lorem Ipsum</h4>
          {Array.from({ length: 10 }).map((_, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: This is fine.
            <p className="mb-4 leading-normal" key={index}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          ))}
        </div>
        <Drawer.Footer>
          <Button>Submit</Button>
          <Button slot="close" variant="outline">
            Cancel
          </Button>
        </Drawer.Footer>
      </Drawer.Overlay>
    </Drawer.Root>
  );
}

const directions = ["top", "right", "bottom", "left"] as const;

function DrawerDirections() {
  return (
    <>
      {directions.map((direction) => (
        <Drawer.Root key={direction}>
          <Button className="capitalize" variant="outline">
            {direction}
          </Button>

          <Drawer.Overlay side={direction}>
            <Drawer.Header>
              <Drawer.Title>Move Goal</Drawer.Title>
              <Drawer.Description>
                Set your daily activity goal.
              </Drawer.Description>
            </Drawer.Header>
            <div className="overflow-y-auto px-4 text-sm group-orientation-vertical:max-h-[60dvh]">
              {Array.from({ length: 10 }).map((_, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: This is fine.
                <p className="mb-4 leading-normal" key={index}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              ))}
            </div>
            <Drawer.Footer>
              <Button>Submit</Button>
              <Button slot="close" variant="outline">
                Cancel
              </Button>
            </Drawer.Footer>
          </Drawer.Overlay>
        </Drawer.Root>
      ))}
    </>
  );
}
