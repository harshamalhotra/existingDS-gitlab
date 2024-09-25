#!/usr/bin/env bash
# Use the unofficial bash strict mode: http://redsymbol.net/articles/unofficial-bash-strict-mode/
set -euo pipefail; IFS=$'\n\t'

#
# This is a small wrapper script for compressing pages artifacts
# which one typically doesn't want to do on their dev machine
#

# Setting the NODE_ENV to production if it isn't set
export NODE_ENV=${NODE_ENV:-production}

CI_JOB_NAME=${CI_JOB_NAME:-hiob}
CI_ENVIRONMENT_NAME=${CI_ENVIRONMENT_NAME:-fallback}

echo "Generating production pages with nuxt"
yarn run nuxt generate
if [[ "$CI_JOB_NAME" == "pages" ]]; then
  echo "Running in a pages job. Compressing with GZIP"
  find public -type f -regex '.*\.\(htm\|html\|txt\|text\|js\|json\|css\)$' -exec gzip -f -k {} \;
fi
if [[ "$CI_ENVIRONMENT_NAME" == "pages" ]]; then
  echo "Running in a _production_ pages job. Compressing with BROTLI"
  find public -type f -regex '.*\.\(htm\|html\|txt\|text\|js\|json\|css\)$' -exec brotli -f -k {} \;
fi
