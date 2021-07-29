const factorial = num => {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1)
}

const cashFunc = (func) => {
    const cash = {}

    return num => {
        if (!cash[num]) {
            const result = func(num);
            cash[num] = result;
            console.log('Значение пришлось считать:', result);
            return result;
        } else {
            console.log('Значение взято из кеша:', cash[num]);
            return cash[num];
        }
    }
}

const cashFactorial = cashFunc(factorial);

console.log(cashFactorial(5))
console.log(cashFactorial(4))
console.log(cashFactorial(3))
console.log(cashFactorial(5))