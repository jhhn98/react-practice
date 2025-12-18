/*
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n -1) + fibonacci(n - 2)
}
console.log(fibonacci(50))
*/
function fibonacci(n, memo = {}) {
    if (n <= 1) {
        return 
    }
    // 이미 계산한 값이 있으면 저장된 값 반환
    if (memo[n]) {
        return memo[n]
    }
    // 없으면 새로 계산하고 결과를 memo에 저장
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
    return memo[n]
}
console.log(fibonacci(50))