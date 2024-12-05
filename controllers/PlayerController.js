const Player = require("../models/Player")

const PlayerController = {
    async getAll(req, res) {
        try {
            const { page = 1, limit = 10 } = req.query
            const players = await Player.find()
                .limit(limit)
                .skip((page - 1) * limit);

            res.send(players)
        } catch (error) {
            console.error(error);
        }
    },
    async getByPlayer_id(req, res) {
        try {
            const player = await Player.findOne({ player_id: req.params.player_id });
            res.send(player)
        } catch (error) {
            console.error(error);
        }
    },
    async getByName(req, res) {
        try {
            const players = await Player.findOne({ short_name: req.params.short_name });
            res.send(players);
        } catch (error) {
            console.log(error);
        }
    },
    async getMostMoney(req, res) {
        try {
            const players = await Player.find()
          .sort({wage_eur:-1}) 
          .limit(10)
            res.send(players);
        } catch (error) {
            console.log(error);
        }
    },

}

module.exports = PlayerController