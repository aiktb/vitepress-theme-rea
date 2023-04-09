#!/bin/sh

cd /app || exit
# Depends on the name of the remote branch.
local_commit=$(git rev-parse master)
remote_commit=$(git rev-parse origin/master)
if [ "$local_commit" != "$remote_commit" ]; then
    git pull
    npm run docs:build
fi
npm run docs:preview
