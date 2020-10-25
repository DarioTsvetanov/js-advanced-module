(() => {

    String.prototype.ensureStart = function(str) {

        let newString = this.slice();

        if (!this.startsWith(str)) newString = str + newString;
        
        return newString;
    }

    String.prototype.ensureEnd = function(str) {

        let newString = this.slice();

        if (!this.startsWith(str)) newString += str;
        
        return newString;
    }

    String.prototype.isEmpty = function() {

        return this == '';
    }

    String.prototype.truncate = function(n) {

        let newString = this.slice();

        if (newString.length < n) return newString;

        if (n < 4) return '.'.repeat(n);

        newString = newString.substring(0, n - 3) + '...';

        return newString
    }
})();

let str = 'my string';
str = str.ensureStart('my');
console.log(str, str.length);
str = str.ensureStart('hello ');
console.log(str, str.length);
str = str.truncate(16);
console.log(str, str.length);
str = str.truncate(14);
console.log(str, str.length);
str = str.truncate(8);
console.log(str, str.length);
str = str.truncate(4);
console.log(str, str.length);
str = str.truncate(2);
console.log(str, str.length);
// console.log('hello my string'.length);