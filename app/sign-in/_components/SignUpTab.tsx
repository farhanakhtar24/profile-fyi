import React from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import GihubSignInBtn from "./GihubSignInBtn";

type Props = {};

const SignUpTab = (props: Props) => {
	return (
		<TabsContent value="sign-up">
			<Card>
				<CardHeader>
					<CardTitle>Sign Up</CardTitle>
					<CardDescription>
						Change your sign-up here. After saving, youll be logged
						out.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-2">
					<div className="space-y-1">
						<Label htmlFor="username">User name</Label>
						<Input
							id="username"
							placeholder="Pedro Duarte"
							type="text"
						/>
					</div>
					<div className="space-y-1">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							placeholder="PedroDuarte@xyz.com"
							type="email"
						/>
					</div>
					<div className="space-y-1">
						<Label htmlFor="password">Password</Label>
						<Input
							id="password"
							placeholder="@peduarte"
							type="password"
						/>
					</div>
				</CardContent>
				<CardFooter className="flex flex-col gap-6">
					<Button className="w-full">Sign Up</Button>
					<Separator />
					<GihubSignInBtn />
				</CardFooter>
			</Card>
		</TabsContent>
	);
};

export default SignUpTab;
