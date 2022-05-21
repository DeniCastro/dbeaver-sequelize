const { Router } = require('express')
const IndexController = require('./controllers/IndexController')
const router = Router()

router.get('/', IndexController.index)
router.get('/create', IndexController.create)
router.post('/create', IndexController.store)


module.exports = router