# Setup Elastic Search
## Run Elastic Search Container
```
docker compose up
```

## Add Index with Docs to the Elastic Search Container
Add Index and Docs
```
.\add_data_to_elasticsearch.bat
```

or

---

Add Index

```
curl http://localhost:9200/blogs?pretty -H "Content-Type: application/json" -X PUT -d "{\"settings\": {\"number_of_shards\": 1},\"mappings\": {\"properties\": {\"title\": { \"type\": \"text\" },\"content\": { \"type\": \"text\" },\"excerpt\": { \"type\": \"text\" }}}}"
```

Add docs
```
cd elastic-search-scripts/
```

```
curl http://localhost:9200/blogs/_doc?pretty -H "Content-Type: application/json" -X POST -d @blogs/blog_1.json

curl http://localhost:9200/blogs/_doc?pretty -H "Content-Type: application/json" -X POST -d @blogs/blog_2.json

curl http://localhost:9200/blogs/_doc?pretty -H "Content-Type: application/json" -X POST -d @blogs/blog_3.json

curl http://localhost:9200/blogs/_doc?pretty -H "Content-Type: application/json" -X POST -d @blogs/blog_4.json

curl http://localhost:9200/blogs/_doc?pretty -H "Content-Type: application/json" -X POST -d @blogs/blog_5.json

curl http://localhost:9200/blogs/_doc?pretty -H "Content-Type: application/json" -X POST -d @blogs/blog_6.json
```

**Note**: On Windows use `curl.exe`

