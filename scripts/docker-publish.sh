#!/usr/bin/env bash
set -e

IMAGE_NAME=${1:-"myregistry/vue-template:latest"}

docker build -t ${IMAGE_NAME} .
#docker push ${IMAGE_NAME}

echo "Built ${IMAGE_NAME}. Uncomment docker push to push to registry."
