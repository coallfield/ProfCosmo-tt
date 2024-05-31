
const UserService = require('../services/user-service')
class UserController {
    async login(req, res, next) {
        try {
            const {email, password} = req.body
            const userData = await UserService.login(email, password)
            return res.json(userData)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new UserController()