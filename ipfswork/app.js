var express = require("express");
var app = express();
var fs = require('fs');
var server = require("http").createServer(app);
server.listen(8080);

app.use(express.static("public"));
app.get("/", function(req, res){
res.sendFile(__dirname + "/public/html/index.html");
})


fs.writeFileSync("cmaliwal.txt", "");
fs.writeFileSync("cmaliwal.txt", "hey!My self chirag maliwal");

data = fs.readFileSync("cmaliwal.txt");
console.log(data, "data")


const fileHash = 'you hash of the file you want to get'
ipfs.files.get(fileHash, function (err, files) {
    files.forEach((file) => {
        console.log(file.path)
        data = file.content.toString('utf8');
        console.log("File content >> ",file.content.toString('utf8'))
    })
})

// const fileHash = 'you hash of the file you want to get'
// ipfs.files.get(files, function (err, files) {
//         if (err) {
//             console.log(err);
//         } else {
//           console.log(file.path)
//           data = file.content.toString('utf8');
//           console.log("File content >> ",file.content.toString('utf8'))
//         }
//     })
