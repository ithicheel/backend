const jwt = require("jsonwebtoken");
const checkToken = (req, res, next) => {
    let token = req.get("cookie");
    if (token) {
        token = token.slice(6);
        jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
            if (err) {
                console.log(err);
                return res.status(400).json({
                    success: false,
                    message: "Нэвтрэх шаардлагатай",
                });
            } else {
                // req.decoded = decoded;
                // req.userRole = req.decoded.result.role;
                next();
            }
        })
    } else {
        return res.status(400).json({
            success: false,
            message: "Нэвтрэх шаардлагатай",
        });
    }
}

module.exports = checkToken;