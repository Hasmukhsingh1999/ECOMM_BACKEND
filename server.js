const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const username = "hasmukhEcom";
const password = "Hasmukhsingh123";

app.get("/products", async (req, res) => {
  try {
    const { default: fetch } = await import("node-fetch"); // Destructure the 'default' property
    const body = {
      source: "amazon_search",
      domain: "in",
      query: "iphone",
      start_page: 1,
      pages: 10,
      parse: true,
      context: [{ key: "category_id", value: 16391693031 }],
    };
    const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
      method: "post",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
      },
    });

    const data = await response.json();
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

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server started at PORT : ${PORT}`);
});
