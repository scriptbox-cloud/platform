const  express =  require('express');

const router = express.Router();


const {firstapi, executeCode, writeCode , initFiles, removeFiles} = require('../controller/app')//import controllers from controller directory

// follow below pattern for creating the routes 
router.route('/first').get(firstapi);   //use it by declaring a specific route for it, using different http methods.
router.route('/execute').post(executeCode);   //use it by declaring a specific route for it, using different http methods.
router.route('/writecode').post(writeCode);   //use it by declaring a specific route for it, using different http methods.
router.route('/init-files').get(initFiles);   //use it by declaring a specific route for it, using different http methods.
router.route('/remove').get(removeFiles);   //use it by declaring a specific route for it, using different http methods.


module.exports = router; // exporting router