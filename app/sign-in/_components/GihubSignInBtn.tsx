import { Button } from "@/components/ui/button";
import React from "react";
import { FaGithub } from "react-icons/fa";

type Props = {};

const GihubSignInBtn = (props: Props) => {
	return (
		<Button className="w-full flex items-center justify-center gap-2">
			<FaGithub className="text-lg" />
			Github
		</Button>
	);
};

export default GihubSignInBtn;
