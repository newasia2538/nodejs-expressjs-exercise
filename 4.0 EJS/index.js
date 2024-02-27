import express from "express";

const port = 3000;
const app = express();
const date = new Date();
const workHardWord = `Work hard !`;
const haveFunWord = `Have fun !`;

app.get(`/`, (req, res) => {
    var day = date.getDay();
    if(day == 0 || day == 6){
        res.render(`index.ejs`, {day : "the weekend", advice: haveFunWord});
    }else{
        res.render(`index.ejs`, {day : "a weekday", advice: workHardWord});
    }
});

app.listen(port, (err) => {
    if(err) console.log(err);

    console.log(`port : ${port}`);
});