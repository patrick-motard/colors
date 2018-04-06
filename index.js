var hr = require('hex-rgb');
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var rl = require('readline');


module.exports = () => {
    var file = process.argv[2];
    var index = 0;
    var colors = [];
    function withLines(lines) {
        lines.forEach(function(line) {
            var rgb = hr(line.split(' ')[2]);
            console.log(`    nord${index}: rgb(${rgb.red}, ${rgb.green}, ${rgb.blue}, 100 %);`);
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
