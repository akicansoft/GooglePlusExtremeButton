#!/bin/bash
pushd "$( dirname "${BASH_SOURCE[0]}" )"
rsync -vd images release/
rsync -vd buttons release/
rsync -vd _locales release/
rsync -vd scripts/gpeb.min.js release/scripts/
rsync -vd scripts/background.js release/scripts/
rsync -vd scripts/gpeb.min.js release/scripts/
rsync -vd history.txt release/
rsync -vd manifest.json release/
popd

