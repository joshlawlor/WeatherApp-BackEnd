const express = require('express')
const router = express.Router()
const searchCtrl = require('../controllers/searchCtrl')


router.post('/', searchCtrl.getWeather)



module.exports = router