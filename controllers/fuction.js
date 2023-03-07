const returnname = (req , res ) => { res.send("my name is uzman") }
const home = (req , res ) => { res.send("home page") }
const feedback = (req , res ) => { res.send("feedback page") }
const aboutus = (req , res ) => { res.send("about us page") }
const login = (req , res ) => { res.send("login page")}
const profile = (req , res ) => { res.send("user profile page") }
const cars = (req , res ) => {  res.send("cars page") }
const bikes = (req , res ) => {  res.send("bikes page") }
const autoparts = (req , res ) => {  res.send("autoparts page") }
const usedcars = (req , res ) => {  res.send("usedcars page") }

module.exports = {returnname,
    home,
    feedback,
    login,
    aboutus,
    usedcars,
    profile,
    cars,
    bikes,
    autoparts
}