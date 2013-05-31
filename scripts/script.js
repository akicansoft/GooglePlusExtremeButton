


window.onload = function () {


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

    /* PlusOneAreaにボタンを追加
    -------------------------------------------------------------------------------*/
    posts = select.get("posts");
    plusOneAreas = select.get("plusOneAreas");
    for (var i = 0; i < posts.length; i++) {
        if (posts[i] && plusOneAreas[i]) {
            button.appendAllButton(posts[i], plusOneAreas[i]);
        }
    };

    /* 監視の開始
    -------------------------------------------------------------------------------*/
    ndLeft = new NewDom(select.get("topPost")[0].parentNode);
    ndLeft.watch(newNodeEvent, defaultSettings.get("drawSpeed").speed);
    ndRight = new NewDom(select.get("topPost")[0].parentNode.nextSibling);
    ndRight.watch(newNodeEvent, defaultSettings.get("drawSpeed").speed);
    ndBottom = new NewDom(select.get("topPost")[0].parentNode.parentNode);
    ndBottom.watch(newNodeEvent, defaultSettings.get("drawSpeed").speed);



};