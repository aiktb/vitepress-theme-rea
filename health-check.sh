#!/bin/sh

cd /app || exit
local_commit=$(git rev-parse HEAD)
remote_commit=$(git rev-parse origin/HEAD)
if [ "$local_commit" != "$remote_commit" ]; then
    kill 1
fi