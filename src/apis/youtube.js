import axios from "axios";

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });
//const unSplashKey = process.env.REACT_APP_UNSPLASH_KEY;
const KEY = process.env.REACT_APP_YOUTUBE_API;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  },
});


