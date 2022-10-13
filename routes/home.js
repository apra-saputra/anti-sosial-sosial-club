const HomeController = require('../controllers/homeController')
const Help = require('../helpers');
const router = require("express").Router();

// /home
router.get('/', Help.validate, HomeController.getHome)
router.post('/add', Help.validate, HomeController.createPost)
// router.post('/add', Controller.createStore)
// router.get('/edit', Controller.getStore)
// router.post('/edit', Controller.getStore)
// router.get('/delete', Controller.getFormAddEmployee)

module.exports = router