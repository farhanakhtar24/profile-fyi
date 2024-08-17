"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

const SearchBar = (props: Props) => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  return (
    <input
      type="text"
      placeholder="Search"
      className="w-1/3 rounded-lg border border-gray-300 px-3 py-2 text-sm"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          router.push(`/product/search/${search}`);
        }
      }}
    />
  );
};

export default SearchBar;
