#! /bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

pushd "$SCRIPT_DIR" > /dev/null 2>&1
source utils.sh
popd > /dev/null 2>&1

build_back_end ()
{
  pushd back-end > /dev/null 2>&1
  print_info "Building $(get_package_name .)..."
  cp -R node_modules ../node_modules
  yarn run build
  cp -R build/* ../build/
  popd > /dev/null 2>&1
}

build_front_end ()
{
  local pkg="$1"
  local pkg_basename
  pkg_basename="$(basename "$pkg")"

  pushd "$pkg" > /dev/null 2>&1
  print_info "Building $(get_package_name .)..."
  PUBLIC_URL="/$pkg_basename" yarn run build
  cp -R build "../../build/apps/$pkg_basename"
  popd > /dev/null 2>&1
}

pushd "$ROOT_DIR" > /dev/null 2>&1
print_bold "build start"

mkdir -p build/apps/

build_back_end

for pkg in front-end/*; do
  build_front_end "$pkg"
done

print_bold "build end"
popd > /dev/null 2>&1
