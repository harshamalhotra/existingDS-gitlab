#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

if [ "${CI:-}" != "true" ]; then
  yarn lefthook install
fi

# Ensure that dist files are available to other packages in the workspace
yarn workspace @gitlab/svgs svg
