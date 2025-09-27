const express = require("express"); 
const {aiAndMl, cyber, ds, Mobile_Application, Ar_vr, blockchain, cloud} = require('../controllers/getDataController');   
const router = express.Router(); 

router.get("/ai", aiAndMl); 
router.get("/cyber", cyber); 
router.get("/ds", ds); 
router.get("/MobileApplication", Mobile_Application); 
router.get("/ArandVr", Ar_vr); 
router.get("/blockchain", blockchain); 
router.get("/cloud", cloud)
module.exports = router; 