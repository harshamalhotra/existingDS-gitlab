#!/usr/bin/env bash

function retry() {
  retry_times_sleep 2 3 "$@"
}

function retry_times_sleep() {
  number_of_retries="$1"
  shift
  sleep_seconds="$1"
  shift

  if eval "$@"; then
    return 0
  fi

  for i in $(seq "${number_of_retries}" -1 1); do
    sleep "$sleep_seconds"s
    echo "[$(date '+%H:%M:%S')] Retry attempts left: $i..."
    if eval "$@"; then
      return 0
    fi
  done

  return 1
}
