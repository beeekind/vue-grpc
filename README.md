## A working demo for a SPA with Vue.js and gRPC courtesy of gRPC-web.

![Screenshot](./screenshot.png)

## installation

```bash
git clone github.com/b3ntly/vue-grpc
cd vue-grpc
yarn install
./scripts/install_protobuf.sh && ./scripts/get_go_deps
npm run start
```

# notes

* The latest version of gRPC-web changed a method signature (see recent commit) so please ensure
you have the latest version present on your gopath in order to get this project
to run