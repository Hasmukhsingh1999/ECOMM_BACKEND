const username = "hasmukhEcom";
const password = "Hasmukhsingh123";
const axios = require("axios");
const asyncErrorHandler = require("express-async-handler");

exports.iphoneProductDeals = asyncErrorHandler(async (req, res, next) => {
  try {
    const body = {
      source: "amazon_search",
      domain: "in",
      query: "iphone",
      start_page: 1,
      pages: 10,
      parse: true,
      context: [{ key: "category_id", value: 16391693031 }],
    };

    const response = await axios.post(
      "https://realtime.oxylabs.io/v1/queries",
      body,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Basic " +
            Buffer.from(`${username}:${password}`).toString("base64"),
        },
      }
    );

    const data = response.data;
    const results = data.results[0].content.results.organic;
    const filterDeals = results.filter((deal) => deal.price_strikethrough);

    const sortedByBestDeal = filterDeals.sort(
      (b, a) =>
        ((a.price_strikethrough - a.price) / a.price_strikethrough) * 100 -
        ((b.price_strikethrough - b.price) / b.price_strikethrough) * 100
    );

    res.send(sortedByBestDeal);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

exports.samsungProductDeals = asyncErrorHandler(async (req, res, next) => {
  async (req, res) => {
    try {
      const body = {
        source: "amazon_search",
        domain: "in",
        query: "samsung",
        start_page: 1,
        pages: 10,
        parse: true,
        context: [{ key: "category_id", value: 16391693031 }],
      };

      const response = await axios.post(
        "https://realtime.oxylabs.io/v1/queries",
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Basic " +
              Buffer.from(`${username}:${password}`).toString("base64"),
          },
        }
      );

      const data = response.data;
      const results = data.results[0].content.results.organic;
      const filterDeals = results.filter((deal) => deal.price_strikethrough);

      const sortedByBestDeal = filterDeals.sort(
        (b, a) =>
          ((a.price_strikethrough - a.price) / a.price_strikethrough) * 100 -
          ((b.price_strikethrough - b.price) / b.price_strikethrough) * 100
      );

      res.send(sortedByBestDeal);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).send({ error: "Internal Server Error" });
    }
  };
});
