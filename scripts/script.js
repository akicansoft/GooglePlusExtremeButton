


window.onload = function () {

    /* ロギング
    -------------------------------------------------------------------------------*/
    logger = new Logger("Google+ Extreme Button");

    /* デバッグモードがONの場合ロギングを行わない debugger;settings.set("dev", {"isDev": true});
    -------------------------------------------------------------------------------*/
    if (!settings.get("dev").isDev) {
        logger.stop();
    }
    else {
        logger.add("ロギングを開始しました");
    }


    /* CSSテーマを設定
    -------------------------------------------------------------------------------*/
    cssTheme = cssThemes.get(settings.get("style").active);
    css("gpebCss", cssTheme.css.join("\n"));
    setTimeout(function(){  
        css("gpebCss", cssTheme.css.join("\n")+commonCss);
    }, 500);

    /* 更新ボタンの監視を行う
    -------------------------------------------------------------------------------*/
    if (settings.get("other").autoreload) {
        checkreloadButton(function () {
        });
    }

    /* ボタンオブジェクトの作成
    -------------------------------------------------------------------------------*/
    button = new Buttons({
        buttonTemplate: domTemplates.get("plusOneAreaItem").item,
        buttonInnerTemplate: innerHTMLs.get("buttonInner").html
    });

    /* ボタンの追加
    -------------------------------------------------------------------------------*/
    defaultButtons.each(function (i, key) {
        button.add({
            name: this.name,
            desc: this.desc,
            img: this.img,
            eventId: this.eventId
        });
    });

    /* メニューの作成
    -------------------------------------------------------------------------------*/
    menu = new Menu({
        idName: "gpeb-context-menu"
    });

    /* メニューにアイテムを追加
    -------------------------------------------------------------------------------*/
    var showButtons = settings.get("button").showButtons;
    menuItems.each(function () {

        /* 表示設定が行われているボタンのみ表示する
        -------------------------------------------------------------------------------*/
        if (showButtons[this.key]) {
            menu.addItem(this);
        }
    });

    /* 設定ボタンの追加
    -------------------------------------------------------------------------------*/
    menu.addItem({
        name: "設定",
        event: "openSettings",
        img: "buttons/settings.png",
        type: "default"
    });

    /* メニューにリンク形式のアイテムを追加
    -------------------------------------------------------------------------------*/
    var customButton = settings.get("custombtn").custombtn;
    customButton.forEach(function (_btn) {
        menu.addItem({
            name: _btn[0],
            event: "customButton",
            type: "default",
            mode: "link",
            bodyId: _btn[1]
        });
    });


    /* 監視の開始
    -------------------------------------------------------------------------------*/
    nd = new NewDom(select.get("topPost")[0].parentNode.parentNode);
    nd.watch(newNodeEvent, defaultSettings.get("drawSpeed").speed);

};