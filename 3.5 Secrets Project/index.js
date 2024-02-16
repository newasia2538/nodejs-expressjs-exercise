import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const port = 3000;
const app = express();
const password = `ILoveProgramming`;
const __dirName = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended : true}));

function middleWare(req, res, next){
    console.log(`Request Body : ${req.body.password}`);
    next();
}

app.use(middleWare);

app.get(`/`, (req, res)=>{
    res.sendFile(`${__dirName}/public/index.html`);
});

app.post(`/check`,(req, res)=>{
    if(req.body.password === password){
        res.sendFile(`${__dirName}/public/secret.html`);
    }else{
        res.sendFile(`${__dirName}/public/index.html`);
    }
});

app.listen(port, (err) => {
    if(err) console.log(err);

    console.log(`listening on localhost:${port}`);
});

//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming