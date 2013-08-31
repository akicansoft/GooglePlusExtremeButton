#!/bin/bash

# カレントディレクトリ移動
pushd "$( dirname "${BASH_SOURCE[0]}" )"

# ファイル同期
rsync -rvd --exclude=".DS_Store" images release/
rsync -rvd --exclude=".DS_Store" buttons release/
rsync -rvd --exclude=".DS_Store" menubuttons release/
rsync -rvd --exclude=".DS_Store" _locales release/
rsync -rvd --exclude=".DS_Store" scripts/gpeb.min.js release/scripts/
rsync -rvd --exclude=".DS_Store" scripts/background.js release/scripts/
rsync -rvd --exclude=".DS_Store" scripts/gpeb.min.js release/scripts/
rsync -rvd --exclude=".DS_Store" history.txt release/
rsync -rvd --exclude=".DS_Store" manifest.json release/

# ファイル置換
perl -p -i -e 's/scripts\/gpeb\.js/scripts\/gpeb\.min\.js/g' release/manifest.json

# 一時ファイル作成
cp release/scripts/gpeb.min.js release/scripts/gpeb.min.js.tmp

# ヘッダー挿入
echo "\
/*
 * Google+ Extreme Button
 *
 * Copyright (c) 2013 Akicansoft
 * GPL licenses.
 */

  /*
 *  Include Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */\
" > release/scripts/gpeb.min.js
cat release/scripts/gpeb.min.js.tmp >> release/scripts/gpeb.min.js
rm -f release/scripts/gpeb.min.js.tmp

# Sizzleのライセンス挿入


popd

