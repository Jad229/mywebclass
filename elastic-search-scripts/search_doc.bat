:: Search the store index
curl.exe http://localhost:9200/blogs/_search?pretty -H "Content-Type: application/json" -X GET -d "{\"query\": {\"match\": {\"title\": \"Adjusting Temperature Parameter for Chat Completion API\"}}}"
