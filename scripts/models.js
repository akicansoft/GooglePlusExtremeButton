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
        version: "3"
    },
    {
        key: "gpeb",
        name: "Google+ Extreme Button",
        desc: "Google+ Extreme Button標準のスタイルです",
        date: "2013/06/30",
        author: "Takehiro Takahashi",
        styleUrl: "",
        authorUrl: "",
        version: "1.0.0"
    },
    {
        key: "darkstyle",
        name: "Google Plus - Dark Style",
        desc: "目に優しい黒を基調としたスタイルに変更します",
        date: "2013/07/17",
        author: 'あきょぜ',
        styleUrl: "http://userstyles.org/styles/52243/google-plus-dark-style",
        authorUrl: "https://plus.google.com/100524016008639811667/posts",
        version: "0.11.0"
    }
]);

/* テーマCSS
-------------------------------------------------------------------------------*/
var themeCss = "";
switch (settings.get("style").active) {

    /* デフォルト
    -------------------------------------------------------------------------------*/
    case "default":
        themeCss = "";
        break;

    /* Google+ Extreme Button
    -------------------------------------------------------------------------------*/
    case "gpeb":
        themeCss = [
            "#content>div, #contentPane div[role='region']>div:nth-of-type(1)>div:nth-of-type(3),div[guidedhelpid='streamcontent']>div:nth-of-type(2)>div>div, #content>div{background:#efefef!important;background-color:#efefef!important}div[id^='update']>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3){border-bottom:0 !important}div[id^='update']>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(3)+div,#content>div:nth-of-type(2)>div:nth-of-type(1){border-top:1px solid #e5e5e5}div[id^='update'] div{box-shadow:0}div[id^='update']>div,div[data-iid]>div,div[guidedhelpid='sharebox_launcher']>div{box-shadow:0 1px 2px rgba(0,0,0,0.1)}div[id^='update'],div[id^='update']>div:nth-of-type(2)>:first-child{background:0;background-color:none}div[data-iid]{outline:0}div[data-iid]>div,div[id^='update']>div,div[guidedhelpid='sharebox_launcher']>div{border-bottom-width:1px}div[guidedhelpid='sharebox_launcher']{box-shadow:none !important}div[id^='update']>div:nth-of-type(2){border-top-width:1px;border-radius:3px}img[oid]{border-radius:5%}a[target='_blank'][tabindex]:link,a[target='_blank'][tabindex]:hover,a[target='_blank'][tabindex]:visited,a.proflink[oid],div[id^='update'] span[role='button'][tabindex],div[id^='update']>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(2) a{color:#427fed !important}a[target='_blank'][tabindex]+div>a:link,a[target='_blank'][tabindex]+div>a:hover,a[target='_blank'][tabindex]+div>a:visited{color:gray !important}div[id^='update']>div:nth-of-type(2) div:not([id]){color:#282828}div[guidedhelpid='sharebox_textarea']{font-size:13px}div[id^='update']>div:nth-of-type(2){border-top:2px solid #b9c5d4 !important}div[id^='update']>div:nth-of-type(2):hover{border-top:2px solid #627fa5 !important}div[aria-live='assertive']>div[role='button']{positon:absolute;left:-9999px}div[guidedhelpid='ribbon_home']>a{background-color:#f5f5f5}div[role='navigation']{-webkit-box-shadow:none !important;box-shadow:none !important;border:1px solid #e5e5e5;height:46px}div[role='navigation'],#content>div:nth-of-type(2)>div:nth-of-type(1){background:#f5f5f5 !important;background-color:#f5f5f5 !important}#content+div>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1){background:0;background-color:none}div[guidedhelpid='profile_name']{color:white !important}div[role='region'] div[guidedhelpid]:not(div[guidedhelpid='profile_name']){color:black !important}div[guidedhelpid='profile_name']{color:white !important}span[role='button']{white-space:nowrap;}div[id^='update-']>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(4){border-top:0!important;}"
        ];
        break;

    /* Dark Style
    -------------------------------------------------------------------------------*/
    case "darkstyle":
        themeCss = [
            'a[href^="http://"],a[href^="https://"],a[href^="events/"]{color:orange !important}.XI,.pu{background:#111 !important}.WYnijb .Iu{color:cyan !important}.VK{padding-top:2px !important;background:#000 !important;outline:2px solid #d43 !important;color:#D43 !important}.kc .zc{background-color:#111 !important;color:white !important;box-shadow:0 0 5px whtie;-webkit-animation-name:pulse;-webkit-animation-duration:.3s;-webkit-animation-iteration-count:infinite;-webkit-animation-timing-function:ease-in-out;-webkit-animation-direction:alternate;-webkit-animation-delay:0}.kc .zc:hover{-webkit-animation-name:none;opacity:1}div.c-r{background:#444 !important}div.c-r-ob div.c-r-na{border-color:#444 transparent !important}div.kj{color:white !important}div.YuLBnf{color:gray !important}input[label="Search"]{background:#111 !important;color:white !important}.Rm{background:#111 !important;box-shadow:0 0 8px white inset}div.aspg-comment-textarea{background:#111 !important;color:#DDD !important}.mc3Dkf,.lqNDB,.rGnBUc .W0ihZd,.Iba,.NZa,.Iu,.pU{color:cyan !important}.wlAXsf,.IKxMA{color:white !important}div[dir="ltr"]:not([role="textbox"])>div{color:yellow !important}.joyjKd,.iqnzL{color:white !important}#iyc-content>div,#iyc-content>div h3,#iyc-content>div span{background:#333 !important}#iyc-content .QuDYv{background:transparent !important}#iyc-content .jbMSSd{background:#DDD !important}#iyc-setting-btn{width:24px !important;padding-right:4px !important}.LTa{border:none !important}div#gbx1{background:#222 !important;border-bottom-color:cyan !important}#gbg6 #gbi4t{color:cyan !important}div#gbqfqwb,input#gbqfq{background:#111 !important}#content>div:nth-child(2)>script+div{background:#333 !important}div[guidedhelpid="appindicator_content"]>div:nth-child(2){color:white !important}div[role="region"],.pFZ7Ne,div[guidedhelpid^="ribbon"],div[guidedhelpid="circles"],div[guidedhelpid="localpin"],div[navid="4"],.wH3YRe{background:#333 !important}#contentPane>div:first-child>div>div[role="navigation"],.iYjCM.MNHgse,.iYjCM,.Um8btf{background:#333 !important;box-shadow:1px 0 3px white}.Um8btf{box-shadow:none}.a-u-q-b-W{color:yellow !important}div.Teb{background:#333 !important}div.q0b{color:yellow !important}#notify-widget-pane+div a[href="notifications/all"],#notify-widget-pane+div a[href="stream"],.rmzEed{color:cyan !important}span.a-n-E,span.Xea{color:rgba(0,0,0,0)}div.QPb,span.UY4Ytf{background:transparent !important;color:#E65 !important;font-weight:bold !important;font-size:medium}#notify-widget-pane+div>div:nth-child(2)>div:nth-child(2),.raa,.kJHn5,.Web,.ao9vbb,.PLI4je,.nHvBT,.DwCU9e,.epxpje{background:#111 !important}.zFi7Gc{color:yellow !important;font-weight:bold !important}.gbmac{border-bottom-color:#111 !important}.F6,.Xbb,.fRPVBb{background:#444 !important}#notify-widget-pane+div div.en{background:#222 !important}#notify-widget-pane+div div.mfa{background:#444 !important}#notify-widget-pane+div .xI{background:#333 !important}#notify-widget-pane+div div.mfa div.lfa,#notify-widget-pane+div div.mfa span.Di,#notify-widget-pane+div div.mfa div.Laa,#notify-widget-pane+div div.mfa div.Maa,.VC,.Al,.jp5MGf,.X7,.gi,.iF,.WXGaSb,.eGwyxf,.ed76ne{color:white !important}#notify-widget-pane+div div.mfa span.ue,#notify-widget-pane+div div.mfa span.yc,#notify-widget-pane+div div.mfa div.Maa>span,.iRmfFd,.mc,.Sc .Z4,.en .Sc .ue,a[href*="/posts/"],#notify-widget-pane+div td.Paa,.Gg,.NLlYtc,a[href="circles/addedyou"]{color:yellow !important}.Pvkdsd,.kJHn5,.Sb,.ChZ7Rc,.ws,#notify-widget-pane+div div[id^="update-"]>div>div:not([role="menuitem"]),.aFtpL{background:#333 !important}#notify-widget-pane+div div[id^="update-"]>div>div>div:nth-child(4){background:#444 !important}div.wTqBHd{background:#999 !important;-webkit-box-shadow:0 0 10px white}div.epxpje>div:last-child{padding-top:15px !important}div.epxpje>div:last-child>div:first-child{-webkit-box-shadow:0 0 10px cyan;outline:solid 2px white !important}div.bsUsrd{background:#222 !important}div.gb_ca,a#gbf1>span+span+span+div[class="gb_Z"]>div:first-child{background-image:url(https://dl.dropboxusercontent.com/u/106963946/BELL.gif) !important;background-color:white !important;-webkit-border-radius:3px 3px 3px;opacity:.8}div.gb_ea div.gb_ca,a#gbf1>span+span+span+div>div:first-child{background-image:url(https://dl.dropboxusercontent.com/u/106963946/NOTIC-BELL.gif) !important}div.gb_ba:hover{opacity:1;-webkit-box-shadow:0 0 8px yellow}#notify-widget-pane+div .QnDDhe.TZ6m2b,#notify-widget-pane+div .QnDDhe{background:white !important;-webkit-border-radius:3px 3px 3px;-webkit-transition:.3s ease-in-out;opacity:.5}#notify-widget-pane+div .QnDDhe.TZ6m2b:hover,#notify-widget-pane+div .QnDDhe:hover{-webkit-transition:.3s ease-in-out;opacity:1}div.gb_da{margin-left:3px !important}div.aFtpL>div:last-child{padding-top:10px !important}div.aFtpL>div:nth-child(2){border-bottom:2px solid #DDF !important;-webkit-box-shadow:0 0 10px}img.JOmGfb{background-color:white !important;-webkit-border-radius:5px 5px 5px;-webkit-box-shadow:0 0 5px white}div.vSw8qf{box-shadow:none;-webkit-box-shadow:none}#contentPane,div[id$="-posts-page"],.K9UU0 .ee3yFe{background:#111 !important}.g-wc{color:cyan !important}#contentPane div[data-iid]>div{background:#333 !important}#content #contentPane div[data-iid="sii2:111"]>div{background:transparent !important}.lUgZQb .tx,.lUgZQb .iU04E,.cHz88d,.A4Urud .k1 .Nd,#contentPane div[data-iid] h3{background:#333 !important;color:yellow !important}a[href^="s/"]{color:orange !important}#contentPane div[data-iid] h3+a{background:transparent !important}a[href^="./"]{color:white !important;font-size:14px !important}h3>a[href^="./"]{color:white !important;font-size:18px !important;font-family:serif !important}#contentPane div[id^="update-"]>div>div:not([role="menuitem"]),.ChZ7Rc{background:#333 !important}.Vra{background:transparent !important}div.Fg{background:#000 !important}h3.cK{color:cyan !important}.RudiRe .JDeJO,.yf .JDeJO,.x4Cs6 .JDeJO{background:#111 !important}#contentPane div[id^="update-"]>div>div>div+div>div:first-child>div:first-child>div:first-child>div,#contentPane div.VC,#contentPane div.z0dd7c,#contentPane .gK,.z0dd7c{color:white !important}div.mzViqf,a.XCijsb[href^="photos/"]{text-shadow:1px 1px 3px black !important}div[itemtype="http://schema.org/Place"]{background:rgba(64,64,64,.8)}.YSeXdb{border-top-color:rgba(64,64,64,.8)}.L7GBbc{background:transparent !important}#contentPane div[id^="update-"]>div:first-child>div:first-child>div:first-child>div:first-child div:first-child{background:#000 !important}#contentPane div[id^="update-"]>div:first-child>div:nth-child(2)>div:nth-child(2),#contentPane div[id^="update-"] div.ZX,div.by0y2e{background:#333 !important}#contentPane div[id^="update-"] div.FE{background:#444 !important}#contentPane div[id^="update-"]:nth-child(4n+1){border-top:double 5px green}#contentPane div[id^="update-"]:nth-child(4n+2){border-top:double 5px yellow}#contentPane div[id^="update-"]:nth-child(4n+3){border-top:double 5px blue}#contentPane div[id^="update-"]:nth-child(4n+4){border-top:double 5px red}div.gbUDje{color:cyan !important}span.proflinkPrefix{color:white !important}div.XHhIId,a[href^="communities/"]>div:not(div[role="button"]){color:cyan !important;font-size:14;font-family:serif}div.oMD2Qc{background-color:#222 !important}div.WajHbc{background-color:#333 !important}div.u8Ussb{color:yellow !important}#content #contentPane .c-r-x-s{background:transparent !important}span.w8ebxb{border-right-color:white !important;color:yellow !important}a[href^="/s/"]:not([data-topicid^="/hashtag/"]){color:yellow !important}span.i5PMne{background-color:rgba(255,255,255,0.8) !important}#contentPane div[id^="update-"]>div>div>div:nth-child(4),#contentPane div[id^="update-"]>div:first-child>div:nth-child(2)>div:nth-child(2)>div:nth-child(3)>div:nth-child(2){background:#444 !important}div.vFgtwf{color:white !important}.iP,.tr,.sF,.Su{background:transparent !important}span.Oi,span.a-n{color:yellow !important}a[href^="communities/"]{color:cyan !important}span.Hm{background-color:rgba(255,255,255,0.8) !important}#contentPane span.qu{background-color:#333 !important}.ZuZuKf,.mEa{background:#111 !important;color:#AAA !important}.ZuZuKf:hover{-webkit-transition:.5s ease-in-out;color:yellow !important}.i-j-h-tb-x{border:none !important}.o7Z9md .s2CTDf{border-top-color:#111 !important}div.T7BsYe,label.PuGqKf{color:white !important}div[guidedhelpid="sharebox_launcher"]>div:first-child,.EyKftc,div[guidedhelpid="streamcontent"] div[guidedhelpid="sharebox"]>div:first-child,.Xeb{background-color:#333 !important}div[guidedhelpid="streamcontent"]>div:nth-child(2)>div:first-child{-webkit-box-shadow:0 2px 40px 0 rgba(128,128,128,.4)}.psY1T,div[guidedhelpid="sharebox_editor"]{background:#222 !important;color:white !important}.i-j-h-tb-x,#contentPane div[guidedhelpid="shareboxcontrols"]{background:#111 !important}.rTooOe{border-bottom-color:#333 !important}.N0VjVc{color:#999 !important}.o7Z9md .N0VjVc,.XqcYGb:hover .N0VjVc,.xIfz5b,.Z64LDd,span[style^="white-"],input{color:white !important}div.BA{background:#333 !important}span.LS{color:white !important}div.ZS{background:#444 !important}.XQ,.uy,.WQ{background:transparent !important}.SIG8Md{background:#fff !important}.SIG8Md:hover{-webkit-transition:.5s ease-in-out;color:#a22 !important}td.hra,div.kra{color:yellow !important}td.Uchgqe,.JWBAD{color:white !important}.U-L-Y-A{color:cyan !important}.gK{color:yellow !important}.Tk .U-L-Y,.OA9gYe .U-L-Y,.Je,.hL{background:#333 !important}.A4Urud,.r6Rtbe{background:#333 !important;color:white !important}.K3qwJd,.RvPkz,.RfmIqe>.yb3YEe{color:white !important}.YDPS9c{color:yellow !important}.ZMDitf,.RfmIqe>.vp,.HzBJyd,.PPX3ub{color:cyan !important}.K9UU0{background:#111 !important}.U-L-Y,.U-L,.U-L-x,.U-L-Ba{background:#444 !important;color:white}.g-cPhekf-q-b-W{color:yellow !important}.nf0Eb{background:#333 !important;color:whtie !important}div[data-comm]{box-shadow:0 0 3px #DDD;background:#333 !important}div.alMQ0d{background:#333 !important}div.qK2Z3e{color:#FFF !important}div.V63yzd{color:#AAA !important}#contentPane a.gHWUHd{color:yellow !important}#contentPane a.pbvNBe{color:#DDD !important}a[href^="communities/"]>b,.HDROCd{color:#FFF !important}.L4aqJd .c-cc{background:#222 !important}.dBOzgd{background:#444 !important}.VOr1fd{background:#333 !important}span.VWX3g,div.ErcbDf{color:white !important}.BHLXFe{color:#db4a37 !important}.b0ktUe,.fgOVAe{background-color:rgba(255,255,255,0.8) !important}.UQfhjb{background:#333 !important}.KTa,.izvzEc{background:#111 !important}.YMtlse,div.CY6ps{color:cyan !important}a.mzSKBf,div.VLLqff,div.odyM,div.lfa,span.ue,a.cErKcb{color:yellow !important}div.HLIkQb,div.WJV4Oe,.ib0ZP td,.hHv4jc{color:white !important}div.Ow8Prf{color:#999 !important}a[class="vWAj6d CyxYrf c-b c-b-T FW9qdb"]{color:black !important}.JH{background:#333 !important}div:not(div[id="notify-widget-pane"]) .Yy{border-left:white solid 1px !important;border-right:white solid 1px !important}.HRLuZ,.jyYWcd{background:black !important;color:white !important}#contentPane div[guidedhelpid="streamcontent"]>div:nth-of-type(2)>div>div{background:transparent !important;background-color:transparent !important}#content div[role=\'navigation\'],div.ORa>#content>div:nth-of-type(2)>div:nth-of-type(1){background:#444 !important;border-top:none !important}#content div[guidedhelpid=\'ribbon_home\']>a{background:#333 !important}#content a[href^="communities/"]>div.XHhIId{color:cyan !important;font-weight:bold}#content a[target=\'_blank\'][tabindex]:link,#content a[target=\'_blank\'][tabindex]:hover,#content a[target=\'_blank\'][tabindex]:visited,#content a.proflink[oid],#content div[id^=\'update\'] span[role=\'button\'][tabindex],#content span.Ni,span[role="button"]>span.Ni,.iP{color:yellow !important}#content div[id^=\'update\']>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(2)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(1)>div:nth-of-type(2) a{color:orange !important}#content div.Bo,#content div.cl{color:#E77 !important;font-weight:bold}#content #contentPane div[id^=\'update\']>div:nth-of-type(2) div.VC>div:not([id]){color:white !important}.U4{background:#333 !important;color:white !important}.lqhbae,.U4 .sATDMb{color:yellow !important}.juUPbb,.iU04E,#content a.YO{color:white !important}.iia,.cia,.W3DgQb{background-color:white !important}.PCmoH:before,.qi4WVc:before{background:none !important}.PCmoH,.qi4WVc{background-color:#333 !important}}@-moz-document domain("plus.google.com"),domain("this.is.Hangout"){body.j-Mk-br,.El-gg{background:#222 !important;color:white !important}body.j-Mk-br div.Wa-m,body.j-Mk-br div.Za-pe-T{background:#333 !important}body.j-Mk-br .Kc-ib{color:#DDD !important}body.j-Mk-br .j-Ba-ya>*>*>.j-Ba-m,.j-Ba-Zg>*>*>*>*>*>.j-Ba-t,.pe-uc{background:#111 !important}body.j-Mk-br div.g-mb-Ca{background:#444 !important;color:yellow !important;border-color:cyan !important}body.j-Mk-br div.kc-na{background:transparent !important}body.j-Mk-br div.kc-xi-m{border-color:transparent !important}body.j-Mk-br .Kc-Fa,body.j-Mk-br .Kc-Ca{color:#d86462 !important;font-size:larger !important}body.j-Mk-br div.ya-u-x-ff{background:#444 !important}body.j-Mk-br div.u-x-Y-t:hover{-webkit-transition:.2s ease-in-out;background:#DDD !important;color:black !important;border-color:#38D !important}body.j-Mk-br .j-u-x-Y-B div.u-x-Y-t:hover{-webkit-transition:.2s ease-in-out;background:#111 !important;border-color:orange !important}body.j-Mk-br .j-u-x-Y-B div.u-x-Y-t:hover .u-x-Y-A,body.j-Mk-br .j-u-x-Y-B div.u-x-Y-t:hover .j-u-Lg-Lm-hd{-webkit-transition:.2s ease-in-out;color:white !important}}@-moz-document domain("plus.google.com"),domain("animetion.key.frames"){@-webkit-keyframes pulse{from{opacity:1.0}to{opacity:.5}}}'
        ].join("\n");
        break;
}

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
    "#gpeb-settings-window-content-style-items > div.item > div.desc{font-size:12px;line-height:20px;width:277px;overflow:hidden;}",
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
    "#gpeb-settings-window-content-custombtn-items div.item > div{float: left;overflow:hidden;white-space: nowrap;}",
    "#gpeb-settings-window-content-custombtn-items div.item > div.desc{width: 197px;}",
    "#gpeb-settings-window-content-custombtn-items div.item > div.name{width: 100px;margin-right:15px;}",
    "#gpeb-settings-window-content-custombtn-items div.item > div.link{float: right;margin-left: 10px;}",
    "#gpeb-settings-window-content-custombtn-items div.item > div.link.down > a{vertical-align: -1px;}",
    "#gpeb-settings-window-content-custombtn-items div.item > div.link.down{margin-left:5px;}",
    "#gpeb-settings-window-content-custombtn-items div.item > div.clear{clear:both;}",
    "#gpeb-settings-window-content-custombtn-items div.item:hover { background-color: rgb(207, 232, 255);cursor:pointer; }",
    "#gpeb-context-menu-content div.item>div.icon>a.link{vertical-align:-1px;}"
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



