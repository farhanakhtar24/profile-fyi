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
import { signUp } from "@/actions/post/signUp.action";
import Spinner from "@/components/Spinner/Spinner";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

type Props = {};

const SignUpTab = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSignUp = async () => {
    setLoading(true);
    await signUp(name, email, password);
    toast({
      title: "Registration successful.",
      description: "You have been successfully registered.",
      variant: "success",
      action: <ToastAction altText="Close">Close</ToastAction>,
    });
    setLoading(false);
  };

  return (
    <TabsContent value="sign-up">
      <Card>
        <CardHeader>
          <CardTitle>Sign Up</CardTitle>
          <CardDescription>
            Change your sign-up here. After saving, youll be logged out.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Pedro Duarte"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
            onClick={handleSignUp}
            disabled={!name || !email || !password || loading}
          >
            {loading ? (
              <div className="h-5 w-5">
                <Spinner />
              </div>
            ) : (
              "Sign Up"
            )}
          </Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
};

export default SignUpTab;
