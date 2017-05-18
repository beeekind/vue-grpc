#!/bin/bash

PROJ_ROOT="$(dirname "$(dirname "$(readlink "$0")")")"

mkdir -p ${PROJ_ROOT}/server/_proto
mkdir -p ${PROJ_ROOT}/client/_proto

protoc \
  --plugin=protoc-gen-ts=${PROJ_ROOT}/node_modules/.bin/protoc-gen-ts \
  --plugin=protoc-gen-go=${GOBIN}/protoc-gen-go \
  -I ${PROJ_ROOT}/proto \
  --js_out=import_style=commonjs,binary:${PROJ_ROOT}/client/_proto \
  --go_out=plugins=grpc:${PROJ_ROOT}/server/_proto \
  --ts_out=service=true:${PROJ_ROOT}/client/_proto \
  ${PROJ_ROOT}/proto/notes_service.proto