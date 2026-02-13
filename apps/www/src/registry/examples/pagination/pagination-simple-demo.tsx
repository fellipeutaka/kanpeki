import { Pagination } from "~/registry/ui/pagination";

export function PaginationSimpleDemo() {
  return (
    <Pagination.Root>
      <Pagination.Content>
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
          <Pagination.Link href="#">4</Pagination.Link>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Link href="#">5</Pagination.Link>
        </Pagination.Item>
      </Pagination.Content>
    </Pagination.Root>
  );
}
