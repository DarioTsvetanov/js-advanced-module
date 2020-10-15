function solve(input) {

    console.log('<table>');

    let headingsLine = '\t<tr>';

    for (let heading in JSON.parse(input)[0]) {
    
        headingsLine += `<th>${heading}</th>`;
    }

    headingsLine += '</tr>';

    console.log(headingsLine);

    let output = '';

    for (let object of JSON.parse(input)) {
        
        output += '\t<tr>';

        for (let i = 0; i < Object.values(object).length; i ++) {

            let value = Object.values(object)[i].toString();
            
            output += '<td>';
            
            if (value.includes('&')) value = value.replace(/&/g, '&amp;');

            if (value.includes('<')) value = value.replace(/</g, '&lt;');

            if (value.includes('>')) value = value.replace(/>/g, '&gt;');

            if (value.includes('"')) value = value.replace(/"/g, '&quot;');

            if (value.includes("'")) value = value.replace(/'/g, '&#39;');

            output += `${value}</td>`;
        }

        output += '</tr>';

        console.log(output);

        output = '';
    }

    console.log('</table>');
}

solve(['[{"Name":"&& <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']);