#! /bin/bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

clean_build () {
  rm -rf build flow-typed node_modules
  yarn install --force
  yarn run build || true
}

printf "Installing packages/common...\n"
cd "$ROOT_DIR/packages/common"
clean_build

printf "Installing packages/components...\n"
cd "$ROOT_DIR/packages/components"
clean_build
rm -rf node_modules/@days-off/*
ln -s "$ROOT_DIR/packages/common/build" "$ROOT_DIR/packages/components/node_modules/@days-off/common"

printf "Installing apps/login/app...\n"
cd "$ROOT_DIR/apps/login/app"
clean_build
rm -rf node_modules/@days-off/*
ln -s "$ROOT_DIR/packages/common/build" "$ROOT_DIR/apps/login/app/node_modules/@days-off/common"
ln -s "$ROOT_DIR/packages/components/build" "$ROOT_DIR/apps/login/app/node_modules/@days-off/components"

printf "Installing apps/login/service...\n"
cd "$ROOT_DIR/apps/login/service"
clean_build

printf "Installing apps/days-off/app...\n"
cd "$ROOT_DIR/apps/days-off/app"
clean_build
rm -rf node_modules/@days-off/*
ln -s "$ROOT_DIR/packages/common/build" "$ROOT_DIR/apps/days-off/app/node_modules/@days-off/common"
ln -s "$ROOT_DIR/packages/components/build" "$ROOT_DIR/apps/days-off/app/node_modules/@days-off/components"

# printf "Installing apps/days-off/service...\n"
# cd "$ROOT_DIR/apps/days-off/service"
# clean_build
