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
            log.setRotate(10);
            for (var i = 0; i < 100; i++) {
                log.add("にゃる子");
            };
            log.show();
            console.log(log.logs.length);
            expect( log.logs.length <= 100 ).toBeTruthy();
        });
    });

    /* MVCフレームワークテスト
    -------------------------------------------------------------------------------*/
    describe("MVCフレームワークテスト", function () {

        var models;
        beforeEach(function () {
            models = new Models();
        });

        /* モデルにオブジェクトを渡してそのままモデルデータとして格納することができる
        -------------------------------------------------------------------------------*/
        it("モデルにオブジェクトを渡してそのままモデルデータとして格納することができる", function () {
            var models = new Models({
                id: 0,
                name: "名前",
                address: "住所",
                sex: "男"
            });
            console.log("models", models);
            expect( models.models[0].id == 0 ).toBeTruthy();
            expect( models.models[0].name == "名前" ).toBeTruthy();
            expect( models.models[0].address == "住所" ).toBeTruthy();
            expect( models.models[0].sex == "男" ).toBeTruthy();
        });

        /* モデルにオブジェクトを配列として複数渡すことができる
        -------------------------------------------------------------------------------*/
        it("モデルにオブジェクトを配列として複数渡すことができる", function () {
            var models = new Models([
                {
                    id: 0,
                    name: "名前1",
                    address: "住所1",
                    sex: "男1"
                },
                {
                    id: 1,
                    name: "名前2",
                    address: "住所2",
                    sex: "男2"
                }
            ]);
            console.log("models", models);
            expect( models.models[0].id == 0 ).toBeTruthy();
            expect( models.models[0].name == "名前1" ).toBeTruthy();
            expect( models.models[0].address == "住所1" ).toBeTruthy();
            expect( models.models[0].sex == "男1" ).toBeTruthy();
            expect( models.models[1].id == 1 ).toBeTruthy();
            expect( models.models[1].name == "名前2" ).toBeTruthy();
            expect( models.models[1].address == "住所2" ).toBeTruthy();
            expect( models.models[1].sex == "男2" ).toBeTruthy();
        });

        /* モデルのクローン (データに関数やDOMを含めた場合でもクローンできる)
        -------------------------------------------------------------------------------*/
        it("モデルのクローン (データに関数やDOMを含めた場合でもクローンできる)", function () {

            var models = new Models([
                {
                    id: 0,
                    name: "名前1",
                    address: "住所1",
                    sex: "男1",
                    test: {
                        test: {
                            test: {
                                win: document.body
                            }
                        }
                    },
                    win: window,
                    doc: document,
                    func: function (){},

                },
                {
                    id: 1,
                    name: "名前2",
                    address: "住所2",
                    sex: "男2",
                    dom: window
                }
            ]);

            var models2 = models.clone();
            expect(models2).toBeDefined();
            console.log("models2", models2);
            expect( models2.models[0].id == 0 ).toBeTruthy();
            expect( models2.models[0].name == "名前1" ).toBeTruthy();
            expect( models2.models[0].address == "住所1" ).toBeTruthy();
            expect( models2.models[0].sex == "男1" ).toBeTruthy();
            expect( models2.models[1].id == 1 ).toBeTruthy();
            expect( models2.models[1].name == "名前2" ).toBeTruthy();
            expect( models2.models[1].address == "住所2" ).toBeTruthy();
            expect( models2.models[1].sex == "男2" ).toBeTruthy();
        });

        /* キーインデックスが使えるか
        -------------------------------------------------------------------------------*/
        it("キーインデックスが使えるか", function () {

            var models = new Models([
                {
                    id: 0,
                    name: "名前1",
                    address: "住所1",
                    sex: "男1",
                    key: "human1"
                },
                {
                    id: 1,
                    name: "名前2",
                    address: "住所2",
                    sex: "男2",
                    key: "human2"
                }
            ]);

            console.log("models.keys[human1]", models.keys["human1"]);
            console.log(models.keys);
            expect( models.keys["human1"].name == "名前1" ).toBeTruthy();
            console.log(models.keys);
            expect( models.keys["human2"].name == "名前2" ).toBeTruthy();
            console.log(models.keys);
            expect( models.get("human2").name == "名前2" ).toBeTruthy();
        });

        /* データの削除
        -------------------------------------------------------------------------------*/
        it("データの削除", function () {

            var models = new Models([
                {
                    id: 0,
                    name: "名前1",
                    address: "住所1",
                    sex: "男1",
                    key: "human1"
                },
                {
                    id: 1,
                    name: "名前2",
                    address: "住所2",
                    sex: "男2",
                    key: "human2"
                }
            ]);

            /* データの削除
            -------------------------------------------------------------------------------*/
            models.remove("human1");
            expect( models.get("human1") ).toBeUndefined();
            // expect( models.models[0].name ).toBeUndefined();
            console.log("モデル", models.models);
            console.log("キー", models.keys);
            console.log("IDインデックス", models.ids);
            console.log("aaaaaaaaaa");
        });


        /* IDが自動的にオートインクルメントされている
        -------------------------------------------------------------------------------*/
        it("IDが自動的にオートインクルメントされている", function () {

            var models = new Models([
                {
                    name: "名前1",
                    address: "住所1",
                    sex: "男1",
                    key: "human1"
                },
                {
                    name: "名前2",
                    address: "住所2",
                    sex: "男2",
                    key: "human2"
                },
                {
                    name: "名前2",
                    address: "住所2",
                    sex: "男2",
                    key: "human2"
                },
                {
                    name: "名前2",
                    address: "住所2",
                    sex: "男2",
                    key: "human2"
                },
                {
                    name: "名前2",
                    address: "住所2",
                    sex: "男2",
                    key: "human2"
                },
                {
                    name: "名前2",
                    address: "住所2",
                    sex: "男2",
                    key: "human2"
                }
            ]);

            console.log("models.ids", models.ids);
            expect(models.models[0].id == 1).toBeTruthy();
            expect(models.models[1].id == 2).toBeTruthy();
            expect(models.models[2].id == 3).toBeTruthy();
            expect(models.models[3].id == 4).toBeTruthy();
            expect(models.models[4].id == 5).toBeTruthy();
            expect(models.models[5].id == 6).toBeTruthy();

            console.log(models.get(1));
            expect(models.get(1).id == 1).toBeTruthy();
            expect(models.get(2).id == 2).toBeTruthy();
            expect(models.get(3).id == 3).toBeTruthy();
            expect(models.get(4).id == 4).toBeTruthy();
            expect(models.get(5).id == 5).toBeTruthy();
            expect(models.get(6).id == 6).toBeTruthy();



            var models = new Models([
                {
                    name: "名前1",
                    address: "住所1",
                    sex: "男1",
                    key: "human1"
                },
                {
                    name: "名前2",
                    address: "住所2",
                    sex: "男2",
                    key: "human2"
                },
                {
                    name: "名前2",
                    address: "住所2",
                    sex: "男2",
                    key: "human3"
                },
                {
                    id: 100,
                    name: "名前2",
                    address: "住所2",
                    sex: "男2",
                    key: "human4"
                },
                {
                    name: "名前2",
                    address: "住所2",
                    sex: "男2",
                    key: "human5"
                },
                {
                    name: "名前2",
                    address: "住所2",
                    sex: "男2",
                    key: "human6"
                }
            ]);

            console.log("models.ids", models.ids);
            expect(models.models[0].id == 1).toBeTruthy();
            expect(models.models[1].id == 2).toBeTruthy();
            expect(models.models[2].id == 3).toBeTruthy();
            expect(models.models[3].id == 100).toBeTruthy();
            expect(models.models[4].id == 101).toBeTruthy();
            expect(models.models[5].id == 102).toBeTruthy();

            console.log(models.get(1));
            expect(models.get(1).id == 1).toBeTruthy();
            expect(models.get(2).id == 2).toBeTruthy();
            expect(models.get(3).id == 3).toBeTruthy();
            expect(models.get(100).id == 100).toBeTruthy();
            expect(models.get(101).id == 101).toBeTruthy();
            expect(models.get(102).id == 102).toBeTruthy();

            console.log("ids", models.ids);
        });


        /* モデルデータの途中追加
        -------------------------------------------------------------------------------*/
        it("モデルデータの途中追加", function () {

            var models = new Models([
                {
                    id: 0,
                    name: "名前1",
                    address: "住所1",
                    sex: "女",
                    key: "human1"
                },
                {
                    id: 1,
                    name: "名前2",
                    address: "住所2",
                    sex: "男2",
                    key: "human2"
                }
            ]);

            /* データの追加
            -------------------------------------------------------------------------------*/
            models.add({
                name: "山根",
                address: "住所3",
                sex: "男3",
                key: "human3"
            });

            /* データの追加
            -------------------------------------------------------------------------------*/
            models.add({
                id: 453,
                name: "島田",
                address: "住所3",
                sex: "女",
                key: "human4"
            });

            console.log("models", models);
            expect(models.get(453).id == 453).toBeTruthy();


        });





    });




    /* Selectorテスト
    -------------------------------------------------------------------------------*/
    //function $

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