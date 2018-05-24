const fs = require('fs');
const colors = require('colors');

fs.readdir('./', 'utf-8', function(err, files) {
    console.log('Data before saving!'.blue);
    console.log(files);
    fs.writeFile('./addFile.txt', files, function(err) {
        if (err) throw err;
        console.log('Save!'.green);
        fs.readFile('./addFile.txt', 'utf-8', function(err, data) {
              if (err) throw err;
            console.log('Data after saving'.blue)
            console.log(data);
        });
    });
});



