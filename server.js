const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/product.routes");
const { default: axios } = require("axios");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/products',productRouter)
// app.get("/ebay", async (req, res) => {
//   const username = "hasmukhEcom";
//   const password = "Hasmukhsingh123";
//   const body = {
//     source: "universal_ecommerce",
//     url: "https://www.ebay.com/itm/293608130360",
//     geo_location: "United States",
//   };

//   try {
//     const response = await axios.post("https://realtime.oxylabs.io/v1/queries", JSON.stringify(body), {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
//       },
//     });

//     // const data = response.json();
//     // const results = data.results[0].content.results.organic;
//     // const filteredDeals = results.filter((deal) => deal.price_strikethrough);
//     // const sortedDeals = filteredDeals.sort(
//     //   (b, a) =>
//     //     ((a.price_strikethrough - a.price) / a.price_strikethrough) * 100 -
//     //     ((b.price_strikethrough - b.price) / b.price_strikethrough) * 100
//     // );
//     res.send(await response.da);
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).send({ error: "Internal Server Error" });
//   }
// });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server started at PORT : ${PORT}`);
});
