const jwt = require('jsonwebtoken');
const key = process.env.TOKEN_KEY

const verification = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        token = token.split(' ')[1];
        const verify = jwt.verify(token, key)
        next()
    } catch (err) {
        res.status(500).json({
            msg:"invalid token"
        })
    }
}

module.exports = verification