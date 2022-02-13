function cars(arr = []) {
    let objects = {};
    for (let elements of arr) {
        let element = elements.split(' ');
        switch (element[0]) {
            case "create":
                if (element.length == 2) {
                    create(element[1]);
                } else {
                    let inherit = element[3];
                    createInherits(element[1], inherit);
                }

                break;
            case "set":
                set(element[1], element[2], element[3]);
                break;
            case "print":
                print(element[1]);
                break;
        }
    }

    function create(name) {
        objects[name] = {};
    }
    function createInherits(name, parentName) {
        create(name);

        objects[name] = Object.setPrototypeOf(objects[name], objects[parentName]);

    }
    function set(name, key, value) {
        objects[name][key] = value;
    }
    function print(name) {
        let result = '';
        let car = objects[name];
        for (const key in car) {
            result += `${key}:${car[key]},`
        }
        result = result.slice(0, result.length - 1);
        console.log(result);
    }
}
cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);