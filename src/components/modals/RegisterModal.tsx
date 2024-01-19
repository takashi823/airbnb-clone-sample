"use client";

import React, { useState } from "react";

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
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
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an account" />
    </div>
  );

  /** フッター */
  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      {/* Google認証 */}
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        // TODO: 認証処理
        onClick={() => {}}
      />
      {/* github認証 */}
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        // TODO: 認証処理
        onClick={() => {}}
      />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="flex flex-row justify-center items-center gap-2">
          <div>Already have an account</div>
          <button
            className="text-neutral-800 cursor-pointer hover:underline"
            onClick={registerModal.onClose}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
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
