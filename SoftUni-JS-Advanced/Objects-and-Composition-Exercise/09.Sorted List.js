function createSortedList() {
    let result = [];
    let obj = {
        add: function add(element) {
            result.push(element);
            result.sort((a, b) => a - b);
        },
        remove: function remove(index) {
            if (checkIndex(index)) {
                result.splice(index, 1);
                result.sort((a, b) => a - b);
            }

        },
        get: function get(index) {
            if (checkIndex(index)) {
                return result[index];
            }
        },
        get size() {
            return result.length;
        }
    };
    function checkIndex(index) {
        if (index < 0 || index >= result.length) {
            return false;
        } else {
            return true;
        }
    };
    return obj;
}
let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));