(function stringExtension() {
    String.prototype.ensureStart = function (str) {
        return !this.toString().startsWith(str) ? str + this.toString() : this.toString();
    }
    String.prototype.ensureEnd = function (str) {
        return !this.toString().endsWith(str) ? str + this.toString() : this.toString();
    }
    String.prototype.isEmpty = function () {

        return (this.length==0) ? true : false;
    }
    String.prototype.truncate = function (n) {
        if (n >= this.length) {
            return this.toString();
        }
        if (n < 4) {
            return ".".repeat(n);
        }
        if (this.toString().indexOf(' ')!=-1) {
            let result='';
            let arr = this.split(' ');
            arr.pop();
            result=arr.join(' ')
            return result+'...';
        }else{
            return this.toString().substring(0,n-3)+'...';
        }

    }
    String.format = function (string, ...params) {
        for (let i = 0; i < params.length; i++) {
            string = string.replace(`{${i}}`, params[i]);
        }

        return string;
    }
})();
let str = 'my string';
str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox',
    'quick', 'brown');
    console.log(str);
str = String.format('jumps {0} {1}',
    'dog');
    console.log(str);