function fromJSONToHTMLTable(json) {
    let result = JSON.parse(json);
    let finResult = '';
    finResult += '<table>' + '\n'+ '   ';
    finResult += `<tr>${Object.keys(result[0]).map(x => `<th>${escapeHtml(x).trim()}</th>`).join('')}</tr>`+'\n'+ '   ';
    result.forEach((element,i)=> {
        finResult += '<tr>';
        finResult += Object.values(element).map(x=> `<td>${escapeHtml(x)}</td>`).join('');
      
        finResult += i === result.length - 1 ?  '</tr>' +'\n' : '</tr>' + '\n'+ '   ';
    });
    finResult += '</table>';
    console.log(finResult);

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

}
fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`);