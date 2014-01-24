/* 自動投稿
-------------------------------------------------------------------------------*/
function AutoPost(_post) {
    this.init(_post);
}

AutoPost.prototype = {

    init: function (_post) {
        if (typeof(_post) == "string") {
            this.elm = $("#"+_post)[0];
        }
        else {
            this.elm = _post;
        }
    },


    /* コメントを追加要素を特定
    -------------------------------------------------------------------------------*/
    getCommentAddElement: function () {
        return $("div[role='button'][tabindex='0']:last", this.elm)[0];
    },

    /* エディター要素を取得
    -------------------------------------------------------------------------------*/
    getEditorElement: function () {
        return $("div[id*='editor'] div[role='textbox']", this.elm)[0];
    },

    /* コメントを投稿ボタンを取得
    -------------------------------------------------------------------------------*/
    getCommentPostElement: function () {
        return $("div[id*='post']", this.elm)[0];
    },

    /* キーイベント送信
    -------------------------------------------------------------------------------*/
    sendKeyEvent: function (_elm, _text) {

        /* テキスト入力を行う
        -------------------------------------------------------------------------------*/
        if (_text) {
            var event = document.createEvent("TextEvent");
            event.initTextEvent('textInput', true, true, null, (function() {
                return _text;
            })());
            _elm.dispatchEvent(event);
        }

        /* 入力エリアの有効化
        -------------------------------------------------------------------------------*/
        if (_elm) {
            var event = document.createEvent("KeyboardEvent");
            event.initEvent("keypress", true, true);
            event.keyCode = 27;
            _elm.dispatchEvent(event);    
        }
        

    },

    /* 自動投稿
    -------------------------------------------------------------------------------*/
    autoPost: function (_text) {

        /* コメントを追加ボタンをクリック
        -------------------------------------------------------------------------------*/
        click(this.getCommentAddElement(), function () {
            var editor = this.getEditorElement();
            this.sendKeyEvent(editor, _text);
            var commentPostElement = this.getCommentPostElement();
            click(commentPostElement);
        }, this);

    },

    /* 投稿ボタンを押す
    -------------------------------------------------------------------------------*/
    post: function () {
        var editor = this.getEditorElement();
        this.sendKeyEvent(editor);
        var commentPostElement = this.getCommentPostElement();
        click(commentPostElement);
    }



};
