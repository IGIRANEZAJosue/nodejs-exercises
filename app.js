const fs = require("fs");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
   res.status(200).send(JSON.parse(fs.readFileSync("data.json")));
});

app.post("/", async (req, res) => {
   const data = JSON.parse(fs.readFileSync("data.json"));
   const item = { id: (Math.random() * 10).toString(), ...req.body };
   data.push(item);
   fs.writeFileSync("data.json", JSON.stringify(data));
   res.status(201).send(data);
});

app.delete("/:id", (req, res) => {
   const id = req.params.id;
   const data = JSON.parse(fs.readFileSync("./data.json"));
   const newData = data.filter((item) => item.id !== id);

   fs.writeFileSync("./data.json", JSON.stringify(newData));
   res.status(200).send(newData);
});

app.put("/:id", (req, res) => {
   const id = req.params.id;
   const data = JSON.parse(fs.readFileSync("./data.json"));
   const newData = req.body;

   const updated = data.map((item) =>
      item.id === id ? { id, ...newData } : item
   );

   fs.writeFileSync("./data.json", JSON.stringify(updated));

   res.status(200).send(updated);
});

app.listen(3000, () => console.log("Server start"));
