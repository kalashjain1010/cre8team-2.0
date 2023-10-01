"use client";

import AuthModal from "@/components/modal/auth-modal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [mounted, isMounted] = useState(false);
  useEffect(() => {
    isMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
    </>
  );
};
export default ModalProvider;
