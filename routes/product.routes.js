const express = require("express");
const { iphoneProductDeals, samsungProductDeals, sonyProductDeals } = require("../controller/product.controller");
const router = express.Router();



router.get("/iphone", iphoneProductDeals);

router.get("/samsung", samsungProductDeals);

router.get("/sony", sonyProductDeals);




module.exports = router;
