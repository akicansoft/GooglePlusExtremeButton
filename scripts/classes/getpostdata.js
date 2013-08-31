/* ポストの情報を取得
-------------------------------------------------------------------------------*/
function GetPostData(_elmOrId, _isEncode) {
    this.init(_elmOrId, _isEncode);
}

GetPostData.prototype = {

    /* 初期化
    -------------------------------------------------------------------------------*/
    init: function (_elmOrId, _isEncode) {
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

        this.isEncode = _isEncode;

    },

    /* 名前の取得r
    -------------------------------------------------------------------------------*/
    getName: function () {
        var elms = Sizzle("a[href][oid]:eq(1)", this.elm);
        if (elms.length) {
            return this.isEncode ? encodeURIComponent(elms[0].innerHTML) : elms[0].innerHTML;
        }
        return "";
    },

    /* 投稿時間の取得
    -------------------------------------------------------------------------------*/
    getTime: function () {
        var elms = Sizzle("a[href][title]:eq(0)", this.elm);
        if (elms.length) {
            return this.isEncode ? encodeURIComponent(elms[0].getAttribute("title")) : elms[0].getAttribute("title");
        }
        return "";

    },

    /* 投稿URLの取得
    -------------------------------------------------------------------------------*/
    getUrl: function () {
        var origin = location.origin+"/";
        var elms = Sizzle("a[href][title]:eq(0)", this.elm);
        if (elms.length) {
            return this.isEncode ? encodeURIComponent(origin+elms[0].getAttribute("href")) : origin+elms[0].getAttribute("href");
        }
        return "";

    },

    /* アウクティビティIDの取得
    -------------------------------------------------------------------------------*/
    getActivityId: function () {
        return this.isEncode ? encodeURIComponent(this.elm.id.replace("update-", "")) : this.elm.id.replace("update-", "");
    },

    /* コンテキストIDの取得
    -------------------------------------------------------------------------------*/
    getContextid: function () {
    },

    /* リップルURLの取得
    -------------------------------------------------------------------------------*/
    getRipplesUrl: function () {
        var activityId = this.getActivityId();
        return "https://plus.google.com/ripples/details?activityid="+activityId;
    },

    /* 本文の取得
    -------------------------------------------------------------------------------*/
    getBody: function () {

        if (this.getIsPlusOneRecommend()) {
            var elms = Sizzle("div:eq(1)>div:eq(1)>div:eq(1)>div:eq(0)>div:eq(0)>div:eq(0)>div:eq(1)", this.elm);
        }
        else {
            var elms = Sizzle("div>div>div>div>div+div:eq(0)", this.elm);
        }
        var reg = /(<BR>|<BR\/>)/ig;
        if (elms.length) {
            return this.isEncode ? encodeURIComponent(elms[0].innerHTML.replace(reg, "\n")) : elms[0].innerHTML.replace(reg, "\n");
        }
        return "";
    },

    /* 共有されているリンクの取得
    -------------------------------------------------------------------------------*/
    getLink: function () {
        var link = Sizzle("div>div+div>a", this.elm)[0];
        if (link) {
            return {
                url: this.isEncode ? encodeURIComponent(link.getAttribute("href")) : link.getAttribute("href"),
                name: this.isEncode ? encodeURIComponent(link.innerHTML) : link.innerHTML
            };
        }
        else {
            return false;
        }
    },

    /* ユーザーIDの取得
    -------------------------------------------------------------------------------*/
    getUserId: function () {
        var elms = Sizzle("a[href][oid]:eq(1)", this.elm);
        if (elms.length) {
            return this.isEncode ? encodeURIComponent(elms[0].getAttribute("oid")) : elms[0].getAttribute("oid");
        }
        return "";
    },

    /* 投稿した画像一覧の取得
    -------------------------------------------------------------------------------*/
    getImages: function () {
        var elms = Sizzle("img:not([width]):not([class|='gpeb'])", this.elm);
        var imageUrls = [];
        var that = this;
        elms.forEach(function (_elm) {

            /* ファビコンは除外
            -------------------------------------------------------------------------------*/
            if (_elm.width <= 46 && _elm.height <= 46) {
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
                src = "https:"+src.substr(0, lastIndex);
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
                imageUrls.push( that.isEncode ? encodeURIComponent(i) : i );
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
                src = "https:"+src.substr(0, lastIndex);
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
            return this.isEncode ? encodeURIComponent(elms[0].innerHTML) : elms[0].innerHTML;
        }
        return "";
    },

    /* コミュニティカテゴリーの名前
    -------------------------------------------------------------------------------*/
    getCommunityCategory: function () {
        var elms = Sizzle("h3+span>span:eq(0)", this.elm);
        if (elms.length) {
            return this.isEncode ? encodeURIComponent(elms[0].innerHTML) : elms[0].innerHTML;
        }
        return "";
    },

    /* +1投稿によるおすすめかどうか
    -------------------------------------------------------------------------------*/
    getIsPlusOneRecommend: function () {
        var isPlusOneRecommend = Sizzle(">div:eq(1)>div", this.elm).length >= 2;
        return isPlusOneRecommend;
    }
};


