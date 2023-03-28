const express = require('express')
const router = express.Router()
const {isAdmin} = require('../midlleWare/authJwt.Md')
const fuction = require('../controllers/crud.controllers')


router.get('/signIn' , fuction.signInAdmin);

router.post('/addAdmin' , isAdmin , fuction.addAdmin)
router.post('/addcar' , isAdmin , fuction.addInCarsTable)
router.post('/addbikes' , isAdmin ,  fuction.addInBikesTable)
router.post('/addInsurance' ,isAdmin, fuction.addInsuranceTable)
router.post('/addspareparts' ,isAdmin, fuction.addInSparePartsTable)

router.get('/retrivecars' ,isAdmin, fuction.retriveteCars)
router.get('/retrivebikes' ,isAdmin, fuction.retriveteBikes)
router.get('/retriveinsurance' ,isAdmin, fuction.retriveteInsurance)
router.get('/retrivespareparts' ,isAdmin, fuction.retriveteSpareParts)

router.put('/updateuser', isAdmin, fuction.upadteUsers)
router.put('/updatecars', isAdmin, fuction.upadteCars)
router.put('/updatebikes',isAdmin, fuction.upadteBikes)
router.put('/updateinsurance',isAdmin, fuction.upadteInsurance)
router.put('/updatesparepare',isAdmin, fuction.upadteSpareParts)

router.delete('/deleteuser' , isAdmin, fuction.deleteFomUser)
router.delete('/deletecar' , isAdmin, fuction.deleteFomCars)
router.delete('/deletebikes' , isAdmin, fuction.deleteFomBikes)
router.delete('/deleteinsurance' , isAdmin, fuction.deleteFomInsurance)
router.delete('/deletespareparts' , isAdmin, fuction.deleteFomSpareParts)


module.exports = router