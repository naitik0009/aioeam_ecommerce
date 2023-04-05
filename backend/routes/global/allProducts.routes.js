const express = require("express");
const router = express.Router();
const {getAllproducts,getProduct} = require("../../controller/global/allProducts.controller");

//let's define the route
router.route("/all-products").get(getAllproducts);
router.route("/product/:id").get(getProduct);

//let's export the route 
module.exports = router;