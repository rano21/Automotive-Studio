const express = require('express')
const router = express.Router()
const {isUser} = require('../midlleWare/authJwt.Md')
const fuction = require('../controllers/crud.controllers')

router.post('/signUpUser' , fuction.signUpUser);
router.get('/signIn' , fuction.signInUser);

router.post('/addcar' , isUser , fuction.addInCarsTable)
router.post('/addbikes' , isUser ,  fuction.addInBikesTable)
router.post('/addspareparts' ,isUser, fuction.addInSparePartsTable)

router.get('/retrivecars' ,isUser, fuction.retriveteCars)
router.get('/retrivebikes' ,isUser, fuction.retriveteBikes)
router.get('/retrivespareparts' ,isUser, fuction.retriveteSpareParts)

router.put('/updatecars', isUser, fuction.upadteCars)
router.put('/updatebikes',isUser, fuction.upadteBikes)
router.put('/updatesparepare',isUser, fuction.upadteSpareParts)

router.delete('/deletecar' , isUser, fuction.deleteFomCars)
router.delete('/deletebikes' , isUser, fuction.deleteFomBikes)
router.delete('/deletespareparts' , isUser, fuction.deleteFomSpareParts)


module.exports = router