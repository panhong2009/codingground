var fs = require('fs');
var pat = require('path');
var os = require('os');
//console.log(path);
var stream = fs.createWriteStream(pat.join(os.tmpdir(),Math.random().toString()));
console.log(stream.path);