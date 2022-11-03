const fs = require("fs");

const updatelikesCount = (id) => {
  const videoData = fs.readFileSync("./data/videos.json");
  const videoArr = JSON.parse(videoData);
  const videoIndex = videoArr.map((video) => video.id).indexOf(id);
  const videofound = videoArr.find((video) => video.id === id);

  videofound.likes += 1; //increment like by 1

  videoArr.splice(videoIndex, 1, videofound);

  fs.writeFileSync("./data/videos.json", JSON.stringify(videoArr));

  return videofound.likes;
};
module.exports = updatelikesCount;
