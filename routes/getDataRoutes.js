const express = require("express"); 
const {aiAndMl, cyber, ds, Mobile_Application, Ar_vr, blockchain, cloud, fullstack, IOT, Automation} = require('../controllers/getDataController');   
const router = express.Router(); 

router.get("/ai", aiAndMl); 
router.get("/cyber", cyber); 
router.get("/ds", ds); 
router.get("/MobileApplication", Mobile_Application); 
router.get("/ArandVr", Ar_vr); 
router.get("/blockchain", blockchain); 
router.get("/cloud", cloud)
router.get("/fullstack", fullstack)
router.get("/IOT", IOT)
router.get("/automation", Automation)
module.exports = router; 