const express = require("express");
const { iphoneProductDeals, samsungProductDeals } = require("../controller/product.controller");
const router = express.Router();



router.get("/iphone", iphoneProductDeals);

router.get("/samsung", samsungProductDeals);

router.get("/canon", samsungProductDeals);


module.exports = router;
