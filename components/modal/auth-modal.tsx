"use client";

import useModal from "@/hooks/useModal";
import Modal from "../ui/Modal";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const AuthModal = () => {
  const { isOpen, setClose, type } = useModal();
  const authOpened = type === "auth-modal" && isOpen;
  const client = createClientComponentClient();
  return (
    <Modal title="CRE8TEAM" isOpen={authOpened} onClose={setClose}>
      <Auth
        supabaseClient={client}
        providers={["google"]}
        appearance={{
          theme: ThemeSupa,
        }}

      />
    </Modal>
  );
};

export default AuthModal
