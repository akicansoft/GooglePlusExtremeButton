/* グローバル変数
-------------------------------------------------------------------------------*/
var APPNAME = "Google+ Extreme Button";
var VERSION = "3.0";
/*! Sizzle v1.9.4-pre | (c) 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=sizzle.min.map
*/(function(e,t){function n(e,t,n,r){var o,i,u,l,a,c,s,f,p,d;if((t?t.ownerDocument||t:U)!==H&&q(t),t=t||H,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(O&&!r){if(o=Ct.exec(e))if(u=o[1]){if(9===l){if(i=t.getElementById(u),!i||!i.parentNode)return n;if(i.id===u)return n.push(i),n}else if(t.ownerDocument&&(i=t.ownerDocument.getElementById(u))&&j(t,i)&&i.id===u)return n.push(i),n}else{if(o[2])return ot.apply(n,t.getElementsByTagName(e)),n;if((u=o[3])&&S.getElementsByClassName&&t.getElementsByClassName)return ot.apply(n,t.getElementsByClassName(u)),n}if(S.qsa&&(!k||!k.test(e))){if(f=s=G,p=t,d=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){for(c=g(e),(s=t.getAttribute("id"))?f=s.replace(Tt,"\\$&"):t.setAttribute("id",f),f="[id='"+f+"'] ",a=c.length;a--;)c[a]=f+m(c[a]);p=mt.test(e)&&t.parentNode||t,d=c.join(",")}if(d)try{return ot.apply(n,p.querySelectorAll(d)),n}catch(h){}finally{s||t.removeAttribute("id")}}}return w(e.replace(dt,"$1"),t,n,r)}function r(e){return xt.test(e+"")}function o(){function e(n,r){return t.push(n+=" ")>L.cacheLength&&delete e[t.shift()],e[n]=r}var t=[];return e}function i(e){return e[G]=!0,e}function u(e){var t=H.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function l(e,t,n){e=e.split("|");for(var r,o=e.length,i=n?null:t;o--;)(r=L.attrHandle[e[o]])&&r!==t||(L.attrHandle[e[o]]=i)}function a(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:e[t]===!0?t.toLowerCase():null}function c(e,t){return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}function s(e){return"input"===e.nodeName.toLowerCase()?e.defaultValue:t}function f(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||_)-(~e.sourceIndex||_);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function p(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function d(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function h(e){return i(function(t){return t=+t,i(function(n,r){for(var o,i=e([],n.length,t),u=i.length;u--;)n[o=i[u]]&&(n[o]=!(r[o]=n[o]))})})}function g(e,t){var r,o,i,u,l,a,c,s=K[e+" "];if(s)return t?0:s.slice(0);for(l=e,a=[],c=L.preFilter;l;){(!r||(o=ht.exec(l)))&&(o&&(l=l.slice(o[0].length)||l),a.push(i=[])),r=!1,(o=gt.exec(l))&&(r=o.shift(),i.push({value:r,type:o[0].replace(dt," ")}),l=l.slice(r.length));for(u in L.filter)!(o=bt[u].exec(l))||c[u]&&!(o=c[u](o))||(r=o.shift(),i.push({value:r,type:u,matches:o}),l=l.slice(r.length));if(!r)break}return t?l.length:l?n.error(e):K(e,a).slice(0)}function m(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function y(e,t,n){var r=t.dir,o=n&&"parentNode"===r,i=X++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,u){var l,a,c,s=V+" "+i;if(u){for(;t=t[r];)if((1===t.nodeType||o)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||o)if(c=t[G]||(t[G]={}),(a=c[r])&&a[0]===s){if((l=a[1])===!0||l===D)return l===!0}else if(a=c[r]=[s],a[1]=e(t,n,u)||D,a[1]===!0)return!0}}function v(e){return e.length>1?function(t,n,r){for(var o=e.length;o--;)if(!e[o](t,n,r))return!1;return!0}:e[0]}function N(e,t,n,r,o){for(var i,u=[],l=0,a=e.length,c=null!=t;a>l;l++)(i=e[l])&&(!n||n(i,r,o))&&(u.push(i),c&&t.push(l));return u}function b(e,t,n,r,o,u){return r&&!r[G]&&(r=b(r)),o&&!o[G]&&(o=b(o,u)),i(function(i,u,l,a){var c,s,f,p=[],d=[],h=u.length,g=i||E(t||"*",l.nodeType?[l]:l,[]),m=!e||!i&&t?g:N(g,p,e,l,a),y=n?o||(i?e:h||r)?[]:u:m;if(n&&n(m,y,l,a),r)for(c=N(y,d),r(c,[],l,a),s=c.length;s--;)(f=c[s])&&(y[d[s]]=!(m[d[s]]=f));if(i){if(o||e){if(o){for(c=[],s=y.length;s--;)(f=y[s])&&c.push(m[s]=f);o(null,y=[],c,a)}for(s=y.length;s--;)(f=y[s])&&(c=o?ut.call(i,f):p[s])>-1&&(i[c]=!(u[c]=f))}}else y=N(y===u?y.splice(h,y.length):y),o?o(null,u,y,a):ot.apply(u,y)})}function x(e){for(var t,n,r,o=e.length,i=L.relative[e[0].type],u=i||L.relative[" "],l=i?1:0,a=y(function(e){return e===t},u,!0),c=y(function(e){return ut.call(t,e)>-1},u,!0),s=[function(e,n,r){return!i&&(r||n!==P)||((t=n).nodeType?a(e,n,r):c(e,n,r))}];o>l;l++)if(n=L.relative[e[l].type])s=[y(v(s),n)];else{if(n=L.filter[e[l].type].apply(null,e[l].matches),n[G]){for(r=++l;o>r&&!L.relative[e[r].type];r++);return b(l>1&&v(s),l>1&&m(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(dt,"$1"),n,r>l&&x(e.slice(l,r)),o>r&&x(e=e.slice(r)),o>r&&m(e))}s.push(n)}return v(s)}function C(e,t){var r=0,o=t.length>0,u=e.length>0,l=function(i,l,a,c,s){var f,p,d,h=[],g=0,m="0",y=i&&[],v=null!=s,b=P,x=i||u&&L.find.TAG("*",s&&l.parentNode||l),C=V+=null==b?1:Math.random()||.1;for(v&&(P=l!==H&&l,D=r);null!=(f=x[m]);m++){if(u&&f){for(p=0;d=e[p++];)if(d(f,l,a)){c.push(f);break}v&&(V=C,D=++r)}o&&((f=!d&&f)&&g--,i&&y.push(f))}if(g+=m,o&&m!==g){for(p=0;d=t[p++];)d(y,h,l,a);if(i){if(g>0)for(;m--;)y[m]||h[m]||(h[m]=nt.call(c));h=N(h)}ot.apply(c,h),v&&!i&&h.length>0&&g+t.length>1&&n.uniqueSort(c)}return v&&(V=C,P=b),y};return o?i(l):l}function E(e,t,r){for(var o=0,i=t.length;i>o;o++)n(e,t[o],r);return r}function w(e,t,n,r){var o,i,u,l,a,c=g(e);if(!r&&1===c.length){if(i=c[0]=c[0].slice(0),i.length>2&&"ID"===(u=i[0]).type&&S.getById&&9===t.nodeType&&O&&L.relative[i[1].type]){if(t=(L.find.ID(u.matches[0].replace(At,St),t)||[])[0],!t)return n;e=e.slice(i.shift().value.length)}for(o=bt.needsContext.test(e)?0:i.length;o--&&(u=i[o],!L.relative[l=u.type]);)if((a=L.find[l])&&(r=a(u.matches[0].replace(At,St),mt.test(i[0].type)&&t.parentNode||t))){if(i.splice(o,1),e=r.length&&m(i),!e)return ot.apply(n,r),n;break}}return R(e,c)(r,t,!O,n,mt.test(e)),n}function T(){}var A,S,D,L,B,I,R,P,$,q,H,M,O,k,F,z,j,G="sizzle"+-new Date,U=e.document,V=0,X=0,J=o(),K=o(),Q=o(),W=!1,Y=function(){return 0},Z=typeof t,_=1<<31,et={}.hasOwnProperty,tt=[],nt=tt.pop,rt=tt.push,ot=tt.push,it=tt.slice,ut=tt.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},lt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",at="[\\x20\\t\\r\\n\\f]",ct="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",st=ct.replace("w","w#"),ft="\\["+at+"*("+ct+")"+at+"*(?:([*^$|!~]?=)"+at+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+st+")|)|)"+at+"*\\]",pt=":("+ct+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+ft.replace(3,8)+")*)|.*)\\)|)",dt=RegExp("^"+at+"+|((?:^|[^\\\\])(?:\\\\.)*)"+at+"+$","g"),ht=RegExp("^"+at+"*,"+at+"*"),gt=RegExp("^"+at+"*([>+~]|"+at+")"+at+"*"),mt=RegExp(at+"*[+~]"),yt=RegExp("="+at+"*([^\\]'\"]*)"+at+"*\\]","g"),vt=RegExp(pt),Nt=RegExp("^"+st+"$"),bt={ID:RegExp("^#("+ct+")"),CLASS:RegExp("^\\.("+ct+")"),TAG:RegExp("^("+ct.replace("w","w*")+")"),ATTR:RegExp("^"+ft),PSEUDO:RegExp("^"+pt),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+at+"*(even|odd|(([+-]|)(\\d*)n|)"+at+"*(?:([+-]|)"+at+"*(\\d+)|))"+at+"*\\)|)","i"),bool:RegExp("^(?:"+lt+")$","i"),needsContext:RegExp("^"+at+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+at+"*((?:-\\d)?\\d*)"+at+"*\\)|)(?=[^-]|$)","i")},xt=/^[^{]+\{\s*\[native \w/,Ct=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Et=/^(?:input|select|textarea|button)$/i,wt=/^h\d$/i,Tt=/'|\\/g,At=RegExp("\\\\([\\da-f]{1,6}"+at+"?|("+at+")|.)","ig"),St=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{ot.apply(tt=it.call(U.childNodes),U.childNodes),tt[U.childNodes.length].nodeType}catch(Dt){ot={apply:tt.length?function(e,t){rt.apply(e,it.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}I=n.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},S=n.support={},q=n.setDocument=function(e){var n=e?e.ownerDocument||e:U;return n!==H&&9===n.nodeType&&n.documentElement?(H=n,M=n.documentElement,O=!I(n),S.attributes=u(function(e){return e.innerHTML="<a href='#'></a>",l("type|href|height|width",c,"#"===e.firstChild.getAttribute("href")),l(lt,a,null==e.getAttribute("disabled")),e.className="i",!e.getAttribute("className")}),S.input=u(function(e){return e.innerHTML="<input>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")}),l("value",s,S.attributes&&S.input),S.getElementsByTagName=u(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),S.getElementsByClassName=u(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),S.getById=u(function(e){return M.appendChild(e).id=G,!n.getElementsByName||!n.getElementsByName(G).length}),S.getById?(L.find.ID=function(e,t){if(typeof t.getElementById!==Z&&O){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},L.filter.ID=function(e){var t=e.replace(At,St);return function(e){return e.getAttribute("id")===t}}):(delete L.find.ID,L.filter.ID=function(e){var t=e.replace(At,St);return function(e){var n=typeof e.getAttributeNode!==Z&&e.getAttributeNode("id");return n&&n.value===t}}),L.find.TAG=S.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==Z?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],o=0,i=t.getElementsByTagName(e);if("*"===e){for(;n=i[o++];)1===n.nodeType&&r.push(n);return r}return i},L.find.CLASS=S.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==Z&&O?n.getElementsByClassName(e):t},F=[],k=[],(S.qsa=r(n.querySelectorAll))&&(u(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||k.push("\\["+at+"*(?:value|"+lt+")"),e.querySelectorAll(":checked").length||k.push(":checked")}),u(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&k.push("[*^$]="+at+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||k.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),k.push(",.*:")})),(S.matchesSelector=r(z=M.webkitMatchesSelector||M.mozMatchesSelector||M.oMatchesSelector||M.msMatchesSelector))&&u(function(e){S.disconnectedMatch=z.call(e,"div"),z.call(e,"[s!='']:x"),F.push("!=",pt)}),k=k.length&&RegExp(k.join("|")),F=F.length&&RegExp(F.join("|")),j=r(M.contains)||M.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},S.sortDetached=u(function(e){return 1&e.compareDocumentPosition(n.createElement("div"))}),Y=M.compareDocumentPosition?function(e,t){if(e===t)return W=!0,0;var r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return r?1&r||!S.sortDetached&&t.compareDocumentPosition(e)===r?e===n||j(U,e)?-1:t===n||j(U,t)?1:$?ut.call($,e)-ut.call($,t):0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,o=0,i=e.parentNode,u=t.parentNode,l=[e],a=[t];if(e===t)return W=!0,0;if(!i||!u)return e===n?-1:t===n?1:i?-1:u?1:$?ut.call($,e)-ut.call($,t):0;if(i===u)return f(e,t);for(r=e;r=r.parentNode;)l.unshift(r);for(r=t;r=r.parentNode;)a.unshift(r);for(;l[o]===a[o];)o++;return o?f(l[o],a[o]):l[o]===U?-1:a[o]===U?1:0},n):H},n.matches=function(e,t){return n(e,null,null,t)},n.matchesSelector=function(e,t){if((e.ownerDocument||e)!==H&&q(e),t=t.replace(yt,"='$1']"),!(!S.matchesSelector||!O||F&&F.test(t)||k&&k.test(t)))try{var r=z.call(e,t);if(r||S.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(o){}return n(t,H,null,[e]).length>0},n.contains=function(e,t){return(e.ownerDocument||e)!==H&&q(e),j(e,t)},n.attr=function(e,n){(e.ownerDocument||e)!==H&&q(e);var r=L.attrHandle[n.toLowerCase()],o=r&&et.call(L.attrHandle,n.toLowerCase())?r(e,n,!O):t;return o===t?S.attributes||!O?e.getAttribute(n):(o=e.getAttributeNode(n))&&o.specified?o.value:null:o},n.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},n.uniqueSort=function(e){var t,n=[],r=0,o=0;if(W=!S.detectDuplicates,$=!S.sortStable&&e.slice(0),e.sort(Y),W){for(;t=e[o++];)t===e[o]&&(r=n.push(o));for(;r--;)e.splice(n[r],1)}return e},B=n.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=B(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r];r++)n+=B(t);return n},L=n.selectors={cacheLength:50,createPseudo:i,match:bt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(At,St),e[3]=(e[4]||e[5]||"").replace(At,St),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||n.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&n.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return bt.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&vt.test(r)&&(n=g(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(At,St).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=J[e+" "];return t||(t=RegExp("(^|"+at+")"+e+"("+at+"|$)"))&&J(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==Z&&e.getAttribute("class")||"")})},ATTR:function(e,t,r){return function(o){var i=n.attr(o,e);return null==i?"!="===t:t?(i+="","="===t?i===r:"!="===t?i!==r:"^="===t?r&&0===i.indexOf(r):"*="===t?r&&i.indexOf(r)>-1:"$="===t?r&&i.slice(-r.length)===r:"~="===t?(" "+i+" ").indexOf(r)>-1:"|="===t?i===r||i.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,o){var i="nth"!==e.slice(0,3),u="last"!==e.slice(-4),l="of-type"===t;return 1===r&&0===o?function(e){return!!e.parentNode}:function(t,n,a){var c,s,f,p,d,h,g=i!==u?"nextSibling":"previousSibling",m=t.parentNode,y=l&&t.nodeName.toLowerCase(),v=!a&&!l;if(m){if(i){for(;g;){for(f=t;f=f[g];)if(l?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[u?m.firstChild:m.lastChild],u&&v){for(s=m[G]||(m[G]={}),c=s[e]||[],d=c[0]===V&&c[1],p=c[0]===V&&c[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){s[e]=[V,d,p];break}}else if(v&&(c=(t[G]||(t[G]={}))[e])&&c[0]===V)p=c[1];else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((l?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++p||(v&&((f[G]||(f[G]={}))[e]=[V,p]),f!==t)););return p-=o,p===r||0===p%r&&p/r>=0}}},PSEUDO:function(e,t){var r,o=L.pseudos[e]||L.setFilters[e.toLowerCase()]||n.error("unsupported pseudo: "+e);return o[G]?o(t):o.length>1?(r=[e,e,"",t],L.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,n){for(var r,i=o(e,t),u=i.length;u--;)r=ut.call(e,i[u]),e[r]=!(n[r]=i[u])}):function(e){return o(e,0,r)}):o}},pseudos:{not:i(function(e){var t=[],n=[],r=R(e.replace(dt,"$1"));return r[G]?i(function(e,t,n,o){for(var i,u=r(e,null,o,[]),l=e.length;l--;)(i=u[l])&&(e[l]=!(t[l]=i))}):function(e,o,i){return t[0]=e,r(t,null,i,n),!n.pop()}}),has:i(function(e){return function(t){return n(e,t).length>0}}),contains:i(function(e){return function(t){return(t.textContent||t.innerText||B(t)).indexOf(e)>-1}}),lang:i(function(e){return Nt.test(e||"")||n.error("unsupported lang: "+e),e=e.replace(At,St).toLowerCase(),function(t){var n;do if(n=O?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===M},focus:function(e){return e===H.activeElement&&(!H.hasFocus||H.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!L.pseudos.empty(e)},header:function(e){return wt.test(e.nodeName)},input:function(e){return Et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:h(function(){return[0]}),last:h(function(e,t){return[t-1]}),eq:h(function(e,t,n){return[0>n?n+t:n]}),even:h(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:h(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:h(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:h(function(e,t,n){for(var r=0>n?n+t:n;t>++r;)e.push(r);return e})}};for(A in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})L.pseudos[A]=p(A);for(A in{submit:!0,reset:!0})L.pseudos[A]=d(A);R=n.compile=function(e,t){var n,r=[],o=[],i=Q[e+" "];if(!i){for(t||(t=g(e)),n=t.length;n--;)i=x(t[n]),i[G]?r.push(i):o.push(i);i=Q(e,C(o,r))}return i},L.pseudos.nth=L.pseudos.eq,T.prototype=L.filters=L.pseudos,L.setFilters=new T,S.sortStable=G.split("").sort(Y).join("")===G,q(),[0,0].sort(Y),S.detectDuplicates=W,"function"==typeof define&&define.amd?define(function(){return n}):e.Sizzle=n})(window);
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

    /* ローテートリミットのセット
    -------------------------------------------------------------------------------*/
    setRotate: function (_limit) {
        this.rotateLimit = _limit;
    },

    /* ロギング
    -------------------------------------------------------------------------------*/
    add: function () {

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

        /* _objsが文字列の場合ローカルストレージからデータを取得する
        -------------------------------------------------------------------------------*/
        if (typeof(_objs) == "string") {
            var jsonText = localStorage[_objs];
            if (jsonText) {
                var objs = JSON.parse(jsonText);
                this.add(objs);
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


        console.log("無限ループ");
        for (var i = 0; i < this.models.length; i++) {
            
            var stack = undefined;
            var nest = 0;
            console.log("this.models[i]", this.models[i]);
            cloneObj.push(this.cloneRecursive({
                key: i,
                value: this.models[i],
                stack: stack,
                nest: nest
            }));

        };
        // console.log("%ccloneobj", "font-size:30px;", cloneObj);
        return new Models(cloneObj);


    },

    /* モデルデータの追加
    -------------------------------------------------------------------------------*/
    add: function (_objs) {

        /* 配列
        -------------------------------------------------------------------------------*/
        if (_objs && _objs.constructor === Array) {

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
                

            };
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
                ret.push(this.ids[args[i]]);
            }

            /* 文字列の場合キーに関連するデータを返す
            -------------------------------------------------------------------------------*/
            else if (typeof(args[i]) === "string") {
                ret.push(this.keys[args[i]]);
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
        if (isForceArray || ret.length == 1) {
            ret = ret[0];
        }

        return ret;

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
        this.models.splice(_model, 1);

        /* モデルの削除
        -------------------------------------------------------------------------------*/
        _model = undefined;

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

    /* 指定したモデルにデータをセット (データセットはこのメソッドから行います)
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
        console.log("書き換え前 model", model);

        /* 変化のあったモデルデータを格納しておく変数
        -------------------------------------------------------------------------------*/
        var changedModels = {};

        /* 書き換え開始
        -------------------------------------------------------------------------------*/
        for (var i in _obj) {
            if (model[i] != _obj[i]) {
                model[i] = _obj[i];
                changedModels[i] = model[i];
            }

        };

        /* デバッグ
        -------------------------------------------------------------------------------*/
        console.log("書き換え後 model", model);

        /* モデルに変化があった場合コールバック関数を実行
        -------------------------------------------------------------------------------*/
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
        };


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
        else{
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
            console.log("elms", elms, _selector);
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
    }
};
/* 設定ファイルの読み込み
-------------------------------------------------------------------------------*/
var settings = new Models("gpebSettings");


/* CSSTheme
-------------------------------------------------------------------------------*/
var cssThemes = new Models([
    {
        key: "default",
        css: [
            "#content > *,",
            "#contentPane div[role='region'] > div:nth-child(1) > div:nth-child(3),",
            "div[guidedhelpid='streamcontent'] > div:nth-child(3) > div > div",
            "{",
            "    background: white;",
            "    background-color: white;",
            "}",
            "",
            "div[id^='update'],",
            "div[id^='update'] > div:nth-child(2) > :first-child",
            "{",
            "    background: none;",
            "    background-color: none;",
            "}",
            "",
            "div[id^='update'] > div:nth-child(2)",
            "{",
            "    border-top-width: 1px;",
            "    border-radius: 3px;",
            "}",
            "",
            "",
            "img[oid]",
            "{",
            "    border-radius: 5%;",
            "}",
            "",
            "a[target='_blank'][tabindex]:link,",
            "a[target='_blank'][tabindex]:hover,",
            "a[target='_blank'][tabindex]:visited,",
            "a.proflink[oid],",
            "div[id^='update'] span[role='button'][tabindex],",
            "div[id^='update'] > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) a",
            "{",
            "    color: #427fed!important;",
            "}",
            "",
            "a[target='_blank'][tabindex]+div > a:link,",
            "a[target='_blank'][tabindex]+div > a:hover,",
            "a[target='_blank'][tabindex]+div > a:visited",
            "{",
            "    color: gray!important;",
            "}",
            "",
            "div[id^='update'] > div:nth-child(2) div:not([id])",
            "{",
            "    color: rgb(40, 40, 40);",
            "}",
            "",
            "",
            "div[guidedhelpid='sharebox_textarea']",
            "{",
            "    font-size: 13px;",
            "}",
            "",
            "div[id^='update'] > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)",
            "{",
            "}",
            "",
            "div[id^='update'] > div:nth-child(2)",
            "{",
            "    border-top: 2px solid #B9C5D4!important;",
            "}",
            "",
            "",
            "div[id^='update'] > div:nth-child(2):hover",
            "{",
            "    border-top: 2px solid #627FA5!important;",
            "}"



        ]
    }
]);



/* Selector作成
-------------------------------------------------------------------------------*/
var select = new Selector();

select.add("reloadButton", "div[aria-live='assertive'] > div[role='button']", "リロードボタン");
select.add("notificationIframe", "iframe[src*='notifications']", "通知Iframe");


/* Selectorテスト
-------------------------------------------------------------------------------*/
select.test();




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


/* 更新ボタンの監視を行う
-------------------------------------------------------------------------------*/
function checkreloadButton (_callBack) {
    setInterval(function(){

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
            select.click("reloadButton");
        }
    }, 1000);
}



/* Controller作成
-------------------------------------------------------------------------------*/
var cont = new Controller();

/* event.click
-------------------------------------------------------------------------------*/
cont.on(window, "click", function (_event) {
    console.log("クリックされました", _event.target);
});

/* event.scroll
-------------------------------------------------------------------------------*/
cont.on(window, "scroll", function () {
    
});



/* CSSテーマを設定
-------------------------------------------------------------------------------*/
var cssTheme = cssThemes.get("default");
css("gpebCss", cssTheme.css.join("\n"));
setTimeout(function(){  
    css("gpebCss", cssTheme.css.join("\n"));
}, 500);

/* 更新ボタンの監視を行う
-------------------------------------------------------------------------------*/
checkreloadButton(function () {
    console.log("更新ボタンが現れました");
});

