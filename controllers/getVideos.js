const fs = require("fs"); //file system module from node.

const getVideos = (callback) => {
  fs.readFile("./data/videos.json", (err, data) => {
    if (err) throw err;
    const videos = JSON.parse(data);
    callback(videos);
  });
};

module.exports = getVideos;
