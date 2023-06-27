import ElasticsearchAPIConnector from "@elastic/search-ui-elasticsearch-connector";

export function SearchAPIConnector() {
    const connector = new ElasticsearchAPIConnector({
        host: "http://150.136.71.189:9200",
        index: "blogs",
    });

    return connector;
}


