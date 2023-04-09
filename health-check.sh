#!/bin/sh

cd /app || exit
# Necessary.
git fetch
local_commit=$(git rev-parse master)
# The use of origin/HEAD is not supported.
remote_commit=$(git rev-parse origin/master)
if [ "$local_commit" != "$remote_commit" ]; then
    pid=$(pgrep -f "npm run docs:preview")
    kill "$pid"
fi
