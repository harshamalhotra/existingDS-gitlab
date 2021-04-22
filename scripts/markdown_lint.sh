#!/usr/bin/env bash
# Use the unofficial bash strict mode: http://redsymbol.net/articles/unofficial-bash-strict-mode/
set -euo pipefail; IFS=$'\n\t'

ERROR=false

while IFS= read -r -d '' file; do
  if test "$(tail -c 1 "$file" | wc -l)" -eq 0; then
    echo -e "\tError: No newline at end of $file"
    ERROR=true
  fi
done < <(git ls-files -z -- '*.md')

if [[ "$ERROR" == "true" ]]; then
  exit 1
fi
