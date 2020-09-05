function solve(input) {

    let parsedJSON = JSON.parse(input);

    let result = '<table>\n';
    console.log(parsedJSON);
    for (let i = 0; i < parsedJSON.length; i ++) {

        let line = parsedJSON[i];

        result += '\t<tr>'
        // console.log(line);
        // if (i == 0) {

        //     result += ``

        // }

        result += '</tr>'

        // console.log(line.Name);
    }

    result += '<table>'
}
solve(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);