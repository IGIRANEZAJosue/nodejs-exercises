const http = require("http");
const fs = require("fs");
const outputText =
   "Hello this is the output in the output file, the POST request was made by postman";

const server = http.createServer((req, res) => {
   console.log(req.method);

   res.setHeader("Content-Type", "text/plain");

   if (req.method === "GET") {
      fs.readFile("./input.txt", (err, data) => {
         if (err) console.log(err.message);

         res.statusCode = 200;
         res.write(data);
         res.end();
      });
   }

   if (req.method === "POST") {
      req.on("data", (chunk) => {
         console.log(chunk.toString());
         fs.writeFile("./output.txt", chunk, (err) => {
            if (err) console.log(err.message);
            else console.log("File created");
         });
      });

      res.statusCode = 200;
      res.end();
   }
});

server.listen(3000, "localhost", () => {
   console.log("Server started");
});
