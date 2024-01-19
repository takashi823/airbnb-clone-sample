"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";

import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Input from "@/components/inputs/Input";
import Modal from "@/components/modals/Modal";
import useRegisterModal from "@/hooks/useRegisterModal";

import { RegisterForm, registerSchema } from "@/types/RegisterForm";

/**
 * 新規登録モーダル
 */
const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  /** submit処理（新規登録） */
  const onSubmit = () => {
    /** 新規登録の処理 */
    setIsLoading(true);
    try {
      // TODO: 新規登録処理追加
      console.log("Register Success!!");
      registerModal.onClose();
    } catch (error) {
      toast.error("Something Went Wrong.");
    } finally {
      setIsLoading(false);
    }
  };

  /** コンテンツ */
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an account" />
      <Input
        id="email"
        label="Email"
        type="email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        type="text"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
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
