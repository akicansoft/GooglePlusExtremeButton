/* グローバル変数
-------------------------------------------------------------------------------*/
var APPNAME = "Google+ Extreme Button";
var VERSION = "3.0";

/* グローバルオブジェクト
-------------------------------------------------------------------------------*/
var cssTheme;
var button;
var posts;
var ndLeft;
var ndRight;
var ndBottom;

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