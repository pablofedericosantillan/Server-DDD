set -e

echo "🟡 Starting services..."
docker compose up -d

echo "⏳ Waiting for MongoDB to be ready..."
until docker compose exec testMongo1 mongosh --eval "db.adminCommand('ping')" --quiet 2>/dev/null; do
  sleep 1
done


echo "✅ Initializing MongoDB replica set..."
docker compose exec testMongo1 mongosh --eval 'rs.initiate({_id: "testReplica", members: [{_id: 0, host: "localhost:27017"}]})' || echo "Replica set already initialized."
