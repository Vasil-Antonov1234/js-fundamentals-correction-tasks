function addAndSubtract(arr) {
    let oldSum = 0;
    let newSum = 0;
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        let curNum = arr[i];
        oldSum += curNum;

        if (curNum % 2 === 0) {
            curNum += i;
        } else {
            curNum -= i;
        }

        newSum += curNum;
        newArr.push(curNum);
    }

    console.log(newArr);
    console.log(oldSum);
    console.log(newSum);
}
