"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "../ui/checkbox";
import { cn } from "@/lib/utils";

export type MultiSelectProps = {
  label: string;
  value?: string[];
  onChange?: (value: string[]) => void;
  options: { label: string; value: string }[];
  className?: string;
  placeholder?: string;
};

export function MultiSelect({
  label,
  value = [],
  options,
  className,
  onChange,
  placeholder = "Не выбрано",
}: MultiSelectProps) {
  const [selectedItems, setSelectedItems] = useState<string[]>(value);

  const handleSelectItem = (val: string) => {
    const newSelected = selectedItems.includes(val)
      ? selectedItems.filter((item) => item !== val)
      : [...selectedItems, val];

    setSelectedItems(newSelected);
    onChange?.(newSelected);
  };

  const buttonLabel = useMemo(() => {
    if (selectedItems.length === 0) return placeholder;

    const selectedLabels = selectedItems
      .map((val) => options.find((opt) => opt.value === val)?.label)
      .filter(Boolean);

    return selectedLabels.join(", ");
  }, [selectedItems, options]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn("justify-start overflow-hidden", className)}
          variant="soft"
          color="gray"
        >
          <span className="block truncate w-full text-left">{buttonLabel}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-96">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {options.map(({ label, value }) => {
          const checked = selectedItems.includes(value);
          return (
            <DropdownMenuItem
              key={value}
              onSelect={(e) => {
                e.preventDefault(); // Prevent dropdown from closing
                handleSelectItem(value);
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Checkbox checked={checked} />
              <span>{label}</span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
