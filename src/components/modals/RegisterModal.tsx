"use client";

import React, { useState } from "react";

import Button from "@/components/Button";
import Modal from "@/components/modals/Modal";
import useRegisterModal from "@/hooks/useRegisterModal";

/**
 * 新規登録モーダル
 */
const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  /** submit処理（新規登録） */
  const onSubmit = () => {
    /** 新規登録の処理 */
  };

  /** コンテンツ */
  const bodyContent = (
    <div className="flex flex-col gap-4">モーダルの内容部分</div>
  );

  /** フッター */
  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">モーダルのフッター部分</div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
