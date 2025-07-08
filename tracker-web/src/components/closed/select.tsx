import React from "react";
import {
  Select as SelectRoot,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export type SelectOption = {
  label: string;
  value: string;
};

export type SelectProps = {
  id?: string;
  name?: string;
  value?: string;
  onChange?: (newValue: string) => void;
  options?: SelectOption[];
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};

export function Select({
  id,
  name,
  value,
  options = [],
  placeholder = "Select an option",
  disabled = false,
  className,
  onChange,
}: SelectProps) {
  const renderedOptions = React.useMemo(
    () =>
      options.map((option) => (
        <SelectItem
          key={option.value}
          className="cursor-pointer"
          value={option.value}
        >
          {option.label}
        </SelectItem>
      )),
    [options]
  );

  return (
    <SelectRoot
      name={name}
      value={value}
      onValueChange={onChange}
      disabled={disabled}
    >
      <SelectTrigger id={id} className={className} aria-label={placeholder}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>{renderedOptions}</SelectContent>
    </SelectRoot>
  );
}
