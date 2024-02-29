const express = require("express");
const router = express.Router();
const newsController = require('../controllers/newsControllers');

// protected routes
router.get("/news" , newsController.newsController);

module.exports = router;