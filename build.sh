#!/usr/bin/env sh

if [ -f ./src/reflux.min.js ]; then
	rm -f ./src/reflux.min.js
fi

cp ./lib/reflux/dist/reflux.min.js ./src/reflux.min.js