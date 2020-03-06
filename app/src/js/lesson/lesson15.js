{
    // genertaor基本定义
    let tell = function* () {
        yield 'a';
        yield 'b';
        return 'c'
    };

    let k = tell();

    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());

    let c = tell()
    for (let v of c) {
        console.info('for...of=> ', v)
    }
}

{
    let obj = {};
    obj[Symbol.iterator] = function* () {
        yield 1;
        yield 2;
        yield 3;
    };

    for (let value of obj) {
        console.log('value', value);
    }
}

{
    let state = function* () {
        while (1) {
            yield 'A';
            yield 'B';
            yield 'C';
        }
    }
    let status = state();
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
}

/*
{
  let state=async function (){
    while(1){
      await 'A';
      await 'B';
      await 'C';
    }
  };
  let status=state();
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
  console.log(status.next());
}
*/


{
    let draw = (count) => console.info(`剩余${count}次`);

    let residue = function* (count) {
        while (count > 0) {
            count--;
            yield draw(count)
        }
    }

    let start = residue(5);
    let btn = document.createElement('button')
    btn.id = 'start';
    btn.textContent = '抽奖';

    btnClick = (event) => {
        console.info('event=> ', event)
        start.next();
    }
    document.body.append(btn);
    btn.addEventListener('click', btnClick, false);
    let event = new Event('click');
    btn.dispatchEvent(event);

}

{
    let ajax = function* () {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({code: 0})
            })
        }, 200)
    };

    let pull = function () {
        let generator = ajax();
        let step = generator.next();
        step.value.then((d) => {
            if (d.code == 0) {
                setTimeout(() => {
                    console.log('wait');
                    pull();
                }, 1000)
            } else {
                console.info(d);
            }
        })
    }
    pull();
}