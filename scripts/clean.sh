#! /bin/bash
set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

pushd "$SCRIPT_DIR" > /dev/null 2>&1
source utils.sh
popd > /dev/null 2>&1

clean_back_end ()
{
  print_info "Cleaning $(get_package_name .)..."
  rm -rf build node_modules
}

clean_front_end ()
{
  local pkg="$1"
  pushd "$pkg" > /dev/null 2>&1
  print_info "Cleaning $(get_package_name .)..."
  yarn run clean
  popd > /dev/null 2>&1
}

pushd "$ROOT_DIR" > /dev/null 2>&1
print_bold "clean start"

clean_back_end

for pkg in front-end/*; do
  clean_front_end "$pkg"
done

print_bold "clean end"
popd > /dev/null 2>&1
