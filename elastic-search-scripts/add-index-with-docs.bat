:: Add Index
curl.exe http://localhost:9200/blogs?pretty -H "Content-Type: application/json" -X PUT -d "{\"settings\": {\"number_of_shards\": 1},\"mappings\": {\"properties\": {\"title\": { \"type\": \"text\" },\"content\": { \"type\": \"text\" },\"excerpt\": { \"type\": \"text\" }}}}"

:: Add docs
curl.exe http://localhost:9200/blogs/_doc?pretty -H "Content-Type: application/json" -X POST -d @elastic-search-scripts/blogs/blog_1.json

curl.exe http://localhost:9200/blogs/_doc?pretty -H "Content-Type: application/json" -X POST -d @elastic-search-scripts/blogs/blog_2.json

curl.exe http://localhost:9200/blogs/_doc?pretty -H "Content-Type: application/json" -X POST -d @elastic-search-scripts/blogs/blog_3.json

curl.exe http://localhost:9200/blogs/_doc?pretty -H "Content-Type: application/json" -X POST -d @elastic-search-scripts/blogs/blog_4.json

curl.exe http://localhost:9200/blogs/_doc?pretty -H "Content-Type: application/json" -X POST -d @elastic-search-scripts/blogs/blog_5.json

curl.exe http://localhost:9200/blogs/_doc?pretty -H "Content-Type: application/json" -X POST -d @elastic-search-scripts/blogs/blog_6.json















