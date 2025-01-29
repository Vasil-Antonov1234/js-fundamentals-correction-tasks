function solve(num) {
    let isPrime = true;
    
    for (let divisor = 2; divisor < num; divisor++) {
        if (num % divisor === 0) {
            isPrime = false;
        }
    }

    console.log(isPrime);
}
