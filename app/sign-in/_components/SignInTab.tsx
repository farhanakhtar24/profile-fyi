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

const SignInTab = (props: Props) => {
	return (
		<TabsContent value="sign-in">
			<Card>
				<CardHeader>
					<CardTitle>Sign In</CardTitle>
					<CardDescription>
						Make changes to your Sign In here. Click save when youre
						done.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-2">
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
					</div>{" "}
				</CardContent>
				<CardFooter className="flex flex-col gap-6">
					<Button className="w-full">Sign In</Button>
					<Separator />
					<GihubSignInBtn />
				</CardFooter>
			</Card>
		</TabsContent>
	);
};

export default SignInTab;
