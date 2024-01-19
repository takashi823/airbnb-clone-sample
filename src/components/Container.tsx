"use client";

import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px20 md:px-10 sm:px-2 px-4">
      {children}
    </div>
  );
};

export default Container;
