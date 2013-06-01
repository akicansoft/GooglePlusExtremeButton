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
        this.elm.innerHTML = '<div id="gpeb-context-menu-arrow"></div><div id="gpeb-context-menu-content"><div id="gpeb-context-menu-clear"></div></div>';
        this.content = Sizzle("#gpeb-context-menu-content", this.elm)[0];
        this.clear = Sizzle("#gpeb-context-menu-clear", this.elm)[0];
        document.body.appendChild(this.elm);
    },

    /* hide
    -------------------------------------------------------------------------------*/
    hide: function () {

        this.current = undefined;
        this.elm.style.left = "-9999px";
        this.elm.style.top = "-9999px";
    },

    /* すでに開かれているか調べる
    -------------------------------------------------------------------------------*/
    checkOpen: function () {
        var isOpen = this.elm.style.left == "auto";
        return isOpen;
    },

    /* addItem
    -------------------------------------------------------------------------------*/
    addItem: function (_obj) {

        console.log("_obj", _obj);        

        this.items.push(_obj);

        var div = document.createElement("div");
        div.setAttribute("class", "gpeb item");
        if (chrome.extension && "getURL" in chrome.extension) {
            var url = chrome.extension.getURL(_obj.img);
        }
        else {
            var url = "about:blank";
        }
        div.innerHTML = '<div class="icon"><img src="'+url+'" /></div><div class="name"><a href="javascript:;" data-gpeb-event="'+_obj.event+'">'+_obj.name+'</a></div><div class="clearboth"></div>';
        this.content.appendChild(div);
        this.clear.parentNode.appendChild(this.clear);


    },

    /* popup
    -------------------------------------------------------------------------------*/
    popup: function (_elm) {


        /* カレントポスト
        -------------------------------------------------------------------------------*/
        this.current = _elm;

        /* 位置
        -------------------------------------------------------------------------------*/
        var x = 0;
        var y = _elm.offsetHeight;

        /* 挿入
        -------------------------------------------------------------------------------*/
        var plusOneArea = _elm.parentNode;
        plusOneArea.insertBefore( this.elm, Sizzle("div[role='button']:eq(2)", plusOneArea)[0]);

        /* 移動
        -------------------------------------------------------------------------------*/
        this.elm.style.left = "auto";
        this.elm.style.top = "auto";

        console.log("this.elm", this.elm);



    }

};