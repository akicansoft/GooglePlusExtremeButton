function Selector() {
    this.init();
}

Selector.prototype = {

    /* 初期化
    -------------------------------------------------------------------------------*/
    init: function () {
        this.selectors = {}; 
    },

    /* 要素の取得
    -------------------------------------------------------------------------------*/
    get: function (_name) {

        var select = this.selectors[_name];
        if (select) {
            // if (select.elements.length) {
            //     var isFound = true;
            //     for (var i = 0; i < select.elements.length; i++) {
            //         if (!select.elements[i]) {
            //             isFound = false;
            //         }
            //     }
            //     if (isFound) {
            //         return select.elements;    
            //     }
            //     else {
            //         select.elements = Sizzle(select.target);
            //         return select.elements;
            //     }
            // }
            // else {
            // select.elements = Sizzle(select.target);
            return Sizzle(select.target);
            // }
        }
        else {
            return Sizzle();
        }

    },

    /* 要素の追加
    -------------------------------------------------------------------------------*/
    add: function (_name, _target, _comment) {

        var elements = Sizzle(_target);

        this.selectors[_name] = {
            target: _target,
            elements: elements,
            length: elements.length,
            comment: _comment || ""
        };
    },

    /* 要素のクリック
    -------------------------------------------------------------------------------*/
    click: function (_name, _opt) {

        var elements = this.get(_name);
        elements.forEach(function (_elm) {

            try {
                var event = document.createEvent("MouseEvents");
                event.initEvent("mousedown", true, true);
                _elm.dispatchEvent(event);
            }
            catch (_error) {
            }

            try {
                var event = document.createEvent("MouseEvents");
                event.initEvent("click", true, true);
                _elm.dispatchEvent(event);
            }
            catch (_error) {
            }

            try {
                var event = document.createEvent("MouseEvents");
                event.initEvent("mouseup", true, true);
                _elm.dispatchEvent(event);
            }
            catch (_error) {
            }

        });
    },

    /* 要素取得テスト
    -------------------------------------------------------------------------------*/
    test: function () {

        for (var i in this.selectors) {
            var elements = Sizzle(this.selectors[i].target);
            if (elements.length) {
                console.log("%c○", "color:blue;", i, this.selectors[i].target, this.selectors[i].comment);
            }
            else {
                console.log("%c×", "color:red;", i, this.selectors[i].target, this.selectors[i].comment);
            }
        }
    },

    /* 要素のフォーカス
    -------------------------------------------------------------------------------*/
    focus: function (_name) {
        var elements = this.get(_name);
        elements.forEach(function (_elm) {
            _elm.focus();
        });
    },


    /* 指定した要素の名前を取得
    -------------------------------------------------------------------------------*/
    getName: function (_elm) {
        for (var i in this.selectors) {
            var elements = Sizzle(this.selectors[i].target);
            if (elements.length) {
                for (var ii = 0; ii < elements.length; ii++) {
                    if (elements[ii] === _elm) {
                        return i;
                    }
                }
            }
        }
        return false;
    }
};