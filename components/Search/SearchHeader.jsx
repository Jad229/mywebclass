import "@/styles/elastic-search-styles.css";
import {
  ErrorBoundary,
  Facet,
  Paging,
  Results,
  SearchBox,
  SearchProvider,
  WithSearch,
} from "@elastic/react-search-ui";
import {
  BooleanFacet,
  Layout,
  SingleLinksFacet,
  SingleSelectFacet,
} from "@elastic/react-search-ui-views";
import "@elastic/react-search-ui-views/lib/styles/styles.css";
import React, { memo } from "react";

export const SearchHeader = memo(({ config, lng }) => {
  return (
    <>
      <form action={`/${lng}/search-bar`}>
        <input
          id="search-bar"
          className="text-black max-sm:w-[100px] rounded-md px-4 py-2 font-normal"
          type="text"
          placeholder="Search.."
          name="q"
          onClick={(event) => {
            event.stopPropagation();
          }}
        />
      </form>
    </>
  );
});

SearchHeader.displayName = "SearchHeader";
