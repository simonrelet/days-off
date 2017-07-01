#! /bin/bash
set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
LOG_STDOUT="$SCRIPT_DIR/stdout.log"
LOG_STDERR="$SCRIPT_DIR/stderr.log"

yarn_run_in ()
{
  local folder="$1"
  shift
  local exit_code

  pushd "$ROOT_DIR/$folder" > /dev/null 2>&1

  yarn run "$@" > "$LOG_STDOUT" 2> "$LOG_STDERR"
  exit_code=$?
  [ $exit_code -eq 0 ] || {
    printf "$ yarn run %s\n" "$@" >&2
    cat "$LOG_STDERR" >&2
    exit $exit_code
  }

  popd > /dev/null 2>&1
}
