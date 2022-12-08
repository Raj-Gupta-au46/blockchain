const express = require("express")
const router = express.Router();
const coinController = require("../controllers/coinController")


router.get("/crypto", coinController.getCrypto )




module.exports = router;