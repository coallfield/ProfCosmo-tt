const ApiError = require('../exceptions/api-error')
const tokenService = require('../services/token-service')
const UserDto = require('../dtos/user-dto')
module.exports = async function (req, res, next) {
    try {
        const authorizationHeader = req.headers.authorization
        if(!authorizationHeader) {
            return next(ApiError.UnauthorizedError())
        }

        const accessToken = authorizationHeader.split(' ')[1]
        if(!accessToken) {
            return next(ApiError.UnauthorizedError())
        }
        const userData = await tokenService.validateAccessToken(accessToken)
        if(!userData) {
            return next(ApiError.UnauthorizedError())
        }
        const userDto = new UserDto(userData)
        req.user = userDto
        next()
    } catch (error) {
        return next(ApiError.UnauthorizedError())
    }
}