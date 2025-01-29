const Router = require('router');
const { sendContactedMessages } = require('../controllers/contactus.controller');
const router = Router();

router.post('/sendCustomerResponse', sendContactedMessages)

module.exports = router
