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



