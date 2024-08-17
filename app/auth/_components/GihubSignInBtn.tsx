"use client";
import { login } from "@/actions/auth.action";
import Spinner from "@/components/Spinner/Spinner";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

type Props = {};

const GihubSignInBtn = (props: Props) => {
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    await login("github");
    setLoading(false);
  };

  return (
    <Button
      className="flex w-full items-center justify-center gap-2"
      onClick={handleSignIn}
      disabled={loading}
    >
      {loading ? (
        <div className="h-5 w-5">
          <Spinner />
        </div>
      ) : (
        <>
          <FaGithub className="text-lg" />
          Github
        </>
      )}
    </Button>
  );
};

export default GihubSignInBtn;
