import ElasticsearchAPIConnector from "@elastic/search-ui-elasticsearch-connector";
import { SearchAPIConnector } from "@/components/Search/search_api_connector";

const connector = SearchAPIConnector();

export default async function handler(req, res) {
  const { requestState, queryConfig } = req.body;
  const response = await connector.onAutocomplete(requestState, queryConfig);
  res.json(response);
}