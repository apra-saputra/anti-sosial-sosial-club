const HomeController = require('../controllers/homeController')
const Help = require('../helpers');
const router = require("express").Router();

// /home
router.get('/', Help.validate, HomeController.getHome)
router.post('/add', Help.validate, HomeController.createPost)
router.get('/edit/:postId', HomeController.getUpdatePost)
router.post('/edit/:postId', HomeController.updatePost)
router.get('/delete/:postId', HomeController.deletePost)

module.exports = router