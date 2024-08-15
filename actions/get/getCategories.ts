import { ProductList } from "@/interfaces/products";

export interface Icategories {
	slug: string;
	name: string;
	url: string;
}

export const getCategories = async () => {
	const res = await fetch("https://dummyjson.com/products/categories", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});

	const json = await res.json();

	return json as Icategories[];
};
