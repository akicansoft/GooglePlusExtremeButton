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

        /* モデルデータの追加
        -------------------------------------------------------------------------------*/
        this.add(_objs);
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
        console.log("あ");

        console.log("%ccloneobj", "font-size:30px;", cloneObj);


    },

    /* モデルデータの追加
    -------------------------------------------------------------------------------*/
    add: function (_objs) {

        /* 配列
        -------------------------------------------------------------------------------*/
        if (_objs && _objs.constructor === Array) {
            this.models = [];
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

                /* モデルに追加
                -------------------------------------------------------------------------------*/
                this.models.push(_objs[i]);

                /* キーインデックスに追加 (重複したキーを指定された場合キーは上書きされます)
                -------------------------------------------------------------------------------*/
                if ("key" in _objs[i]) {
                    this.keys[_objs[i].key] = _objs[i];
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
    clear: function(_modelData) {

        /* キーインデックスから開放
        -------------------------------------------------------------------------------*/
        if (_modelData.key) {
            delete this.keys[_modelData.key];
        }

        /* IDインデックスから削除
        -------------------------------------------------------------------------------*/
        delete this.ids[_modelData.id];

        /* 配列から削除
        -------------------------------------------------------------------------------*/
        this.models.splice(_modelData, 1);

        /* モデルの削除
        -------------------------------------------------------------------------------*/
        _modelData = undefined;
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
                this.clear(args[i]);
            }

            /* 文字列の場合キーに関連するデータを返す
            -------------------------------------------------------------------------------*/
            else if (typeof(args[i]) === "string") {
                this.clear(this.keys[args[i]]);
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
    }

};