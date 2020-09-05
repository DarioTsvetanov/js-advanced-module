function solve(input) {

    input.sort((a, b) => a.length - b.length || a.localeCompare(b)).forEach(el => console.log(el));
}