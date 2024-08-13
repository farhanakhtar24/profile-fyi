import React from "react";
import AuthTabs from "./_components/AuthTabs";

type Props = {};

const page = (props: Props) => {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<AuthTabs />
		</div>
	);
};

export default page;
