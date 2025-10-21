const express=require("express")
const router = express.Router();

const {getWeatherData,cites}=require("../controller/weatherController.js")
const { checkAPI_key}=require("../middlewares/errorMiddleware.js")
router.get("/",getWeatherData);
router.get("/cites", cites);

// route to test error middleware
router.get("/city/errorMiddleware", (req, res, next) => {
  const err = new Error("This is a test error from errorMiddleware route");
  err.status = 400;
  next(err);
});
module.exports =router;