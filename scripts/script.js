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

