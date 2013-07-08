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

/* テンプレート
-------------------------------------------------------------------------------*/
function template(_text, _obj) {
    var text = _text;
    var oldText = text;
    for (var i in _obj) {
        while (1) {
            text = text.replace("{{"+i+"}}", _obj[i]);
            if (text == oldText) {
                break;
            }
            oldText = text;
        }
    }
    return text;
}

/* 指定した要素をさかのぼりポスト要素を取得
-------------------------------------------------------------------------------*/
function getPostElement (_elm) {

    var elm = _elm;
    while(1) {

        if (elm.id.indexOf("update-") == 0) {
            break;
        }
        else {
            elm = elm.parentNode;
            if (!elm) {
                break;
            }
        }
    }
    return elm;
}

/* ファイルパスの取得
-------------------------------------------------------------------------------*/
function getUrl (_path) {
    return chrome.extension.getURL(_path);
}

/* ajaxload
-------------------------------------------------------------------------------*/
function ajaxLoad(_path, _func) {

    var xhr = new XMLHttpRequest();
    var callback = _func;
    var func = function () {
        if ((xhr.readyState == 4) && (xhr.status == 200)){
            callback.call(xhr.responseText, xhr.responseText);
        }
    };
    
    xhr.onreadystatechange  = func;
    xhr.open("GET", _path, false);
    xhr.send(null);

}


/*! Sizzle v1.9.4-pre | (c) 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=sizzle.min.map
*/(function(e,t){function n(e,t,n,r){var o,i,u,l,a,c,s,f,p,d;if((t?t.ownerDocument||t:U)!==H&&q(t),t=t||H,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(O&&!r){if(o=Ct.exec(e))if(u=o[1]){if(9===l){if(i=t.getElementById(u),!i||!i.parentNode)return n;if(i.id===u)return n.push(i),n}else if(t.ownerDocument&&(i=t.ownerDocument.getElementById(u))&&j(t,i)&&i.id===u)return n.push(i),n}else{if(o[2])return ot.apply(n,t.getElementsByTagName(e)),n;if((u=o[3])&&S.getElementsByClassName&&t.getElementsByClassName)return ot.apply(n,t.getElementsByClassName(u)),n}if(S.qsa&&(!k||!k.test(e))){if(f=s=G,p=t,d=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){for(c=g(e),(s=t.getAttribute("id"))?f=s.replace(Tt,"\\$&"):t.setAttribute("id",f),f="[id='"+f+"'] ",a=c.length;a--;)c[a]=f+m(c[a]);p=mt.test(e)&&t.parentNode||t,d=c.join(",")}if(d)try{return ot.apply(n,p.querySelectorAll(d)),n}catch(h){}finally{s||t.removeAttribute("id")}}}return w(e.replace(dt,"$1"),t,n,r)}function r(e){return xt.test(e+"")}function o(){function e(n,r){return t.push(n+=" ")>L.cacheLength&&delete e[t.shift()],e[n]=r}var t=[];return e}function i(e){return e[G]=!0,e}function u(e){var t=H.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function l(e,t,n){e=e.split("|");for(var r,o=e.length,i=n?null:t;o--;)(r=L.attrHandle[e[o]])&&r!==t||(L.attrHandle[e[o]]=i)}function a(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:e[t]===!0?t.toLowerCase():null}function c(e,t){return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}function s(e){return"input"===e.nodeName.toLowerCase()?e.defaultValue:t}function f(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||_)-(~e.sourceIndex||_);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function p(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function d(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function h(e){return i(function(t){return t=+t,i(function(n,r){for(var o,i=e([],n.length,t),u=i.length;u--;)n[o=i[u]]&&(n[o]=!(r[o]=n[o]))})})}function g(e,t){var r,o,i,u,l,a,c,s=K[e+" "];if(s)return t?0:s.slice(0);for(l=e,a=[],c=L.preFilter;l;){(!r||(o=ht.exec(l)))&&(o&&(l=l.slice(o[0].length)||l),a.push(i=[])),r=!1,(o=gt.exec(l))&&(r=o.shift(),i.push({value:r,type:o[0].replace(dt," ")}),l=l.slice(r.length));for(u in L.filter)!(o=bt[u].exec(l))||c[u]&&!(o=c[u](o))||(r=o.shift(),i.push({value:r,type:u,matches:o}),l=l.slice(r.length));if(!r)break}return t?l.length:l?n.error(e):K(e,a).slice(0)}function m(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function y(e,t,n){var r=t.dir,o=n&&"parentNode"===r,i=X++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,u){var l,a,c,s=V+" "+i;if(u){for(;t=t[r];)if((1===t.nodeType||o)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||o)if(c=t[G]||(t[G]={}),(a=c[r])&&a[0]===s){if((l=a[1])===!0||l===D)return l===!0}else if(a=c[r]=[s],a[1]=e(t,n,u)||D,a[1]===!0)return!0}}function v(e){return e.length>1?function(t,n,r){for(var o=e.length;o--;)if(!e[o](t,n,r))return!1;return!0}:e[0]}function N(e,t,n,r,o){for(var i,u=[],l=0,a=e.length,c=null!=t;a>l;l++)(i=e[l])&&(!n||n(i,r,o))&&(u.push(i),c&&t.push(l));return u}function b(e,t,n,r,o,u){return r&&!r[G]&&(r=b(r)),o&&!o[G]&&(o=b(o,u)),i(function(i,u,l,a){var c,s,f,p=[],d=[],h=u.length,g=i||E(t||"*",l.nodeType?[l]:l,[]),m=!e||!i&&t?g:N(g,p,e,l,a),y=n?o||(i?e:h||r)?[]:u:m;if(n&&n(m,y,l,a),r)for(c=N(y,d),r(c,[],l,a),s=c.length;s--;)(f=c[s])&&(y[d[s]]=!(m[d[s]]=f));if(i){if(o||e){if(o){for(c=[],s=y.length;s--;)(f=y[s])&&c.push(m[s]=f);o(null,y=[],c,a)}for(s=y.length;s--;)(f=y[s])&&(c=o?ut.call(i,f):p[s])>-1&&(i[c]=!(u[c]=f))}}else y=N(y===u?y.splice(h,y.length):y),o?o(null,u,y,a):ot.apply(u,y)})}function x(e){for(var t,n,r,o=e.length,i=L.relative[e[0].type],u=i||L.relative[" "],l=i?1:0,a=y(function(e){return e===t},u,!0),c=y(function(e){return ut.call(t,e)>-1},u,!0),s=[function(e,n,r){return!i&&(r||n!==P)||((t=n).nodeType?a(e,n,r):c(e,n,r))}];o>l;l++)if(n=L.relative[e[l].type])s=[y(v(s),n)];else{if(n=L.filter[e[l].type].apply(null,e[l].matches),n[G]){for(r=++l;o>r&&!L.relative[e[r].type];r++);return b(l>1&&v(s),l>1&&m(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(dt,"$1"),n,r>l&&x(e.slice(l,r)),o>r&&x(e=e.slice(r)),o>r&&m(e))}s.push(n)}return v(s)}function C(e,t){var r=0,o=t.length>0,u=e.length>0,l=function(i,l,a,c,s){var f,p,d,h=[],g=0,m="0",y=i&&[],v=null!=s,b=P,x=i||u&&L.find.TAG("*",s&&l.parentNode||l),C=V+=null==b?1:Math.random()||.1;for(v&&(P=l!==H&&l,D=r);null!=(f=x[m]);m++){if(u&&f){for(p=0;d=e[p++];)if(d(f,l,a)){c.push(f);break}v&&(V=C,D=++r)}o&&((f=!d&&f)&&g--,i&&y.push(f))}if(g+=m,o&&m!==g){for(p=0;d=t[p++];)d(y,h,l,a);if(i){if(g>0)for(;m--;)y[m]||h[m]||(h[m]=nt.call(c));h=N(h)}ot.apply(c,h),v&&!i&&h.length>0&&g+t.length>1&&n.uniqueSort(c)}return v&&(V=C,P=b),y};return o?i(l):l}function E(e,t,r){for(var o=0,i=t.length;i>o;o++)n(e,t[o],r);return r}function w(e,t,n,r){var o,i,u,l,a,c=g(e);if(!r&&1===c.length){if(i=c[0]=c[0].slice(0),i.length>2&&"ID"===(u=i[0]).type&&S.getById&&9===t.nodeType&&O&&L.relative[i[1].type]){if(t=(L.find.ID(u.matches[0].replace(At,St),t)||[])[0],!t)return n;e=e.slice(i.shift().value.length)}for(o=bt.needsContext.test(e)?0:i.length;o--&&(u=i[o],!L.relative[l=u.type]);)if((a=L.find[l])&&(r=a(u.matches[0].replace(At,St),mt.test(i[0].type)&&t.parentNode||t))){if(i.splice(o,1),e=r.length&&m(i),!e)return ot.apply(n,r),n;break}}return R(e,c)(r,t,!O,n,mt.test(e)),n}function T(){}var A,S,D,L,B,I,R,P,$,q,H,M,O,k,F,z,j,G="sizzle"+-new Date,U=e.document,V=0,X=0,J=o(),K=o(),Q=o(),W=!1,Y=function(){return 0},Z=typeof t,_=1<<31,et={}.hasOwnProperty,tt=[],nt=tt.pop,rt=tt.push,ot=tt.push,it=tt.slice,ut=tt.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},lt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",at="[\\x20\\t\\r\\n\\f]",ct="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",st=ct.replace("w","w#"),ft="\\["+at+"*("+ct+")"+at+"*(?:([*^$|!~]?=)"+at+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+st+")|)|)"+at+"*\\]",pt=":("+ct+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+ft.replace(3,8)+")*)|.*)\\)|)",dt=RegExp("^"+at+"+|((?:^|[^\\\\])(?:\\\\.)*)"+at+"+$","g"),ht=RegExp("^"+at+"*,"+at+"*"),gt=RegExp("^"+at+"*([>+~]|"+at+")"+at+"*"),mt=RegExp(at+"*[+~]"),yt=RegExp("="+at+"*([^\\]'\"]*)"+at+"*\\]","g"),vt=RegExp(pt),Nt=RegExp("^"+st+"$"),bt={ID:RegExp("^#("+ct+")"),CLASS:RegExp("^\\.("+ct+")"),TAG:RegExp("^("+ct.replace("w","w*")+")"),ATTR:RegExp("^"+ft),PSEUDO:RegExp("^"+pt),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+at+"*(even|odd|(([+-]|)(\\d*)n|)"+at+"*(?:([+-]|)"+at+"*(\\d+)|))"+at+"*\\)|)","i"),bool:RegExp("^(?:"+lt+")$","i"),needsContext:RegExp("^"+at+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+at+"*((?:-\\d)?\\d*)"+at+"*\\)|)(?=[^-]|$)","i")},xt=/^[^{]+\{\s*\[native \w/,Ct=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Et=/^(?:input|select|textarea|button)$/i,wt=/^h\d$/i,Tt=/'|\\/g,At=RegExp("\\\\([\\da-f]{1,6}"+at+"?|("+at+")|.)","ig"),St=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{ot.apply(tt=it.call(U.childNodes),U.childNodes),tt[U.childNodes.length].nodeType}catch(Dt){ot={apply:tt.length?function(e,t){rt.apply(e,it.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}I=n.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},S=n.support={},q=n.setDocument=function(e){var n=e?e.ownerDocument||e:U;return n!==H&&9===n.nodeType&&n.documentElement?(H=n,M=n.documentElement,O=!I(n),S.attributes=u(function(e){return e.innerHTML="<a href='#'></a>",l("type|href|height|width",c,"#"===e.firstChild.getAttribute("href")),l(lt,a,null==e.getAttribute("disabled")),e.className="i",!e.getAttribute("className")}),S.input=u(function(e){return e.innerHTML="<input>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}),l("value",s,S.attributes&&S.input),S.getElementsByTagName=u(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),S.getElementsByClassName=u(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),S.getById=u(function(e){return M.appendChild(e).id=G,!n.getElementsByName||!n.getElementsByName(G).length}),S.getById?(L.find.ID=function(e,t){if(typeof t.getElementById!==Z&&O){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},L.filter.ID=function(e){var t=e.replace(At,St);return function(e){return e.getAttribute("id")===t}}):(delete L.find.ID,L.filter.ID=function(e){var t=e.replace(At,St);return function(e){var n=typeof e.getAttributeNode!==Z&&e.getAttributeNode("id");return n&&n.value===t}}),L.find.TAG=S.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==Z?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],o=0,i=t.getElementsByTagName(e);if("*"===e){for(;n=i[o++];)1===n.nodeType&&r.push(n);return r}return i},L.find.CLASS=S.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==Z&&O?n.getElementsByClassName(e):t},F=[],k=[],(S.qsa=r(n.querySelectorAll))&&(u(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||k.push("\\["+at+"*(?:value|"+lt+")"),e.querySelectorAll(":checked").length||k.push(":checked")}),u(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&k.push("[*^$]="+at+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||k.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),k.push(",.*:")})),(S.matchesSelector=r(z=M.webkitMatchesSelector||M.mozMatchesSelector||M.oMatchesSelector||M.msMatchesSelector))&&u(function(e){S.disconnectedMatch=z.call(e,"div"),z.call(e,"[s!='']:x"),F.push("!=",pt)}),k=k.length&&RegExp(k.join("|")),F=F.length&&RegExp(F.join("|")),j=r(M.contains)||M.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},S.sortDetached=u(function(e){return 1&e.compareDocumentPosition(n.createElement("div"))}),Y=M.compareDocumentPosition?function(e,t){if(e===t)return W=!0,0;var r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return r?1&r||!S.sortDetached&&t.compareDocumentPosition(e)===r?e===n||j(U,e)?-1:t===n||j(U,t)?1:$?ut.call($,e)-ut.call($,t):0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,o=0,i=e.parentNode,u=t.parentNode,l=[e],a=[t];if(e===t)return W=!0,0;if(!i||!u)return e===n?-1:t===n?1:i?-1:u?1:$?ut.call($,e)-ut.call($,t):0;if(i===u)return f(e,t);for(r=e;r=r.parentNode;)l.unshift(r);for(r=t;r=r.parentNode;)a.unshift(r);for(;l[o]===a[o];)o++;return o?f(l[o],a[o]):l[o]===U?-1:a[o]===U?1:0},n):H},n.matches=function(e,t){return n(e,null,null,t)},n.matchesSelector=function(e,t){if((e.ownerDocument||e)!==H&&q(e),t=t.replace(yt,"='$1']"),!(!S.matchesSelector||!O||F&&F.test(t)||k&&k.test(t)))try{var r=z.call(e,t);if(r||S.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(o){}return n(t,H,null,[e]).length>0},n.contains=function(e,t){return(e.ownerDocument||e)!==H&&q(e),j(e,t)},n.attr=function(e,n){(e.ownerDocument||e)!==H&&q(e);var r=L.attrHandle[n.toLowerCase()],o=r&&et.call(L.attrHandle,n.toLowerCase())?r(e,n,!O):t;return o===t?S.attributes||!O?e.getAttribute(n):(o=e.getAttributeNode(n))&&o.specified?o.value:null:o},n.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},n.uniqueSort=function(e){var t,n=[],r=0,o=0;if(W=!S.detectDuplicates,$=!S.sortStable&&e.slice(0),e.sort(Y),W){for(;t=e[o++];)t===e[o]&&(r=n.push(o));for(;r--;)e.splice(n[r],1)}return e},B=n.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=B(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r];r++)n+=B(t);return n},L=n.selectors={cacheLength:50,createPseudo:i,match:bt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(At,St),e[3]=(e[4]||e[5]||"").replace(At,St),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||n.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&n.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return bt.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&vt.test(r)&&(n=g(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(At,St).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=J[e+" "];return t||(t=RegExp("(^|"+at+")"+e+"("+at+"|$)"))&&J(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==Z&&e.getAttribute("class")||"")})},ATTR:function(e,t,r){return function(o){var i=n.attr(o,e);return null==i?"!="===t:t?(i+="","="===t?i===r:"!="===t?i!==r:"^="===t?r&&0===i.indexOf(r):"*="===t?r&&i.indexOf(r)>-1:"$="===t?r&&i.slice(-r.length)===r:"~="===t?(" "+i+" ").indexOf(r)>-1:"|="===t?i===r||i.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,o){var i="nth"!==e.slice(0,3),u="last"!==e.slice(-4),l="of-type"===t;return 1===r&&0===o?function(e){return!!e.parentNode}:function(t,n,a){var c,s,f,p,d,h,g=i!==u?"nextSibling":"previousSibling",m=t.parentNode,y=l&&t.nodeName.toLowerCase(),v=!a&&!l;if(m){if(i){for(;g;){for(f=t;f=f[g];)if(l?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[u?m.firstChild:m.lastChild],u&&v){for(s=m[G]||(m[G]={}),c=s[e]||[],d=c[0]===V&&c[1],p=c[0]===V&&c[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){s[e]=[V,d,p];break}}else if(v&&(c=(t[G]||(t[G]={}))[e])&&c[0]===V)p=c[1];else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((l?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++p||(v&&((f[G]||(f[G]={}))[e]=[V,p]),f!==t)););return p-=o,p===r||0===p%r&&p/r>=0}}},PSEUDO:function(e,t){var r,o=L.pseudos[e]||L.setFilters[e.toLowerCase()]||n.error("unsupported pseudo: "+e);return o[G]?o(t):o.length>1?(r=[e,e,"",t],L.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,n){for(var r,i=o(e,t),u=i.length;u--;)r=ut.call(e,i[u]),e[r]=!(n[r]=i[u])}):function(e){return o(e,0,r)}):o}},pseudos:{not:i(function(e){var t=[],n=[],r=R(e.replace(dt,"$1"));return r[G]?i(function(e,t,n,o){for(var i,u=r(e,null,o,[]),l=e.length;l--;)(i=u[l])&&(e[l]=!(t[l]=i))}):function(e,o,i){return t[0]=e,r(t,null,i,n),!n.pop()}}),has:i(function(e){return function(t){return n(e,t).length>0}}),contains:i(function(e){return function(t){return(t.textContent||t.innerText||B(t)).indexOf(e)>-1}}),lang:i(function(e){return Nt.test(e||"")||n.error("unsupported lang: "+e),e=e.replace(At,St).toLowerCase(),function(t){var n;do if(n=O?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===M},focus:function(e){return e===H.activeElement&&(!H.hasFocus||H.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!L.pseudos.empty(e)},header:function(e){return wt.test(e.nodeName)},input:function(e){return Et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:h(function(){return[0]}),last:h(function(e,t){return[t-1]}),eq:h(function(e,t,n){return[0>n?n+t:n]}),even:h(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:h(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:h(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:h(function(e,t,n){for(var r=0>n?n+t:n;t>++r;)e.push(r);return e})}};for(A in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})L.pseudos[A]=p(A);for(A in{submit:!0,reset:!0})L.pseudos[A]=d(A);R=n.compile=function(e,t){var n,r=[],o=[],i=Q[e+" "];if(!i){for(t||(t=g(e)),n=t.length;n--;)i=x(t[n]),i[G]?r.push(i):o.push(i);i=Q(e,C(o,r))}return i},L.pseudos.nth=L.pseudos.eq,T.prototype=L.filters=L.pseudos,L.setFilters=new T,S.sortStable=G.split("").sort(Y).join("")===G,q(),[0,0].sort(Y),S.detectDuplicates=W,"function"==typeof define&&define.amd?define(function(){return n}):e.Sizzle=n})(window);
/* 自動投稿
-------------------------------------------------------------------------------*/
function AutoPost(_post) {
    this.init(_post);
}

AutoPost.prototype = {

    init: function (_post) {
        if (typeof(_post) == "string") {
            this.elm = Sizzle("#"+_post)[0];
        }
        else {
            this.elm = _post;
        }
    },


    /* コメントを追加要素を特定
    -------------------------------------------------------------------------------*/
    getCommentAddElement: function () {
        return Sizzle("div[role='button'][tabindex='0']:last", this.elm)[0];
    },

    /* エディター要素を取得
    -------------------------------------------------------------------------------*/
    getEditorElement: function () {
        return Sizzle("div[id*='editor'] div[role='textbox']", this.elm)[0];
    },

    /* コメントを投稿ボタンを取得
    -------------------------------------------------------------------------------*/
    getCommentPostElement: function () {
        return Sizzle("div[id*='post']", this.elm)[0];
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
        var url = chrome.extension.getURL("buttons/mini.png");
        var node = clone.firstChild.firstChild;
        node.style.backgroundImage = "url("+url+")";
        node.style.backgroundPosition = "0px 0px";
        node.style.width = "18px";
        node.style.height = "18px";


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

        /* すでに追加済みの場合無視(_post)
        -------------------------------------------------------------------------------*/
        if (getData(_post, "gpeb-added") == "1" ) {
            return false;
        }
        setData(_post, "gpeb-added", "1", false);

        /* すでに追加済みの場合無視(_plusOneArea)
        -------------------------------------------------------------------------------*/
        if (getData(_plusOneArea, "gpeb-added") == "1" ) {
            return false;
        }
        setData(_plusOneArea, "gpeb-added", "1", false);

        /* ボタンの数だけループ
        -------------------------------------------------------------------------------*/        
        for (var i = 0; i < this.buttons.length; i++) {

            /* 要素をコピーして挿入
            -------------------------------------------------------------------------------*/
            var clone = this.buttons[i].item.cloneNode(true);
            setData(clone, "gpeb-parent-id", _post.id);
            try {
                _plusOneArea.insertBefore( clone, Sizzle("div[role='button']:eq(2)", _plusOneArea)[0]);    
            }
            catch (_error) {
                console.log("ボタン挿入時に原因不明のエラーが発生", _plusOneArea);
            }
            
        };

    }

    /* 
    -------------------------------------------------------------------------------*/

};
/* ボタンカスタマイズ(新規作成ウィンドウ)
-------------------------------------------------------------------------------*/
function ButtonWindow (_opt) {
    this.init(_opt);
}

ButtonWindow.prototype = {
    init: function (_opt) {


        /* that
        -------------------------------------------------------------------------------*/
        var that = this;

        this.elm = document.createElement("div");
        this.elm.setAttribute("id", "gpeb-settings-button-window");

        /* 画面構成
        -------------------------------------------------------------------------------*/
        this.elm.innerHTML = [
            '<div id="gpeb-settings-button-window-title" class="title">カスタムボタンの新規登録</div>',
            '<div id="gpeb-settings-button-window-content">',
                '<div class="item name">',
                    '<div class="text">ボタン名 (リンクとしてボタン一覧に表示されます)</div>',
                    '<div class="input"><input id="gpeb-settings-button-window-content-name" type="text" name="name" value="" /></div>',
                '</div>',
                '<div class="item textarea">',
                    '<div class="text">投稿内容</div>',
                    '<div class="input"><textarea id="gpeb-settings-button-window-content-body" name="body"></textarea></div>',
                '</div>',
                '<div class="buttons">',
                    '<input id="gpeb-settings-button-window-content-cancel" type="button" value="キャンセル" />',
                    '<input id="gpeb-settings-button-window-content-save" type="button" value="登録" />',
                '</div>',
            '</div>',
            '<div id="gpeb-settings-button-window-close-button">×</div>'
        ].join("");
        document.body.appendChild(this.elm);
        this.menu = Sizzle("#gpeb-settings-button-window-menu")[0];
        this.content = Sizzle("#gpeb-settings-button-window-content")[0];

        /* 閉じるボタンイベント
        -------------------------------------------------------------------------------*/
        Sizzle("#gpeb-settings-button-window-close-button")[0].addEventListener ("click", function () {
            that.close();
        }, false);

        /* キャンセルイベント
        -------------------------------------------------------------------------------*/
        Sizzle("#gpeb-settings-button-window-content-cancel")[0].addEventListener ("click", function () {
            that.close();
        }, false);

        /* 登録イベント
        -------------------------------------------------------------------------------*/
        Sizzle("#gpeb-settings-button-window-content-save")[0].addEventListener ("click", function () {

            /* データ取得
            -------------------------------------------------------------------------------*/
            var name = Sizzle("#gpeb-settings-button-window-content-name")[0].value;
            var body = Sizzle("#gpeb-settings-button-window-content-body")[0].value;

            /* データチェック
            -------------------------------------------------------------------------------*/
            if (name === "" || body === "") {
                alert("未入力の項目があります");
                return;
            }

            /* 呼び出す
            -------------------------------------------------------------------------------*/
            if (that.isEdit) {
                that.callback.call({
                    name: name,
                    body: body,
                    bodyId: that.bodyId
                });
            }
            else {
                that.callback.call({
                    name: name,
                    body: body
                });
            }


            /* 閉じる
            -------------------------------------------------------------------------------*/
            that.close();


        }, false);

        /* フォーカス
        -------------------------------------------------------------------------------*/
        Sizzle("#gpeb-settings-button-window-content-name")[0].focus();



    },

    /* ボタンカスタマイズ画面を開く
    -------------------------------------------------------------------------------*/
    open: function (_obj, _callback) {

        /* コールバック
        -------------------------------------------------------------------------------*/
        this.callback = _callback || function () {};

        /* 背景作成
        -------------------------------------------------------------------------------*/
        this.back = document.createElement("div");
        this.back.setAttribute("id", "gpeb-button-back");
        document.body.appendChild(this.back);

        /* 画面構成
        -------------------------------------------------------------------------------*/
        this.elm.style.display = "block";
        var width = document.body.clientWidth;
        var height = window.innerHeight;
        this.elm.style.left = ((width-512)/2)+"px";
        this.elm.style.top = ((height-387)/2)+"px";

        /* データロード
        -------------------------------------------------------------------------------*/
        if (_obj) {


            /* 表示変更
            -------------------------------------------------------------------------------*/
            Sizzle("#gpeb-settings-button-window-content-save")[0].value = "更新";
            Sizzle("#gpeb-settings-button-window-title")[0].innerHTML = "カスタムボタンの編集";

            /* データ設定
            -------------------------------------------------------------------------------*/
            Sizzle("#gpeb-settings-button-window-content-name")[0].value = _obj.name;
            Sizzle("#gpeb-settings-button-window-content-body")[0].value = _obj.body;
            Sizzle("#gpeb-settings-button-window-content-name")[0].setAttribute("data-body-id", String(_obj.bodyId));

            /* データ保持
            -------------------------------------------------------------------------------*/
            this.bodyId = _obj.bodyId;

            /* 編集フラグ
            -------------------------------------------------------------------------------*/
            this.isEdit = 1;

        }


    },

    /* 閉じる
    -------------------------------------------------------------------------------*/
    close: function () {
        this.back.parentNode.removeChild(this.back);
        this.elm.parentNode.removeChild(this.elm);
    }
}
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
    cssElm.innerHTML = "\n"+_css+"\n";
    document.body.appendChild(cssElm);

}

/* ポストの情報を取得
-------------------------------------------------------------------------------*/
function GetPostData(_elmOrId, _isEncode) {
    this.init(_elmOrId, _isEncode);
}

GetPostData.prototype = {

    /* 初期化
    -------------------------------------------------------------------------------*/
    init: function (_elmOrId, _isEncode) {
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

        this.isEncode = _isEncode;

    },

    /* 名前の取得
    -------------------------------------------------------------------------------*/
    getName: function () {
        var elms = Sizzle("a[href][oid]:eq(1)", this.elm);
        if (elms.length) {
            return this.isEncode ? encodeURIComponent(elms[0].innerHTML) : elms[0].innerHTML;
        }
        return "";
    },

    /* 投稿時間の取得
    -------------------------------------------------------------------------------*/
    getTime: function () {
        var elms = Sizzle("a[href][title]:eq(0)", this.elm);
        if (elms.length) {
            return this.isEncode ? encodeURIComponent(elms[0].getAttribute("title")) : elms[0].getAttribute("title");
        }
        return "";

    },

    /* 投稿URLの取得
    -------------------------------------------------------------------------------*/
    getUrl: function () {
        var origin = location.origin+"/";
        var elms = Sizzle("a[href][title]:eq(0)", this.elm);
        if (elms.length) {
            return this.isEncode ? encodeURIComponent(origin+elms[0].getAttribute("href")) : origin+elms[0].getAttribute("href");
        }
        return "";

    },

    /* アウクティビティIDの取得
    -------------------------------------------------------------------------------*/
    getActivityId: function () {
        return this.isEncode ? encodeURIComponent(this.elm.id.replace("update-", "")) : this.elm.id.replace("update-", "");
    },

    /* コンテキストIDの取得
    -------------------------------------------------------------------------------*/
    getContextid: function () {
    },

    /* リップルURLの取得
    -------------------------------------------------------------------------------*/
    getRipplesUrl: function () {
        var activityId = this.getActivityId();
        return "https://plus.google.com/ripples/details?activityid="+activityId;
    },

    /* 本文の取得
    -------------------------------------------------------------------------------*/
    getBody: function () {
        var elms = Sizzle("div>div>div>div>div+div:eq(0)", this.elm);
        var reg = /(<BR>|<BR\/>)/ig;
        if (elms.length) {
            return this.isEncode ? encodeURIComponent(elms[0].innerHTML.replace(reg, "\n")) : elms[0].innerHTML.replace(reg, "\n");
        }
        return "";
    },

    /* 共有されているリンクの取得
    -------------------------------------------------------------------------------*/
    getLink: function () {
        var link = Sizzle("div>div+div>a", this.elm)[0];
        if (link) {
            return {
                url: this.isEncode ? encodeURIComponent(link.getAttribute("href")) : link.getAttribute("href"),
                name: this.isEncode ? encodeURIComponent(link.innerHTML) : link.innerHTML
            };
        }
        else {
            return false;
        }
    },

    /* ユーザーIDの取得
    -------------------------------------------------------------------------------*/
    getUserId: function () {
        var elms = Sizzle("a[href][oid]:eq(1)", this.elm);
        if (elms.length) {
            return this.isEncode ? encodeURIComponent(elms[0].getAttribute("oid")) : elms[0].getAttribute("oid");
        }
        return "";
    },

    /* 投稿した画像一覧の取得
    -------------------------------------------------------------------------------*/
    getImages: function () {
        var elms = Sizzle("img:not([width]):not([class|='gpeb'])", this.elm);
        var imageUrls = [];
        var that = this;
        elms.forEach(function (_elm) {

            /* ファビコンは除外
            -------------------------------------------------------------------------------*/
            if (_elm.width <= 46 && _elm.height <= 46) {
                return;
            }


            var src = _elm.getAttribute("src");

            /* サムネイルかどうか判定
            -------------------------------------------------------------------------------*/
            var isThumbnail = src.indexOf("=w") != -1;
            
            if (!isThumbnail) {
                
                var srcs = src.split("/");
                srcs[7] = "s0";
                src = "https:"+srcs.join("/");
            }
            else {
                var lastIndex = src.lastIndexOf("=") || 999999;
                src = "https:"+src.substr(0, lastIndex);
            }
            imageUrls.push(src);

            /* 重複カット
            -------------------------------------------------------------------------------*/
            var objUrls = {};
            imageUrls.forEach(function (_url) {
                objUrls[_url] = 1;
            });
            imageUrls = [];
            for (var i in objUrls) {
                imageUrls.push( that.isEncode ? encodeURIComponent(i) : i );
            };

        });
        return imageUrls;
    },

    /* 投稿した画像一覧の取得 (ダウンロード)
    -------------------------------------------------------------------------------*/
    getDonwloadImages: function () {
        var elms = Sizzle("img:not([width]):not([class|='gpeb'])", this.elm);
        var imageUrls = [];
        elms.forEach(function (_elm) {

            /* ファビコンは除外
            -------------------------------------------------------------------------------*/
            if (_elm.width < 20 && _elm.height < 20) {
                return;
            }

            var src = _elm.getAttribute("src");

            /* サムネイルかどうか判定
            -------------------------------------------------------------------------------*/
            var isThumbnail = src.indexOf("=w") != -1;

            if (!isThumbnail) {
                
                var srcs = src.split("/");
                srcs[7] = "d";
                src = "https:"+srcs.join("/");
            }
            else {
                var lastIndex = src.lastIndexOf("=") || 999999;
                src = "https:"+src.substr(0, lastIndex);
            }
            imageUrls.push(src);

            /* 重複カット
            -------------------------------------------------------------------------------*/
            var objUrls = {};
            imageUrls.forEach(function (_url) {
                objUrls[_url] = 1;
            });
            imageUrls = [];
            for (var i in objUrls) {
                imageUrls.push(i);
            };

        });
        return imageUrls;
    },

    /* コミュニティの名前
    -------------------------------------------------------------------------------*/
    getCommunityName: function () {
        var elms = Sizzle("a[href^='communities'] > div", this.elm);
        if (elms.length) {
            return this.isEncode ? encodeURIComponent(elms[0].innerHTML) : elms[0].innerHTML;
        }
        return "";
    },

    /* コミュニティカテゴリーの名前
    -------------------------------------------------------------------------------*/
    getCommunityCategory: function () {
        var elms = Sizzle("h3+span>span:eq(0)", this.elm);
        if (elms.length) {
            return this.isEncode ? encodeURIComponent(elms[0].innerHTML) : elms[0].innerHTML;
        }
        return "";
    }
};



/* ログ管理
-------------------------------------------------------------------------------*/
function Logger (_appName) {
    this.init(_appName);
}

Logger.prototype = {

    /* 初期化2222
    -------------------------------------------------------------------------------*/
    init: function (_appName) {
        this.appName = _appName;
    },

    /* ログ
    -------------------------------------------------------------------------------*/
    logs: [],
    rotateLimit: 100,

    /* stop
    -------------------------------------------------------------------------------*/
    stop: function () {
        this.stop = true;
    },

    /* ローテートリミットのセット
    -------------------------------------------------------------------------------*/
    setRotate: function (_limit) {
        this.rotateLimit = _limit;
    },

    /* ロギング
    -------------------------------------------------------------------------------*/
    add: function () {

        if (this.stop) {
            return false;
        }

        /* リミットを超えていた場合超えている分を削除
        -------------------------------------------------------------------------------*/
        if (this.logs.length > this.rotateLimit) {
            var len = this.logs.length - this.rotateLimit;
            for (var i = 0; i <= len; i++) {
                this.logs.shift();
            };
        }

        for (var i = 0; i < arguments.length; i++) {
            this.logs.push(arguments);
        }
        this.print(arguments);
    },

    /* 全てクリア
    -------------------------------------------------------------------------------*/
    clear: function () {
        this.logs = [];
    },

    /* ログ出力
    -------------------------------------------------------------------------------*/
    show: function () {
        for (var i = 0; i < this.logs.length; i++) {
            this.print.call(this, this.logs[i]);
        };
    },

    /* 一行ログ出力
    -------------------------------------------------------------------------------*/
    print: function (_args) {
        var logText = [];
        var date = new Date();
        var dateText = date.getHours()+":"+date.getMinutes()+"."+date.getMilliseconds();
        for (var i = 0; i < _args.length; i++) {
            logText.push(_args[i]);
        };
        console.log("[%c"+this.appName+"%c]"+logText.join(", ")+" %c("+dateText+")", "color:blue;", "color:black;", "color:#bbbbbb;");
    }

};
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

        this.items.push(_obj);
        var div = document.createElement("div");
        div.setAttribute("class", "gpeb item line");
        if (chrome.extension && "getURL" in chrome.extension) {
            var url = chrome.extension.getURL(_obj.img);
        }
        else {
            var url = "about:blank";
        }

        /* 画像タイプの場合画像クラスを追加
        -------------------------------------------------------------------------------*/
        if (_obj.type == "image") {
            div.setAttribute("class", "gpeb item line image");
        }

        // div.innerHTML = '<div class="icon"><img class="gpeb" src="'+url+'" /></div><div class="name"><a href="javascript:;" data-gpeb-event="'+_obj.event+'">'+_obj.name+'</a></div><div class="clearboth"></div>';
        div.innerHTML = '<div class="icon"><img class="gpeb" src="'+url+'" data-gpeb-event="'+_obj.event+'" /></div></div>';
        setData(div, "gpeb-event", _obj.event);
        this.content.appendChild(div);
        this.clear.parentNode.appendChild(this.clear);


    },

    /* popup
    -------------------------------------------------------------------------------*/
    popup: function (_elm, _post) {


        /* カレントポスト
        -------------------------------------------------------------------------------*/
        this.current = _elm;

        /* 位置
        -------------------------------------------------------------------------------*/
        var x = 0;
        var y = _elm.offsetHeight;

        /* 全てのアイテムにポストIDを追加
        -------------------------------------------------------------------------------*/
        var id = getData(this.current, "gpeb-parent-id");
        Sizzle("div.item", this.elm).forEach(function (_elm) {
            setData(_elm, "gpeb-parent-id", id);
        });

        /* ポップアップされるポストに画像が存在しているかどうか調べる
        -------------------------------------------------------------------------------*/
        var gpd = new GetPostData(_post);
        var urls = gpd.getImages();
        var isImage = urls.length > 0 ;

        /* 画像表示が必要なアイテムを隠す
        -------------------------------------------------------------------------------*/
        if (isImage) {
            Sizzle("div.item.image", this.elm).forEach(function (_elm) {
                _elm.style.display = "block";
            });
        }
        else {
            Sizzle("div.item.image", this.elm).forEach(function (_elm) {
                _elm.style.display = "none";
            });
        }

        /* 挿入
        -------------------------------------------------------------------------------*/
        var plusOneArea = _elm.parentNode;
        plusOneArea.insertBefore( this.elm, Sizzle("div[role='button']:eq(2)", plusOneArea)[0]);

        /* 移動
        -------------------------------------------------------------------------------*/
        this.elm.style.left = "auto";
        this.elm.style.top = "auto";
    }

};
/* モデル 複数のオブジェクトを入れることができます
-------------------------------------------------------------------------------*/
function Models (_objs) {
    this.init(_objs);
}

Models.prototype = {

    /* 初期化
    -------------------------------------------------------------------------------*/
    init: function (_objs) {

        /* モデル
        -------------------------------------------------------------------------------*/
        this.models = [];

        /* キーインデックス (モデルデータに key プロパティが含まれている場合このオブジェクトにインデックスされる)
        -------------------------------------------------------------------------------*/
        this.keys = {};

        /* IDインデックス
        -------------------------------------------------------------------------------*/
        this.ids = {};

        /* IDカウント
        -------------------------------------------------------------------------------*/
        this.idCount = 1;

        /* イベント (IDがキーとなっており、子要素にコールバック関数の配列を持つ)
        -------------------------------------------------------------------------------*/
        this.events = {};

        /* ローカルストレージにデータが存在したかどうかのフラグ
        -------------------------------------------------------------------------------*/
        this.isLocalStorage = false;

        /* _objsが文字列の場合ローカルストレージからデータを取得する
        -------------------------------------------------------------------------------*/
        if (typeof(_objs) == "string") {

            /* ローカルストレージの名前を保持しておく
            -------------------------------------------------------------------------------*/
            this.localStorageName = _objs;

            /* ローカルストレージから読み込む
            -------------------------------------------------------------------------------*/
            var jsonText = localStorage[_objs];
            if (jsonText) {
                try {
                    var objs = JSON.parse(jsonText);
                    this.add(objs);
                    this.isLocalStorage = true;    
                }
                catch (_error) {
                    this.isLocalStorage = false;
                }
            }
            else {
                this.isLocalStorage = false;
            }
        }
        else {

            /* モデルデータの追加
            -------------------------------------------------------------------------------*/
            this.add(_objs);

        }
    },

    /* クローン生成用再帰処理関数用変数切り分け挿入
    -------------------------------------------------------------------------------*/
    cloneRecursiveStackAdd: function (_obj, _key, _value) {

        /* 配列
        -------------------------------------------------------------------------------*/
        if (_obj && _obj.constructor === Array) {
            _obj.push(_value);
        }

        /* オブジェクト
        -------------------------------------------------------------------------------*/
        else {
            _obj[_key] = _value;
        }
    },

    /* クローン生成用再帰処理関数
    -------------------------------------------------------------------------------*/
    cloneRecursive: function (_data) {

        var value = _data.value;
        var stack = _data.stack;
        var key = _data.key;
        var nest = _data.nest;
        var type = typeof(value);

        /* 数値
        -------------------------------------------------------------------------------*/
        if (type == "number") {
            this.cloneRecursiveStackAdd(stack, key, value);
        }

        /* 文字列
        -------------------------------------------------------------------------------*/
        else if (type == "string") {
            this.cloneRecursiveStackAdd(stack, key, value);
        }

        /* 配列
        -------------------------------------------------------------------------------*/
        else if (value && value.constructor === Array) {

            /* スタックが存在していない場合生成を行う
            -------------------------------------------------------------------------------*/
            if (stack === undefined) {
                stack = [];
            }

            /* スタックがすでに存在している場合新しくオブジェクトを作成し追加し、そのスタックを指定する
            -------------------------------------------------------------------------------*/
            else {
                var obj = [];
                this.cloneRecursiveStackAdd(stack, key, obj);
                var stack2 = obj;
            }

            for (var i = 0; i < value.length; i++) {
                

                /* それ以外
                -------------------------------------------------------------------------------*/
                if (value[i] !== value) {
                    nest++;
                    this.cloneRecursive({
                        key: i,
                        value: value[i],
                        stack: stack,
                        nest: nest
                    });
                    nest--;
                }


            };
        }

        /* window
        -------------------------------------------------------------------------------*/
        else if (value === window) {
            this.cloneRecursiveStackAdd(stack, key, value);
        }

        /* document
        -------------------------------------------------------------------------------*/
        else if (value === document) {
            this.cloneRecursiveStackAdd(stack, key, value);
        }

        /* DOM Node
        -------------------------------------------------------------------------------*/
        else if ("tagName" in value) {
            this.cloneRecursiveStackAdd(stack, key, value);
        }

        /* オブジェクト
        -------------------------------------------------------------------------------*/
        else if (type == "object") {

            /* スタックが存在していない場合生成を行う
            -------------------------------------------------------------------------------*/
            if (stack === undefined) {
                stack = {};
                var stack2 = stack;
            }

            /* スタックがすでに存在している場合新しくオブジェクトを作成し追加し、そのスタックを指定する
            -------------------------------------------------------------------------------*/
            else {
                var obj = {};
                this.cloneRecursiveStackAdd(stack, key, obj);
                var stack2 = obj;
            }

            /* 要素の数だけ繰り返す
            -------------------------------------------------------------------------------*/
            for (var i in value) {
                if (value[i] !== value) {
                    nest++;
                    this.cloneRecursive({
                        key: i,
                        value: _data.value[i],
                        stack: stack2,
                        nest: nest
                    });
                    nest--;
                }
           
            };

        }

        /* 関数
        -------------------------------------------------------------------------------*/
        else if (type == "function") {
            this.cloneRecursiveStackAdd(stack, key, value);
        }

        /* 真偽値
        -------------------------------------------------------------------------------*/
        else if (type == "boolean") {
            this.cloneRecursiveStackAdd(stack, key, value);
        }

        /* 未定義
        -------------------------------------------------------------------------------*/
        else if (type == "undefined") {
            this.cloneRecursiveStackAdd(stack, key, value);
        }
        return stack;
    },

    /* クローン生成
    -------------------------------------------------------------------------------*/
    clone: function () {
        // return new Models( JSON.parse(JSON.stringify(this.models)) );

        var cloneObj = [];

        /* テスト
        -------------------------------------------------------------------------------*/
        // console.log("無限ループ");


        for (var i = 0; i < this.models.length; i++) {
            
            var stack = undefined;
            var nest = 0;

            /* テスト
            -------------------------------------------------------------------------------*/
            // console.log("this.models[i]", this.models[i]);


            cloneObj.push(this.cloneRecursive({
                key: i,
                value: this.models[i],
                stack: stack,
                nest: nest
            }));

        };

        /* テスト
        -------------------------------------------------------------------------------*/
        // console.log("%ccloneobj", "font-size:30px;", cloneObj);

        
        return new Models(cloneObj);
    },

    /* モデルデータの追加 (追加したモデルが返ります)
    -------------------------------------------------------------------------------*/
    add: function (_objs) {

        /* 配列
        -------------------------------------------------------------------------------*/
        if (_objs && _objs.constructor === Array) {

            /* 追加したモデルが入る変数
            -------------------------------------------------------------------------------*/
            var addModels = [];

            for (var i = 0; i < _objs.length; i++) {

                /* idが存在
                -------------------------------------------------------------------------------*/
                if ("id" in _objs[i]) {
                    this.idCount = Math.max(this.idCount, _objs[i].id)+1;
                }

                /* idが存在しない
                -------------------------------------------------------------------------------*/
                else {
                    _objs[i].id = this.idCount++;
                }

                /* IDインデックスに追加
                -------------------------------------------------------------------------------*/
                this.ids[_objs[i].id] = _objs[i];

                /* イベントを格納する要素の作成
                -------------------------------------------------------------------------------*/
                this.events[_objs[i].id] = [];

                /* モデルに追加
                -------------------------------------------------------------------------------*/
                this.models.push(_objs[i]);
                addModels.push(_objs[i]);


                /* キーインデックスに追加 (重複したキーを指定された場合キーは上書きされます)
                -------------------------------------------------------------------------------*/
                if ("key" in _objs[i]) {
                    this.keys[_objs[i].key] = _objs[i];
                }

                /* イベント送出
                -------------------------------------------------------------------------------*/
                var event = {
                    target: _objs[i],
                    model: _objs[i],
                    type: "add",
                    key: _objs[i].key,
                    id: _objs[i].id
                };
                for (var ii = 0; ii < this.events[_objs[i].id].length; ii++) {
                    this.events[_objs[i].id][ii].call(_objs[i], event);
                }

            }

            /* 追加したモデルが配列で返ります
            -------------------------------------------------------------------------------*/
            return addModels;
        }

        /* オブジェクト
        -------------------------------------------------------------------------------*/
        else if (typeof(_objs) === "object") {


            /* idが存在
            -------------------------------------------------------------------------------*/
            if ("id" in _objs) {
                this.idCount = Math.max(this.idCount, _objs.id)+1;
            }

            /* idが存在しない
            -------------------------------------------------------------------------------*/
            else {
                _objs.id = this.idCount++;
            }

            /* IDインデックスに追加
            -------------------------------------------------------------------------------*/
            this.ids[_objs.id] = _objs;

            /* イベントを格納する要素の作成
            -------------------------------------------------------------------------------*/
            this.events[_objs.id] = [];

            /* モデルに追加
            -------------------------------------------------------------------------------*/
            this.models.push(_objs);

            /* キーインデックスに追加 (重複したキーを指定された場合キーは上書きされます)
            -------------------------------------------------------------------------------*/
            if ("key" in _objs) {
                this.keys[_objs.key] = _objs;
            }

            /* 追加したモデルが返ります
            -------------------------------------------------------------------------------*/
            return _objs;
        }

        /* 失敗
        -------------------------------------------------------------------------------*/
        else {
            return false;
        }
    },

    /* モデルデータの取得
    -------------------------------------------------------------------------------*/
    get: function () {

        /* 配列で強制的に返す場合true
        -------------------------------------------------------------------------------*/
        var isForceArray = false;

        /* 引数
        -------------------------------------------------------------------------------*/
        var args = arguments;

        /* 返すデータ
        -------------------------------------------------------------------------------*/
        var ret = [];

        for (var i = 0; i < args.length; i++) {
            
            /* 数値の場合、指定したIDのモデルを返す
            -------------------------------------------------------------------------------*/
            if (typeof(args[i]) === "number") {

                var model = this.ids[args[i]];

                /* テスト
                -------------------------------------------------------------------------------*/
                // console.log("model", model, args[i]);

                /* モデルが存在しない場合新しく作成したものを返す
                -------------------------------------------------------------------------------*/
                if (!model) {
                    model = this.add({
                        id: args[i]
                    });
                }

                /* テスト
                -------------------------------------------------------------------------------*/
                // console.log("model", model);

                ret.push(model);
            }

            /* 文字列の場合キーに関連するデータを返す
            -------------------------------------------------------------------------------*/
            else if (typeof(args[i]) === "string") {

                var model = this.keys[args[i]];

                /* テスト
                -------------------------------------------------------------------------------*/
                // console.log("model", model, args[i]);

                /* モデルが存在しない場合新しく作成したものを返す
                -------------------------------------------------------------------------------*/
                if (!model) {
                    model = this.add({
                        key: args[i]
                    });
                }

                /* テスト
                -------------------------------------------------------------------------------*/
                // console.log("model", model);


                ret.push(model);
            }

            /* 配列ではないオブジェクト
            -------------------------------------------------------------------------------*/
            else if (args[i] && args[i].constructor !== Array && typeof(args[i]) === "object"){

                /* 指定した条件にマッチするデータを配列で返す
                -------------------------------------------------------------------------------*/
                if ("where" in args[i]) {

                    /* 配列として強制的に返す
                    -------------------------------------------------------------------------------*/
                    isForceArray = true;

                }

                /* データの中で最も大きいデータを返す
                -------------------------------------------------------------------------------*/

                /* データの中で最も小さいデータを返す
                -------------------------------------------------------------------------------*/

            }

        }

        /* 配列がひとつしかない場合配列から取り出す
        -------------------------------------------------------------------------------*/
        if (!isForceArray || ret.length == 1) {
            ret = ret[0];
        }

        return ret;
    },


    /* デフォルト設定 (指定したターゲットの指定したpropertyが定義されていなかった場合、デフォルト値を設定する)
       localStorageへのsaveは自動的に行われる為、明示的に行う必要はありません
    -------------------------------------------------------------------------------*/
    default: function (_target, _property, _default) {

        /* 指定したプロパティが存在しないか確認する
        -------------------------------------------------------------------------------*/
        if (this.get(_target)[_property] === undefined) {

            /* オブジェクト作成
            -------------------------------------------------------------------------------*/
            var object = {};
            object[_property] = _default;

            /* セット
            -------------------------------------------------------------------------------*/
            this.set(_target, object);

            /* 保存
            -------------------------------------------------------------------------------*/
            var that = this;
            clearTimeout(this.saveTimer);
            this.saveTimer = setTimeout(function(){
                that.save();    
            }, 100);
        }
    },

    /* localStorage保存タイマー
    -------------------------------------------------------------------------------*/
    saveTimer: undefined,

    /* モデルデータごとに繰り返す
    -------------------------------------------------------------------------------*/
    each: function (_callBack) {

        if (typeof(_callBack) != "function") {
            return false;
        }

        for (var i = 0; i < this.models.length; i++) {
            _callBack.call(this.models[i], this.models[i].id, this.models[i].key);
        };

    },

    /* 指定したモデルデータをメモリ上から開放します
    -------------------------------------------------------------------------------*/
    clear: function(_model) {

        /* キーインデックスから開放
        -------------------------------------------------------------------------------*/
        if (_model.key) {
            delete this.keys[_model.key];
        }

        /* 削除される要素のIDとキーを取得
        -------------------------------------------------------------------------------*/
        var id = _model.id;
        var key = _model.key;

        /* IDインデックスから削除
        -------------------------------------------------------------------------------*/
        delete this.ids[_model.id];

        /* 配列から削除
        -------------------------------------------------------------------------------*/
        var newModels = [];
        for (var i = 0; i < this.models.length; i++) {
            if (this.models[i] !== _model) {
                newModels.push(this.models[i]);
            }
        };
        this.models = newModels;

        /* モデルの削除
        -------------------------------------------------------------------------------*/
        delete _model;

        /* モデルに変化があった場合コールバック関数を実行しイベントを削除
        -------------------------------------------------------------------------------*/
        if (this.events[id]) {
            var event = {
                id: id,
                key: key,
                type: "remove"
            };
            for (var i = 0; i < this.events[id].length; i++) {
                this.events[id][i].call(_model, event);
            }
            delete this.events[id];
        }
    },

    /* データの削除
    -------------------------------------------------------------------------------*/
    remove: function () {

        /* 引数
        -------------------------------------------------------------------------------*/
        var args = arguments;

        /* 返すデータ
        -------------------------------------------------------------------------------*/
        var ret = [];

        for (var i = 0; i < args.length; i++) {
            
            /* 数値の場合、指定したインデックスのモデルを削除する
            -------------------------------------------------------------------------------*/
            if (typeof(args[i]) === "number") {
                this.clear(this.get(args[i]));
            }

            /* 文字列の場合キーに関連するデータを返す
            -------------------------------------------------------------------------------*/
            else if (typeof(args[i]) === "string") {
                this.clear(this.get(args[i]));
            }

            /* 配列ではないオブジェクト
            -------------------------------------------------------------------------------*/
            else if (args[i] && args[i].constructor !== Array && typeof(args[i]) === "object"){

                /* 指定した条件にマッチするデータを削除
                -------------------------------------------------------------------------------*/
                if ("where" in args[i]) {

                }

                /* データの中で最も大きいデータを削除
                -------------------------------------------------------------------------------*/

                /* データの中で最も小さいデータを削除
                -------------------------------------------------------------------------------*/

            }
        }
    },

    /* 指定したモデルにデータをセット (基本的なデータセットはこのメソッドから行います)
    -------------------------------------------------------------------------------*/
    set: function (_target, _obj) {

        /* モデルの取得
        -------------------------------------------------------------------------------*/
        var model = this.get(_target);

        /* IDの取得
        -------------------------------------------------------------------------------*/
        var id = model.id;

        /* デバッグ
        -------------------------------------------------------------------------------*/
        // console.log("書き換え前 model", model);

        /* 変化のあったモデルデータを格納しておく変数
        -------------------------------------------------------------------------------*/
        var changedModels = {};

        /* 書き換え開始 (merge)
        -------------------------------------------------------------------------------*/
        for (var i in _obj) {
            if (model[i] != _obj[i]) {
                model[i] = _obj[i];
                changedModels[i] = model[i];
            }

        };

        /* デバッグ
        -------------------------------------------------------------------------------*/
        // console.log("書き換え後 model", model);

        /* モデルに変化があった場合コールバック関数を実行
        -------------------------------------------------------------------------------*/
        if (this.events[id]) {
            var event = {
                changedModels: changedModels,
                target: model,
                model: model,
                type: "change",
                key: model.key,
                id: model.id
            };
            for (var i = 0; i < this.events[id].length; i++) {
                this.events[id][i].call(model, event);
            }
        }
    },


    /* 指定したモデルにイベントを登録 (modelsのevent)
    -------------------------------------------------------------------------------*/
    on: function (_target, _callBack) {

        /* モデルの取得
        -------------------------------------------------------------------------------*/
        var model = this.get(_target);

        /* IDの取得
        -------------------------------------------------------------------------------*/
        var id = model.id;

        /* コールバック関数の登録
        -------------------------------------------------------------------------------*/
        this.events[id].push(_callBack);
    },

    /* 全てのモデルデータをローカルストレージに保存
    -------------------------------------------------------------------------------*/
    save: function (_name) {
        if (_name) {
            var jsonText = JSON.stringify(this.models);
            localStorage[_name] = jsonText;
        }
        else {

            /* 読み込み時に使用されたローカルストレージネームガある場合そちらに保存する
            -------------------------------------------------------------------------------*/
            if (this.localStorageName) {
                var jsonText = JSON.stringify(this.models);
                localStorage[this.localStorageName] = jsonText;
            }

            return false;
        }
    }

};




/* コントローラ
-------------------------------------------------------------------------------*/
function Controller () {
    this.init();
}

Controller.prototype = {

    /* 初期化
    -------------------------------------------------------------------------------*/
    init: function () {
        this.functions = {};
    },

    /* 関数の追加
    -------------------------------------------------------------------------------*/
    set: function (_name, _function) {
        this.functions[_name] = _function;
    },

    /* 関数の実行
    -------------------------------------------------------------------------------*/
    run: function (_args) {

        /* 実行する関数 (配列とその子に文字列リテラルを使用する・関数は上から順番に実行される)
        -------------------------------------------------------------------------------*/
        var functions = _args.functions || [];

        /* 書き換えるビュー (ビューの指定にはオブジェクト型でも配列型でもどちらでも良い)
        -------------------------------------------------------------------------------*/
        var views = _args.views;

        /* 使用するデータ (必ずオブジェクト型にする)
        -------------------------------------------------------------------------------*/
        var data = _args.data;

        /* 関数の実行
        -------------------------------------------------------------------------------*/
        for (var i = 0; i < functions.length; i++) {
            if (this.functions[functions[i]]) {
                this.functions[functions[i]].call(data, data, views);
            }
        }

        /* ビューの書き換え ビューを走査し {{}}で囲まれた部分をdataで置換する
        -------------------------------------------------------------------------------*/

    },

    /* 関数の削除
    -------------------------------------------------------------------------------*/
    remove: function (_key) {
        delete this.functions[_key];
    },


    /* 指定したDOM要素にイベントを登録する
    -------------------------------------------------------------------------------*/
    on: function(_selector, _type, _callback) {
        if (typeof(_selector) == "string") {
            var elms = Sizzle(_selector);

            /* テスト
            -------------------------------------------------------------------------------*/
            // console.log("elms", elms, _selector);
        }
        else {
            var elms = [_selector];
        }
        var that = this;
        elms.forEach(function(_elm){
            var elm = _elm;
            _elm.addEventListener (_type, function (_event) {
                if (_callback.call(elm, _event, that)) {
                    _event.preventDefault();
                }
            }, false);
        });
    }
};


/* ビュー
-------------------------------------------------------------------------------*/
function View () {
    this.init();
}

View.prototype = {

    /* 初期化
    -------------------------------------------------------------------------------*/
    init: function () {
        this.templates = {};
    },

    /* 新しいビューの作成 {{data}} が書き換わります
    -------------------------------------------------------------------------------*/
    set: function(_key, _html){
        this.templates[_key] = _html;
    },

    /* ビューの削除
    -------------------------------------------------------------------------------*/
    remove: function (_key) {
        delete this.templates[_key];
    }

};
/* 新しいDOMを監視する
-------------------------------------------------------------------------------*/
function NewDom (_elm) {
    this.init(_elm);
}

NewDom.prototype = {

    /* 初期化
    -------------------------------------------------------------------------------*/
    init: function (_elm) {
        this.elm = _elm;
    },

    /* 監視スタート
    -------------------------------------------------------------------------------*/
    watch: function (_callBack, _interval) {

        /* コールバック関数が定義されていない場合エラー
        -------------------------------------------------------------------------------*/
        if (typeof(_callBack) != "function") {
            throw new Error("コールバック関数ではありません");
        }

        /* 監視開始
        -------------------------------------------------------------------------------*/
        var that = this;

        /* DOMが更新されたら実行
        -------------------------------------------------------------------------------*/
        window.addEventListener ("DOMNodeInserted", function (_event) {

            /* 比較
            -------------------------------------------------------------------------------*/
            var children = Sizzle("div[id^='update-']:not([data-gpeb-added='1'])");
            _callBack.call(children, _event);

        }, false);

        /* 一定間隔で実行
        -------------------------------------------------------------------------------*/
        this.timer = setInterval(function(_event){
            var children = Sizzle("div[id^='update-']:not([data-gpeb-added='1'])");
            _callBack.call(children, _event);

        }, 10000);
    }


};

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
/* 設定画面
-------------------------------------------------------------------------------*/
function SettingsWindow (_opt) {
    this.init(_opt);
}

SettingsWindow.prototype = {
    init: function (_opt) {

        this.elm = document.createElement("div");
        this.elm.setAttribute("id", "gpeb-settings-window");

        /* 画面構成
        -------------------------------------------------------------------------------*/
        this.elm.innerHTML = [
            '<div id="gpeb-settings-window-menu">',
                '<div class="gpeb logo">',
                    '<img src="'+chrome.extension.getURL("images/icon.png")+'" />',
                    '<div class="name">Google+ Extreme Button</div>',
                '</div>',
            '</div>',
            '<div id="gpeb-settings-window-content"></div>',
            '<div id="gpeb-settings-window-close-button">×</div>'
        ].join("");
        document.body.appendChild(this.elm);
        this.menu = Sizzle("#gpeb-settings-window-menu")[0];
        this.content = Sizzle("#gpeb-settings-window-content")[0];

        /* スタイルのモデルを扱う
        -------------------------------------------------------------------------------*/
        this.styles = _opt.styles;

        /* メニューボタンのモデルを扱う
        -------------------------------------------------------------------------------*/
        this.buttons = _opt.buttons;

        /* 設定データモデルを扱う
        -------------------------------------------------------------------------------*/
        this.settings = _opt.settings;


        /* 各種ページのメニュー
        -------------------------------------------------------------------------------*/
        this.menuItems = [
            ["表示するボタンの選択", "list", "active"],
            ["カスタムボタン", "custombtn", ""],
            ["スタイル", "style", ""],
            ["補助機能", "other", ""],
            ["メニューボタン", "menubutton", ""],
            ["更新履歴", "history", ""],
            ["サポート情報", "support", ""]
        ];

        /* メニューアイテムのHTML
        -------------------------------------------------------------------------------*/
        var html = "";
        this.menuItems.forEach(function (_item) {
            html += '<div class="gpeb item '+_item[2]+'" data-content="'+_item[1]+'"><div class="gpeb item-inner" data-content="'+_item[1]+'">'+_item[0]+'</div></div>';
        });
        html += '<div class="gpeb item-close"></div>';
        this.menu.innerHTML += html;

        /* イベント
        -------------------------------------------------------------------------------*/
        var that = this;
        this.menu.addEventListener ("click", function (_event) {

            /* modeの取得
            -------------------------------------------------------------------------------*/
            var mode = getData(_event.target, "content");
            if (mode) {

                /* HTMLの書き換え
                -------------------------------------------------------------------------------*/
                that.content.innerHTML = that.menuContents[mode] || "";
                Sizzle("div.item", this.menu).forEach(function (_elm) {
                    _elm.setAttribute("class", "gpeb item");
                });
                _event.target.parentNode.setAttribute("class", "gpeb item active");

                /* 関数の実行
                -------------------------------------------------------------------------------*/
                if (that.menuFunctions[mode]) {
                    that.menuFunctions[mode].call(that.content, that.content);
                }


            }
        }, false);


        /* 閉じるボタンイベント
        -------------------------------------------------------------------------------*/
        Sizzle("#gpeb-settings-window-close-button")[0].addEventListener ("click", function () {
            that.close();
        }, false);


        /* 各種ページのHTMLを格納するオブジェクト
        -------------------------------------------------------------------------------*/
        this.menuContents = {

            /* リストページ
            -------------------------------------------------------------------------------*/
            list: [
                '<div id="gpeb-settings-window-content-list">',
                    '<div class="gpeb title">表示するボタンの選択</div>',
                    '<div class="gpeb desc">ボタンにチェックを入れると、ボタンを表示することができます。</div>',
                    '<div class="gpeb list">',
                        '<div id="gpeb-settings-window-content-list-items" class="gpeb list-inner">',
                        '</div>',
                    '</div>',
                '</div>'
            ].join(""),

            /* 更新履歴ページ
            -------------------------------------------------------------------------------*/
            history: [
                '<div id="gpeb-settings-window-content-history">',
                    '<div class="gpeb title">更新履歴</div>',
                    '<div class="gpeb desc">過去の更新履歴です</div>',
                    '<div class="gpeb list">',
                        '<div id="gpeb-settings-window-content-history-items" class="gpeb list-inner">',
                        '</div>',
                    '</div>',
                '</div>'
            ].join(""),

            /* カスタムボタン設定
            -------------------------------------------------------------------------------*/
            custombtn: [
                '<div id="gpeb-settings-window-content-custombtn">',
                    '<div class="gpeb title">カスタムボタン</div>',
                    '<div class="gpeb desc">自動投稿を行うことができるカスタムボタンを作成します</div>',
                    '<div class="gpeb button-list"><input id="gpeb-settings-custombtn-new-button" type="button" value="ボタンの新規作成" /></div>',
                    '<div class="gpeb list">',
                        '<div id="gpeb-settings-window-content-custombtn-items" class="gpeb list-inner">',
                        '</div>',
                    '</div>',
                '</div>'
            ].join(""),

            /* スタイル設定
            -------------------------------------------------------------------------------*/
            style: [
                '<div id="gpeb-settings-window-content-style">',
                    '<div class="gpeb title">スタイル</div>',
                    '<div class="gpeb desc">スタイルの変更を行います</div>',
                    '<div class="gpeb list">',
                        '<div id="gpeb-settings-window-content-style-items" class="gpeb list-inner">',
                        '</div>',
                    '</div>',
                '</div>'
            ].join(""),


            /* 挨拶設定
            -------------------------------------------------------------------------------*/
            aisatsu: [
                '<div id="gpeb-settings-window-content-aisatsu">',
                    '<div class="gpeb title">あいさつ設定</div>',
                    '<div class="gpeb desc">挨拶ボタンの設定を行います</div>',
                    '<div class="gpeb list">',
                        '<div id="gpeb-settings-window-content-aisatsu-items" class="gpeb list-inner">',
                        '※この機能は現在実装されていません',
                        '</div>',
                    '</div>',
                '</div>'
            ].join(""),

            /* メニューボタン設定
            -------------------------------------------------------------------------------*/
            menubutton: [
                '<div id="gpeb-settings-window-content-menubutton">',
                    '<div class="gpeb title">メニューボタン設定</div>',
                    '<div class="gpeb desc">各ポストに挿入されるボタンの画像を変更します</div>',
                    '<div class="gpeb list">',
                        '<div id="gpeb-settings-window-content-menubutton-items" class="gpeb list-inner">',
                        '※この機能は現在実装されていません',
                        '</div>',
                    '</div>',
                '</div>'
            ].join(""),

            /* バグ報告・サポート
            -------------------------------------------------------------------------------*/
            support: [
                '<div id="gpeb-settings-window-content-support">',
                    '<div class="gpeb title">サポート情報</div>',
                    '<div class="gpeb desc">バグ報告やサポート情報についてのページです。</div>',
                    '<div class="gpeb support">',
                        '<div class="gpeb sub-title">サポートについて</div>',
                        '<div class="gpeb sub-desc">使い方等わからなかったり、何か問題がありましたら <a href="mailto:akicansoft+support@gmail.com">nacika.inscatolare+support@gmail.com</a> にお願いします。 </div>',
                    '</div>',
                    '<div class="gpeb bug">',
                        '<div class="gpeb sub-title">バグ報告</div>',
                        '<div class="gpeb sub-desc">バグ報告は、 <a href="mailto:akicansoft+bug@gmail.com">nacika.inscatolare+bug@gmail.com</a> にお願いします。 </div>',
                    '</div>',
                '</div>'
            ].join(""),

            /* 補助機能
            -------------------------------------------------------------------------------*/
            other: [
                '<div id="gpeb-settings-window-content-other">',
                    '<div class="gpeb title">補助機能</div>',
                    '<div class="gpeb desc">G+をもっと便利にする補助機能です。</div>',
                    '<div id="gpeb-settings-window-content-other-inner" class="gpeb other-inner">',
                        '<label class="item"><input type="checkbox" name="shiftenter" /> Shift+Enterによる投稿を許可する</label>',
                        '<label class="item"><input type="checkbox" name="autoreload" /> 自動更新機能を許可する</label>',
                    '</div>',
                '</div>'
            ].join("")
        };


        /* 各種ボタンをクリックした時に呼ばれる関数
        -------------------------------------------------------------------------------*/
        this.menuFunctions = {

            /* 表示するボタンの選択
            -------------------------------------------------------------------------------*/
            list: function () {

                /* 追加を行うリスト
                -------------------------------------------------------------------------------*/
                var listElm = Sizzle("#gpeb-settings-window-content-list-items")[0];

                /* アイテムテンプレートの生成
                -------------------------------------------------------------------------------*/
                var itemTemp = domParseFromString([
                    '<div class="item">',
                        '<label>',
                            '<div class="icon"><img src="" /></div>',
                            '<div class="name"></div>',
                            '<div class="desc"></div>',
                            '<div class="show"><input type="checkbox" /><span>表示する</span></div>',
                            '<div class="clear"></div>',
                        '</label>',
                    '</div>'
                ].join(""));

                /* アイテムテンプレートの変数
                -------------------------------------------------------------------------------*/
                var itemTempIcon = Sizzle("div.icon > img", itemTemp)[0];
                var itemTempName = Sizzle("div.name", itemTemp)[0];
                var itemTempDesc = Sizzle("div.desc", itemTemp)[0];
                var itemTempShow = Sizzle("div.show > input", itemTemp)[0];

                /* 現在のボタンデータ
                -------------------------------------------------------------------------------*/
                var buttonShowSetting = that.settings.get("button").showButtons || {};

                /* 描画
                -------------------------------------------------------------------------------*/
                that.buttons.each(function () {

                    /* 変数に設定
                    -------------------------------------------------------------------------------*/
                    itemTempIcon.src = getUrl(this.img);
                    itemTempName.innerHTML = this.name;
                    itemTempDesc.innerHTML = this.desc;

                    /* 表示されているか調べる
                    -------------------------------------------------------------------------------*/
                    if (buttonShowSetting[this.key]) {
                        itemTempShow.setAttribute("checked", "checked");
                    }

                    /* 表示されていない
                    -------------------------------------------------------------------------------*/
                    else {
                        itemTempShow.removeAttribute("checked");
                    }

                    /* イベント用キーの割り当て
                    -------------------------------------------------------------------------------*/
                    itemTempShow.setAttribute("gpeb-settings-window-content-list-items", this.key);

                    /* クローンの作成
                    -------------------------------------------------------------------------------*/
                    var item = itemTemp.cloneNode(true);

                    /* クローンの挿入
                    -------------------------------------------------------------------------------*/
                    listElm.appendChild(item);
                    

                });

                /* イベントの登録
                -------------------------------------------------------------------------------*/
                listElm.addEventListener ("click", function (_event) {

                    var key = _event.target.getAttribute("gpeb-settings-window-content-list-items") || "";
                    var isShow = _event.target.checked || false;
                    
                    if (key) {

                        /* テスト
                        -------------------------------------------------------------------------------*/
                        // console.log(_event.target, key, isShow);

                        /* データセット
                        -------------------------------------------------------------------------------*/
                        buttonShowSetting[key] = isShow ? 1 : 0;
                        that.settings.set("button", {
                            "showButtons": buttonShowSetting
                        });


                        /* 保存
                        -------------------------------------------------------------------------------*/
                        that.settings.save();

                    }

                });

            },

            /* スタイル
            -------------------------------------------------------------------------------*/
            style: function () {

                /* 追加を行うリスト
                -------------------------------------------------------------------------------*/
                var listElm = Sizzle("#gpeb-settings-window-content-style-items")[0];


                /* アクティブなスタイルを取得
                -------------------------------------------------------------------------------*/
                var activeStyle = that.settings.get("style").active || "";

                /* アイテムテンプレートの生成
                -------------------------------------------------------------------------------*/
                var itemTemp = domParseFromString([
                    '<div class="item">',
                        '<div class="thumbnail"><img src="" /></div>',
                        '<div class="name"><a></a></div>',
                        '<div class="desc"></div>',
                        '<div class="author">作者: <a></a></div>',
                        '<div class="date">更新: <span></span></div>',
                        '<div class="version">v e r: <span></span></div>',
                        '<div class="activate"><input type="button" value="有効にする" /></div>',
                        '<div class="clear"></div>',
                    '</div>'
                ].join(""));

                /* アイテムテンプレートの変数
                -------------------------------------------------------------------------------*/
                var itemTempName = Sizzle("div.name > a", itemTemp)[0];
                var itemTempDesc = Sizzle("div.desc", itemTemp)[0];
                var itemTempAuthor = Sizzle("div.author > a", itemTemp)[0];
                var itemTempDate = Sizzle("div.date > span", itemTemp)[0];
                var itemTempVersion = Sizzle("div.version > span", itemTemp)[0];
                var itemTempActivate = Sizzle("div.activate", itemTemp)[0];
                var itemTempThumbnail = Sizzle("div.thumbnail > img", itemTemp)[0];
                var itemTempActivate = Sizzle("div.activate > input", itemTemp)[0];

                /* 描画
                -------------------------------------------------------------------------------*/
                that.styles.each(function () {

                    /* 変数に設定
                    -------------------------------------------------------------------------------*/
                    itemTempName.innerHTML = this.name;
                    itemTempDesc.innerHTML = this.desc;
                    itemTempAuthor.innerHTML = this.author;
                    itemTempDate.innerHTML = this.date;
                    itemTempVersion.innerHTML = this.version;
                    itemTempThumbnail.src = getUrl("images/style/"+this.key+".png");

                    /* 
                    -------------------------------------------------------------------------------*/
                    if (activeStyle == this.key) {
                        itemTempActivate.setAttribute("class", "disable");
                        itemTempActivate.value = "既に有効になっています";
                    }
                    else {
                        itemTempActivate.removeAttribute("class");
                        itemTempActivate.value = "有効にする";
                    }

                    /* イベント用キーの割り当て
                    -------------------------------------------------------------------------------*/
                    itemTempActivate.setAttribute("data-gpeb-settings-active", this.key);

                    /* クローンの作成
                    -------------------------------------------------------------------------------*/
                    var item = itemTemp.cloneNode(true);

                    /* クローンの挿入
                    -------------------------------------------------------------------------------*/
                    listElm.appendChild(item);

                });

                /* イベントの登録
                -------------------------------------------------------------------------------*/
                listElm.addEventListener ("click", function (_event) {

                    var key = _event.target.getAttribute("data-gpeb-settings-active") || "";

                    if (key) {

                        /* スタイルの変更
                        -------------------------------------------------------------------------------*/
                        that.settings.set("style", {
                            "active": key
                        });

                        /* 設定の保存
                        -------------------------------------------------------------------------------*/
                        that.settings.save();

                        /* 他のボタンのスタイルを一括で有効にするにする
                        -------------------------------------------------------------------------------*/
                        Sizzle("div.item > div.activate > input", listElm).forEach(function(_elm){

                            var tKey = _elm.getAttribute("data-gpeb-settings-active");

                            /* 現在のキー
                            -------------------------------------------------------------------------------*/
                            if (tKey == key) {
                                _elm.setAttribute("class", "disable");
                                _elm.value = "既に有効になっています";
                            }

                            /* それ以外
                            -------------------------------------------------------------------------------*/
                            else {
                                _elm.removeAttribute("class");
                                _elm.value = "有効にする";
                            }
                        });
                    }

                }, true);
            },


            /* 更新履歴
            -------------------------------------------------------------------------------*/
            history: function () {

                /* 追加を行うリスト
                -------------------------------------------------------------------------------*/
                var listElm = Sizzle("#gpeb-settings-window-content-history-items")[0];

                /* history.txtの読み込み
                -------------------------------------------------------------------------------*/
                var url = getUrl("history.txt");

                /* 読み込み
                -------------------------------------------------------------------------------*/
                ajaxLoad(url, function () {
                    listElm.innerHTML = "<pre>"+this+"</pre>";
                });

            },


            /* 補助
            -------------------------------------------------------------------------------*/
            other: function () {

                /* アイテム取得
                -------------------------------------------------------------------------------*/
                var items = Sizzle("#gpeb-settings-window-content-other-inner > label.item > input");

                /* 関数
                -------------------------------------------------------------------------------*/
                var func = function (_event) {

                    /* データの取得
                    -------------------------------------------------------------------------------*/
                    var name = _event.target.getAttribute("name");
                    var isChecked = _event.target.checked;

                    /* モデルへデータを設定
                    -------------------------------------------------------------------------------*/
                    var object = {};
                    object[name] = isChecked ? 1 : 0;
                    that.settings.set("other", object);

                    /* 保存
                    -------------------------------------------------------------------------------*/
                    that.settings.save();

                    /* テスト
                    -------------------------------------------------------------------------------*/
                    // console.log("event", _event.target, _event.target.checked);


                };

                /* 現在の状態を反映とイベントの登録
                -------------------------------------------------------------------------------*/
                items.forEach(function (_elm) {

                    /* 反映
                    -------------------------------------------------------------------------------*/
                    var name = _elm.getAttribute("name");
                    
                    /* 当て込み
                    -------------------------------------------------------------------------------*/
                    var isChecked = that.settings.get("other")[name];
                    if (isChecked) {
                        _elm.setAttribute("checked", "checked");
                    }
                    else {
                        _elm.removeAttribute("checked");
                    }


                    /* イベント登録
                    -------------------------------------------------------------------------------*/
                    _elm.addEventListener ("click", func, false);
                });
            },


            /* カスタムボタン
            -------------------------------------------------------------------------------*/
            custombtn: function () {

                /* カスタムボタンリスト
                -------------------------------------------------------------------------------*/
                var listElm = Sizzle("#gpeb-settings-window-content-custombtn-items")[0];

                /* テンプレート
                -------------------------------------------------------------------------------*/
                var itemTemp = domParseFromString([
                    '<div class="item">',
                        '<div class="name"></div>',
                        '<div class="desc"></div>',
                        '<div class="link"><a name="remove" href="javascript:;">削除</a></div>',
                        '<div class="link"><a name="edit" href="javascript:;">編集</a></div>',
                        '<div class="link down"><a name="down" href="javascript:;">▼</a></div>',
                        '<div class="link"><a name="up" href="javascript:;">▲</a></div>',
                        '<div class="clear"></div>',
                    '</div>'
                ].join(""));

                /* アイテムテンプレートの変数
                -------------------------------------------------------------------------------*/
                var itemTempName = Sizzle("div.name", itemTemp)[0];
                var itemTempDesc = Sizzle("div.desc", itemTemp)[0];

                /* カスタムボタンを読み込む
                -------------------------------------------------------------------------------*/
                var customButtonData = new Models("gpebCustomButtonData");
                var customButtons = that.settings.get("custombtn").custombtn || [];

                /* リスト描画
                -------------------------------------------------------------------------------*/
                for (var i = 0; i < customButtons.length; i++) {

                    var name = customButtons[i][0];
                    var bodyId = customButtons[i][1];

                    /* 描画開始
                    -------------------------------------------------------------------------------*/
                    itemTempName.innerText = name.substr(0, 10);
                    if (itemTempName.innerText.length >= 10) {
                        itemTempName.innerText += "...";
                    }
                    itemTempDesc.innerText = customButtonData.get(bodyId).body.replace(/\n/g, " ").substr(0, 32);
                    if (itemTempDesc.innerText.length >= 32) {
                        itemTempDesc.innerText += "...";
                    }
                    itemTempName.setAttribute("data-body-id", String(bodyId));

                    /* クローン生成
                    -------------------------------------------------------------------------------*/
                    var item = itemTemp.cloneNode(true);

                    /* クローンをリストに追加
                    -------------------------------------------------------------------------------*/
                    listElm.appendChild(item);

                };

                /* 開放
                -------------------------------------------------------------------------------*/
                delete customButtons;
                delete customButtonData;

                

                /* ボタンの新規作成ボタンのイベント登録
                -------------------------------------------------------------------------------*/
                Sizzle("#gpeb-settings-custombtn-new-button")[0].addEventListener ("click", function () {
                    
                    /* ボタンの新規作成ウィンドウを開く
                    -------------------------------------------------------------------------------*/
                    var bw = new ButtonWindow();
                    bw.open(null, function () {

                        /* ボタンカウントの取得
                        -------------------------------------------------------------------------------*/
                        var bodyId = that.settings.get("custombtn").count+1;

                        /* カスタムボタンの登録
                        -------------------------------------------------------------------------------*/
                        var customButtons = that.settings.get("custombtn").custombtn || [];
                        customButtons.unshift([
                            this.name,
                            bodyId
                        ]);
                        that.settings.set("custombtn", {
                            custombtn: customButtons,
                            count: bodyId
                        });
                        that.settings.save();

                        /* 投稿内容が格納されるモデルに投稿内容を登録 (メモリ節約のために登録しおわったら破棄されます)
                        -------------------------------------------------------------------------------*/
                        var customButtonData = new Models("gpebCustomButtonData");
                        customButtonData.set(bodyId, {
                            body: this.body
                        });
                        customButtonData.save();
                        delete customButtonData;

                        /* ボタンが作成された
                        -------------------------------------------------------------------------------*/
                        itemTempName.innerText = this.name.substr(0, 10);
                        if (itemTempName.innerText.length >= 10) {
                            itemTempName.innerText += "...";
                        }
                        itemTempDesc.innerText = this.body.replace(/\n/g, " ").substr(0, 32);
                        if (itemTempDesc.innerText.length >= 32) {
                            itemTempDesc.innerText += "...";
                        }
                        itemTempName.setAttribute("data-body-id", String(bodyId));

                        /* クローン生成
                        -------------------------------------------------------------------------------*/
                        var item = itemTemp.cloneNode(true);

                        /* クローンをリストに追加
                        -------------------------------------------------------------------------------*/
                        listElm.insertBefore(item, listElm.firstChild);
                        
                    });
                }, false);

                /* リスト全体のイベントを処理
                -------------------------------------------------------------------------------*/
                listElm.addEventListener ("click", function (_event) {

                    /* リンクタグ
                    -------------------------------------------------------------------------------*/
                    if (_event.target.tagName == "A") {

                        /* アイテムの取得
                        -------------------------------------------------------------------------------*/
                        var item = _event.target.parentNode.parentNode;

                        /* bodyIdの取得
                        -------------------------------------------------------------------------------*/
                        var bodyId = Number(Sizzle("div.name", item)[0].getAttribute("data-body-id"));

                        /* モードの取得
                        -------------------------------------------------------------------------------*/
                        var mode = _event.target.getAttribute("name");

                        switch(mode) {

                            /* アイテムの削除
                            -------------------------------------------------------------------------------*/
                            case "remove":
                                if (confirm("削除しますか？")) {

                                    /* 本文データの削除
                                    -------------------------------------------------------------------------------*/
                                    var customButtonData = new Models("gpebCustomButtonData");
                                    customButtonData.remove(bodyId);
                                    customButtonData.save();
                                    delete customButtonData;

                                    /* リストデータの削除
                                    -------------------------------------------------------------------------------*/
                                    var customButtons = that.settings.get("custombtn").custombtn || [];
                                    var newCustomButtons = [];
                                    customButtons.forEach(function (i) {
                                        if (i[1] != bodyId) {
                                            console.log("i", i);
                                            newCustomButtons.push(i);
                                        }
                                    });
                                    that.settings.set("custombtn", {
                                        custombtn: newCustomButtons
                                    });
                                    that.settings.save();
                                    delete customButtons;

                                    /* 要素の削除
                                    -------------------------------------------------------------------------------*/
                                    item.parentNode.removeChild(item);
                                }
                                break;

                            /* アイテムの編集
                            -------------------------------------------------------------------------------*/
                            case "edit":

                                /* データの取得
                                -------------------------------------------------------------------------------*/
                                var customButtons = that.settings.get("custombtn").custombtn || [];
                                var name = "";
                                for (var i = 0; i < customButtons.length; i++) {
                                    if (customButtons[i][1] == bodyId) {
                                        name = customButtons[i][0];
                                        break;
                                    }
                                };
                                var customButtonData = new Models("gpebCustomButtonData");
                                var body = customButtonData.get(bodyId).body || "";

                                /* 編集ウィンドウを開く
                                -------------------------------------------------------------------------------*/
                                var bw = new ButtonWindow();
                                bw.open({name: name, body: body, bodyId: bodyId}, function () {

                                    var bodyId = this.bodyId;
                                    var name = this.name;
                                    var body = this.body;

                                    /* 本文データの更新
                                    -------------------------------------------------------------------------------*/
                                    var customButtonData = new Models("gpebCustomButtonData");
                                    customButtonData.set(bodyId, {
                                        body: body
                                    });
                                    customButtonData.save();
                                    delete customButtonData;

                                    /* リストデータの更新
                                    -------------------------------------------------------------------------------*/
                                    var customButtons = that.settings.get("custombtn").custombtn || [];
                                    for (var i = 0; i < customButtons.length; i++) {
                                        if (customButtons[i][1] == bodyId) {
                                            customButtons[i][0] = name;
                                            break;
                                        }
                                    };
                                    that.settings.set("custombtn", customButtons);
                                    that.settings.save();


                                    /* 要素の表示更新
                                    -------------------------------------------------------------------------------*/
                                    var itemName = Sizzle("div.name", item)[0];
                                    var itemBody = Sizzle("div.desc", item)[0];

                                    itemName.innerText = name.substr(0, 10);
                                    if (itemName.innerText.length >= 10) {
                                        itemName.innerText += "...";
                                    }
                                    itemBody.innerText = body.replace(/\n/g, " ").substr(0, 32);
                                    if (itemBody.innerText.length >= 32) {
                                        itemBody.innerText += "...";
                                    }
                                });
                                break;

                            /* 上へ移動
                            -------------------------------------------------------------------------------*/
                            case "up":

                                /* これ以上上へはいけないようにする
                                -------------------------------------------------------------------------------*/
                                if (!item.previousSibling) {
                                    return;
                                }

                                /* データの書き換え
                                -------------------------------------------------------------------------------*/
                                var customButtons = that.settings.get("custombtn").custombtn || [];
                                var newCustomButtons = [];
                                var index = 0;
                                var targetCustomButton = undefined;
                                for (var i = 0; i < customButtons.length; i++) {
                                    if (customButtons[i][1] !== bodyId) {
                                        newCustomButtons.push(customButtons[i]);
                                    }
                                    else {
                                        targetCustomButton = customButtons[i];
                                        index = i;
                                    }
                                }
                                newCustomButtons.splice(index-1, 0, targetCustomButton);
                                that.settings.set("custombtn", {
                                    custombtn: newCustomButtons
                                });
                                that.settings.save();

                                /* 上へ移動
                                -------------------------------------------------------------------------------*/
                                item.parentNode.insertBefore(item, item.previousSibling);
                                break;

                            case "down":

                                /* これ以上下へはいけないようにする
                                -------------------------------------------------------------------------------*/
                                if (!item.nextSibling) {
                                    return;
                                }

                                /* データの書き換え
                                -------------------------------------------------------------------------------*/
                                var customButtons = that.settings.get("custombtn").custombtn || [];
                                var newCustomButtons = [];
                                var index = 0;
                                var targetCustomButton = undefined;
                                for (var i = 0; i < customButtons.length; i++) {
                                    if (customButtons[i][1] !== bodyId) {
                                        newCustomButtons.push(customButtons[i]);
                                    }
                                    else {
                                        targetCustomButton = customButtons[i];
                                        index = i;
                                    }
                                }
                                newCustomButtons.splice(index+1, 0, targetCustomButton);
                                that.settings.set("custombtn", {
                                    custombtn: newCustomButtons
                                });
                                that.settings.save();

                                /* 上へ移動
                                -------------------------------------------------------------------------------*/
                                item.parentNode.insertBefore(item, item.nextSibling.nextSibling);
                                break;

                        }
                    }
                }, true);


            }
        };
    },

    /* 設定画面を開く
    -------------------------------------------------------------------------------*/
    open: function () {

        /* 背景作成
        -------------------------------------------------------------------------------*/
        this.back = document.createElement("div");
        this.back.setAttribute("id", "gpeb-back");
        document.body.appendChild(this.back);

        /* 画面構成
        -------------------------------------------------------------------------------*/
        this.elm.style.display = "block";
        this.content.innerHTML = this.menuContents.list;
        var width = document.body.clientWidth;
        var height = window.innerHeight;
        this.elm.style.left = ((width-640)/2)+"px";
        this.elm.style.top = ((height-480)/2)+"px";

        /* 
        -------------------------------------------------------------------------------*/
        this.menuFunctions["list"].call(this.menuContents.list);
    },

    /* 閉じる
    -------------------------------------------------------------------------------*/
    close: function () {

        this.back.parentNode.removeChild(this.back);
        this.elm.parentNode.removeChild(this.elm);

    }
}
/* 設定ファイルの読み込み
-------------------------------------------------------------------------------*/
var settings = new Models("gpebSettings");

/* デフォルト設定
-------------------------------------------------------------------------------*/
settings.default("button", "showButtons", {
    "imageOpen": 1, 
    "imageDownload": 1, 
    "mute": 1, 
    "hatena": 1, 
    "twitter": 1, 
    "facebook": 1, 
    "tumblr": 1, 
    "pinterest": 1, 
    "pocket": 1, 
    "circleCount": 1, 
    "ripples": 1, 
    "oh": 1, 
    "fuu": 1, 
    "gununu": 1, 
    "dokoina": 1, 
    "oran": 1, 
    "nurupo": 1, 
    "ga": 1
});
settings.default("other", "shiftenter", 1);
settings.default("other", "autoreload", 1);
settings.default("style", "active", "default");
settings.default("custombtn", "custombtn", []);
settings.default("custombtn", "count", 0);

/* デフォルト設定
-------------------------------------------------------------------------------*/
var defaultSettings = new Models([
      {
            key: "drawSpeed",
            speed: 500
      }
]);



/* CSSTheme
-------------------------------------------------------------------------------*/
var cssThemes = new Models([
    {
        key: "default",
        name: "Google+",
        desc: "Google+標準のスタイルです",
        date: "2013/05/15",
        author: "Google+",
        styleUrl: "",
        authorUrl: "",
        version: "3",
        css: [
            ""
        ]
    },
    {
        key: "gpeb",
        name: "Google+ Extreme Button",
        desc: "Google+ Extreme Button標準のスタイルです",
        date: "2013/06/30",
        author: "Takehiro Takahashi",
        styleUrl: "",
        authorUrl: "",
        version: "1.0.0",
        css: [
            "#content>div, #contentPane div[role='region']>div:nth-of-type(1)>div:nth-of-type(3),div[guidedhelpid='streamcontent']>div:nth-of-type(2)>div>div, #content>div{background:#efefef!important;background-color:#efefef!important}div[id^='update']>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3){border-bottom:0 !important}div[id^='update']>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)+div,#content>div:nth-of-type(2)>div:nth-of-type(1){border-top:1px solid #e5e5e5}div[id^='update'] div{box-shadow:0}div[id^='update']>div,div[data-iid]>div,div[guidedhelpid='sharebox_launcher']>div{box-shadow:0 1px 2px rgba(0,0,0,0.1)}div[id^='update'],div[id^='update']>div:nth-of-type(2)>:first-child{background:0;background-color:none}div[data-iid]{outline:0}div[data-iid]>div,div[id^='update']>div,div[guidedhelpid='sharebox_launcher']>div{border-bottom-width:1px}div[guidedhelpid='sharebox_launcher']{box-shadow:none !important}div[id^='update']>div:nth-of-type(2){border-top-width:1px;border-radius:3px}img[oid]{border-radius:5%}a[target='_blank'][tabindex]:link,a[target='_blank'][tabindex]:hover,a[target='_blank'][tabindex]:visited,a.proflink[oid],div[id^='update'] span[role='button'][tabindex],div[id^='update']>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(2) a{color:#427fed !important}a[target='_blank'][tabindex]+div>a:link,a[target='_blank'][tabindex]+div>a:hover,a[target='_blank'][tabindex]+div>a:visited{color:gray !important}div[id^='update']>div:nth-of-type(2) div:not([id]){color:#282828}div[guidedhelpid='sharebox_textarea']{font-size:13px}div[id^='update']>div:nth-of-type(2){border-top:2px solid #b9c5d4 !important}div[id^='update']>div:nth-of-type(2):hover{border-top:2px solid #627fa5 !important}div[aria-live='assertive']>div[role='button']{positon:absolute;left:-9999px}div[guidedhelpid='ribbon_home']>a{background-color:#f5f5f5}div[role='navigation']{-webkit-box-shadow:none !important;box-shadow:none !important;border:1px solid #e5e5e5;height:46px}div[role='navigation'],#content>div:nth-of-type(2)>div:nth-of-type(1){background:#f5f5f5 !important;background-color:#f5f5f5 !important}#content+div>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1){background:0;background-color:none}div[guidedhelpid='profile_name']{color:white !important}div[role='region'] div[guidedhelpid]:not(div[guidedhelpid='profile_name']){color:black !important}div[guidedhelpid='profile_name']{color:white !important}span[role='button']{white-space:nowrap;}div[id^='update-']>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(4){border-top:0!important;}"
        ]
    }
]);

/* 基本CSS
-------------------------------------------------------------------------------*/
var commonCss = [
    "#gpeb-context-menu{position:absolute;top:-9999px;left:-9999px;z-index:10000000;margin-left:116px;margin-top:29px;}",
    "#gpeb-context-menu-arrow{width: 14px;height: 14px;float: left;border: 1px solid transparent;border-left-color: rgb(168, 168, 168);border-top-color: rgb(168, 168, 168);transform: rotate(45deg);-moz-transform: rotate(45deg);-webkit-transform: rotate(45deg);-o-transform: rotate(45deg);-ms-transform: rotate(45deg);background:white;}",
    "#gpeb-context-menu-content{padding-left:7px;padding-right:7px;padding-top:8px;margin-top:7px;padding-bottom:9px;border:1px solid rgb(184, 184, 184);background-color:white;background:white;margin-left:-11px;box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.05);border-radius:3px;}",
    "#gpeb-context-menu-content div.item{float:left;padding-left:2px;padding-right:2px;cursor:pointer;height:20px;line-height:12px;}#gpeb-context-menu-content div.item>div{float:left}#gpeb-context-menu-content div.item>div.icon{margin-top:3px;}#gpeb-context-menu-content div.item>div.name{margin-top:4px;}",
    "#gpeb-context-menu-content div.item:hover{opacity:0.7;}",
    "#gpeb-context-menu-clear{clear:both;}div.clearboth{clear:both;}",
    "#gpeb-settings-window{position: fixed;top0px;left:0px;width:640px;height:480px;background-color:white;z-index:100005;border:1px solid gray;box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.5), 9px 9px 30px rgba(0, 0, 0, 0.2);border-radius: 4px;}",
    "#gpeb-settings-button-window{position: fixed;top0px;left:0px;width:512px;height:387px;background-color:white;z-index:100007;border:1px solid gray;box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.5), 9px 9px 30px rgba(0, 0, 0, 0.2);border-radius: 4px;}",
    "#gpeb-back{background:rgba(0, 0, 0, 0.5);position: fixed;left:0;top:0;width:2000px;height:2000px;z-index:100004}",
    "#gpeb-button-back{position: fixed;left:0;top:0;width:2000px;height:2000px;z-index:100006}",
    "#gpeb-settings-window-menu{width: 146px;float: left;height: 480px;border-right: 1px solid rgb(207, 207, 207);margin-right: 8px;background: rgb(240, 240, 240);border-top-left-radius: 4px;border-bottom-left-radius: 4px;}",
    "#gpeb-settings-window-menu div.gpeb.logo>img{width:110px;height:110px;}",
    "#gpeb-settings-window-menu div.gpeb.logo{margin-top:16px;margin-left:21px;margin-bottom:18px;}",
    "#gpeb-settings-window-menu div.gpeb.logo>div.name{font-weight: bold;font-size: 23px;font-family: Impact;font-style: italic;color: rgb(32, 63, 119);letter-spacing: 3px;margin-left: 5px;}",
    "#gpeb-settings-window-menu div.gpeb.logo>div.ver{font-weight: bold;letter-spacing: 4px;margin-top: -1px;margin-left: 7px;}",
    "#gpeb-settings-window-menu div.item{height: 28px;border-top: 1px solid rgb(194, 194, 194);line-height: 28px;padding-left: 9px;background: rgb(230, 230, 230);cursor:pointer;}",
    "#gpeb-settings-window-menu div.item-close{border-top: 1px solid rgb(194, 194, 194);}",
    "#gpeb-settings-window-menu div.item:hover{background:rgb(209, 209, 209);}",
    "#gpeb-settings-window-menu div.item.active{background:gray;color:white;}",
    "#gpeb-settings-window-close-button{position: absolute;top: 22px;right: 11px;font-size: 36px;line-height: 0px;color: rgb(68, 68, 68);cursor: pointer;}",
    "#gpeb-settings-button-window-close-button{position: absolute;top: 22px;right: 11px;font-size: 36px;line-height: 0px;color: rgb(68, 68, 68);cursor: pointer;}",
    "#gpeb-settings-window-content{float:left;}#gpeb-settings-window-content div.title, #gpeb-settings-button-window > div.title{border-radius:2px;background: gray;color: white;padding: 2px;margin-top: 11px;width: 437px;padding-left: 7px;font-weight: bold;}#gpeb-settings-window-content div.gpeb.desc{margin-top: 7px;padding-left: 1px;margin-bottom: 12px;}",
    "#gpeb-settings-window-content{width:466px;}#gpeb-settings-window-content div.sub-title{border-left: 3px solid gray;padding-left: 4px;margin-bottom: 7px;margin-left:13px;}#gpeb-settings-window-content div.sub-desc{margin-bottom: 26px;margin-left:13px;}",
    "#gpeb-settings-window-content-style-items > div.item div{float:left;}#gpeb-settings-window-content-style-items > div.item{margin-bottom:10px;position:relative;}#gpeb-settings-window-content-style-items > div.item > div{float:left;}#gpeb-settings-window-content-style-items > div.item > div.clear{clear:both;width:100%;height:18px;}#gpeb-settings-window-content-style-items > div.item > div.thumbnail{width:150px;height:100px;border: 1px solid rgb(223, 223, 223);margin-right: 7px;}",
    "#gpeb-settings-window-content-style-items > div.item > div.name{font-size:16px;line-height:16px;width:277px;}",
    "#gpeb-settings-window-content-style-items > div.item > div.desc{font-size:13px;line-height:20px;width:277px;}",
    "#gpeb-settings-window-content-style-items > div.item > div.activate{margin-left:-2px;}",
    "#gpeb-settings-window-content-style-items > div.item > div.author{margin-top:7px;}",
    "#gpeb-settings-window-content-style-items > div.item > div.author, #gpeb-settings-window-content-style-items > div.item > div.date, #gpeb-settings-window-content-style-items > div.item > div.version, #gpeb-settings-window-content-style-items > div.item > div.activate{width: 277px;font-size: 12px;line-height: 13px;}",
    "#gpeb-settings-window-content-style-items > div.item > div.activate > input{cursor:pointer;}",
    "#gpeb-settings-window-content-style-items > div.item > div.activate > input.disable{ opacity:0.5;pointer-events:none;cursor:default; }",
    "#gpeb-settings-window-content-list-items > div.item > label > div{float:left;}#gpeb-settings-window-content-list-items > div.item > label > div.clear{clear:both;}",
    "#gpeb-settings-window-content div.gpeb.list{height: 376px;overflow: auto;border: 1px solid rgb(230, 230, 230);width: 455px;padding: 10px;}",
    "#gpeb-settings-window-content-list-items > div.item > label > div.name{width: 115px;margin-left: 7px;line-height: 15px;font-size: 12px;}",
    "#gpeb-settings-window-content-list-items > div.item > label > div.desc, #gpeb-settings-window-content-list-items > div.item > label > div.show > span{line-height: 15px;font-size: 12px;}",
    "#gpeb-settings-window-content-list-items > div.item > label > div.show{margin-top:-2px;}",
    "#gpeb-settings-window-content-list-items > div.item > label > div.show{float:right}",
    "#gpeb-settings-window-content-list-items > div.item{ height: 17px;clear: both;padding-top: 2px;padding-left: 2px;padding-right: 2px;overflow:hidden; }",
    "#gpeb-settings-window-content-list-items > div.item:hover { background-color: rgb(207, 232, 255);cursor:pointer; }#gpeb-settings-window-content-list-items > div.item *{cursor:pointer;}",
    "#gpeb-settings-window-content-history-items{font-size:12px;}",
    "#gpeb-settings-window-content-other-inner .item{cursor:pointer!important;clear:both;line-height: 27px;display: block;}",
    "#gpeb-settings-window-content-other-inner .item input{cursor:pointer!important;}",
    "#gpeb-settings-window-content-custombtn .gpeb.list {height: 353px!important;margin-top: 5px;}",
    "#gpeb-settings-custombtn-new-button{cursor:pointer;}",
    "#gpeb-settings-button-window > div.title{margin-left: 10px;margin-top: 12px;width: 453px;}",
    "#gpeb-settings-button-window-content{margin-left: 11px;margin-top: 10px;}",
    "#gpeb-settings-button-window-content div.item div.text{font-weight:bold;}",
    "#gpeb-settings-button-window-content div.item.name{margin-bottom:15px;}",
    "#gpeb-settings-button-window-content-name{width:300px;}",
    "#gpeb-settings-button-window-content-body{margin:0px;width: 480px;height: 225px;}",
    "#gpeb-settings-button-window-content div.buttons{text-align: right;margin-right: 13px;}",
    "#gpeb-settings-button-window-content div.buttons > input{cursor:pointer;}",
    "#gpeb-settings-button-window-content-save, #gpeb-settings-button-window-content-cancel{width:80px;}",
    "#gpeb-settings-button-window-content-cancel{margin-right:5px;}",
    "#gpeb-settings-window-content-custombtn-items div.item{height:17px;clear:both;line-height:16px;}",
    "#gpeb-settings-window-content-custombtn-items div.item > div{float: left;overflow:hidden;}",
    "#gpeb-settings-window-content-custombtn-items div.item > div.desc{width: 197px;}",
    "#gpeb-settings-window-content-custombtn-items div.item > div.name{width: 100px;margin-right:15px;}",
    "#gpeb-settings-window-content-custombtn-items div.item > div.link{float: right;margin-left: 10px;}",
    "#gpeb-settings-window-content-custombtn-items div.item > div.link.down > a{vertical-align: -1px;}",
    "#gpeb-settings-window-content-custombtn-items div.item > div.link.down{margin-left:5px;}",
    "#gpeb-settings-window-content-custombtn-items div.item > div.clear{clear:both;}",
    "#gpeb-settings-window-content-custombtn-items div.item:hover { background-color: rgb(207, 232, 255);cursor:pointer; }"
].join("");


/* 要素生成用テンプレート
-------------------------------------------------------------------------------*/
var domTemplates = new Models([
      {
            key: "plusOneAreaItem",
            item: domParseFromString('<div class="dk" role="button" tabindex="0" aria-label="" data-tooltip=""></div>')
      }
]);

/* 既存ボタン
-------------------------------------------------------------------------------*/
var defaultButtons = new Models([
      {
            name: "Google+ Extreme Button",
            desc: "Google+ Extreme Button",
            img: "buttons/mini.png",
            eventId: "openGpeb"
      }
]);

/* メニューアイテム (descの文字制限あり)
-------------------------------------------------------------------------------*/
var menuItems = new Models([

    {
        key: "imageOpen",
        name: "画像を開く",
        desc: "画像を開きます",
        event: "imageOpen",
        img: "buttons/fullsizeimgopen.png",
        type: "image"
    },
    {
        key: "imageDownload",
        name: "画像ダウンロード",
        desc: "画像をダウンロードします",
        event: "imageDownload",
        img: "buttons/fullsizeimgdown.png",
        type: "image"
    },
    {
        key: "mute",
        name: "ミュート",
        desc: "投稿をミュートします",
        event: "mute",
        img: "buttons/mute.png",
        type: "default"
    },
    {
        key: "hatena",
        name: "はてなブックマーク",
        desc: "はてなブックマークに登録します",
        event: "sendHatenaBookmark",
        img: "buttons/hatena.png",
        type: "default"
    },
    {
        key: "twitter",
        name: "Twitter",
        desc: "Twitterに共有します",
        event: "sendTwitter",
        img: "buttons/twitter.png",
        type: "default"
    },
    {
        key: "facebook",
        name: "Facebook",
        desc: "Facebookに共有します",
        event: "sendFaceBook",
        img: "buttons/facebook.png",
        type: "default"
    },
    {
        key: "tumblr",
        name: "Tumblr",
        desc: "Tumblrに共有します",
        event: "sendTumblr",
        img: "buttons/tumblr.png",
        type: "default"
    },
    {
        key: "pinterest",
        name: "Pinterest",
        desc: "Pintarestに共有します",
        event: "sendPinterest",
        img: "buttons/pinterest.png",
        type: "image"
    },
    {
        key: "pocket",
        name: "Pocket",
        desc: "Pocketに共有します",
        event: "sendPocket",
        img: "buttons/ril1.png",
        type: "default"
    },
    {
        key: "circleCount",
        name: "CircleCount",
        desc: "CircleCountを表示します",
        event: "openCircleCount",
        img: "buttons/circlecount.png",
        type: "default"
    },
    {
        key: "ripples",
        name: "リップル",
        desc: "リップルを表示します",
        event: "openRipples",
        img: "buttons/ripples.png",
        type: "default"
    },
    {
        key: "oh",
        name: "oh...",
        desc: "oh...をコメントします",
        event: "sendOh",
        img: "buttons/oh.png",
        type: "default"
    },
    {
        key: "fuu",
        name: "ふぅ...",
        desc: "ふぅ...をコメントします",
        event: "sendFuu",
        img: "buttons/fuu.png",
        type: "default"
    },
    {
        key: "gununu",
        name: "ぐぬぬ",
        desc: "ぐぬぬをコメントします",
        event: "sendGununu",
        img: "buttons/gununu.png",
        type: "default"
    },
    {
        key: "dokoina",
        name: "どこいな",
        desc: "どこいなをコメントします",
        event: "sendDokoina",
        img: "buttons/dokoina.png",
        type: "default"
    },
    {
        key: "oran",
        name: "おらん",
        desc: "おらんをコメントします",
        event: "sendOran",
        img: "buttons/oran.png",
        type: "default"
    },
    {
        key: "nurupo",
        name: "ぬるぽ",
        desc: "ぬるぽをコメントします",
        event: "sendNurupo",
        img: "buttons/nurupo.png",
        type: "default"
    },
    {
        key: "ga",
        name: "ガッ",
        desc: "ガッをコメントします",
        event: "sendGa",
        img: "buttons/ga.png",
        type: "default"
    }
]);

/* innerHTML
-------------------------------------------------------------------------------*/
var innerHTMLs = new Models([
      {
            key: "buttonInner",
            html: '<span class="sr"><span class="qwUpsb"></span><span class="Mm4TO qJGetf"></span></span>'
      }
]);

/* Selector作成
-------------------------------------------------------------------------------*/
var select = new Selector();
select.add("reloadButton", "div[aria-live='assertive'] > div[role='button']", "リロードボタン");
select.add("notificationIframe", "iframe[src*='notifications']", "通知Iframe");
select.add("posts", "div[id^='update']", "ポスト一覧");
select.add("plusOneAreas", "div[id^='update'] > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(3)", "+1エリア一覧");
select.add("topPost", "div[id^='update']:eq(0)", "最初のポスト");
select.add("sendBox", "div[guidedhelpid='sharebox'] div[id*='.f'][g_editable][role='textbox']", "投稿ボックス");
select.add("commentSendBox", "div[id^='update-'] div[id*='.f'][g_editable][role='textbox']", "コメント投稿ボックス");
select.add("sendButton", "div[role='button'][guidedhelpid='sharebutton']", "共有ボタン");


/* Selectorテスト
-------------------------------------------------------------------------------*/
// select.test();




/* 現在のスクロール位置を取得
-------------------------------------------------------------------------------*/
function getScrollPos () {
    if (document.body) {
        return document.body.scrollTop;
    }
    return 0;
}

/* 通知ウィンドウについての詳細情報を取得する
-------------------------------------------------------------------------------*/
function getNotificationStatus () {
    var notificationIframe = select.get("notificationIframe")[0];
    if (notificationIframe) {
        var isHidden = notificationIframe.getAttribute("aria-hidden");
        return {
            isHidden: isHidden
        }
    }
    else {
        return {}
    }

}


/* ウィンドウがアクティブか調べる
-------------------------------------------------------------------------------*/
function getActive () {
    return document.hasFocus();
}


/* 更新ボタンの監視を行う
-------------------------------------------------------------------------------*/
function checkreloadButton (_callBack) {

    logger.add("更新ボタンの監視を開始しています");

    setInterval(function(){

        /* ウィンドウがアクティブではない場合無視 (廃止)
        -------------------------------------------------------------------------------*/
        // if (!getActive()) {
        //     return;
        // }

        /* 通知ウィンドウの情報を取得し、通知ウィンドウが表示されているときは無視する
        -------------------------------------------------------------------------------*/
        var ns = getNotificationStatus();
        if (ns.isHidden === "false") {
            return;
        }

        /* スクロールサイズ150より大きい場合無視する
        -------------------------------------------------------------------------------*/
        if (getScrollPos() > 150 ) {
            return;
        }

        var reloadButton = select.get("reloadButton")[0];
        if (reloadButton) {

            /* クリックを行う
            -------------------------------------------------------------------------------*/
            logger.add("通知更新をおこなっています");
            select.click("reloadButton");
        }
    }, 1000);
}

/* ボタンクリックイベント
-------------------------------------------------------------------------------*/
var buttonClickEvents = {

    /* Google+ Extreme Button メニューを表示
    -------------------------------------------------------------------------------*/
    openGpeb: function (_event, _post) {
        var elm = _event.target;
        var count = 0;
        while(1) {
            if (typeof(elm) == "undefined") {
                break;
            }
            if (elm.tagName == "DIV") {
                menu.popup(elm, _post);
                break;
            }
            else {
                elm = elm.parentNode;
            }
            count++;
            if (count == 30) {
                break;
            }
        }
    },

    /* 画像一括ダウンロード
    -------------------------------------------------------------------------------*/
    imageDownload: function (_event, _post) {
        var gpd = new GetPostData(_post);
        var urls = gpd.getDonwloadImages();
        urls.forEach(function (_url) {
            window.open(_url);
        });
    },

    /* フルサイズ画像を開く
    -------------------------------------------------------------------------------*/
    imageOpen: function (_event, _post) {
        var gpd = new GetPostData(_post);
        var urls = gpd.getImages();
        urls.forEach(function (_url) {
            window.open(_url);
        });
    },

    /* ミュート
    -------------------------------------------------------------------------------*/
    mute: function (_event, _post) {
        var pa = new PostAction(_post);
        pa.mute();
    },

    /* 設定画面を開く
    -------------------------------------------------------------------------------*/
    openSettings: function (_event, _post) {
        var sw = new SettingsWindow({
            styles: cssThemes,
            buttons: menuItems,
            settings: settings
        });
        sw.open();
    },

    /* どこいな
    -------------------------------------------------------------------------------*/
    sendDokoina: function (_event, _post) {
        var ap =  new AutoPost(_post);
        ap.autoPost("どこいな");
    },

    /* ぐぬぬ
    -------------------------------------------------------------------------------*/
    sendGununu: function (_event, _post) {
        var ap =  new AutoPost(_post);
        ap.autoPost("ぐぬぬ");
    },

    /* ふぅ...
    -------------------------------------------------------------------------------*/
    sendFuu: function (_event, _post) {
        var ap =  new AutoPost(_post);
        ap.autoPost("ふぅ...");
    },

    /* oh...
    -------------------------------------------------------------------------------*/
    sendOh: function (_event, _post) {
        var ap =  new AutoPost(_post);
        ap.autoPost("oh...");
    },

    /* ぬるぽ
    -------------------------------------------------------------------------------*/
    sendNurupo: function (_event, _post) {
        var ap =  new AutoPost(_post);
        ap.autoPost("ぬるぽ");
    },

    /* ガッ
    -------------------------------------------------------------------------------*/
    sendGa: function (_event, _post) {
        var ap =  new AutoPost(_post);
        ap.autoPost("ガッ");
    },

    /* おらん
    -------------------------------------------------------------------------------*/
    sendOran: function (_event, _post) {
        var ap =  new AutoPost(_post);
        ap.autoPost("おらん");
    },

    /* リップル
    -------------------------------------------------------------------------------*/
    openRipples: function (_event, _post) {
        var gpd = new GetPostData(_post);
        var url = gpd.getRipplesUrl();
        window.open(url);
    },

    /* はてなブックマーク
    -------------------------------------------------------------------------------*/
    sendHatenaBookmark: function (_event, _post) {
        var gpd = new GetPostData(_post, true);
        var url = "http://b.hatena.ne.jp/add?mode=confirm&is_bm=1&title={{name}}%20%2d%20Google%2b%20%28{{time}}%29%20%2d%20{{body}}&url={{url}}";
        url = template(url, {
            name: gpd.getName(),
            time: gpd.getTime(),
            url: gpd.getUrl(),
            body: gpd.getBody()
        });

        var urlData = gpd.getLink();
        if (urlData) {
           url = "http://b.hatena.ne.jp/add?mode=confirm&is_bm=1&title={{name}}&url={{url}}";
           url = template(url, {
                url: urlData.url,
                name: urlData.name
           });
        }
        window.open(url, "_blank", "width=520, height=600, menubar=no, toolbar=no");
    },


    /* Twitter
    -------------------------------------------------------------------------------*/
    sendTwitter: function (_event, _post) {
        var gpd = new GetPostData(_post, true);
        var url = "https://twitter.com/intent/tweet?text={{body}}&url={{url}}";
        url = template(url, {
            url: gpd.getUrl(),
            body: gpd.getBody()
        });
        window.open(url, "_blank", "width=600, height=340, menubar=no, toolbar=no");
    },

    /* FaceBook
    -------------------------------------------------------------------------------*/
    sendFaceBook: function (_event, _post) {
        var gpd = new GetPostData(_post, true);
        var url = "http://www.facebook.com/sharer/sharer.php?src=bm&v=4&u={{url}}&t=<NAME>%20%2d%20Google%2b%20%28{{time}}%29";
        url = template(url, {
            url: gpd.getUrl(),
            time: gpd.getTime()
        });
        window.open(url, "_blank", "width=600, height=340, menubar=no, toolbar=no");
    },


    /* Pintarest
    -------------------------------------------------------------------------------*/
    sendPinterest: function (_event, _post) {
        var gpd = new GetPostData(_post, true);
        var url = "http://pinterest.com/pin/create/bookmarklet/?media={{img}}&url={{url}}&alt=alt&title={{name}}%20%2d%20Google%2b%20%28{{time}}%29&is_video=false&";
        var opt = {
            url: gpd.getUrl(),
            time: gpd.getTime(),
            name: ""
        }
        var imgs = gpd.getImages();
        imgs.forEach(function(_img){
            opt["img"] = _img;
            pUrl = template(url, opt);
            window.open(pUrl, "_blank", "width=632, height=295, menubar=no, toolbar=no");
        });
    },

    /* Pocket
    -------------------------------------------------------------------------------*/
    sendPocket: function (_event, _post) {
        var gpd = new GetPostData(_post, true);
        // gpd.getLink();
        var url = "https://getpocket.com/save?url={{url}}&title={{name}}%20%2d%20Google%2b%20%28{{time}}%29";
        var opt = {
            url: gpd.getUrl(),
            name: gpd.getName(),
            time: gpd.getTime()
        }

        var urlData = gpd.getLink();
        if (urlData) {
           url = "https://getpocket.com/save?url={{url}}&title={{name}}";
           opt["url"] = urlData.url;
           opt["name"] = urlData.name;
           pUrl = template(url, opt);
           window.open(pUrl, "_blank", "width=500, height=450, menubar=no, toolbar=no");
           return;
        }

        var imgs = gpd.getImages();
        if (imgs.length) {
            imgs.forEach(function(_img){
                opt["url"] = _img;
                pUrl = template(url, opt);
                window.open(pUrl, "_blank", "width=500, height=340, menubar=no, toolbar=no");
            });
        }
        else {
            url = template(url, opt);
            window.open(url, "_blank", "width=500, height=340, menubar=no, toolbar=no");
        }
    },

    /* circleCount
    -------------------------------------------------------------------------------*/
    openCircleCount: function (_event, _post) {
        var gpd = new GetPostData(_post, true);
        var id = gpd.getUserId();
        window.open("http://www.circlecount.com/p/"+id, "_blank", "");
    },

    /* Tumblr
    -------------------------------------------------------------------------------*/
    sendTumblr: function (_event, _post) {
        var gpd = new GetPostData(_post, true);
        


        var url = "http://www.tumblr.com/share?v=3&u={{url}}&t=Google%20Plus%20%28{{time}}%29%20&s={{body}}";
        var opt = {
            url: gpd.getUrl(),
            time: gpd.getTime(),
            body: gpd.getBody()
        }

        var urlData = gpd.getLink();
        if (urlData) {
           var url = "http://www.tumblr.com/share?v=3&u={{url}}&t={{title}}&s={{body}}"; 
           opt["url"] = urlData.url;
           opt["title"] = urlData.name;
           pUrl = template(url, opt);
           window.open(pUrl, "_blank", "width=500, height=450, menubar=no, toolbar=no");
           return;
        }

        var imgs = gpd.getImages();
        if (imgs.length) {
            imgs.forEach(function(_img){
                opt["url"] = _img;
                pUrl = template(url, opt);
                window.open(pUrl, "_blank", "width=500, height=450, menubar=no, toolbar=no");
            });
        }
        else {
            url = template(url, opt);
            window.open(url, "_blank", "width=500, height=450, menubar=no, toolbar=no");
        }
    },



};


/* キーダウンイベント管理
-------------------------------------------------------------------------------*/
function keyDownFunc (_event) {

    /* シフトキーまたはCommandキーまたはCtrlkeyが押された
    -------------------------------------------------------------------------------*/
    var isSpecialKey = _event.shiftKey || _event.metaKey || _event.ctrlKey;

    /* エンターキーが押された
    -------------------------------------------------------------------------------*/
    var isEnter = _event.which == 13;

    /* シフトエンターが押された
    -------------------------------------------------------------------------------*/
    var isSpecialEnter = isSpecialKey && isEnter;


    /* シフトエンターが押された
    -------------------------------------------------------------------------------*/
    if (isSpecialEnter) {
        logger.add("シフトエンターが押されました");
        

        /* 現在アクティブな要素を取得
        -------------------------------------------------------------------------------*/
        var activeElm = document.activeElement;
        if (activeElm.tagName == "IFRAME") {
            var mode = "notify";
            activeElm = _event.target;
        }
        else {
            var mode = "default";
        }
        // debugger;

        /* 指定した要素が何あるかを特定する
        -------------------------------------------------------------------------------*/
        if (activeElm) {
            var name = select.getName(activeElm);
            // debugger;

            if (mode == "default") {
                switch (name) {

                    /* 投稿ボックス
                    -------------------------------------------------------------------------------*/
                    case "sendBox":
                        select.click("sendButton");
                        break;

                    /* コメントボックス
                    -------------------------------------------------------------------------------*/
                    case "commentSendBox":
                        var elm = getPostElement(activeElm);
                        var ap = new AutoPost(elm);
                        ap.post();
                        break;
                }
            }

            /* 通知
            -------------------------------------------------------------------------------*/
            else if (mode == "notify"){

                /* 要素特定
                -------------------------------------------------------------------------------*/
                var elms = Sizzle("div[id*='.f']", activeElm.parentNode);

                /* 入力ボックスにフォーカス
                -------------------------------------------------------------------------------*/
                if (elms.length) {
                    var post = getPostElement(elms[0]);
                    var sendButton = Sizzle("div[id*='.post']", post)[0];
                    click(sendButton);
                }
            }
        }
    }
}



/* Controller作成
-------------------------------------------------------------------------------*/
var cont = new Controller();

/* event.click
-------------------------------------------------------------------------------*/
cont.on(window, "click", function (_event) {
    

    /* メニュー非表示
    -------------------------------------------------------------------------------*/

    var isOpen = menu && menu.checkOpen();
    if (isOpen) {
        if (_event.target !== select.get("reloadButton")[0]) {
            var id = _event.target.id;
            var tagName = _event.target.tagName;
            var className = _event.target.getAttribute("class");
            if (id != "gpeb-context-menu-content" && id != "gpeb-context-menu-arrow" && className != "gpeb item") {
                menu.hide();
            }
        }
        
    }

    var eventName = _event.target.getAttribute("data-gpeb-event") || "";
    if (eventName) {

        if (eventName == "openGpeb" && isOpen) {
            return false;
        }

        if (typeof(buttonClickEvents[eventName]) == "function") {
            var post = Sizzle("#"+getData(_event.target, "gpeb-parent-id"))[0];
            buttonClickEvents[eventName].call(_event, _event, post);
        }
        else {
            alert("未定義のイベント "+eventName+ " を実行しようとしましたが、見つかりませんでした。");
        }
    }
});

/* event.scroll
-------------------------------------------------------------------------------*/
cont.on(window, "scroll", function () {
});

/* event.keydown
-------------------------------------------------------------------------------*/
if (settings.get("other").shiftenter) {
    cont.on(window, "keydown", keyDownFunc );
}

/* 新しい要素が現れた
-------------------------------------------------------------------------------*/
function newNodeEvent (_event) {
    
    /* 新規ポストの監視
    -------------------------------------------------------------------------------*/
    if (this.length) {
        this.forEach(function (_elm) {
            var plusOneAreaNode = Sizzle("div[id^='po-']", _elm);
            if (!plusOneAreaNode.length) {
                return;
            }
            var plusOneArea = plusOneAreaNode[0].parentNode;
            if (plusOneArea && this) {
                button.appendAllButton(_elm, plusOneArea);
            }
        });
    }

    /* 通知IFRAME監視
    -------------------------------------------------------------------------------*/
    if (_event && _event.target.tagName == "IFRAME") {
        var elm = _event.target;
        if ((elm.getAttribute("src")||"").indexOf("notifications") != -1) {
        
            /* 通知IFRAME監視開始
            -------------------------------------------------------------------------------*/
            if (elm.contentWindow) {
                cont.on(elm.contentWindow, "keydown", keyDownFunc);
            }
            else {
                setTimeout(function(){
                    cont.on(elm.contentWindow, "keydown", keyDownFunc);       
                }, 1000);
            }

        }
    }

}



window.onload = function () {

    /* ロギング
    -------------------------------------------------------------------------------*/
    logger = new Logger("Google+ Extreme Button");

    /* デバッグモードがONの場合ロギングを行わない debugger;settings.set("dev", {"isDev": true});
    -------------------------------------------------------------------------------*/
    if (!settings.get("dev").isDev) {
        logger.stop();
    }
    else {
        logger.add("ロギングを開始しました");
    }


    /* CSSテーマを設定
    -------------------------------------------------------------------------------*/
    cssTheme = cssThemes.get(settings.get("style").active);
    css("gpebCss", cssTheme.css.join("\n"));
    setTimeout(function(){  
        css("gpebCss", cssTheme.css.join("\n")+commonCss);
    }, 500);

    /* 更新ボタンの監視を行う
    -------------------------------------------------------------------------------*/
    if (settings.get("other").autoreload) {
        checkreloadButton(function () {
        });
    }

    /* ボタンオブジェクトの作成
    -------------------------------------------------------------------------------*/
    button = new Buttons({
        buttonTemplate: domTemplates.get("plusOneAreaItem").item,
        buttonInnerTemplate: innerHTMLs.get("buttonInner").html
    });

    /* ボタンの追加
    -------------------------------------------------------------------------------*/
    defaultButtons.each(function (i, key) {
        button.add({
            name: this.name,
            desc: this.desc,
            img: this.img,
            eventId: this.eventId
        });
    });

    /* メニューの作成
    -------------------------------------------------------------------------------*/
    menu = new Menu({
        idName: "gpeb-context-menu"
    });

    /* メニューにアイテムを追加
    -------------------------------------------------------------------------------*/
    var showButtons = settings.get("button").showButtons;
    menuItems.each(function () {
        if (showButtons[this.key]) {
            menu.addItem(this);
        }
    });

    /* 設定ボタンの追加
    -------------------------------------------------------------------------------*/
    if (1) {
        menu.addItem({
            name: "設定",
            event: "openSettings",
            img: "buttons/settings.png",
            type: "default"
        });
    }

    /* 監視の開始
    -------------------------------------------------------------------------------*/
    nd = new NewDom(select.get("topPost")[0].parentNode.parentNode);
    nd.watch(newNodeEvent, defaultSettings.get("drawSpeed").speed);

};