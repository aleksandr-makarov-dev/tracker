/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { LoaderIcon } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center active:translate-y-[1px] gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all hover:cursor-pointer disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-primary",
  {
    variants: {
      variant: {
        solid: "",
        ghost: "",
        soft: "",
      },
      color: {
        primary: "",
        success: "",
        danger: "",
        warning: "",
        muted: "",
      },
      size: {
        default: "h-8 px-3 py-1 has-[>svg]:px-3",
        sm: "h-7 rounded-md gap-1.5 px-2.5 has-[>svg]:px-2.5",
        lg: "h-9 rounded-md px-5 has-[>svg]:px-4",
        icon: "size-7",
      },
    },
    compoundVariants: [
      {
        variant: "soft",
        color: "primary",
        className: "bg-blue-100 text-blue-900 hover:bg-blue-200",
      },
      {
        variant: "soft",
        color: "success",
        className: "bg-green-100 text-green-900 hover:bg-green-200",
      },
      {
        variant: "soft",
        color: "danger",
        className: "bg-red-100 text-red-900 hover:bg-red-200",
      },
      {
        variant: "soft",
        color: "warning",
        className: "bg-orange-100 text-orange-900 hover:bg-orange-200",
      },
      {
        variant: "soft",
        color: "muted",
        className: "bg-gray-100 text-gray-900 hover:bg-gray-200",
      },
      {
        variant: "solid",
        color: "primary",
        className: "bg-blue-700 text-white hover:bg-blue-800",
      },
      {
        variant: "solid",
        color: "success",
        className: "bg-green-700 text-white hover:bg-green-800",
      },
      {
        variant: "solid",
        color: "danger",
        className: "bg-red-700 text-white hover:bg-red-800",
      },
      {
        variant: "solid",
        color: "warning",
        className: "bg-orange-600 text-white hover:bg-orange-700",
      },
      {
        variant: "solid",
        color: "muted",
        className: "bg-gray-700 text-white hover:bg-gray-800",
      },
      {
        variant: "ghost",
        color: "primary",
        className: "text-blue-900 hover:bg-blue-50",
      },
      {
        variant: "ghost",
        color: "success",
        className: "text-green-900 hover:bg-green-50",
      },
      {
        variant: "ghost",
        color: "danger",
        className: "text-red-900 hover:bg-red-50",
      },
      {
        variant: "ghost",
        color: "warning",
        className: "text-orange-900 hover:bg-orange-50",
      },
      {
        variant: "ghost",
        color: "muted",
        className: "text-gray-900 hover:bg-gray-50",
      },
    ],
    defaultVariants: {
      variant: "solid",
      color: "primary",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  color,
  loading = false,
  loadingText = "Loading...",
  children,
  disabled,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
    loadingText?: string;
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      disabled={disabled || loading}
      className={cn(buttonVariants({ variant, size, color, className }))}
      {...props}
    >
      {loading ? (
        <span className="flex flex-row items-center gap-1">
          <LoaderIcon className="animate-spin" />
          {loadingText}
        </span>
      ) : (
        children
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
