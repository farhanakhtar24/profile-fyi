"use client";
import { login } from "@/actions/auth.action";
import { Button } from "@/components/ui/button";
import React from "react";
import { FaGithub } from "react-icons/fa";

type Props = {};

const GihubSignInBtn = (props: Props) => {
  return (
    <Button
      className="flex w-full items-center justify-center gap-2"
      onClick={() => login("github")}
    >
      <FaGithub className="text-lg" />
      Github
    </Button>
  );
};

export default GihubSignInBtn;
