"use client";
import React, { useState } from "react";
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
import GithubSignInBtn from "./GithubSignInBtn";
import { loginWithCreds } from "@/actions/auth.action";
import Spinner from "@/components/Spinner/Spinner";

type Props = {};

const SignInTab = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    await loginWithCreds(email, password);
    setLoading(false);
  };

  return (
    <TabsContent value="sign-in">
      <Card>
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>
            Make changes to your Sign In here. Click save when youre done.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="PedroDuarte@xyz.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              placeholder="@peduarte"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-6">
          <Button
            className="flex w-full gap-2"
            onClick={handleSignIn}
            disabled={loading || !email || !password}
          >
            {loading ? (
              <div className="h-5 w-5">
                <Spinner />
              </div>
            ) : (
              "Sign In"
            )}
          </Button>
          <Separator />
          <GithubSignInBtn />
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default SignInTab;
