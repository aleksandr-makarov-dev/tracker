import {
  Dialog as DialogRoot,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useDisclouse } from "@/hooks/use-disclosure";

export type DialogProps = {
  title: string;
  description?: string;
  triggerButton: React.ReactNode;
  submitButton: React.ReactNode;
  children: React.ReactNode;
  cancelButtonLabel?: string;
};

export function Dialog({
  title,
  description,
  triggerButton,
  submitButton,
  children,
  cancelButtonLabel = "Cancel",
}: DialogProps) {
  const { open, openChange } = useDisclouse();

  return (
    <DialogRoot open={open} onOpenChange={openChange}>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="soft" color="muted">
              {cancelButtonLabel}
            </Button>
          </DialogClose>
          {submitButton}
        </DialogFooter>
      </DialogContent>
    </DialogRoot>
  );
}
