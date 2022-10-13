const HomeController = require('../controllers/homeController')
const Help = require('../helpers');
const router = require("express").Router();

// /home
router.get('/', Help.validate, HomeController.getHome)
router.post('/add', Help.validate, HomeController.createPost)
router.get('/edit/:postId', Help.validate, HomeController.getUpdatePost)
router.post('/edit/:postId', Help.validate, HomeController.updatePost)
router.get('/delete/:postId', Help.validate, HomeController.deletePost)

module.exports = router