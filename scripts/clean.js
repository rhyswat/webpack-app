const path = require('path');
const rimraf = require('rimraf');

let www = path.resolve(__dirname, '..', 'www');

console.log('-------------------------')
let rm = function(paths) {
    if( !paths || paths.length == 0) {
        console.log('');
        return;
    }

    let p = path.join(www, paths.shift());
    console.log('cleaning ' + p);
    rimraf.sync(p);
    
    rm(paths);
};

rm(['fonts', 'images', 'js']);

