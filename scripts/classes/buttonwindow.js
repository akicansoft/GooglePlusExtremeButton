/* ボタンカスタマイズ(新規作成ウィンドウ)
-------------------------------------------------------------------------------*/
function ButtonWindow (_opt) {
    this.init(_opt);
}

ButtonWindow.prototype = {
    init: function (_opt) {


        /* that
        -------------------------------------------------------------------------------*/
        var that = this;

        this.elm = document.createElement("div");
        this.elm.setAttribute("id", "gpeb-settings-button-window");

        /* 画面構成
        -------------------------------------------------------------------------------*/
        this.elm.innerHTML = [
            '<div class="title">カスタムボタン</div>',
            '<div id="gpeb-settings-button-window-content">',
                '<div class="item">',
                    '<div class="text">表示される名前(リンクとしてボタン一覧に表示されます)</div>',
                    '<div class="input"><input id="gpeb-settings-button-window-content-name" type="text" name="name" value="" /></div>',
                '</div>',
                '<div class="item">',
                    '<div class="text">表示される名前(リンクとしてボタン一覧に表示されます)</div>',
                    '<div class="input"><textarea id="gpeb-settings-button-window-content-body" name="body"></textarea></div>',
                '</div>',
                '<div class="buttons">',
                    '<input id="gpeb-settings-button-window-content-save" type="button" value="登録" />',
                    '<input id="gpeb-settings-button-window-content-cancel" type="button" value="キャンセル" />',
                '</div>',
            '</div>',
            '<div id="gpeb-settings-button-window-close-button">×</div>'
        ].join("");
        document.body.appendChild(this.elm);
        this.menu = Sizzle("#gpeb-settings-button-window-menu")[0];
        this.content = Sizzle("#gpeb-settings-button-window-content")[0];

        /* 閉じるボタンイベント
        -------------------------------------------------------------------------------*/
        Sizzle("#gpeb-settings-button-window-close-button")[0].addEventListener ("click", function () {
            that.close();
        }, false);


    },

    /* ボタンカスタマイズ画面を開く
    -------------------------------------------------------------------------------*/
    open: function (_obj, _callback) {

        /* 背景作成
        -------------------------------------------------------------------------------*/
        this.back = document.createElement("div");
        this.back.setAttribute("id", "gpeb-button-back");
        document.body.appendChild(this.back);

        /* 画面構成
        -------------------------------------------------------------------------------*/
        this.elm.style.display = "block";
        var width = document.body.clientWidth;
        var height = window.innerHeight;
        this.elm.style.left = ((width-512)/2)+"px";
        this.elm.style.top = ((height-387)/2)+"px";

    },

    /* 閉じる
    -------------------------------------------------------------------------------*/
    close: function () {
        this.back.parentNode.removeChild(this.back);
        this.elm.parentNode.removeChild(this.elm);
    }
}