import { useState } from "react";

export function useDisclouse(defaultValue: boolean = false) {
  const [open, openChange] = useState<boolean>(defaultValue);

  const openModal = () => openChange(true);
  const closeModal = () => openChange(false);

  return {
    open,
    openChange,
    openModal,
    closeModal,
  };
}
