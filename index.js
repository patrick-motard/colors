var hr = require('hex-rgb');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var rl = require('readline');

// module.exports = colors => {
//     return fs.createReadStreamAsync('index.js', 'utf8')
//         .then(res => {
//             console.log(res);
//         })
//         .catch(e => console.log(e));
//     // return colors.map(color => {
//     //     var hex = color.split(' ')[2];
//     //     var rgb = hr(hex);
//     //     console.log(`hex: ${hex}, rgb: ${rgb}`);
//     // });
// }

module.exports = () => {
    var file = process.argv[2];
    var index = 0;
    function withLines(lines) {
        lines.forEach(function(line) {
            console.log(index + " " + line);
            index++;
        });
    }
    var accumulated = "";
    fs.createReadStream(file)
        .on("data", function(data) {
            var parts = (accumulated + data).split("\n");
            accumulated = parts.pop();
            withLines(parts);
        })
        .on("end", function() {
            if (accumulated.length > 0) {
            withLines(accumulated.split("\n"));
        }
    });
}

module.exports();
