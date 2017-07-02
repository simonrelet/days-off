#! /bin/bash
set -euo pipefail

in_ci ()
{
  [ -z "${CI+x}" ] || return 0
  return 1
}

print_bold ()
{
  in_ci && printf "%s\n" "$1" || printf "\e[1m%s\e[0m\n" "$1"
}

print_info ()
{
  in_ci && printf "info %s\n" "$1" || printf "\e[34minfo\e[0m %s\n" "$1"
}

get_package_name ()
{
  local folder="${1%/}/package.json"
  cat "$folder" | sed -n -E 's/.*"name".*:.*"(.*)".*/\1/p'
}
