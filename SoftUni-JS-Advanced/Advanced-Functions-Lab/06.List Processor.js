function listProcessor(arr = []) {
    let result = [];
    for (let command of arr) {
        let splited = command.split(' ');
        if (splited[0] == "add") {
            add(splited[1]);
        } else if (splited[0] == "remove") {
            remove(splited[1]);
        } else {
            print();
        }
    }
    function add(value) {
        result.push(value);
    }

    function remove(value) {
        result = result.filter(x => {
            return x != value;
        })
    }
    function print() {
        return console.log(result.join(','));
    }

}
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);
