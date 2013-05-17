describe("Google+ Extreme Button", function () {

    describe("global変数定義テスト", function () {

        it("アプリケーション名が定義されている", function () {
            console.log(window.APPNAME);
            expect(window.APPNAME).toBeDefined();
        });

        it("バージョンが定義されている", function () {
            console.log(window.VERSION);
            expect(window.VERSION).toBeDefined();
        });

    });

    /* Logger Test
    -------------------------------------------------------------------------------*/
    describe("Logger", function () {

        var log;

        beforeEach(function () {
            log = new Logger(window.APPNAME);
        });

        it("ロギングができる", function () {
            log.add("ログを追加しています");
            expect(log.logs).toBeDefined();
            expect(log.logs.length).toBeDefined();
            console.log(log.logs);
        });

        it("全てのログをクリア", function () {
            log.clear();
            expect(log.logs.constructor === Array ).toBeTruthy();
            expect(log.logs.length).toEqual(0);
            console.log(log.logs);
        });

        it("ログの出力", function () {
            log.add("にゃる子");
            log.add("進撃の巨人");
            log.add("RDG");
            log.add("断裁分離のクライムエッジ");
            log.add("あいうら");
            
            // spyOn(window.console, 'log');
            log.show();
            // expect(window.console.log).toHaveBeenCalledWith("l");
            console.log(log.logs);
        });

        it("ログローテートができる", function () {
            log.setRotate(100);
            for (var i = 0; i < 1000; i++) {
                log.add("にゃる子");
            };
            log.show();
            console.log(log.logs.length);
            expect( log.logs.length <= 100 ).toBeTruthy();
        });

    });


    /* Selectorテスト
    -------------------------------------------------------------------------------*/
    function $

});



/*

expect(x).toEqual(y);                   xとyが等しいことを期待する
expect(x).toBe(y);                      xとyが同じオブジェクトであることを期待する
expect(x).toMatch(pattern);             文字列または正規表現パターンでxと比較し、一致することを期待する
expect(x).toBeDefined();                xがundefinedではない場合ことを期待する
expect(x).toBeUndefined();              xがundefinedであることを期待する
expect(x).toBeNull();                   xがnullであることを期待する
expect(x).toBeTruthy();                 xがtrueであることを期待する
expect(x).toBeFalsy();                  xがfalseであることを期待する
expect(x).toContain(y);                 配列化か文字列であるxに対して、yが含まれていることを期待する
expect(x).toBeLessThan(y);              xがy未満であることを期待する
expect(x).toBeGreaterThan(y);           xがyよりも大きいことを期待する
expect(function(){fn();}).toThrow(e);   無名関数が実行された時に関数fnが例外eを投げることを期待する
.not.(matcher)                          (matcher)に他のマッチャを指定することでそのマッチャを逆に評価します(trueをfalseに falseをtrueに)

*/