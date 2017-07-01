#! /bin/bash
set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

pushd "$SCRIPT_DIR" > /dev/null 2>&1
source utils.sh
popd > /dev/null 2>&1

main ()
{
  local clean_type="${1-normal}"

  rm -rf build
  yarn_run_in back-end clean

  [ "$clean_type" == "dist" ] && {
    rm -f "$SCRIPT_DIR"/*.log
  }
}

main "$@"
