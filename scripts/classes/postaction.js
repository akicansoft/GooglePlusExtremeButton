/* ポストアクション
-------------------------------------------------------------------------------*/
function PostAction(_elmOrId) {
    this.init(_elmOrId);
}

PostAction.prototype = {

    /* 初期化
    -------------------------------------------------------------------------------*/
    init: function (_elmOrId) {
        if (typeof(_elmOrId) == "string") {
            var elms = Sizzle("#"+_elmOrId);
            if (elms.length) {
                this.elm = elms[0];
            }
            else {
                this.elm = undefined;
            }
        }
        else {
            this.elm = _elmOrId;
        }

        /* ポストデータを取り扱うためのオブジェクトを挿入
        -------------------------------------------------------------------------------*/
        this.gpd = new GetPostData(this.elm);
        Sizzle("span[guidedhelpid='stream_options_link']", this.elm);

    },


    /* ミュートにする
    -------------------------------------------------------------------------------*/
    mute: function () {
        logger.add("ミュートにしています");
        var that = this;
        var optionContexts = Sizzle("span[data-update-id]:eq(0)", this.elm);
        console.log("optionContexts", optionContexts);
        if (optionContexts.length) {
            click(optionContexts[0], function () {
                var items = Sizzle("div[aria-haspopup]>div");
                items.forEach(function (_elm) {
                    var text = _elm.innerText;
                    if (/ミュート/.test(text) || /mute/.test(text)) {
                        click(_elm);
                    }
                });
            }, this.elm);
        }
        
    }




};


