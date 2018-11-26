#!/bin/bash
# Generates HTML files which redirect to dynamic routes so we can link to them without # in the URL

set -o errexit
set -o nounset

basedir=$(cd "$(dirname $0)/.."; pwd)

function create_redirections {
  for filename in $@
  do
    echo "Creating redirection for ${filename} ..."
    url=${filename%.*}
    mkdir -p "${basedir}/public/${url}"
    echo "<meta http-equiv=\"refresh\" content=\"0;url=/#/${url}\">Redirecting..." > "${basedir}/public/${url}/index.html"
  done
}

create_redirections $(cd "${basedir}/contents" && ls **/*.md)
create_redirections $(cd "${basedir}/pages" && ls **/*.vue)
