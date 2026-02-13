import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

import { Pagination } from "~/registry/ui/pagination";

export function PaginationIconsOnlyDemo() {
  return (
    <Pagination.Root>
      <Pagination.Content>
        <Pagination.Item>
          <Pagination.Link
            aria-label="Go to previous page"
            href="#"
            size="icon"
          >
            <ChevronLeftIcon />
          </Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href="#">1</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href="#" isActive>
            2
          </Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href="#">3</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Ellipsis />
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link aria-label="Go to next page" href="#" size="icon">
            <ChevronRightIcon />
          </Pagination.Link>
        </Pagination.Item>
      </Pagination.Content>
    </Pagination.Root>
  );
}
