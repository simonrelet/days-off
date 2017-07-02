#! /bin/bash
set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

pushd "$SCRIPT_DIR" > /dev/null 2>&1
source utils.sh
popd > /dev/null 2>&1

pushd "$ROOT_DIR" > /dev/null 2>&1
print_bold "clean start"

print_info "Cleaning $(get_package_name .)..."
rm -rf build node_modules

for pkg in front-end/*; do
  pushd "$pkg" > /dev/null 2>&1
  print_info "Cleaning $(get_package_name .)..."
  yarn run clean
  popd > /dev/null 2>&1
done

print_bold "clean end"
popd > /dev/null 2>&1
