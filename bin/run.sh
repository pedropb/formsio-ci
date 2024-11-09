#!/bin/bash
podman run -it --rm \
  -p 3000:3000 \
  -v $(pwd):/app:z \
  --security-opt label=disable \
  formsio-dev 