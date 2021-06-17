const express = require("express");
const axios = require("axios");

const router = express.Router();

const base_URL = "https://api.themoviedb.org/3";
const API_KEY = "18b1dcc2cbda376cbe4722d3af030dec";

router.get("/", async (req, res) => {
  try {
    let getData = await axios.get(
      `${base_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
    );
    let movie = Math.floor(Math.random() * getData.data.results.length - 1);
    const data = getData.data.results[movie];
    res.render("index", { data: data });
  } catch (error) {
    console.log(error);
  }
});

router.get("/trending", async (req, res) => {
  try {
    let getData = await axios.get(
      `${base_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`
    );
    const data = await getData.data.results;
    res.render("trending", { data: data });
  } catch (error) {
    console.log(error);
  }
});

router.get("/top-rated", async (req, res) => {
  try {
    let getData = await axios.get(
      `${base_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`
    );
    const data = await getData.data.results;
    res.render("toprated", { data: data });
  } catch (error) {
    console.log(error);
  }
});

router.get("/romance", async (req, res) => {
  try {
    let getData = await axios.get(
      `${base_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
    );
    const data = await getData.data.results;
    res.render("romance", { data: data });
  } catch (error) {
    console.log(error);
  }
});

router.get("/netflix-originals", async (req, res) => {
  try {
    let getData = await axios.get(
      `${base_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
    );
    const data = await getData.data.results;
    res.render("netflixoriginals", { data: data });
  } catch (error) {
    console.log(error);
  }
});

router.get("/horror", async (req, res) => {
  try {
    let getData = await axios.get(
      `${base_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
    );
    const data = await getData.data.results;
    res.render("horror", { data: data });
  } catch (error) {
    console.log(error);
  }
});

router.get("/documentary", async (req, res) => {
  try {
    let getData = await axios.get(
      `${base_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
    );
    const data = await getData.data.results;
    res.render("documentary", { data: data });
  } catch (error) {
    console.log(error);
  }
});

router.get("/comedy", async (req, res) => {
  try {
    let getData = await axios.get(
      `${base_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
    );
    const data = await getData.data.results;
    res.render("action", { data: data });
  } catch (error) {
    console.log(error);
  }
});

router.get("/action", async (req, res) => {
  try {
    let getData = await axios.get(
      `${base_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
    );
    const data = await getData.data.results;
    console.log(data);
    res.render("action", { data: data });
  } catch (error) {
    console.log(error);
  }
});



module.exports = router;
