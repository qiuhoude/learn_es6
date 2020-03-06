{
    // 基本定义
    let ajax = function (callback) {
        console.log('执行');
        setTimeout(function () {
            callback && callback.call()
        }, 1000);
    };
    ajax(function () {
        console.log('timeout1');
    })
}

{
    let ajax = function () {
        console.log('执行2');
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve()
            }, 1000);
        })
    };

    ajax().then(function () {
        console.log('promise', 'timeout2');
    })
}

{
    let ajax = function () {
        console.log('执行3');
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve()
            }, 1000);
        })
    };

    ajax()
        .then(function () {
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    resolve()
                }, 2000);
            });
        })
        .then(function () {
            console.log('timeout3');
        })
}

{
    let ajax = function (num) {
        console.log('执行4');
        return new Promise(function (resolve, reject) {
            if (num > 5) {
                resolve()
            } else {
                throw new Error('出错了')
            }
        })
    }

    ajax(6).then(function () {
        console.log('log', 6);
    }).catch(function (err) {
        console.log('catch', err);
    });

    ajax(3).then(function () {
        console.log('log', 3);
    }).catch(function (err) {
        console.log('catch', err);
    });
}

{
    function loadImg(imgUrl) {
        return new Promise((resolve, reject) => {

            const image = new Image(200, 200);

            image.onload = () => resolve(image);
            image.onerror = (err) => {
                console.log(err);
                reject(new Error('Could not load image at ' + imgUrl));
            };
            image.src = imgUrl;

        });
    }

    function showImages(imgs) {
        imgs.forEach((img) => {
            showImage(img, 'div_1')
        })
    }


    Promise.all([
        loadImg('https://pic.365kqzs.cn/images/f9c0839d25575cfab440560c29f9e2303afbef9c_s'),
        loadImg('https://pic.365kqzs.cn/images/8d28ff9f69b2199a0082fbe069b51413e2775b40_s'),
        loadImg('https://pic.365kqzs.cn/images/8bed5f86b4cfae5b0476fea1f88b7773bc9682ab_s'),
    ]).then(showImages).catch(reason => console.log('catch =>', reason));

    function showImage(img, div) {
        let div2 = document.getElementById(div);
        div2.appendChild(img)
    }

    Promise.race([
        loadImg('https://pic.365kqzs.cn/images/f9c0839d25575cfab440560c29f9e2303afbef9c_s'),
        loadImg('https://pic.365kqzs.cn/images/8d28ff9f69b2199a0082fbe069b51413e2775b40_s'),
        loadImg('https://pic.365kqzs.cn/images/8bed5f86b4cfae5b0476fea1f88b7773bc9682ab_s'),
    ]).then(function (img) {
        showImage(img, 'div_2')
    });

}

{

    let getJson = function (url) {
        const promise = new Promise((resolve, reject) => {
            const client = new XMLHttpRequest();
            client.open('GET', url);
            client.responseType = "json";
            client.setRequestHeader('Accept', 'application/json');
            client.onreadystatechange = function () {
                if (this.readyState !== 4) {
                    return
                }
                if (this.status === 200) {
                    resolve(this.response);
                } else {
                    reject(new Error(this.statusText));
                }
            }
            client.send();
        });
        return promise
    }

}