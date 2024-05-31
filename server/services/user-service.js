const UserModel = require('../models/user-model')
const bcrypt = require('bcrypt')
const TokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')
const ApiError = require('../exceptions/api-error')
class UserService {
    async login(email, password) {
       
        const user = await UserModel.findOne({email})
        if(!user) {
            throw ApiError.BadRequest("This user doesn't exists")
        }
        const isPasswordEquals = await bcrypt.compare(password, user.password)
        if(!isPasswordEquals) {
            throw ApiError.BadRequest('Invalid password')
        }
        const userDto = new UserDto(user)
        const accessToken = TokenService.generateToken({...userDto})
        return {accessToken, user: userDto}
    }
}

module.exports = new UserService()