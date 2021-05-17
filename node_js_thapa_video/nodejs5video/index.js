const fs = require("fs");

//create new file.
//fs.writeFileSync("read.txt", "welcome to my channel ");

//fs.writeFileSync("read.txt", "thapa technical  welcome to my channel ");

fs.appendFileSync('read.txt ', "How are you thank yout");

fs.writeFileSync("mytext.txt", "mydata");
