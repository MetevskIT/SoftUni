function add(input) {
    let result = input;

    function sum(input2) {
        result += input2;
        return sum;
    }
    sum.toString = function () {
        return result;
    };
    return sum;

}