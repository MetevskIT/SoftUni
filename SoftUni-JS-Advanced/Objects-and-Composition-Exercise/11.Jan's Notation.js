function solve(arr = []) {
    let nums = [];
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            nums.push(arr[i]);
        } else {
            if (nums.length <= 1) {
                console.log(`Error: not enough operands!`);
                return;
            }
            let currSum = 0;
            switch (arr[i]) {
                case '+':
                    currSum = nums[nums.length - 2] + nums[nums.length - 1];
                    break;
                case '-':
                    currSum = nums[nums.length - 2] - nums[nums.length - 1];
                    break;
                case '*':
                    currSum = nums[nums.length - 2] * nums[nums.length - 1];
                    break;
                case '/':
                    currSum = nums[nums.length - 2] / nums[nums.length - 1];
                    break;
            }

            nums.pop();
            nums.pop();
            nums.push(currSum);
            delete arr[i];

        }
    }
    if (nums.length == 1) {
        console.log(nums[0]);
    } else if (nums.length > 1) {
        console.log('Error: too many operands!');
    }


}
solve([5,
    3,
    4,
    '*',
    '-']);