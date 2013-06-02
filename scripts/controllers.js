/* 現在のスクロール位置を取得
-------------------------------------------------------------------------------*/
function getScrollPos () {
    if (document.body) {
        return document.body.scrollTop;
    }
    return 0;
}

/* 通知ウィンドウについての詳細情報を取得する
-------------------------------------------------------------------------------*/
function getNotificationStatus () {
    var notificationIframe = select.get("notificationIframe")[0];
    if (notificationIframe) {
        var isHidden = notificationIframe.getAttribute("aria-hidden");
        return {
            isHidden: isHidden
        }
    }
    else {
        return {}
    }

}


/* ウィンドウがアクティブか調べる
-------------------------------------------------------------------------------*/
function getActive () {
    return document.hasFocus();
}


/* 更新ボタンの監視を行う
-------------------------------------------------------------------------------*/
function checkreloadButton (_callBack) {

    logger.add("更新ボタンの監視を開始しています");

    setInterval(function(){

        /* ウィンドウがアクティブではない場合無視
        -------------------------------------------------------------------------------*/
        if (!getActive()) {
            return;
        }

        /* 通知ウィンドウの情報を取得し、通知ウィンドウが表示されているときは無視する
        -------------------------------------------------------------------------------*/
        var ns = getNotificationStatus();
        if (ns.isHidden === "false") {
            return;
        }

        /* スクロールサイズ150より大きい場合無視する
        -------------------------------------------------------------------------------*/
        if (getScrollPos() > 150 ) {
            return;
        }

        var reloadButton = select.get("reloadButton")[0];
        if (reloadButton) {

            /* クリックを行う
            -------------------------------------------------------------------------------*/
            logger.add("通知更新をおこなっています");
            select.click("reloadButton");
        }
    }, 1000);
}

/* ボタンクリックイベント
-------------------------------------------------------------------------------*/
var buttonClickEvents = {

    sendDokoina: function (_event, _post) {
        console.log("どこいなを送信", _event, _post);
    },

    /* Google+ Extreme Button メニューを表示
    -------------------------------------------------------------------------------*/
    openGpeb: function (_event, _post) {
        console.log("メニューを表示します", _event, _post);

        var elm = _event.target;
        var count = 0;
        while(1) {
            if (typeof(elm) == "undefined") {
                break;
            }
            if (elm.tagName == "DIV") {
                menu.popup(elm, _post);
                break;
            }
            else {
                elm = elm.parentNode;
            }
            count++;
            if (count == 30) {
                break;
            }
        }
    },

    /* 画像一括ダウンロード
    -------------------------------------------------------------------------------*/
    imageDownload: function (_event, _post) {
        var gpd = new GetPostData(_post);
        var urls = gpd.getDonwloadImages();
        urls.forEach(function (_url) {
            window.open(_url);
        });
    },

    /* ミュート
    -------------------------------------------------------------------------------*/
    mute: function (_event, _post) {
        var pa = new PostAction(_post);
        pa.mute();
    },

    /* 設定画面を開く
    -------------------------------------------------------------------------------*/
    openSettings: function (_event, _post) {
        var sw = new SettingsWindow();
        sw.open();
    },

    /* どこいな
    -------------------------------------------------------------------------------*/
    sendDokoina: function (_event, _post) {
        var ap =  new AutoPost(_post);
        ap.autoPost("どこいな");
    },

    /* ぐぬぬ
    -------------------------------------------------------------------------------*/
    sendGununu: function (_event, _post) {
        var ap =  new AutoPost(_post);
        ap.autoPost("ぐぬぬ");
    },

    /* ふぅ...
    -------------------------------------------------------------------------------*/
    sendFuu: function (_event, _post) {
        var ap =  new AutoPost(_post);
        ap.autoPost("ふぅ...");
    },

    /* oh...
    -------------------------------------------------------------------------------*/
    sendOh: function (_event, _post) {
        var ap =  new AutoPost(_post);
        ap.autoPost("oh...");
    },

    /* リップル
    -------------------------------------------------------------------------------*/
    openRipples: function (_event, _post) {
        var gpd = new GetPostData(_post);
        var url = gpd.getRipplesUrl();
        window.open(url);
    },

    /* はてなブックマーク
    -------------------------------------------------------------------------------*/
    sendHatenaBookmark: function (_event, _post) {
        var gpd = new GetPostData(_post, true);
        var url = "http://b.hatena.ne.jp/add?mode=confirm&is_bm=1&title={{name}}%20%2d%20Google%2b%20%28{{time}}%29%20%2d%20{{body}}&url={{url}}";
        url = template(url, {
            name: gpd.getName(),
            time: gpd.getTime(),
            url: gpd.getUrl(),
            body: gpd.getBody()
        });
        window.open(url, "_blank", "width=520, height=600, menubar=no, toolbar=no");
    },


    /* Twitter
    -------------------------------------------------------------------------------*/
    sendTwitter: function (_event, _post) {
        var gpd = new GetPostData(_post, true);
        var url = "https://twitter.com/intent/tweet?text={{body}}&url={{url}}";
        url = template(url, {
            url: gpd.getUrl(),
            body: gpd.getBody()
        });
        window.open(url, "_blank", "width=600, height=340, menubar=no, toolbar=no");
    },

    /* FaceBook
    -------------------------------------------------------------------------------*/
    sendFaceBook: function (_event, _post) {
        var gpd = new GetPostData(_post, true);
        var url = "http://www.facebook.com/sharer/sharer.php?src=bm&v=4&u={{url}}&t=<NAME>%20%2d%20Google%2b%20%28{{time}}%29";
        url = template(url, {
            url: gpd.getUrl(),
            time: gpd.getTime()
        });
        window.open(url, "_blank", "width=600, height=340, menubar=no, toolbar=no");
    },


    /* Pintarest
    -------------------------------------------------------------------------------*/
    sendPinterest: function (_event, _post) {
        var gpd = new GetPostData(_post, true);
        var url = "http://pinterest.com/pin/create/bookmarklet/?media={{img}}&url={{url}}&alt=alt&title={{name}}%20%2d%20Google%2b%20%28{{time}}%29&is_video=false&";
        var opt = {
            url: gpd.getUrl(),
            time: gpd.getTime()
        }
        var imgs = gpd.getImages();
        imgs.forEach(function(_img){
            opt["url"] = _img;
            pUrl = template(url, opt);
            window.open(pUrl, "_blank", "width=632, height=295, menubar=no, toolbar=no");
        });
    },

    /* Pocket
    -------------------------------------------------------------------------------*/
    sendPocket: function (_event, _post) {
        var gpd = new GetPostData(_post, true);
        gpd.getLink();
        var url = "https://getpocket.com/save?url={{url}}&title={{name}}%20%2d%20Google%2b%20%28{{time}}%29";
        var opt = {
            url: gpd.getUrl(),
            name: gpd.getName(),
            time: gpd.getTime()
        }
        var imgs = gpd.getImages();
        console.log("imgs", imgs);
        if (imgs.length) {
            imgs.forEach(function(_img){
                opt["url"] = _img;
                pUrl = template(url, opt);
                window.open(pUrl, "_blank", "width=500, height=340, menubar=no, toolbar=no");
            });
        }
        else {
            url = template(url, opt);
            window.open(url, "_blank", "width=500, height=340, menubar=no, toolbar=no");
        }
    },

    /* circleCount
    -------------------------------------------------------------------------------*/
    openCircleCount: function (_event, _post) {
        var gpd = new GetPostData(_post, true);
        var id = gpd.getUserId();
        window.open("http://www.circlecount.com/p/"+id, "_blank", "");
    }



};

/* Controller作成
-------------------------------------------------------------------------------*/
var cont = new Controller();

/* event.click
-------------------------------------------------------------------------------*/
cont.on(window, "click", function (_event) {
    

    /* メニュー非表示
    -------------------------------------------------------------------------------*/
    var isOpen = menu.checkOpen();
    if (isOpen) {
        if (_event.target !== select.get("reloadButton")[0]) {
            var id = _event.target.id;
            var tagName = _event.target.tagName;
            var className = _event.target.getAttribute("class");
            console.log("id", id, "class:", className);
            if (id != "gpeb-context-menu-content" && id != "gpeb-context-menu-arrow" && className != "gpeb item") {
                menu.hide();
            }
        }
        
    }


    /* デバッグ
    -------------------------------------------------------------------------------*/
    console.log("クリックされました", _event.target);



    var eventName = _event.target.getAttribute("data-gpeb-event") || "";
    if (eventName) {

        if (eventName == "openGpeb" && isOpen) {
            return false;
        }

        if (typeof(buttonClickEvents[eventName]) == "function") {
            var post = Sizzle("#"+getData(_event.target, "gpeb-parent-id"))[0];
            buttonClickEvents[eventName].call(_event, _event, post);
        }
        else {
            alert("未定義のイベント "+eventName+ " を実行しようとしましたが、見つかりませんでした。");
        }
    }

});

/* event.scroll
-------------------------------------------------------------------------------*/
cont.on(window, "scroll", function () {
    
});

/* event.keydown
-------------------------------------------------------------------------------*/
cont.on(window, "keydown", function (_event) {
    console.log("キーダウンされました", _event);

    /* シフトキーまたはCommandキーまたはCtrlkeyが押された
    -------------------------------------------------------------------------------*/
    var isSpecialKey = _event.shiftKey || _event.metaKey || _event.ctrlKey;

    /* エンターキーが押された
    -------------------------------------------------------------------------------*/
    var isEnter = _event.which == 13;

    /* シフトエンターが押された
    -------------------------------------------------------------------------------*/
    var isSpecialEnter = isSpecialKey && isEnter;


    /* シフトエンターが押された
    -------------------------------------------------------------------------------*/
    if (isSpecialEnter) {
        logger.add("シフトエンターが押されました");
        

        /* 現在アクティブな要素を取得
        -------------------------------------------------------------------------------*/
        var activeElm = document.activeElement;
        debugger;

        /* 指定した要素が何あるかを特定する
        -------------------------------------------------------------------------------*/
        if (activeElm) {
            var name = select.getName(activeElm);
            debugger;
            switch (name) {

                /* 投稿ボックス
                -------------------------------------------------------------------------------*/
                case "sendBox":
                    select.click("sendButton");
                    break;

                /* コメントボックス
                -------------------------------------------------------------------------------*/
                case "commentSendBox":
                    var elm = getPostElement(activeElm);
                    var ap = new AutoPost(elm);
                    ap.autoPost();
                    break;

                /* 通知コメントボックス
                -------------------------------------------------------------------------------*/

            }
        }
    }




});

/* 新しい要素が現れた
-------------------------------------------------------------------------------*/
function newNodeEvent () {
    // console.log("------------- 新しい要素です -------------");
    this.forEach(function (_elm) {
        var plusOneAreaNode = Sizzle("div[id^='po-']", _elm);
        if (!plusOneAreaNode.length) {
            return;
        }
        var plusOneArea = plusOneAreaNode[0].parentNode;
        if (plusOneArea && this) {
            // console.log("_elm", _elm);
            button.appendAllButton(_elm, plusOneArea);
        }
    });

}