const router = require("express").Router();
// const Controller = require("../controllers");
const home = require('./home')

// router.get('/', Controller.redirectHome)
// router.get('/employees', Controller.getEmployees)
router.use('/home', home)

module.exports = router