(() => {
    Array.prototype.last = function() {

        return this[this.length - 1];
    }

    Array.prototype.skip = function(n) {

        let array = this.slice();

        array.splice(0, n);

        return array;
    }

    Array.prototype.take = function(n) {

        let array = this.slice();

        return array.splice(0, n);
    }

    Array.prototype.sum = function() {

        return this.reduce((a, b) => a + b, 0);
    }

    Array.prototype.average = function() {

        return this.sum() / this.length;
    }
})();
let array = [1, 2, 3, 4];
console.log(array.average());