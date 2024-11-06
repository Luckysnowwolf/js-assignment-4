function generateRandomArray(num){
    const arr =[];
    for (i = 0; i < num; i++){
        let randomNum = Math.floor(Math.random()* 100)
        arr.push(randomNum)
    }
    return arr;
}
console.log(generateRandomArray(10));
