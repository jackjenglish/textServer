import express from "express";
import path from "path";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();
app.use(bodyParser.json());

let uploadedText;

// POST request to http://localhost:8080/text
app.post("/text", (req, res) => {
  // Fetching 'text' variable from request body of form:
  // {
  //   "text": "text data here"
  // }
  const { text } = req.body;

  // store in memory
  uploadedText = text;

  // Write text to file
  // fs.writeFile("text.txt", uploadedText, (err) => {
  //   if (err) return console.log("error writing file");
  //   console.log("file created");
  // });

  res.status(200).send();
});

app.get("/", (req, res) => {
  // return in memory uploaded text
  return res.json({ text: uploadedText });
  //res.sendFile(path.join(__dirname + "/text.txt"));
});

const server = app.listen(8080);

server.on("listening", () => {
  console.log("listening on 8080");
});
