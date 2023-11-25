const axios = require("axios");
const asyncErrorHandler = require("express-async-handler");
const { fetchDeals } = require("../config/fetchProductDeals");


exports.iphoneProductDeals = asyncErrorHandler(async (req, res, next) => {
  try {
    const sortedByBestDeal = await fetchDeals("iphone");
    res.send(sortedByBestDeal);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

exports.samsungProductDeals = asyncErrorHandler(async (req, res, next) => {
  try {
    const sortedByBestDeal = await fetchDeals("samsung");
    res.send(sortedByBestDeal);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

exports.sonyProductDeals = asyncErrorHandler(async (req, res, next) => {
  try {
    const sortedByBestDeal = await fetchDeals("sony");
    res.send(sortedByBestDeal);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});
