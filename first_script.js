function evenOddOrZero () {
    const myArray = ['drf', true, 0, 3, 1, 2, 3, 4];
    let even = 0,
        odd = 0,
        zero = 0,
        other = 0;
    for (let i = 0; i < myArray.length; i += 1) {
        if (typeof(myArray[i]) === 'number' && myArray[i] !== NaN) {
            if (myArray[i] === 0) {
                zero += 1
            } else if (myArray[i] % 2 === 0) {
                even += 1
            } else if (myArray[i] % 2 !== 0) {
                odd += 1
            }
        } else {
            other += 1
        }
    } 

    console.log('Четные: ', even);
    console.log('Нечетные: ', odd);
    console.log('Ноль: ', zero);
    console.log('Не числа: ', other);
    }

evenOddOrZero()


function primeNumber(num) {
    let isPrime = true;
    if (2 <= num && num <= 1000) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false
            }
        }
        if (isPrime === true) {
            console.log('Простое число')
        }
        else {
            console.log('Число не является простым')
        }
    }
    else {
        console.log('Данные неверны!')
    }
}

primeNumber(47);


function getNumber(num1) {
    return function getSum(num2) {
        let mySum = num1 + num2
        return mySum
    }
}

const firstNumber = getNumber(2);
const sumNumber = firstNumber(6);
console.log(sumNumber)


function logNumbers(begin, end) {
    let current = begin;

    let timerId = setInterval(function() {
        console.log(current);
        if (current == end) {
            clearInterval(timerId)
        }
        current++;
    }, 1000)
}
logNumbers(5, 15)


const multiplication = (x, n) => {
    result = Math.pow(x, n);
    return result
}
console.log(multiplication(3, 2));