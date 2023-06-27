import { memo } from "react"
import { SearchProvider, SearchBox, Results, Paging, WithSearch, ErrorBoundary, Facet, PagingInfo } from "@elastic/react-search-ui";
import {
    BooleanFacet,
    Layout,
    SingleLinksFacet,
    SingleSelectFacet
} from "@elastic/react-search-ui-views";
import React from "react";
import { GenerateConfig } from "./config";

export const Search = memo(({ config }) => {
    return (
        <>
            <SearchProvider config={config}>
                <Layout
                    bodyHeader={<PagingInfo />}
                    header={
                        <SearchBox
                            autocompleteMinimumCharacters={3}
                            autocompleteResults={{
                                linkTarget: "_blank",
                                sectionTitle: "Results",
                                titleField: "title",
                                urlField: "nps_link",
                                shouldTrackClickThrough: true,
                                clickThroughTags: ["test"]
                            }}
                            autocompleteSuggestions={true}
                            debounceLength={0}
                        />
                    }
                    bodyContent={<Results />}
                />
            </SearchProvider>
        </>
    )
})

Search.displayName = "Search";

