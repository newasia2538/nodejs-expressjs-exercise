import fs from "fs";
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello </h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>My contact</h1>");
});

app.post("/register/:name", (req, res) => {
  if(!fs.existsSync(`./user/${req.params.name}.txt`)){
    fs.appendFileSync(`./user/${req.params.name}.txt`, 'utf8');
  }
  res.sendStatus(201);
});

app.put("/user/:name", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/:name", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/:name", (req, res) => {
  if(fs.existsSync(`./user/${req.params.name}.txt`)){
    fs.unlink(`./user/${req.params.name}.txt`, (err) => {
      console.log(err);
    });
  }
  res.sendStatus(200);
});


app.listen(port, () => {
  console.log(`Server has started.`);
});
