"use client";
import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LogoutBtn from "./LogoutBtn";
import { logout } from "@/actions/auth.action";

type Props = {
	name: string | null | undefined;
	imgUrl: string | null | undefined;
};

const ProfileDropdown = ({ name, imgUrl }: Props) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<div className="flex items-center gap-x-2 text-sm">
					<Avatar>
						<AvatarImage src={imgUrl ?? ""} />
						<AvatarFallback>
							{name
								?.split(" ")
								.map((name) => name[0])
								.join("")}
						</AvatarFallback>
					</Avatar>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>{name}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					onClick={() => logout()}
					className="cursor-pointer">
					Logout{" "}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ProfileDropdown;
