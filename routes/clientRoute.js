const express = require('express')
// const { createform, getform } = require('../controllers/verbalformController');
const { addClient, getallclient,sizeofClient, deleteClient, editClient, getClientbyid, getworkersid, reassign, sizeofWorker} = require('../controllers/clientController');
const upload = require('../middleware/multer')


const router = express.Router();


// router.post('/addClient',addClient);
router.post('/addclient',upload.single('image'),addClient);
router.put('/reassign/:id',reassign);

router.delete('/deleteClient/:id',deleteClient);
router.get('/',getallclient)
router.get('/getbyid/:id',getClientbyid)
router.put('/editClient/:id',editClient)
router.get('/getworkerid/:id',getworkersid);
router.get('/getclientcount',sizeofClient);
router.get('/getworkercount',sizeofWorker)
module.exports = router;