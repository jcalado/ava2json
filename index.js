const https = require("https");
const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");
const express = require("express");
const app = express();
const port = 3000;

var songs = [];

app.listen(port, () => {
  console.log(`Server listening at http://127.0.0.1:${port}`);
  console.log(`Check http://127.0.0.1:${port}/history for data`);
});

app.get("/history", (req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");

  const file = fs.createWriteStream("history.csv");
  const request = https
    .get("https://radioleziria.com/avaplayer/history.txt", function (response) {
      response.pipe(file);
    })
    .on("close", () =>
      parseData
        .then((value) => {
          console.log(`Parsed ${value} rows at ${new Date().toISOString()}`);
          res.send(songs);
        })
        .catch((error) => {
          console.log(error);
        })
    );
});

let parseData = new Promise(function (resolve, reject) {
  fs.createReadStream(path.resolve(__dirname, "history.csv"), {encoding: 'latin1'})
    .pipe(csv.parse({ headers: false, delimiter: ";" }))
    .on("error", (error) => reject(error))
    .on("data", (row) => {
      var [
        day,
        month,
        year,
        hour,
        minute,
        second,
        artist,
        song,
        lengthMinutes,
        lengthSeconds,
      ] = row;
      var entry = {
        date: `${year}-${month}-${day} ${hour}:${minute}:${second}`,
        artist: artist,
        song: song,
        duration: `${lengthMinutes}:${lengthSeconds}`,
      };
      songs.push(entry);
    })
    .on("end", (rowCount) => {
      songs = songs.reverse();
      resolve(rowCount);
    });
});
