function juiceFlavors(array = []) {
   
    let juices = new Map();
    let juices2 = new Map();
    
    for (let el of array) {
        let juice = el.split(' => ');

        if (!juices.has(juice[0])) {
            juices.set(juice[0], 0);
        }
        juices.set(juice[0], (juices.get(juice[0]) + Number(juice[1])));

        if (juices.get(juice[0]) >= 1000) {

            juices2.set(juice[0], juices.get(juice[0]));

        }

    }

    for (let [key, value] of juices2) {
      
        console.log(`${key} => ${Math.floor(value / 1000)}`);
        
    }
}
juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);