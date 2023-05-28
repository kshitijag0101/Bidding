const express = require("express");

const isAuth = require("../middlewares/is-auth");
const bidControllers = require("../controllers/bidding");
const upload = require("../utils/imageupload.util");

const router = express.Router();

router.post('/bid', upload.array('images', 6) ,bidControllers.postBid);

module.exports = router;