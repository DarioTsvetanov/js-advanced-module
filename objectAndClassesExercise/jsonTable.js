function solve(input) {

    console.log('<table>');

    for (let i = 0; i < input.length; i ++) {

        let line = JSON.parse(input[i]);

        console.log('\t<tr>');

        console.log(`\t\t<td>${line.name}</td>`);

        console.log(`\t\t<td>${line.position}</td>`);

        console.log(`\t\t<td>${line.salary}</td>`);

        console.log('\t</tr>');
    }

    console.log('</table>');
}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}'])