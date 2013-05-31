function Buttons (_opt) {

    this.buttonTemplate = _opt.buttonTemplate;
    this.buttonInnerTemplate = _opt.buttonInnerTemplate;
    this.init();
}

Buttons.prototype = {

    /* 初期化
    -------------------------------------------------------------------------------*/
    init: function () {

        this.buttons = [];
        this.events = {};

    },

    /* イベントの追加
    -------------------------------------------------------------------------------*/
    addEvent: function (_name, _function) {
        this.events[_name] = _functions;
    },

    /* ボタンの追加
    -------------------------------------------------------------------------------*/
    add: function ( _opt ) {


        /* 要素をコピー
        -------------------------------------------------------------------------------*/
        var clone = this.buttonTemplate.cloneNode();
        clone.innerHTML = this.buttonInnerTemplate;

        /* コピーした要素にイベントIDを登録
        -------------------------------------------------------------------------------*/
        if (_opt.eventId) {
            clone.setAttribute("data-gpeb-event", _opt.eventId);
            Sizzle("*", clone).forEach(function (_elm) {
                _elm.setAttribute("data-gpeb-event", _opt.eventId);
            });
        }

        /* 生成した要素を保持しておく
        -------------------------------------------------------------------------------*/
        this.buttons.push({
            name: _opt.name || "",
            desc: _opt.desc || "",
            img: _opt.img || "",
            eventId: _opt.eventId || "",
            item: clone
        });

    },

    /* ボタンの削除
    -------------------------------------------------------------------------------*/
    remove: function () {

    },

    /* ボタンの編集
    -------------------------------------------------------------------------------*/
    edit: function () {

    },

    /* 指定した要素に登録されたボタンの追加
    -------------------------------------------------------------------------------*/
    appendAllButton: function (_post, _plusOneArea) {

        /* すでに追加済みの場合無視
        -------------------------------------------------------------------------------*/
        if (_post.getAttribute("data-gpeb-added") == "1") {
            return false;
        }

        /* ボタン追加済みフラグセット
        -------------------------------------------------------------------------------*/
        _post.setAttribute("data-gpeb-added", "1");


        /* ボタンの数だけループ
        -------------------------------------------------------------------------------*/        
        for (var i = 0; i < this.buttons.length; i++) {

            /* 要素をコピーして挿入
            -------------------------------------------------------------------------------*/
            var clone = this.buttons[i].item.cloneNode(true);
            setData(clone, "parent-id", _post.id);
            _plusOneArea.insertBefore( clone, Sizzle("div[role='button']:eq(2)", _plusOneArea)[0]);
        };

    }

    /* 
    -------------------------------------------------------------------------------*/

};