const ProfileController = require("../controllers/profileController.");
const router = require("express").Router();

// /profile
router.get('/:profileId', ProfileController.getProfile)
router.post('/:profileId/update', ProfileController.updateProfile)

module.exports = router