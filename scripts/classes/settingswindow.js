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
                    '<div class="ver">Ver. 3.0.0</div>',
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

        /* 各種ページのメニュー
        -------------------------------------------------------------------------------*/
        this.menuItems = [
            ["表示するボタンの選択", "list", "active"],
            ["カスタムボタン", "custombtn", ""],
            ["スタイル", "style", ""],
            ["補助機能", "other", ""],
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
            var mode = getData(_event.target, "content");
            if (mode) {
                that.content.innerHTML = that.menuContent[mode] || "";
                Sizzle("div.item", this.menu).forEach(function (_elm) {
                    _elm.setAttribute("class", "gpeb item");
                });
                _event.target.parentNode.setAttribute("class", "gpeb item active");
            }
        }, false);


        /* 閉じるボタンイベント
        -------------------------------------------------------------------------------*/
        Sizzle("#gpeb-settings-window-close-button")[0].addEventListener ("click", function () {
            that.close();
        }, false);


        /* 各種ページのHTMLを格納するオブジェクト
        -------------------------------------------------------------------------------*/
        this.menuContent = {

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
                    '</div>',
                '</div>'
            ].join("")
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
        this.content.innerHTML = this.menuContent.list;
        var width = document.body.clientWidth;
        var height = window.innerHeight;
        this.elm.style.left = ((width-640)/2)+"px";
        this.elm.style.top = ((height-480)/2)+"px";
    },

    /* 閉じる
    -------------------------------------------------------------------------------*/
    close: function () {

        this.back.parentNode.removeChild(this.back);
        this.elm.parentNode.removeChild(this.elm);

    }
}