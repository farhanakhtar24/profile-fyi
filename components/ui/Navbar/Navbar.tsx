import { auth } from "@/auth";
import Link from "next/link";
import LogoutBtn from "./LogoutBtn";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../button";
import logo from "@/public/Screenshot from 2024-08-14 19-43-39.png";
import Image from "next/image";
import { Separator } from "@radix-ui/react-separator";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = async () => {
	const session = await auth();
	return (
		<nav className="border-b bg-background w-full flex items-center">
			<div className="mx-auto max-w-screen-lg flex w-full items-center justify-between my-2">
				<Link className="font-bold" href="/">
					<Image
						src={logo.src}
						alt="logo"
						width={999}
						height={999}
						className="w-40 h-auto"
					/>
				</Link>

				<div className="flex items-center gap-x-5">
					<Link href="/all-products">Products</Link>
					{!session?.user ? (
						<Link href="/auth">
							<Button className="bg-blue-600 hover:bg-blue-500 text-white">
								Login
							</Button>
						</Link>
					) : (
						<ProfileDropdown
							name={session?.user?.name}
							imgUrl={session?.user?.image}
						/>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
