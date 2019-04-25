exports.toExcel = function (data, filename, path) {
    if (filename === null) {
        filename = 'default'
    }
    if (path === null) {
        path = '/'
    }
    if (typeof require !== 'undefined') XLSX = require('xlsx');
    let ws = XLSX.utils.json_to_sheet(data || [
        {S: 1, h: 2, e: 3, e_1: 4, t: 5, J: 6, S_1: 7},
        {S: 2, h: 3, e: 4, e_1: 5, t: 6, J: 7, S_1: 8}
    ]);
    let wb = XLSX.utils.book_new();
// let wb = XLSX.readFile('filename.xlsx');
    XLSX.utils.book_append_sheet(wb, ws, 'ws_name');
    XLSX.writeFile(wb, path + filename + '.xlsx');
}
