const jwt = require('jsonwebtoken')

const generateToken = (payload) => {
    const token = jwt.sign(
        payload,
        process.env.JWT,
        {expiresIn: '2h'}
    )
    
    return token
}

const verifyToken = (token) => {
    const payload = jwt.verify(
        token,
        process.env.JWT
    )

    return payload
}

module.exports = {
    generateToken,
    verifyToken
}