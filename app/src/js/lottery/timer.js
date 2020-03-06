function calcRemainDate(remainTime) {
    const px_sec = 1000;
    const px_minute = 60 * px_sec;
    const px_hour = 60 * px_minute;
    const px_day = 24 * px_hour;
    let rDay = Math.floor(remainTime / px_day);
    let rHour = Math.floor((remainTime - rDay * px_day) / px_hour);
    let rMinute = Math.floor((remainTime - rDay * px_day - rHour * px_hour) / px_minute);
    let rSec = Math.floor((remainTime - rDay * px_day - rHour * px_hour - rMinute * px_minute) / px_sec);
    return {
        rDay,
        rHour,
        rMinute,
        rSec
    }
}


// console.log(calcRemainDate(1002));

class Timer {
    countdown(end, update, handle) {
        const now = Date.now();
        if (now - end > 0) { // 时间到了触发事件
            handle.call(this);
        } else { // 否则就每间隔1秒轮询调用
            let remainTime = end - now; // 剩余事件
            let remainDate = calcRemainDate(remainTime);
            let list = Array.of();
            if (remainDate.rDay > 0) {
                list.push(`<em>${remainDate.rDay}</em>>天`);
            }
            if (list.length || remainDate.rHour > 0) {
                list.push(`<em>${remainDate.rHour}</em>时`);
            }
            if (list.length || remainDate.rMinute > 0) {
                list.push(`<em>${remainDate.rMinute}</em>分`);
            }
            if (list.length || remainDate.rSec > 0) {
                list.push(`<em>${remainDate.rSec}</em>秒`);
            }
            update.call(this, list.join(''));
            setTimeout(() => {
                this.countdown(end, update, handle);
            }, 1000)
        }

    }
}

// testing
// let timer = new Timer();
// timer.countdown(Date.now() + 5 * 1000,
//     (data) => {
//         console.log(data);
//     },
//     () => {
//         console.log('结束了');
//     });

export default Timer