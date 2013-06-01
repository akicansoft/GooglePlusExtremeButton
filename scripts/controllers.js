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
                menu.popup(elm);
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
            if (id != "gpeb-context-menu-content" && id != "gpeb-context-menu-arrow" && className != "gpeb item" && tagName != "IMG") {
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
            throw new Error("存在しないイベントが指定されています", eventName);
        }
    }

});

/* event.scroll
-------------------------------------------------------------------------------*/
cont.on(window, "scroll", function () {
    
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


