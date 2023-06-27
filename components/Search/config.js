//import { SearchAPIConnector } from "./search_api_connector";

import Connector from "../../utils/services/APIConnector";

export function GenerateConfig() {
    const apiConnector = new Connector({});

    const config = {
        apiConnector: apiConnector,
        alwaysSearchOnInitialLoad: true,
        searchQuery: {
            search_fields: {
                title: {},
                content: {},
                excerpt: {},
            },
            result_fields: {
                title: { raw: {} },
                content: { raw: {} },
                excerpt: { raw: {} },
            },
            disjunctiveFacets: [
                "acres",
                "page.keyword",
                "location"
            ],
            facets: {
                "page.keyword": { type: "value", size: 30, sort: "page" },
                location: {
                    // San Francisco. In the future, make this the user's current position
                    center: "37.7749, -122.4194",
                    type: "range",
                    unit: "mi",
                    ranges: [
                        { from: 'a', to: 'a', name: "a" },
                        { from: 'b', to: 'b', name: "b" },
                        { from: 'c', name: "c" }
                    ]
                },
                visitors: {
                    type: "range",
                    ranges: [
                        { from: 0, to: 10000, name: "0 - 10000" },
                        { from: 10001, to: 100000, name: "10001 - 100000" },
                        { from: 100001, to: 500000, name: "100001 - 500000" },
                        { from: 500001, to: 1000000, name: "500001 - 1000000" },
                        { from: 1000001, to: 5000000, name: "1000001 - 5000000" },
                        { from: 5000001, to: 10000000, name: "5000001 - 10000000" },
                        { from: 10000001, name: "10000001+" }
                    ]
                }
            }
        },
        autocompleteQuery: {
            results: {
                search_fields: {
                    parks_search_as_you_type: {}
                },
                resultsPerPage: 5,
                result_fields: {
                    title: {
                        snippet: {
                            size: 100,
                            fallback: true
                        }
                    },
                    nps_link: {
                        raw: {}
                    }
                }
            },
            suggestions: {
                types: {
                    documents: {
                        fields: ["parks_completion"]
                    }
                },
                size: 4
            }
        }
    };

    return config;
}