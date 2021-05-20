curl -H "Content-Type: application/x-ndjson" -XPOST http://localhost:9200/orders/_bulk --data-binary "@orders-bulk.json"
pause