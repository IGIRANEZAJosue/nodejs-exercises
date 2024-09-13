const fs = require("fs");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
   res.status(200).send(JSON.parse(fs.readFileSync("data.json")));
});

app.post("/", async (req, res) => {
   const data = JSON.parse(fs.readFileSync("data.json"));
   const item = { id: Math.random(), ...req.body };
   data.push(item);
   fs.writeFileSync("data.json", JSON.stringify(data));
   res.status(201).send(data);
});

app.listen(3000);
