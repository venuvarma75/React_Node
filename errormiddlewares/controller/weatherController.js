const getWeatherData = (req,res)=>{
    const {city} =req.query ;
    res.status(200).json({
        message:"weather is very cold",
        cityName: city,
        temperature: "28.0 celsius"
    })
    res.send("weatherData")
}
 const cites = (req,res,next)=>{
    res.send("city is hyderabad")

 }


module.exports={getWeatherData,cites}