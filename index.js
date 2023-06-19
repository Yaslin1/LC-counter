/**
 * @param {number} n
 * @return {Function} counter
 */


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

var createCounter = (num) => {
    countMe = num
    return function () {
        return countMe++
    }
};

const totalCount = createCounter(10)
console.log(totalCount())
console.log(totalCount())
console.log(totalCount())

