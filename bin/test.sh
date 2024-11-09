#!/bin/bash

# Run the tests using podman-compose
podman-compose -f docker-compose.yml up --build --exit-code-from cypress

# Cleanup
podman-compose -f docker-compose.yml down