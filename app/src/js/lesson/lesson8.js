{
    // 简洁表示法
    let o = 1;
    let k = 2;
    let es5 = {
        o: o,
        k: k
    };
    let es6 = {
        o,
        k
    };
    console.log(es5, es6);

    let es5_method = {
        hello: function () {
            console.log('hello');
        }
    };
    let es6_method = {
        hello() {
            console.log('hello');
        }
    };
    console.log(es5_method.hello(), es6_method.hello());
}

{
    // 属性表达式
    let a = 'b c';
    let es5_obj = {
        a: 'c',
        b: 'c'
    };

    let es6_obj = {
        [a]: 'cmm~~~~~~~',
        ['m' + 'b']: true
    }

    console.log(es5_obj, es6_obj);
    console.log(es6_obj[a], es6_obj['b c']);
}

{
    // 新增API
    console.log('字符串', Object.is('abc', 'abc'), 'abc' === 'abc');
    console.log('数组', Object.is([], []), [] === []);

    console.log('拷贝', Object.assign({a: 'a'}, {b: 'b'}));

    let test = {k: 123, o: 456};
    for (let [key, value] of Object.entries(test)) {
        console.log([key, value]);
    }
}

{
    // 扩展运算符
    let {a, b, ...c} = {a: 'test', b: 'kill', c: 'ddd', d: 'ccc'};

    console.log(a, b, c)
}


{
    //this关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字super，指向当前对象的原型对象。
    const proto = {
        foo: 'hello'
    };

    const obj = {
        foo: 'world',
        find() {
            return super.foo;
        }
    };

    Object.setPrototypeOf(obj, proto);
    console.log(obj.find())// "hello"
}