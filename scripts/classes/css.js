/* CSS書き換え
-------------------------------------------------------------------------------*/
function css (_id, _css) {
    var element = $("#"+_id);
    var cssElm;
    if (element.length == 0) {
        cssElm = document.createElement("style");
        cssElm.setAttribute("id", _id);
    }
    else {

        element.each(function(_elm){
            cssElm = _elm;
        });
    }
    cssElm.innerHTML = "\n"+_css+"\n";
    document.body.appendChild(cssElm);

}