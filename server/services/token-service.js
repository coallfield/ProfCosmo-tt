const jwt = require('jsonwebtoken')


class TokenService {
    generateToken(payload) {
        const accessToken = jwt.sign(payload, process.env.TOKEN_SECRET, {expiresIn: '15d'})
        return accessToken
    }
    validateAccessToken(token) {
        try {
            const userData = jwt.verify(token, process.env.TOKEN_SECRET)
            return userData
        } catch (error) {
            return null
        }
       
    }

    
}

module.exports = new TokenService()