"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { Checkbox } from "../ui/checkbox";

export type MultiSelectProps = {
  label: string;
  placeholder: string;
  value?: string[];
  onChange?: (value: string[]) => void;
  options: { label: string; value: string }[];
};

export function MultiSelect({
  label,
  placeholder,
  value = [],
  options,
  onChange,
}: MultiSelectProps) {
  const [selectedItems, setSelectedItems] = useState<string[]>(value);

  function handleSelectItem(val: string) {
    const newSelected = selectedItems.includes(val)
      ? selectedItems.filter((item) => item !== val)
      : [...selectedItems, val];

    setSelectedItems(newSelected);
    onChange?.(newSelected);
  }

  const getButtonLabel = () => {
    const len = selectedItems.length;

    if (len === 0) return placeholder;

    if (len === 1)
      return options.find((item) => item.value === selectedItems[0])?.label;

    if (len > 1) {
      return `Выбрано: ${len}`;
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="soft" color="muted">
          {getButtonLabel()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {options.map((option) => {
          const checked = selectedItems.includes(option.value);
          return (
            <DropdownMenuItem
              key={option.value}
              onSelect={(e) => {
                e.preventDefault(); // Prevent dropdown from closing
                handleSelectItem(option.value);
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <Checkbox checked={checked} />
              <span>{option.label}</span>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
