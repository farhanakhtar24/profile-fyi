import { ProductList } from "@/interfaces/products";
import axios from "axios";

export const getAllProducts = async () => {
	const res = await axios.get("https://dummyjson.com/products");
	return res.data as ProductList;
};
