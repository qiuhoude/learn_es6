{
    let readonly = function (target, name, descriptor) {
        /*
         // descriptor对象原来的值如下
        // {
        //   value: specifiedFunction,
        //   enumerable: false,
        //   configurable: true,
        //   writable: true
        // };
         */
        descriptor.writable = false;
        return descriptor
    };

    // 方法的装饰
    class Test {
        /*
        等价于调用
        readonly(Test.prototype,'time',descriptor)
        // 类似于
        Object.defineProperty(Test.prototype, 'name', descriptor);
         */
        @readonly
        time() {
            return '2017-03-11'
        }
    }


    let test = new Test();

    // test.time=function(){
    //   console.log('reset time');
    // };

    console.log(test.time());
}


{
    let typename = function (target, name, descriptor) {
        target.myname = 'hello';
    }

    @typename
    class Test {

    }

    console.log('类修饰符', Test.myname);
    // 第三方库修饰器的js库：core-decorators; npm install core-decorators
}

{
    let log = function (type) {
        return function (target, name, descriptor) {
            // 原始值
            let oldVal = descriptor.value;
            descriptor.value = function (...args) {
                let ret = oldVal.apply(target, args);
                console.info(`${type} => calling ${name} with`, arguments);
                return ret
            }
        }
    }

    class Ad {
        @log('show~~')
        show(name) {
            console.info(`ad show ${name}`)
        }

        @log('onclick~~')
        onclick() {
            console.info(`ad is click`)
        }
    }

    let ad = new Ad();
    ad.show('hello');
    ad.onclick();
}