"use client";
import React from "react";
import { logout } from "@/actions/auth.action";
import { Button } from "../ui/button";

type Props = {};

const LogoutBtn = (props: Props) => {
  return <Button onClick={() => logout()}>Logout</Button>;
};

export default LogoutBtn;
