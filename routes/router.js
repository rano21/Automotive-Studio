const express = require('express')
const router = express.Router()

const fuction = require('../controllers/crud.controllers')


router.post('/adduser' , fuction.addInUserTable)
router.post('/addcar' , fuction.addInCarsTable)
router.post('/addadmin' , fuction.addInAdminTable)
router.post('/addbikes' , fuction.addInBikesTable)
router.post('/addInsurance ' , fuction.addInsuranceTable)
router.post('/addspareparts' , fuction.addInSparePartsTable)

router.get('/retriveuser' , fuction.retriveteUsers)
router.get('/retrivecars' , fuction.retriveteCars)
router.get('/retrivebikes' , fuction.retriveteBikes)
router.get('/retriveadmin' , fuction.retriveteAmin)
router.get('/retriveinsurance' , fuction.retriveteInsurance)
router.get('/retrivespareparts' , fuction.retriveteSpareParts)

router.put('/updateuser', fuction.upadteUsers)
router.put('/updatecars', fuction.upadteCars)
router.put('/updateadmin', fuction.upadteAdmin)
router.put('/updatebikes', fuction.upadteBikes)
router.put('/updateinsurance', fuction.upadteInsurance)
router.put('/updatesparepare', fuction.upadteSpareParts)

router.delete('/deleteuser' , fuction.deleteFomUser)
router.delete('/deletecar' , fuction.deleteFomCars)
router.delete('/deleteadmin' , fuction.deleteFomAdmin)
router.delete('/deletebikes' , fuction.deleteFomBikes)
router.delete('/deleteinsurance' , fuction.deleteFomInsurance)
router.delete('/deletespareparts' , fuction.deleteFomSpareParts)




module.exports = router