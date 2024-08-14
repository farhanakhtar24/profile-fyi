import React from "react";

type Props = {
	params: {
		productId: string;
	};
};

const page = ({ params }: Props) => {
	const { productId } = params;

	return <div>{productId}</div>;
};

export default page;
