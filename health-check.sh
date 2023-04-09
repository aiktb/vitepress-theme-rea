#!/bin/sh

cd /app || exit
git fetch
local_commit=$(git rev-parse HEAD)
remote_commit=$(git rev-parse origin/HEAD)
if [ "$local_commit" != "$remote_commit" ]; then
    pid=$(pgrep -f "npm run docs:preview")
    kill "$pid"
fi
