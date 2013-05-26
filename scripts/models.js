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



