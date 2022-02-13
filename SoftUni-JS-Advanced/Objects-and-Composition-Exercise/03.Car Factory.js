function carFactory(obj) {
    const resultCar = {
        model: obj.model,
        engine: volumeSet(obj.power),
        carriage: {
            type: obj.carriage,
            color: obj.color,
        },
        wheels: wheelSet(obj.wheelsize)

    }

    function volumeSet(inputPower) {
        let power = 0;
        let volume = 0;

        if (inputPower <= 90) {
            power = 90;
            volume = 1800;
        } else if (inputPower <= 120) {
            power = 120;
            volume = 2400;
        } else if (inputPower <= 200) {
            power = 200;
            volume = 3500;
        }
        let result = {
            power,
            volume,
        }
        return result;
    }
    function wheelSet(wheelSize) {
        let wheels = [0, 0, 0, 0];
        (wheelSize % 2 == 0) ? wheels.fill(wheelSize - 1, 0, 4) : wheels.fill(wheelSize, 0, 4)
        return wheels;
    }

    return resultCar;
}
console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));