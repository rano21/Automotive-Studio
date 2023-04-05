const express = require('express')
const router = express.Router()
const {isUser} = require('../midlleWare/authJwt.Md')
const fuction = require('../controllers/crud.controllers')

router.post('/signUpUser' , fuction.signUpUser);
router.get('/signIn' , fuction.signInUser);

router.post('/addcar' , isUser , fuction.addInCarsTable)
router.post('/addbikes' , isUser ,  fuction.addInBikesTable)
router.post('/addspareparts' ,isUser, fuction.addInSparePartsTable)

router.get('/retrivecarsbyid' ,isUser, fuction.retriveteCarsByID)
router.get('/retrivebikesbyid' ,isUser, fuction.retriveteBikesByID)
router.get('/retrivesparepartsbyid' ,isUser, fuction.retriveteSparePartsByID)

router.get('/searchCarsbyPrice', isUser, fuction.filterCars)
router.get('/searchInsurancebyPrice', isUser, fuction.filterInsurance)
router.get('/searchBikesbyPrice', isUser, fuction.filterBikes)
router.get('/searchSparePartsbyPrice', isUser, fuction.filterSpareParts)

router.get('/carpage' ,  isUser , fuction.paginatecars)
router.get('/bikepage' ,  isUser , fuction.paginatebikes)
router.get('/sparepartspage' ,  isUser , fuction.paginatespareparts)
router.get('/InsurancePage' , isUser, fuction.paginateinsurance)

router.put('/updatecars', isUser, fuction.upadteCars)
router.put('/updatebikes',isUser, fuction.upadteBikes)
router.put('/updatesparepare',isUser, fuction.upadteSpareParts)

router.delete('/deletecar' , isUser, fuction.deleteFomCars)
router.delete('/deletebikes' , isUser, fuction.deleteFomBikes)
router.delete('/deletespareparts' , isUser, fuction.deleteFomSpareParts)



router.get('*', function(req, res){
    res.status(404).send('galat url enter kar rha hy');
  });

module.exports = router