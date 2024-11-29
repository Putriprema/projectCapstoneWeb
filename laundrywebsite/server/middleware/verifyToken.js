const jwt = require("jsonwebtoken");

async function verifyToken(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];

    console.log('Token', token)

    if (!token) {
      return res.status(401).json("Access token is missing");
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decoded) => {
    if (err) return res.status(403).json("Invalid token.");
        req.email = decoded.email;
        console.log('Decoded:', decoded);
        next();
    })
}

module.exports = { verifyToken };