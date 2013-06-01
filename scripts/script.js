


window.onload = function () {

    /* ロギング
    -------------------------------------------------------------------------------*/
    logger = new Logger("Google+ Extreme Button");
    logger.add("ロギングを開始しました");

    /* CSSテーマを設定
    -------------------------------------------------------------------------------*/
    cssTheme = cssThemes.get("default");
    css("gpebCss", cssTheme.css.join("\n"));
    setTimeout(function(){  
        css("gpebCss", cssTheme.css.join("\n"));
    }, 500);

    /* 更新ボタンの監視を行う
    -------------------------------------------------------------------------------*/
    checkreloadButton(function () {
        console.log("更新ボタンが現れました");
    });

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


    /* 監視の開始
    -------------------------------------------------------------------------------*/
    nd = new NewDom(select.get("topPost")[0].parentNode.parentNode);
    nd.watch(newNodeEvent, defaultSettings.get("drawSpeed").speed);



};