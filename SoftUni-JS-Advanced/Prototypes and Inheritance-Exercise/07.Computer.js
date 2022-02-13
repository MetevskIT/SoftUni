function createComputerHierarchy() {
    class AbstractClass {
        constructor(manufacturer) {
            if (this.constructor == AbstractClass) {
                throw new Error("Can't instantiate abstract class!");
            }
            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends AbstractClass {
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = Number(responseTime);
        }
    }

    class Monitor extends AbstractClass {
        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width =  Number(width);
            this.height =  Number(height);
        }
    }

    class Battery extends AbstractClass {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = Number(expectedLife);
        }
    }

    class Computer  {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
          this.manufacturer=manufacturer;
          if (this.constructor == Computer) {
            throw new Error("Can't instantiate abstract class!");
          }
            this.processorSpeed =  Number(processorSpeed);
            this.ram =  Number(ram);
            this.hardDiskSpace =  Number(hardDiskSpace);
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight =  Number(weight);
            this.color = color;
            this.battery = battery;
        }
        get battery() {
            return this._battery;
        }
        set battery(value) {
            if (value instanceof Battery) {
                this._battery = value;
            }else{
                throw new TypeError('Invalid')
            }
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        }
        get keyboard() {
            return this._keyboard;
        }
        set keyboard(value) {
            if (value instanceof Keyboard) {
                this._keyboard = value;
            }else{
                throw new TypeError('Invalid')
            }
        }

        get monitor() {
            return this._monitor;
        }
        set monitor(value) {
            if (value instanceof Monitor) {
                this._monitor = value;
            }else{
                throw new TypeError('Invalid')
            }
        }
    }

    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    }
}
let classes = createComputerHierarchy();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy', 3);
console.log(battery);
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
console.log(laptop);
