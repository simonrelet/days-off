#! /bin/bash
set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"

pushd "$SCRIPT_DIR" > /dev/null 2>&1
source utils.sh
popd > /dev/null 2>&1

in_ci ()
{
  [ -z "${CI+x}" ] || return 0
  return 1
}

build_back_end ()
{
  printf "[1/2] Building back-end...\n"
  yarn_run_in back-end build

  printf "[2/2] Moving back-end...\n"
  cp -R "$ROOT_DIR"/back-end/build/* "$ROOT_DIR"/build/
}

main ()
{
  mkdir -p "$ROOT_DIR/build"

  local cmd="${1-all}"
  case "$cmd" in
    front )
      printf "error Not implemented yet.\n"
      exit 1
      ;;

    back )
      build_back_end
      ;;

    all )
      build_back_end
      ;;

    * )
      printf "error Unknown package %s.\n" "$cmd"
      exit 1
      ;;
  esac

  exit 0
}

main "$@"
