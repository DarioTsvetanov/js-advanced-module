function solve(input) {

    let result = input.map(([width, height]) => ({
        width,
        height,
        area: function() {

            return this.width * this.height;
        },
        compareTo: function(other) {

            return other.area() - this.area() || other.width - this.width;
        }
    }))

    result.sort((a, b) => a.compareTo(b));

    return result;
}