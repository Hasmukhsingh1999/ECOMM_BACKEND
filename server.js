const express = require("express");
const { default: axios } = require("axios");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(express());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

const body = {
  source: "amazon_product",
  domain: "nl",
  query: "B08Y72CH1F",
  parse: true,
  context: [{ key: "autoselect_variant", value: true }],
};

const fetchData = async () => {
  try {
    const response = await axios.post(
      "https://realtime.oxylabs.io/v1/queries",
      body,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
        },
      }
    );

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server started at PORT : ${PORT}`);
});

// Call the asynchronous function
fetchData();
