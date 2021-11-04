const express = require('express');
const wishController = require('../controllers/adminController');
const router = express.Router({ mergeParams: true });

router.get('/admin', wishController.getMainPage);

router.post('/admin', wishController.postNewWish);

router.post('/delete', wishController.deleteWish);

module.exports = router;