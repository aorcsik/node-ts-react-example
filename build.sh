#!/bin/sh

./node_modules/.bin/webpack --config webpack.dev.js --progress --color --stats-error-details $@
