{
    let arr = Array.of(3, 4, 7, 9, 11);
    console.log('arr=', arr);

    let empty = Array.of();
    console.log('empty', empty);
}

{
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);
    pArr.forEach((item) => {
        console.log(item.textContent);
    });

    console.log(Array.from([1, 3, 5], (item) => {
        return item * 2
    }));
}

{
    console.log('fill-7', [1, 'a', undefined].fill(7));
    console.log('fill,pos', ['a', 'b', 'c'].fill(7, 1, 3));
}

{
    for (let index of ['1', 'c', 'ks'].keys()) {
        console.log('keys', index);
    }
    for (let value of ['1', 'c', 'ks'].values()) {
        console.log('values', value);
    }
    for (let [index, value] of ['1', 'c', 'ks'].entries()) {
        console.log('values', index, value);
    }
}

{
    console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
}

{
    console.log([1, 2, 3, 4, 5, 6].find((item) => {
        return item > 3
    }));
    console.log([1, 2, 3, 4, 5, 6].findIndex(function (item) {
        return item > 3
    }));
}

{
    console.log('number', [1, 2, NaN].includes(1));
    console.log('number', [1, 2, NaN].includes(NaN));
}

{
    console.log([1, 2, [3, [4, 5]]].flat());
    console.log([1, 2, [3, [4, 5]]].flat(2));
    console.log([1, [2, [3]]].flat(Infinity));

    // 相当于 [[2, 4], [3, 6], [4, 8]].flat()
    console.log([2, 3, 4].flatMap((x) => [x, x * 2]));
    console.log([1, 2, 3, 4].flatMap(x => [[x * 2]]));
    [1, 2, 3].flatMap((c, i, arr) => {
        // console.log("c=> "+c)
        // console.log("i=> "+i)
        // console.log("arr=> "+arr)
    })
}