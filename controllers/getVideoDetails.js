const fs = require("fs");

const getVideoDetails = (id) => {
  const videoData = fs.readFileSync("./data/videos.json"); // or do .shift() here

  //readFileSync is synchornous, blocks the code from continuing until it reads the file.

  //to convert it from JSON to JS format using JSON.parse (what we are tyring to convert)
  //now that its an array we can filter it, so we use .filter
  //to convert from JS format to JSON use stringify.

  const filteredvideoData = JSON.parse(videoData).filter(
    (video) => video.id === id
  );
  return filteredvideoData;
};
module.exports = getVideoDetails;
