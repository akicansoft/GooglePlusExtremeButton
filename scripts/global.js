/* グローバル変数
-------------------------------------------------------------------------------*/
var APPNAME = "Google+ Extreme Button";
var VERSION = "3.0";

/* グローバルオブジェクト
-------------------------------------------------------------------------------*/
var cssTheme;
var button;
var posts;
var nd;
var ndLeft;
var ndRight;
var ndBottom;
var menu;
var logger;

/* HTMLパーサ
-------------------------------------------------------------------------------*/
function domParseFromString(_string) {
    var div = document.createElement("div");
    div.innerHTML = _string;
    div = div.firstChild;
    return div;
}


/* データセット
-------------------------------------------------------------------------------*/
function setData(_elm, _key, _value, _isR) {
    _elm.setAttribute("data-"+_key, _value);

    if (_isR === undefined || _isR) {
        var elms = Sizzle("*", _elm);
        elms.forEach(function (_elm) {
            _elm.setAttribute("data-"+_key, _value);
        });
    }
}

/* データ取得
-------------------------------------------------------------------------------*/
function getData(_elm, _key) {
    return _elm.getAttribute("data-"+_key);
}

/* クリック
-------------------------------------------------------------------------------*/
function click(_elm, _callBack, _this) {

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

    setTimeout(function(){
        if (typeof(_callBack) == "function") {
            _callBack.call(_this||window, _this||window);
        }
    }, 100);

}