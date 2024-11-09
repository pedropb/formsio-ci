#!/bin/bash
set -e

# Start the server in background with explicit host
NODE_ENV=test node src/server/index.js &
SERVER_PID=$!

# Wait for server to be ready by polling health endpoint
echo "Waiting for server to be ready..."
until curl -s http://localhost:3000/health > /dev/null; do
  sleep 1
done
echo "Server is ready!"

# Run Cypress tests
cypress run

# Cleanup
kill $SERVER_PID