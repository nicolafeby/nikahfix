#!/bin/bash

CONTAINER_NAME="nikahfix"
PORT="8080"
SOURCE_DIR="/home/ncladr/my-web/nikahfix/dist"

echo "🚀 Starting deployment for $CONTAINER_NAME..."

# Cek apakah folder dist ada
if [ ! -d "$SOURCE_DIR" ]; then
  echo "❌ Folder dist tidak ditemukan di $SOURCE_DIR"
  exit 1
fi

# Fix permission (biar gak kena 403)
echo "🔧 Setting permission..."
sudo chmod -R 755 "$SOURCE_DIR"

# Stop & remove container lama kalau ada
if [ "$(docker ps -aq -f name=$CONTAINER_NAME)" ]; then
  echo "🛑 Removing existing container..."
  docker rm -f $CONTAINER_NAME
fi

# Run container baru
echo "📦 Running new container..."
docker run -d \
  --name $CONTAINER_NAME \
  -p $PORT:80 \
  -v $SOURCE_DIR:/usr/share/nginx/html:ro \
  nginx

# Status
echo "✅ Done!"
echo "🌐 Access: http://localhost:$PORT"
