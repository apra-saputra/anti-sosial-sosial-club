const ProfileController = require("../controllers/profileController.");
const Help = require('../helpers');
const router = require("express").Router();

// /profile
router.get('/:profileId', Help.validate, ProfileController.getProfile)
router.post('/:profileId/update', Help.validate, ProfileController.updateProfile)

module.exports = router