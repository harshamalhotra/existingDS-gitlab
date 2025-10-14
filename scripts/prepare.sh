#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

if [ "${CI:-}" != "true" ]; then
  echo "Not in CI, running lefthook install"
  yarn lefthook install
fi
