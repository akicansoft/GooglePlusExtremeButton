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
            select.click("reloadButton");
        }
    }, 1000);
}

/* ボタンクリックイベント
-------------------------------------------------------------------------------*/
var buttonClickEvents = {

    sendDokoina: function (_event, _post) {
        console.log("どこいなを送信", _event, _post);
    }

};

/* Controller作成
-------------------------------------------------------------------------------*/
var cont = new Controller();

/* event.click
-------------------------------------------------------------------------------*/
cont.on(window, "click", function (_event) {
    console.log("クリックされました", _event.target);

    var eventName = _event.target.getAttribute("data-gpeb-event") || "";
    if (eventName) {
        if (typeof(buttonClickEvents[eventName] == "function")) {
            var post = Sizzle("#"+getData(_event.target, "gpeb-parent-id"))[0];
            buttonClickEvents[eventName].call(_event, _event, post);
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


