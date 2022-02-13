function solution(n) {
    let number = n;
    function add(num) {
        return number + num;
    }
    return add;
}
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));