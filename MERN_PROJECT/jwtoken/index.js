const {writeFile,readFile} = require('fs')
const {promisify} = require('util')
const { readFileSync } = require('fs');

const express = require("express");
const app = express();
const port = 3000;
 
app.get('/',(req,res,next)=>{
     res.send('server start')
})
 
app.listen(port,()=>{
    console.log(`server ready for start ${port}`)
})

const readFileasync = promisify(readFile);
const writeFileasync = promisify(writeFile);

const data = readFileSync('./config.json');
//console.log(JSON.parse(data));


const file_handler = async()=>{
	try {
		const content = await writeFileasync('./writeMe.txt',`${data}`);
		try {
			const data = await readFileasync('./writeMe.txt','utf-8');
			console.log('New file has been created .');
			console.log(data);
		} catch (error) {
			throw error;
		}
	} catch (error) {
		throw error;
	}
}

file_handler();
