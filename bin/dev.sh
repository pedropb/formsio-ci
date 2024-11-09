#!/bin/bash

# Build the image
podman build -t form-app .

# Run the container, mapping port 3000 and mounting the src directory for live updates
podman run --rm -it \
  -p 3000:3000 \
  -v "./src:/app/src:Z" \
  --name form-app \
  form-app