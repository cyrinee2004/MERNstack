const fs = require('fs');



// reading Files 
// fs.readFile('./docs/blog1.txt', (err, data) => {
//    if (err) {
//       console.log(err);
//    } 
//    console.log(data.toString() );
// });
// console.log('last line');

// writting files 
// fs.writeFile('./docs/blog1.txt', 'Hello, Cyrine!', () => {
//     console.log('file was written');
//     });

//     fs.writeFile('./docs/blog12.txt', 'Hello, Cyrine!', () => {
//     console.log('file was written');
//     });


// directories 
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
}else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    });
}
// fs.mkdir('./assets', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('folder created');
// });




// deleting files 
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    });
}
