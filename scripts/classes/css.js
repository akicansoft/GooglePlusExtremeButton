/* CSS書き換え
-------------------------------------------------------------------------------*/
function css (_id, _css) {
    var element = Sizzle("#"+_id);
    var cssElm;
    if (element.length == 0) {
        cssElm = document.createElement("style");
        cssElm.setAttribute("id", _id);
    }
    else {

        element.forEach(function(_elm){
            cssElm = _elm;
        });
    }
    if (_css){
        cssElm.innerHTML = "\n"+_css+"\n";
    }
    document.body.appendChild(cssElm);

}