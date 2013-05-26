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


/* 更新ボタンの監視を行う
-------------------------------------------------------------------------------*/
function checkreloadButton (_callBack) {
    setInterval(function(){

        /* 通知ウィンドウの情報を取得し、通知ウィンドウが表示されているときは無視する
        -------------------------------------------------------------------------------*/
        var ns = getNotificationStatus();
        console.log("ns", ns);
        if (ns.isHidden === false) {
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



/* Controller作成
-------------------------------------------------------------------------------*/
var cont = new Controller();

/* event.click
-------------------------------------------------------------------------------*/
cont.on(window, "click", function (_event) {
    console.log("クリックされました", _event.target);
});

/* event.scroll
-------------------------------------------------------------------------------*/
cont.on(window, "scroll", function () {
    
});


