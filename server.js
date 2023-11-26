const express = require("express");
const cors = require("cors");
const productRouter = require("./routes/product.routes");


require("dotenv").config();

const app = express();

app.use(cors());
app.use(express());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/',productRouter)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server started at PORT : ${PORT}`);
});
