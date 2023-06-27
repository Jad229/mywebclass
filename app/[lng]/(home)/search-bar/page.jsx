"use client";

import React from "react";
import { Search } from "@/components/Search/Search";
import { GenerateConfig } from "@/components/Search/config";
import { useNextRouting } from "@/utils/useNextRouting";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const config = GenerateConfig();

  const router = useRouter();
  const searchParams = useSearchParams();

  const search_query = searchParams.get("q");

  if (search_query === "" || search_query === null) {
    /* Go to the home page if there is no search query */
    router.push("/");
  }

  console.log(search_query);

  return (
    <div>
      <Search config={config} />
    </div>
  );
}
