/* ポストの情報を取得
-------------------------------------------------------------------------------*/
function GetPostData(_elmOrId) {
    this.init(_elmOrId);
}

GetPostData.prototype = {

    /* 初期化
    -------------------------------------------------------------------------------*/
    init: function (_elmOrId) {
        if (typeof(_elmOrId) == "string") {
            var elms = Sizzle("#"+_elmOrId);
            if (elms.length) {
                this.elm = elms[0];
            }
            else {
                this.elm = undefined;
            }
        }
        else {
            this.elm = _elmOrId;
        }
    },

    /* 名前の取得
    -------------------------------------------------------------------------------*/
    getName: function () {
        var elms = Sizzle("a[href][oid]:eq(1)", this.elm);
        if (elms.length) {
            return elms[0].innerHTML;
        }
        return "";
    },

    /* 投稿時間の取得
    -------------------------------------------------------------------------------*/
    getTime: function () {
        var elms = Sizzle("a[href][title]:eq(0)", this.elm);;
        if (elms.length) {
            return elms[0].getAttribute("title");
        }
        return "";

    },

    /* 本文の取得
    -------------------------------------------------------------------------------*/
    getBody: function () {
        var elms = Sizzle("div>div>div>div>div+div:eq(0)", this.elm);
        if (elms.length) {
            return elms[0].innerHTML;
        }
        return "";
    },

    /* 投稿した画像一覧の取得
    -------------------------------------------------------------------------------*/
    getImages: function () {
        var elms = Sizzle("img:not([width]):not([class|='gpeb'])", this.elm);
        var imageUrls = [];
        elms.forEach(function (_elm) {

            /* ファビコンは除外
            -------------------------------------------------------------------------------*/
            if (_elm.width < 20 && _elm.height < 20) {
                return;
            }

            var src = _elm.getAttribute("src");

            /* サムネイルかどうか判定
            -------------------------------------------------------------------------------*/
            var isThumbnail = src.indexOf("=w") != -1;
            
            if (!isThumbnail) {
                
                var srcs = src.split("/");
                srcs[7] = "s0";
                src = "https:"+srcs.join("/");
            }
            else {
                var lastIndex = src.lastIndexOf("=") || 999999;
                src = src.substr(0, lastIndex);
            }
            imageUrls.push(src);

            /* 重複カット
            -------------------------------------------------------------------------------*/
            var objUrls = {};
            imageUrls.forEach(function (_url) {
                objUrls[_url] = 1;
            });
            imageUrls = [];
            for (var i in objUrls) {
                imageUrls.push(i);
            };

        });
        return imageUrls;
    },

    /* 投稿した画像一覧の取得 (ダウンロード)
    -------------------------------------------------------------------------------*/
    getDonwloadImages: function () {
        var elms = Sizzle("img:not([width]):not([class|='gpeb'])", this.elm);
        var imageUrls = [];
        elms.forEach(function (_elm) {

            /* ファビコンは除外
            -------------------------------------------------------------------------------*/
            if (_elm.width < 20 && _elm.height < 20) {
                return;
            }

            var src = _elm.getAttribute("src");

            /* サムネイルかどうか判定
            -------------------------------------------------------------------------------*/
            var isThumbnail = src.indexOf("=w") != -1;

            if (!isThumbnail) {
                
                var srcs = src.split("/");
                srcs[7] = "d";
                src = "https:"+srcs.join("/");
            }
            else {
                var lastIndex = src.lastIndexOf("=") || 999999;
                src = src.substr(0, lastIndex);
            }
            imageUrls.push(src);

            /* 重複カット
            -------------------------------------------------------------------------------*/
            var objUrls = {};
            imageUrls.forEach(function (_url) {
                objUrls[_url] = 1;
            });
            imageUrls = [];
            for (var i in objUrls) {
                imageUrls.push(i);
            };

        });
        return imageUrls;
    },

    /* コミュニティの名前
    -------------------------------------------------------------------------------*/
    getCommunityName: function () {
        var elms = Sizzle("a[href^='communities'] > div", this.elm);
        if (elms.length) {
            return elms[0].innerHTML;
        }
        return "";
    },

    /* コミュニティカテゴリーの名前
    -------------------------------------------------------------------------------*/
    getCommunityCategory: function () {
        var elms = Sizzle("h3+span>span:eq(0)", this.elm);
        if (elms.length) {
            return elms[0].innerHTML;
        }
        return "";
    }
};


