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
            "#content>*,#contentPane div[role='region']>div:nth-of-type(1)>div:nth-of-type(3),div[guidedhelpid='streamcontent']>div:nth-of-type(2)>div>div,{background:#efefef;background-color:#efefef}div[id^='update']>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3){border-bottom:0 !important}div[id^='update']>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)+div{border-top:1px solid #e5e5e5}div[id^='update'] div{box-shadow:0}div[id^='update']>div,div[data-iid]>div,div[guidedhelpid='sharebox_launcher']>div{box-shadow:0 1px 2px rgba(0,0,0,0.1)}div[id^='update'],div[id^='update']>div:nth-of-type(2)>:first-child{background:0;background-color:none}div[data-iid]{outline:0}div[data-iid]>div,div[id^='update']>div,div[guidedhelpid='sharebox_launcher']>div{border-bottom-width:1px}div[guidedhelpid='sharebox_launcher']{box-shadow:none !important}div[id^='update']>div:nth-of-type(2){border-top-width:1px;border-radius:3px}img[oid]{border-radius:5%}a[target='_blank'][tabindex]:link,a[target='_blank'][tabindex]:hover,a[target='_blank'][tabindex]:visited,a.proflink[oid],div[id^='update'] span[role='button'][tabindex],div[id^='update']>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(2) a{color:#427fed !important}a[target='_blank'][tabindex]+div>a:link,a[target='_blank'][tabindex]+div>a:hover,a[target='_blank'][tabindex]+div>a:visited{color:gray !important}div[id^='update']>div:nth-of-type(2) div:not([id]){color:#282828}div[guidedhelpid='sharebox_textarea']{font-size:13px}div[id^='update']>div:nth-of-type(2){border-top:2px solid #b9c5d4 !important}div[id^='update']>div:nth-of-type(2):hover{border-top:2px solid #627fa5 !important}div[aria-live='assertive']>div[role='button']{positon:absolute;left:-9999px}div[guidedhelpid='ribbon_home']>a{background-color:#f5f5f5}div[role='navigation']{-webkit-box-shadow:none !important;box-shadow:none !important;border:1px solid #e5e5e5;height:46px}div[role='navigation'],#content>div:nth-of-type(2)>div:nth-of-type(1){background:#f5f5f5 !important;background-color:#f5f5f5 !important}#content+div>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1){background:0;background-color:none}div[guidedhelpid='profile_name']{color:white !important}div[role='region'] div[guidedhelpid]:not(div[guidedhelpid='profile_name']){color:black !important}div[guidedhelpid='profile_name']{color:white !important}span[role='button']{white-space:nowrap;}"
        ]
    }
]);

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
            name: "どこいな",
            desc: "どこいなを投稿",
            img: "",
            eventId: "sendDokoina"
      },
      {
            name: "どこいな",
            desc: "どこいなを投稿",
            img: "",
            eventId: "sendDokoina"
      },
      {
            name: "どこいな",
            desc: "どこいなを投稿",
            img: "",
            eventId: "sendDokoina"
      },
      {
            name: "どこいな",
            desc: "どこいなを投稿",
            img: "",
            eventId: "sendDokoina"
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


/* Selectorテスト
-------------------------------------------------------------------------------*/
select.test();



