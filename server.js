const express = require("express"); //imports express module for node.
const app = express(); //allows us to use app and diff methods and app.use to help with using req.body.
const cors = require("cors");

const getVideos = require("./controllers/getVideos");
const getVideoDetails = require("./controllers/getVideoDetails");
const uploadVideo = require("./controllers/uploadVideo");
const updatelikesCount = require("./controllers/updatelikesCount");

const PORT = 5000;

//middleware - making sure the incoming data can work with the request.body as a javascript object.
app.use(express.json());
app.use(cors());

// end-points

app.get("/", (req, res) => {
  res.json({
    welcome: "welcome to my API",
  });
});

// api endpoint , get all the videos
app.get("/videos", (req, res) => {
  getVideos((videos) => {
    const sideBarVideos = videos.map((video) => {
      return {
        id: video.id,
        title: video.title,
        channel: video.channel,
        image: video.image,
        likes: video.likes,
      };
    });
    res.json(sideBarVideos);
  });
});

//get a video by video id
app.get("/videos/:id", (req, res) => {
  const video = req.params.id;
  res.json(getVideoDetails(video));
});

//upload a video
app.post("/videos", (req, res) => {
  res.json(uploadVideo(req.body));
});

//put endpoint for likes
//Part 1: Implement a PUT endpoint at /videos/:videoId/likes
//that increments the like count of the video specified by video.
app.put("/videos/:id/likes", (req, res) => {
  const videoId = req.params.id;
  res.json(updatelikesCount(videoId));
});

//start express on port
app.listen(PORT, console.log(`listening in node for localhost:${PORT}`));
