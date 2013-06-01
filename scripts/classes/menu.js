/* メニュー
-------------------------------------------------------------------------------*/

function Menu (_opt) {
    this.init(_opt || {});
}

Menu.prototype = {

    /* 初期化
    -------------------------------------------------------------------------------*/
    init: function (_opt) {

        this.items = [];

        console.log("_opt", _opt);

        this.elm = document.createElement("div");
        if (typeof(_opt.className) == "string") {
            this.elm.class == _opt.className;
        }

        if (typeof(_opt.idName) == "string") {
            this.elm.setAttribute("id", _opt.idName);
        }

        document.body.appendChild(this.elm);

    },

    /* hide
    -------------------------------------------------------------------------------*/
    hide: function () {

        this.current = undefined;
        this.elm.style.left = "-9999px";
        this.elm.style.top = "-9999px";


    },

    /* addItem
    -------------------------------------------------------------------------------*/
    addItem: function (_obj) {

        this.items.push(_obj);

        var div = document.createElement("div");
        div.setAttribute("class", "item");
        if (chrome.extension && "getURL" in chrome.extension) {
            var url = chrome.extension.getURL(_obj.img);
        }
        else {
            var url = "about:blank";
        }
        div.innerHTML = '<div class="icon"><img src="'+url+'" /></div><div class="name"><a href="javascript:;" data-gpeb-event="'+_obj.event+'">'+_obj.name+'</a></div>';
        this.elm.appendChild(div);

    },

    /* popup
    -------------------------------------------------------------------------------*/
    popup: function (_elm) {

        /* カレントポスト
        -------------------------------------------------------------------------------*/
        this.current = _elm;

        /* 位置
        -------------------------------------------------------------------------------*/
        var x = _elm.offsetLeft;
        var y = _elm.offsetTop+_elm.offsetHeight;

        /* 移動
        -------------------------------------------------------------------------------*/
        this.elm.style.left = x+"px";
        this.elm.style.top = y+"px";

        console.log("this.elm", this.elm);



    }

};