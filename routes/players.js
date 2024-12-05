const express = require("express")
const PlayerController = require("../controllers/PlayerController")
const router = express.Router()

router.get("/", PlayerController.getAll)
router.get("/shortName/:short_name", PlayerController.getByName)
router.get("/playerId/:player_id", PlayerController.getByPlayer_id)
router.get("/getMostMoney", PlayerController.getMostMoney)

module.exports = router