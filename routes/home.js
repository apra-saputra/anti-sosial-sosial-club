const Controller = require("../controllers");

const router = require("express").Router();

// /home
router.get('/', Controller.getHome)
// router.get('/add', Controller.getFormStore)
// router.post('/add', Controller.createStore)
// router.get('/edit', Controller.getStore)
// router.post('/edit', Controller.getStore)
// router.get('/delete', Controller.getFormAddEmployee)

module.exports = router