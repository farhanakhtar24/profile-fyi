import React from "react";
import { getAllProducts } from "@/actions/get/getAllProducts";

type Props = {};

export const dynamic = "force-dynamic";

const page = async (props: Props) => {
	const productList = await getAllProducts();

	console.log(productList);

	return (
		<div>
			{productList.products.map((product) => {
				return <div key={product.id}>{product.brand}</div>;
			})}
		</div>
	);
};

export default page;
