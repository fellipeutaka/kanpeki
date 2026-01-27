import { BookmarkIcon, HeartIcon, StarIcon } from "lucide-react";
import { ToggleGroup } from "~/registry/ui/toggle-group";

export function ToggleGroupSpacingDemo() {
  return (
    <ToggleGroup.Root
      selectionMode="multiple"
      size="sm"
      spacing={2}
      variant="outline"
    >
      <ToggleGroup.Item
        aria-label="Toggle star"
        className="selected:[&_svg]:fill-yellow-500 selected:[&_svg]:stroke-yellow-500"
        id="star"
      >
        <StarIcon className="transition-colors" />
        Star
      </ToggleGroup.Item>
      <ToggleGroup.Item
        aria-label="Toggle heart"
        className="selected:[&_svg]:fill-red-500 selected:[&_svg]:stroke-red-500"
        id="heart"
      >
        <HeartIcon className="transition-colors" />
        Heart
      </ToggleGroup.Item>
      <ToggleGroup.Item
        aria-label="Toggle bookmark"
        className="selected:[&_svg]:fill-blue-500 selected:[&_svg]:stroke-blue-500"
        id="bookmark"
      >
        <BookmarkIcon className="transition-colors" />
        Bookmark
      </ToggleGroup.Item>
    </ToggleGroup.Root>
  );
}
