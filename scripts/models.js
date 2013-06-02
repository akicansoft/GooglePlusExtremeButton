/* 設定ファイルの読み込み
-------------------------------------------------------------------------------*/
var settings = new Models("gpebSettings");

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
        css: [
            "#content>div, #contentPane div[role='region']>div:nth-of-type(1)>div:nth-of-type(3),div[guidedhelpid='streamcontent']>div:nth-of-type(2)>div>div, #content>div{background:#efefef!important;background-color:#efefef!important}div[id^='update']>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3){border-bottom:0 !important}div[id^='update']>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)+div,#content>div:nth-of-type(2)>div:nth-of-type(1){border-top:1px solid #e5e5e5}div[id^='update'] div{box-shadow:0}div[id^='update']>div,div[data-iid]>div,div[guidedhelpid='sharebox_launcher']>div{box-shadow:0 1px 2px rgba(0,0,0,0.1)}div[id^='update'],div[id^='update']>div:nth-of-type(2)>:first-child{background:0;background-color:none}div[data-iid]{outline:0}div[data-iid]>div,div[id^='update']>div,div[guidedhelpid='sharebox_launcher']>div{border-bottom-width:1px}div[guidedhelpid='sharebox_launcher']{box-shadow:none !important}div[id^='update']>div:nth-of-type(2){border-top-width:1px;border-radius:3px}img[oid]{border-radius:5%}a[target='_blank'][tabindex]:link,a[target='_blank'][tabindex]:hover,a[target='_blank'][tabindex]:visited,a.proflink[oid],div[id^='update'] span[role='button'][tabindex],div[id^='update']>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(2) a{color:#427fed !important}a[target='_blank'][tabindex]+div>a:link,a[target='_blank'][tabindex]+div>a:hover,a[target='_blank'][tabindex]+div>a:visited{color:gray !important}div[id^='update']>div:nth-of-type(2) div:not([id]){color:#282828}div[guidedhelpid='sharebox_textarea']{font-size:13px}div[id^='update']>div:nth-of-type(2){border-top:2px solid #b9c5d4 !important}div[id^='update']>div:nth-of-type(2):hover{border-top:2px solid #627fa5 !important}div[aria-live='assertive']>div[role='button']{positon:absolute;left:-9999px}div[guidedhelpid='ribbon_home']>a{background-color:#f5f5f5}div[role='navigation']{-webkit-box-shadow:none !important;box-shadow:none !important;border:1px solid #e5e5e5;height:46px}div[role='navigation'],#content>div:nth-of-type(2)>div:nth-of-type(1){background:#f5f5f5 !important;background-color:#f5f5f5 !important}#content+div>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1){background:0;background-color:none}div[guidedhelpid='profile_name']{color:white !important}div[role='region'] div[guidedhelpid]:not(div[guidedhelpid='profile_name']){color:black !important}div[guidedhelpid='profile_name']{color:white !important}span[role='button']{white-space:nowrap;}div[id^='update-']>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(4){border-top:0!important;}",
        ]
    }
]);

/* commonCss
-------------------------------------------------------------------------------*/
var commonCss = [
    "#gpeb-context-menu{position:absolute;top:-9999px;left:-9999px;z-index:10000000;margin-left:116px;margin-top:29px;}",
    "#gpeb-context-menu-arrow{width: 14px;height: 14px;float: left;border: 1px solid transparent;border-left-color: rgb(168, 168, 168);border-top-color: rgb(168, 168, 168);transform: rotate(45deg);-moz-transform: rotate(45deg);-webkit-transform: rotate(45deg);-o-transform: rotate(45deg);-ms-transform: rotate(45deg);background:white;}",
    "#gpeb-context-menu-content{padding-left:7px;padding-right:7px;padding-top:8px;margin-top:7px;padding-bottom:9px;border:1px solid rgb(184, 184, 184);background-color:white;background:white;margin-left:-11px;box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.05);border-radius:3px;}",
    "#gpeb-context-menu-content div.item{float:left;padding-left:2px;padding-right:2px;cursor:pointer;height:20px;line-height:12px;}#gpeb-context-menu-content div.item>div{float:left}#gpeb-context-menu-content div.item>div.icon{margin-top:3px;}#gpeb-context-menu-content div.item>div.name{margin-top:4px;}",
    "#gpeb-context-menu-content div.item:hover{opacity:0.7;}",
    "#gpeb-context-menu-clear{clear:both;}div.clearboth{clear:both;}",
    "#gpeb-settings-window{position: fixed;top0px;left:0px;width:640px;height:480px;background-color:white;z-index:99999999999999;border:1px solid gray;box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.5), 9px 9px 30px rgba(0, 0, 0, 0.2);border-radius: 4px;}",
    "#gpeb-back{background:rgba(0, 0, 0, 0.5);position: fixed;left:0;top:0;width:2000px;height:2000px;z-index:1000}",
    "#gpeb-settings-window-menu{width: 128px;float: left;height: 480px;border-right: 1px solid rgb(207, 207, 207);margin-right: 8px;background: rgb(240, 240, 240);border-top-left-radius: 4px;border-bottom-left-radius: 4px;}",
    "#gpeb-settings-window-menu div.gpeb.logo>img{width:110px;height:110px;}",
    "#gpeb-settings-window-menu div.gpeb.logo{margin-top:10px;margin-left:10px;margin-bottom:20px;}",
    "#gpeb-settings-window-menu div.gpeb.logo>div.name{font-weight: bold;font-size: 23px;font-family: Impact;font-style: italic;color: rgb(32, 63, 119);letter-spacing: 3px;margin-left: 5px;}",
    "#gpeb-settings-window-menu div.gpeb.logo>div.ver{font-weight: bold;letter-spacing: 4px;margin-top: -1px;margin-left: 7px;}",
    "#gpeb-settings-window-menu div.item{height: 28px;border-top: 1px solid rgb(194, 194, 194);line-height: 28px;padding-left: 3px;background: rgb(230, 230, 230);cursor:pointer;}",
    "#gpeb-settings-window-menu div.item-close{border-top: 1px solid rgb(194, 194, 194);}",
    "#gpeb-settings-window-menu div.item:hover{background:rgb(209, 209, 209);}",
    "#gpeb-settings-window-menu div.item.active{background:gray;color:white;}",
    "#gpeb-settings-window-close-button{position: absolute;top: 18px;right: 10px;font-size: 36px;line-height: 0px;color: rgb(68, 68, 68);cursor: pointer;}",
    "#gpeb-settings-window-content{float:left;}#gpeb-settings-window-content div.title{background: gray;color: white;padding: 2px;margin-top: 11px;width: 457px;padding-left: 7px;font-weight: bold;}#gpeb-settings-window-content div.desc{margin-top: 7px;padding-left: 1px;margin-bottom: 13px;}",
    "#gpeb-settings-window-content{width:466px;}#gpeb-settings-window-content div.sub-title{border-left: 3px solid gray;padding-left: 4px;margin-bottom: 7px;margin-left:13px;}#gpeb-settings-window-content div.sub-desc{margin-bottom: 26px;margin-left:13px;}"
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

/* メニューアイテム
-------------------------------------------------------------------------------*/
var menuItems = new Models([

    {
        name: "画像ダウンロード",
        event: "imageDownload",
        img: "buttons/FullSizeImgDown.png",
        type: "image"
    },
    {
        name: "ミュート",
        event: "mute",
        img: "buttons/mute.png",
        type: "default"
    },
    {
        name: "はてなブックマーク",
        event: "sendHatenaBookmark",
        img: "buttons/Hatena.png",
        type: "default"
    },
    {
        name: "Twitter",
        event: "sendTwitter",
        img: "buttons/Twitter.png",
        type: "default"
    },
    {
        name: "Facebook",
        event: "sendFaceBook",
        img: "buttons/Facebook.png",
        type: "default"
    },
    {
        name: "Tumblr",
        event: "sendTumblr",
        img: "buttons/Tumblr.png",
        type: "default"
    },
    {
        name: "Pinterest",
        event: "sendPinterest",
        img: "buttons/Pinterest.png",
        type: "image"
    },
    {
        name: "Pocket",
        event: "sendPocket",
        img: "buttons/RIL1.png",
        type: "default"
    },
    {
        name: "CircleCount",
        event: "openCircleCount",
        img: "buttons/CircleCount.png",
        type: "default"
    },
    {
        name: "リップル",
        event: "openRipples",
        img: "buttons/Ripples.png",
        type: "default"
    },
    {
        name: "あいさつ",
        event: "sendAisatsu",
        img: "buttons/Aisatsu.png",
        type: "default"
    },
    {
        name: "oh...",
        event: "sendOh",
        img: "buttons/oh.png",
        type: "default"
    },
    {
        name: "ふぅ...",
        event: "sendFuu",
        img: "buttons/fuu.png",
        type: "default"
    },
    {
        name: "ぐぬぬ",
        event: "sendGununu",
        img: "buttons/gununu.png",
        type: "default"
    },
    {
        name: "どこいな",
        event: "sendDokoina",
        img: "buttons/Dokoina.png",
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
select.test();



