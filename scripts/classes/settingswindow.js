/* 設定画面
-------------------------------------------------------------------------------*/
function SettingsWindow (_opt) {
    this.init(_opt);
}

SettingsWindow.prototype = {
    init: function (_opt) {

        this.elm = document.createElement("div");
        this.elm.setAttribute("id", "gpeb-settings-window");

        /* 画面構成
        -------------------------------------------------------------------------------*/
        this.elm.innerHTML = [
            '<div id="gpeb-settings-window-menu">',
                '<div class="gpeb logo">',
                    '<img src="'+chrome.extension.getURL("images/icon.png")+'" />',
                    '<div class="name">Google+ Extreme Button</div>',
                '</div>',
            '</div>',
            '<div id="gpeb-settings-window-content"></div>',
            '<div id="gpeb-settings-window-close-button">×</div>'
        ].join("");
        document.body.appendChild(this.elm);
        this.menu = Sizzle("#gpeb-settings-window-menu")[0];
        this.content = Sizzle("#gpeb-settings-window-content")[0];

        /* スタイルのモデルを扱う
        -------------------------------------------------------------------------------*/
        this.styles = _opt.styles;

        /* メニューボタンのモデルを扱う
        -------------------------------------------------------------------------------*/
        this.buttons = _opt.buttons;

        /* 設定データモデルを扱う
        -------------------------------------------------------------------------------*/
        this.settings = _opt.settings;


        /* 各種ページのメニュー
        -------------------------------------------------------------------------------*/
        this.menuItems = [
            ["表示するボタンの選択", "list", "active"],
            ["カスタムボタン", "custombtn", ""],
            ["スタイル", "style", ""],
            ["補助機能", "other", ""],
            ["メニューボタン", "menubutton", ""],
            ["更新履歴", "history", ""],
            ["サポート情報", "support", ""]
        ];

        /* メニューアイテムのHTML
        -------------------------------------------------------------------------------*/
        var html = "";
        this.menuItems.forEach(function (_item) {
            html += '<div class="gpeb item '+_item[2]+'" data-content="'+_item[1]+'"><div class="gpeb item-inner" data-content="'+_item[1]+'">'+_item[0]+'</div></div>';
        });
        html += '<div class="gpeb item-close"></div>';
        this.menu.innerHTML += html;

        /* イベント
        -------------------------------------------------------------------------------*/
        var that = this;
        this.menu.addEventListener ("click", function (_event) {

            /* modeの取得
            -------------------------------------------------------------------------------*/
            var mode = getData(_event.target, "content");
            if (mode) {

                /* HTMLの書き換え
                -------------------------------------------------------------------------------*/
                that.content.innerHTML = that.menuContents[mode] || "";
                Sizzle("div.item", this.menu).forEach(function (_elm) {
                    _elm.setAttribute("class", "gpeb item");
                });
                _event.target.parentNode.setAttribute("class", "gpeb item active");

                /* 関数の実行
                -------------------------------------------------------------------------------*/
                if (that.menuFunctions[mode]) {
                    that.menuFunctions[mode].call(that.content, that.content);
                }


            }
        }, false);


        /* 閉じるボタンイベント
        -------------------------------------------------------------------------------*/
        Sizzle("#gpeb-settings-window-close-button")[0].addEventListener ("click", function () {
            that.close();
        }, false);


        /* 各種ページのHTMLを格納するオブジェクト
        -------------------------------------------------------------------------------*/
        this.menuContents = {

            /* リストページ
            -------------------------------------------------------------------------------*/
            list: [
                '<div id="gpeb-settings-window-content-list">',
                    '<div class="gpeb title">表示するボタンの選択</div>',
                    '<div class="gpeb desc">ボタンにチェックを入れると、ボタンを表示することができます。</div>',
                    '<div class="gpeb list">',
                        '<div id="gpeb-settings-window-content-list-items" class="gpeb list-inner">',
                        '</div>',
                    '</div>',
                '</div>'
            ].join(""),

            /* 更新履歴ページ
            -------------------------------------------------------------------------------*/
            history: [
                '<div id="gpeb-settings-window-content-history">',
                    '<div class="gpeb title">更新履歴</div>',
                    '<div class="gpeb desc">過去の更新履歴です</div>',
                    '<div class="gpeb list">',
                        '<div id="gpeb-settings-window-content-history-items" class="gpeb list-inner">',
                        '</div>',
                    '</div>',
                '</div>'
            ].join(""),

            /* カスタムボタン設定
            -------------------------------------------------------------------------------*/
            custombtn: [
                '<div id="gpeb-settings-window-content-custombtn">',
                    '<div class="gpeb title">カスタムボタン</div>',
                    '<div class="gpeb desc">自動投稿を行うことができるカスタムボタンを作成します</div>',
                    '<div class="gpeb button-list"><input id="gpeb-settings-custombtn-new-button" type="button" value="ボタンの新規作成" /></div>',
                    '<div class="gpeb list">',
                        '<div id="gpeb-settings-window-content-custombtn-items" class="gpeb list-inner">',
                        '</div>',
                    '</div>',
                '</div>'
            ].join(""),

            /* スタイル設定
            -------------------------------------------------------------------------------*/
            style: [
                '<div id="gpeb-settings-window-content-style">',
                    '<div class="gpeb title">スタイル</div>',
                    '<div class="gpeb desc">スタイルの変更を行います</div>',
                    '<div class="gpeb list">',
                        '<div id="gpeb-settings-window-content-style-items" class="gpeb list-inner">',
                        '</div>',
                    '</div>',
                '</div>'
            ].join(""),


            /* 挨拶設定
            -------------------------------------------------------------------------------*/
            aisatsu: [
                '<div id="gpeb-settings-window-content-aisatsu">',
                    '<div class="gpeb title">あいさつ設定</div>',
                    '<div class="gpeb desc">挨拶ボタンの設定を行います</div>',
                    '<div class="gpeb list">',
                        '<div id="gpeb-settings-window-content-aisatsu-items" class="gpeb list-inner">',
                        '※この機能は現在実装されていません',
                        '</div>',
                    '</div>',
                '</div>'
            ].join(""),

            /* メニューボタン設定
            -------------------------------------------------------------------------------*/
            menubutton: [
                '<div id="gpeb-settings-window-content-menubutton">',
                    '<div class="gpeb title">メニューボタン設定</div>',
                    '<div class="gpeb desc">各ポストに挿入されるボタンの画像を変更します</div>',
                    '<div class="gpeb list">',
                        '<div id="gpeb-settings-window-content-menubutton-items" class="gpeb list-inner">',
                        '※この機能は現在実装されていません',
                        '</div>',
                    '</div>',
                '</div>'
            ].join(""),

            /* バグ報告・サポート
            -------------------------------------------------------------------------------*/
            support: [
                '<div id="gpeb-settings-window-content-support">',
                    '<div class="gpeb title">サポート情報</div>',
                    '<div class="gpeb desc">バグ報告やサポート情報についてのページです。</div>',
                    '<div class="gpeb support">',
                        '<div class="gpeb sub-title">サポートについて</div>',
                        '<div class="gpeb sub-desc">使い方等わからなかったり、何か問題がありましたら <a href="mailto:akicansoft+support@gmail.com">nacika.inscatolare+support@gmail.com</a> にお願いします。 </div>',
                    '</div>',
                    '<div class="gpeb bug">',
                        '<div class="gpeb sub-title">バグ報告</div>',
                        '<div class="gpeb sub-desc">バグ報告は、 <a href="mailto:akicansoft+bug@gmail.com">nacika.inscatolare+bug@gmail.com</a> にお願いします。 </div>',
                    '</div>',
                '</div>'
            ].join(""),

            /* 補助機能
            -------------------------------------------------------------------------------*/
            other: [
                '<div id="gpeb-settings-window-content-other">',
                    '<div class="gpeb title">補助機能</div>',
                    '<div class="gpeb desc">G+をもっと便利にする補助機能です。</div>',
                    '<div id="gpeb-settings-window-content-other-inner" class="gpeb other-inner">',
                        '<label class="item"><input type="checkbox" name="shiftenter" /> Shift+Enterによる投稿を許可する</label>',
                        '<label class="item"><input type="checkbox" name="autoreload" /> 自動更新機能を許可する</label>',
                        '<label class="item"><input type="checkbox" name="disableplusonerecommend" /> +1のおすすめの投稿を非表示にする</label>',
                    '</div>',
                '</div>'
            ].join("")
        };


        /* 各種ボタンをクリックした時に呼ばれる関数
        -------------------------------------------------------------------------------*/
        this.menuFunctions = {

            /* 表示するボタンの選択
            -------------------------------------------------------------------------------*/
            list: function () {

                /* 追加を行うリスト
                -------------------------------------------------------------------------------*/
                var listElm = Sizzle("#gpeb-settings-window-content-list-items")[0];

                /* アイテムテンプレートの生成
                -------------------------------------------------------------------------------*/
                var itemTemp = domParseFromString([
                    '<div class="item">',
                        '<label>',
                            '<div class="icon"><img src="" /></div>',
                            '<div class="name"></div>',
                            '<div class="desc"></div>',
                            '<div class="show"><input type="checkbox" /><span>表示する</span></div>',
                            '<div class="clear"></div>',
                        '</label>',
                    '</div>'
                ].join(""));

                /* アイテムテンプレートの変数
                -------------------------------------------------------------------------------*/
                var itemTempIcon = Sizzle("div.icon > img", itemTemp)[0];
                var itemTempName = Sizzle("div.name", itemTemp)[0];
                var itemTempDesc = Sizzle("div.desc", itemTemp)[0];
                var itemTempShow = Sizzle("div.show > input", itemTemp)[0];

                /* 現在のボタンデータ
                -------------------------------------------------------------------------------*/
                var buttonShowSetting = that.settings.get("button").showButtons || {};

                /* 描画
                -------------------------------------------------------------------------------*/
                that.buttons.each(function () {

                    /* 変数に設定
                    -------------------------------------------------------------------------------*/
                    itemTempIcon.src = getUrl(this.img);
                    itemTempName.innerHTML = this.name;
                    itemTempDesc.innerHTML = this.desc;

                    /* 表示されているか調べる
                    -------------------------------------------------------------------------------*/
                    if (buttonShowSetting[this.key]) {
                        itemTempShow.setAttribute("checked", "checked");
                    }

                    /* 表示されていない
                    -------------------------------------------------------------------------------*/
                    else {
                        itemTempShow.removeAttribute("checked");
                    }

                    /* イベント用キーの割り当て
                    -------------------------------------------------------------------------------*/
                    itemTempShow.setAttribute("gpeb-settings-window-content-list-items", this.key);

                    /* クローンの作成
                    -------------------------------------------------------------------------------*/
                    var item = itemTemp.cloneNode(true);

                    /* クローンの挿入
                    -------------------------------------------------------------------------------*/
                    listElm.appendChild(item);
                    

                });

                /* イベントの登録
                -------------------------------------------------------------------------------*/
                listElm.addEventListener ("click", function (_event) {

                    var key = _event.target.getAttribute("gpeb-settings-window-content-list-items") || "";
                    var isShow = _event.target.checked || false;
                    
                    if (key) {

                        /* テスト
                        -------------------------------------------------------------------------------*/
                        // console.log(_event.target, key, isShow);

                        /* データセット
                        -------------------------------------------------------------------------------*/
                        buttonShowSetting[key] = isShow ? 1 : 0;
                        that.settings.set("button", {
                            "showButtons": buttonShowSetting
                        });


                        /* 保存
                        -------------------------------------------------------------------------------*/
                        that.settings.save();

                    }

                });

            },

            /* スタイル
            -------------------------------------------------------------------------------*/
            style: function () {

                /* 追加を行うリスト
                -------------------------------------------------------------------------------*/
                var listElm = Sizzle("#gpeb-settings-window-content-style-items")[0];


                /* アクティブなスタイルを取得
                -------------------------------------------------------------------------------*/
                var activeStyle = that.settings.get("style").active || "";

                /* アイテムテンプレートの生成
                -------------------------------------------------------------------------------*/
                var itemTemp = domParseFromString([
                    '<div class="item">',
                        '<div class="thumbnail"><img src="" /></div>',
                        '<div class="name"><a></a></div>',
                        '<div class="desc"></div>',
                        '<div class="author">作者: <a></a></div>',
                        '<div class="date">更新: <span></span></div>',
                        '<div class="version">v e r: <span></span></div>',
                        '<div class="activate"><input type="button" value="有効にする" /></div>',
                        '<div class="clear"></div>',
                    '</div>'
                ].join(""));

                /* アイテムテンプレートの変数
                -------------------------------------------------------------------------------*/
                var itemTempName = Sizzle("div.name > a", itemTemp)[0];
                var itemTempDesc = Sizzle("div.desc", itemTemp)[0];
                var itemTempAuthor = Sizzle("div.author > a", itemTemp)[0];
                var itemTempDate = Sizzle("div.date > span", itemTemp)[0];
                var itemTempVersion = Sizzle("div.version > span", itemTemp)[0];
                var itemTempActivate = Sizzle("div.activate", itemTemp)[0];
                var itemTempThumbnail = Sizzle("div.thumbnail > img", itemTemp)[0];
                var itemTempActivate = Sizzle("div.activate > input", itemTemp)[0];

                /* 描画
                -------------------------------------------------------------------------------*/
                that.styles.each(function () {

                    /* 変数に設定
                    -------------------------------------------------------------------------------*/
                    itemTempName.innerHTML = this.name;
                    this.styleUrl && itemTempName.setAttribute("href", this.styleUrl);
                    itemTempDesc.innerHTML = this.desc;
                    itemTempAuthor.innerHTML = this.author;
                    this.authorUrl && itemTempAuthor.setAttribute("href", this.authorUrl);
                    itemTempDate.innerHTML = this.date;
                    itemTempVersion.innerHTML = this.version;
                    itemTempThumbnail.src = getUrl("images/style/"+this.key+".png");

                    /* 
                    -------------------------------------------------------------------------------*/
                    if (activeStyle == this.key) {
                        itemTempActivate.setAttribute("class", "disable");
                        itemTempActivate.value = "既に有効になっています";
                    }
                    else {
                        itemTempActivate.removeAttribute("class");
                        itemTempActivate.value = "有効にする";
                    }

                    /* イベント用キーの割り当て
                    -------------------------------------------------------------------------------*/
                    itemTempActivate.setAttribute("data-gpeb-settings-active", this.key);

                    /* クローンの作成
                    -------------------------------------------------------------------------------*/
                    var item = itemTemp.cloneNode(true);

                    /* クローンの挿入
                    -------------------------------------------------------------------------------*/
                    listElm.appendChild(item);

                });

                /* イベントの登録
                -------------------------------------------------------------------------------*/
                listElm.addEventListener ("click", function (_event) {

                    var key = _event.target.getAttribute("data-gpeb-settings-active") || "";

                    if (key) {

                        /* スタイルの変更
                        -------------------------------------------------------------------------------*/
                        that.settings.set("style", {
                            "active": key
                        });

                        /* 設定の保存
                        -------------------------------------------------------------------------------*/
                        that.settings.save();

                        /* 他のボタンのスタイルを一括で有効にするにする
                        -------------------------------------------------------------------------------*/
                        Sizzle("div.item > div.activate > input", listElm).forEach(function(_elm){

                            var tKey = _elm.getAttribute("data-gpeb-settings-active");

                            /* 現在のキー
                            -------------------------------------------------------------------------------*/
                            if (tKey == key) {
                                _elm.setAttribute("class", "disable");
                                _elm.value = "既に有効になっています";
                            }

                            /* それ以外
                            -------------------------------------------------------------------------------*/
                            else {
                                _elm.removeAttribute("class");
                                _elm.value = "有効にする";
                            }
                        });
                    }

                }, true);
            },


            /* 更新履歴
            -------------------------------------------------------------------------------*/
            history: function () {

                /* 追加を行うリスト
                -------------------------------------------------------------------------------*/
                var listElm = Sizzle("#gpeb-settings-window-content-history-items")[0];

                /* history.txtの読み込み
                -------------------------------------------------------------------------------*/
                var url = getUrl("history.txt");

                /* 読み込み
                -------------------------------------------------------------------------------*/
                ajaxLoad(url, function () {
                    listElm.innerHTML = "<pre>"+this+"</pre>";
                });

            },


            /* 補助
            -------------------------------------------------------------------------------*/
            other: function () {

                /* アイテム取得
                -------------------------------------------------------------------------------*/
                var items = Sizzle("#gpeb-settings-window-content-other-inner > label.item > input");

                /* 関数
                -------------------------------------------------------------------------------*/
                var func = function (_event) {

                    /* データの取得
                    -------------------------------------------------------------------------------*/
                    var name = _event.target.getAttribute("name");
                    var isChecked = _event.target.checked;

                    /* モデルへデータを設定
                    -------------------------------------------------------------------------------*/
                    var object = {};
                    object[name] = isChecked ? 1 : 0;
                    that.settings.set("other", object);

                    /* 保存
                    -------------------------------------------------------------------------------*/
                    that.settings.save();

                    /* テスト
                    -------------------------------------------------------------------------------*/
                    // console.log("event", _event.target, _event.target.checked);


                };

                /* 現在の状態を反映とイベントの登録
                -------------------------------------------------------------------------------*/
                items.forEach(function (_elm) {

                    /* 反映
                    -------------------------------------------------------------------------------*/
                    var name = _elm.getAttribute("name");
                    
                    /* 当て込み
                    -------------------------------------------------------------------------------*/
                    var isChecked = that.settings.get("other")[name];
                    if (isChecked) {
                        _elm.setAttribute("checked", "checked");
                    }
                    else {
                        _elm.removeAttribute("checked");
                    }


                    /* イベント登録
                    -------------------------------------------------------------------------------*/
                    _elm.addEventListener ("click", func, false);
                });
            },


            /* カスタムボタン
            -------------------------------------------------------------------------------*/
            custombtn: function () {

                /* カスタムボタンリスト
                -------------------------------------------------------------------------------*/
                var listElm = Sizzle("#gpeb-settings-window-content-custombtn-items")[0];

                /* テンプレート
                -------------------------------------------------------------------------------*/
                var itemTemp = domParseFromString([
                    '<div class="item">',
                        '<div class="name"></div>',
                        '<div class="desc"></div>',
                        '<div class="link"><a name="remove" href="javascript:;">削除</a></div>',
                        '<div class="link"><a name="edit" href="javascript:;">編集</a></div>',
                        '<div class="link down"><a name="down" href="javascript:;">▼</a></div>',
                        '<div class="link"><a name="up" href="javascript:;">▲</a></div>',
                        '<div class="clear"></div>',
                    '</div>'
                ].join(""));

                /* アイテムテンプレートの変数
                -------------------------------------------------------------------------------*/
                var itemTempName = Sizzle("div.name", itemTemp)[0];
                var itemTempDesc = Sizzle("div.desc", itemTemp)[0];

                /* カスタムボタンを読み込む
                -------------------------------------------------------------------------------*/
                var customButtonData = new Models("gpebCustomButtonData");
                var customButtons = that.settings.get("custombtn").custombtn || [];

                /* リスト描画
                -------------------------------------------------------------------------------*/
                for (var i = 0; i < customButtons.length; i++) {

                    var name = customButtons[i][0];
                    var bodyId = customButtons[i][1];

                    /* 描画開始
                    -------------------------------------------------------------------------------*/
                    itemTempName.innerText = name.substr(0, 10);
                    if (itemTempName.innerText.length >= 10) {
                        itemTempName.innerText += "...";
                    }
                    itemTempDesc.innerText = customButtonData.get(bodyId).body.replace(/\n/g, " ").substr(0, 32);
                    if (itemTempDesc.innerText.length >= 32) {
                        itemTempDesc.innerText += "...";
                    }
                    itemTempName.setAttribute("data-body-id", String(bodyId));

                    /* クローン生成
                    -------------------------------------------------------------------------------*/
                    var item = itemTemp.cloneNode(true);

                    /* クローンをリストに追加
                    -------------------------------------------------------------------------------*/
                    listElm.appendChild(item);

                };

                /* 開放
                -------------------------------------------------------------------------------*/
                delete customButtons;
                delete customButtonData;

                

                /* ボタンの新規作成ボタンのイベント登録
                -------------------------------------------------------------------------------*/
                Sizzle("#gpeb-settings-custombtn-new-button")[0].addEventListener ("click", function () {
                    
                    /* ボタンの新規作成ウィンドウを開く
                    -------------------------------------------------------------------------------*/
                    var bw = new ButtonWindow();
                    bw.open(null, function () {

                        /* ボタンカウントの取得
                        -------------------------------------------------------------------------------*/
                        var bodyId = that.settings.get("custombtn").count+1;

                        /* カスタムボタンの登録
                        -------------------------------------------------------------------------------*/
                        var customButtons = that.settings.get("custombtn").custombtn || [];
                        customButtons.unshift([
                            this.name,
                            bodyId
                        ]);
                        that.settings.set("custombtn", {
                            custombtn: customButtons,
                            count: bodyId
                        });
                        that.settings.save();

                        /* 投稿内容が格納されるモデルに投稿内容を登録 (メモリ節約のために登録しおわったら破棄されます)
                        -------------------------------------------------------------------------------*/
                        var customButtonData = new Models("gpebCustomButtonData");
                        customButtonData.set(bodyId, {
                            body: this.body
                        });
                        customButtonData.save();
                        delete customButtonData;

                        /* ボタンが作成された
                        -------------------------------------------------------------------------------*/
                        itemTempName.innerText = this.name.substr(0, 10);
                        if (itemTempName.innerText.length >= 10) {
                            itemTempName.innerText += "...";
                        }
                        itemTempDesc.innerText = this.body.replace(/\n/g, " ").substr(0, 32);
                        if (itemTempDesc.innerText.length >= 32) {
                            itemTempDesc.innerText += "...";
                        }
                        itemTempName.setAttribute("data-body-id", String(bodyId));

                        /* クローン生成
                        -------------------------------------------------------------------------------*/
                        var item = itemTemp.cloneNode(true);

                        /* クローンをリストに追加
                        -------------------------------------------------------------------------------*/
                        listElm.insertBefore(item, listElm.firstChild);
                        
                    });
                }, false);

                /* リスト全体のイベントを処理
                -------------------------------------------------------------------------------*/
                listElm.addEventListener ("click", function (_event) {

                    /* リンクタグ
                    -------------------------------------------------------------------------------*/
                    if (_event.target.tagName == "A") {

                        /* アイテムの取得
                        -------------------------------------------------------------------------------*/
                        var item = _event.target.parentNode.parentNode;

                        /* bodyIdの取得
                        -------------------------------------------------------------------------------*/
                        var bodyId = Number(Sizzle("div.name", item)[0].getAttribute("data-body-id"));

                        /* モードの取得
                        -------------------------------------------------------------------------------*/
                        var mode = _event.target.getAttribute("name");

                        switch(mode) {

                            /* アイテムの削除
                            -------------------------------------------------------------------------------*/
                            case "remove":
                                if (confirm("削除しますか？")) {

                                    /* 本文データの削除
                                    -------------------------------------------------------------------------------*/
                                    var customButtonData = new Models("gpebCustomButtonData");
                                    customButtonData.remove(bodyId);
                                    customButtonData.save();
                                    delete customButtonData;

                                    /* リストデータの削除
                                    -------------------------------------------------------------------------------*/
                                    var customButtons = that.settings.get("custombtn").custombtn || [];
                                    var newCustomButtons = [];
                                    customButtons.forEach(function (i) {
                                        if (i[1] != bodyId) {
                                            // console.log("i", i);
                                            newCustomButtons.push(i);
                                        }
                                    });
                                    that.settings.set("custombtn", {
                                        custombtn: newCustomButtons
                                    });
                                    that.settings.save();
                                    delete customButtons;

                                    /* 要素の削除
                                    -------------------------------------------------------------------------------*/
                                    item.parentNode.removeChild(item);
                                }
                                break;

                            /* アイテムの編集
                            -------------------------------------------------------------------------------*/
                            case "edit":

                                /* データの取得
                                -------------------------------------------------------------------------------*/
                                var customButtons = that.settings.get("custombtn").custombtn || [];
                                var name = "";
                                for (var i = 0; i < customButtons.length; i++) {
                                    if (customButtons[i][1] == bodyId) {
                                        name = customButtons[i][0];
                                        break;
                                    }
                                };
                                var customButtonData = new Models("gpebCustomButtonData");
                                var body = customButtonData.get(bodyId).body || "";

                                /* 編集ウィンドウを開く
                                -------------------------------------------------------------------------------*/
                                var bw = new ButtonWindow();
                                bw.open({name: name, body: body, bodyId: bodyId}, function () {

                                    var bodyId = this.bodyId;
                                    var name = this.name;
                                    var body = this.body;

                                    /* 本文データの更新
                                    -------------------------------------------------------------------------------*/
                                    var customButtonData = new Models("gpebCustomButtonData");
                                    customButtonData.set(bodyId, {
                                        body: body
                                    });
                                    customButtonData.save();
                                    delete customButtonData;

                                    /* リストデータの更新
                                    -------------------------------------------------------------------------------*/
                                    var customButtons = that.settings.get("custombtn").custombtn || [];
                                    for (var i = 0; i < customButtons.length; i++) {
                                        if (customButtons[i][1] == bodyId) {
                                            customButtons[i][0] = name;
                                            break;
                                        }
                                    };
                                    that.settings.set("custombtn", customButtons);
                                    that.settings.save();


                                    /* 要素の表示更新
                                    -------------------------------------------------------------------------------*/
                                    var itemName = Sizzle("div.name", item)[0];
                                    var itemBody = Sizzle("div.desc", item)[0];

                                    itemName.innerText = name.substr(0, 10);
                                    if (itemName.innerText.length >= 10) {
                                        itemName.innerText += "...";
                                    }
                                    itemBody.innerText = body.replace(/\n/g, " ").substr(0, 32);
                                    if (itemBody.innerText.length >= 32) {
                                        itemBody.innerText += "...";
                                    }
                                });
                                break;

                            /* 上へ移動
                            -------------------------------------------------------------------------------*/
                            case "up":

                                /* これ以上上へはいけないようにする
                                -------------------------------------------------------------------------------*/
                                if (!item.previousSibling) {
                                    return;
                                }

                                /* データの書き換え
                                -------------------------------------------------------------------------------*/
                                var customButtons = that.settings.get("custombtn").custombtn || [];
                                var newCustomButtons = [];
                                var index = 0;
                                var targetCustomButton = undefined;
                                for (var i = 0; i < customButtons.length; i++) {
                                    if (customButtons[i][1] !== bodyId) {
                                        newCustomButtons.push(customButtons[i]);
                                    }
                                    else {
                                        targetCustomButton = customButtons[i];
                                        index = i;
                                    }
                                }
                                newCustomButtons.splice(index-1, 0, targetCustomButton);
                                that.settings.set("custombtn", {
                                    custombtn: newCustomButtons
                                });
                                that.settings.save();

                                /* 上へ移動
                                -------------------------------------------------------------------------------*/
                                item.parentNode.insertBefore(item, item.previousSibling);
                                break;

                            case "down":

                                /* これ以上下へはいけないようにする
                                -------------------------------------------------------------------------------*/
                                if (!item.nextSibling) {
                                    return;
                                }

                                /* データの書き換え
                                -------------------------------------------------------------------------------*/
                                var customButtons = that.settings.get("custombtn").custombtn || [];
                                var newCustomButtons = [];
                                var index = 0;
                                var targetCustomButton = undefined;
                                for (var i = 0; i < customButtons.length; i++) {
                                    if (customButtons[i][1] !== bodyId) {
                                        newCustomButtons.push(customButtons[i]);
                                    }
                                    else {
                                        targetCustomButton = customButtons[i];
                                        index = i;
                                    }
                                }
                                newCustomButtons.splice(index+1, 0, targetCustomButton);
                                that.settings.set("custombtn", {
                                    custombtn: newCustomButtons
                                });
                                that.settings.save();

                                /* 上へ移動
                                -------------------------------------------------------------------------------*/
                                item.parentNode.insertBefore(item, item.nextSibling.nextSibling);
                                break;

                        }
                    }
                }, true);


            }
        };
    },

    /* 設定画面を開く
    -------------------------------------------------------------------------------*/
    open: function () {

        /* 背景作成
        -------------------------------------------------------------------------------*/
        this.back = document.createElement("div");
        this.back.setAttribute("id", "gpeb-back");
        document.body.appendChild(this.back);

        /* 画面構成
        -------------------------------------------------------------------------------*/
        this.elm.style.display = "block";
        this.content.innerHTML = this.menuContents.list;
        var width = document.body.clientWidth;
        var height = window.innerHeight;
        this.elm.style.left = ((width-640)/2)+"px";
        this.elm.style.top = ((height-480)/2)+"px";

        /* 
        -------------------------------------------------------------------------------*/
        this.menuFunctions["list"].call(this.menuContents.list);
    },

    /* 閉じる
    -------------------------------------------------------------------------------*/
    close: function () {

        this.back.parentNode.removeChild(this.back);
        this.elm.parentNode.removeChild(this.elm);

    }
}