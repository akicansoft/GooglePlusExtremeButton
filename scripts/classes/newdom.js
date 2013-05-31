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
        this.oldNodes = this.elm.children;
        this.len = this.oldNodes.length;
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
        this.timer = setInterval(function(){

            /* 比較
            -------------------------------------------------------------------------------*/
            var children = that.elm.children;
            if (that.len != children.length) {

                /* 新しい要素を取得
                -------------------------------------------------------------------------------*/
                var hitNodes = [];
                for (var i = 0; i < children.length; i++) {
                    var isHit = false;
                    for (var ii = 0; ii < that.oldNodes.length; ii++) {
                        if (that.oldNodes[ii] === children[i]) {
                            isHit = true;
                        }
                    }
                    if (isHit) {
                        hitNodes.push(children[i]);
                    }
                }

                /* 返す
                -------------------------------------------------------------------------------*/
                _callBack.call(hitNodes, hitNodes);


            }

            /* 差分取得
            -------------------------------------------------------------------------------*/
            that.oldNodes = that.elm.children;
            that.len = that.oldNodes.length;

        }, _interval || 1000);

    }


};
