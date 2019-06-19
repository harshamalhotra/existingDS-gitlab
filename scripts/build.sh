#!/usr/bin/env bash
set -euo pipefail; IFS=$'\n\t'

#
# We moved this to a small script wrapper, so that this is compatible with Auto DevOps
#

# Setting the NODE_ENV to production if it isn't set
export NODE_ENV=${NODE_ENV:-production}

if [[ "$NODE_ENV" == "test" ]]; then
    echo "We are not running \`nuxt generate\` when $NODE_ENV is set to 'test'"
else
    echo "Generating production pages with nuxt"
    yarn run nuxt generate
fi
