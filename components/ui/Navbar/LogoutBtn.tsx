"use client";
import React from "react";
import { Button } from "../button";
import { logout } from "@/actions/auth.action";

type Props = {};

const LogoutBtn = (props: Props) => {
	return <Button onClick={() => logout()}>Logout</Button>;
};

export default LogoutBtn;
