import { Button } from "~/registry/ui/button";
import { Dialog } from "~/registry/ui/dialog";

export function DialogScrollableDemo() {
  return (
    <Dialog.Root>
      <Button variant="outline">Scrollable Content</Button>

      <Dialog.Overlay>
        <Dialog.Modal className="sm:max-w-[425px]">
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Scrollable Content</Dialog.Title>
              <Dialog.Description>
                This is a dialog. with scrollable content.
              </Dialog.Description>
            </Dialog.Header>
            <div className="-mx-6 max-h-[500px] overflow-y-auto px-6 text-sm">
              <h4 className="mb-4 font-medium text-lg leading-none">
                Lorem Ipsum
              </h4>
              {Array.from({ length: 10 }).map((_, index) => (
                // biome-ignore lint/suspicious/noArrayIndexKey: This is fine
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

            <Dialog.Close />
          </Dialog.Content>
        </Dialog.Modal>
      </Dialog.Overlay>
    </Dialog.Root>
  );
}
