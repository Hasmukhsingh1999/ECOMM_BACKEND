const axios = require('axios')

exports.fetchDeals = async (productName) => {
  const username = "hasmukhEcom";
  const password = "Hasmukhsingh123";
  const body = {
    source: "amazon_search",
    domain: "in",
    query: productName,
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
          "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
      },
    }
  );
  const data = response.data;
  const results = data.results[0].content.results.organic;
  const filtereDeals = results.filter((deal) => deal.price_strikethrough);
  return filtereDeals.sort(
    (b, a) =>
      ((a.price_strikethrough - a.price) / a.price_strikethrough) * 100 -
      (b.price_strikethrough - b.price) * 100
  );
};
