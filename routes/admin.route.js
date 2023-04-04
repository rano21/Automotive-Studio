const express = require('express')
const router = express.Router()
const {isAdmin} = require('../midlleWare/authJwt.Md')
const fuction = require('../controllers/crud.controllers')

router.get('/signIn' , fuction.signInAdmin);
router.post('/addAdmin' , fuction.addAdmin)
router.post('/signUpUser' , fuction.signUpUser)

router.post('/addcar' , isAdmin , fuction.addInCarsTable)
router.post('/addbikes' , isAdmin ,  fuction.addInBikesTable)
router.post('/addInsurance' ,isAdmin, fuction.addInsuranceTable)
router.post('/addspareparts' ,isAdmin, fuction.addInSparePartsTable)

router.get('/retrivecarsbyid' ,isAdmin, fuction.retriveteCars)
router.get('/retrivebikesbyid' ,isAdmin, fuction.retriveteBikes)
router.get('/retriveinsurancebyid' ,isAdmin, fuction.retriveteInsurance)
router.get('/retrivesparepartsbyid' ,isAdmin, fuction.retriveteSpareParts)

router.get('/searchCarsbyPrice', isAdmin, fuction.filterCars)
router.get('/searchInsurancebyPrice', isAdmin, fuction.filterInsurance)
router.get('/searchBikesbyPrice', isAdmin, fuction.filterBikes)
router.get('/searchSparePartsbyPrice', isAdmin, fuction.filterSpareParts)
router.get('/searchUsers' , isAdmin , fuction.filterUsers)

router.get('/carpage' ,  isAdmin , fuction.retriveteallfromcars)
router.get('/bikepage' ,  isAdmin , fuction.retriveteallfrombikes)
router.get('/sparepartspage' ,  isAdmin , fuction.retriveteallfromspareparts)
router.get('/InsurancePage' , isAdmin, fuction.retriveteallfrominsurance)
router.get('/UsersPage', isAdmin , fuction.retriveteallfromuser)

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

router.get('*', function(req, res){
    res.status(404).send('galat url enter kar rha hy');
  });

module.exports = router