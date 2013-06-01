/* 新しいDOMを監視する
-------------------------------------------------------------------------------*/
function NewDom (_elm) {
    this.init(_elm);
}

NewDom.prototype = {

    /* 初期化
    -------------------------------------------------------------------------------*/
    init: function (_elm) {
        this.elm = _elm;
    },

    /* 監視スタート
    -------------------------------------------------------------------------------*/
    watch: function (_callBack, _interval) {

        /* コールバック関数が定義されていない場合エラー
        -------------------------------------------------------------------------------*/
        if (typeof(_callBack) != "function") {
            throw new Error("コールバック関数ではありません");
        }

        /* 監視開始
        -------------------------------------------------------------------------------*/
        var that = this;

        /* DOMが更新されたら実行
        -------------------------------------------------------------------------------*/
        document.body.addEventListener ("DOMNodeInserted", function () {

            /* 比較
            -------------------------------------------------------------------------------*/
            var children = Sizzle("div[id^='update-']:not([data-gpeb-added='1'])");
            if (children.length) {
                _callBack.call(children, children);
            }
        }, false);

        /* 一定間隔で実行
        -------------------------------------------------------------------------------*/
        this.timer = setInterval(function(){
            var children = Sizzle("div[id^='update-']:not([data-gpeb-added='1'])");
            if (children.length) {
                _callBack.call(children, children);
            }

        }, 10000);
    }


};
