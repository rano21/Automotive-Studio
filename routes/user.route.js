const express = require('express')
const router = express.Router()
const {isUser} = require('../midlleWare/authJwt.Md')
const fuction = require('../controllers/crud.controllers')

router.post('/signUpUser' , fuction.signUpUser);
router.get('/signIn' , fuction.signInUser);

router.post('/addcar' , isUser , fuction.addInCarsTable)
router.post('/addbikes' , isUser ,  fuction.addInBikesTable)
router.post('/addspareparts' ,isUser, fuction.addInSparePartsTable)

router.get('/retrivecarsbyid' ,isUser, fuction.retriveteCars)
router.get('/retrivebikesbyid' ,isUser, fuction.retriveteBikes)
router.get('/retrivesparepartsbyid' ,isUser, fuction.retriveteSpareParts)

router.get('/searchCarsbyPrice', isUser, fuction.filterCars)
router.get('/searchInsurancebyPrice', isUser, fuction.filterInsurance)
router.get('/searchBikesbyPrice', isUser, fuction.filterBikes)
router.get('/searchSparePartsbyPrice', isUser, fuction.filterSpareParts)

router.get('/carpage' ,  isUser , fuction.retriveteallfromcars)
router.get('/bikepage' ,  isUser , fuction.retriveteallfrombikes)
router.get('/sparepartspage' ,  isUser , fuction.retriveteallfromspareparts)
router.get('/InsurancePage' , isUser, fuction.retriveteallfrominsurance)

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