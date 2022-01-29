// 
const { createUser, getUserByEmail } = require('../model/users');
const { hashSync, genSaltSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");
exports.getUser = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "ok"
    })
}
exports.createUser = (req, res, next) => {
    const salt = genSaltSync(10);
    req.body.password = hashSync(req.body.password, salt);
    createUser(req.body, (err, results) => {
        if (results.success) {
            getUserByEmail(req.body.email, (err, resultss) => {
                if (resultss.success) {
                    resultss.data.rows[0].user_pass = undefined;
                    const jsontoken = sign({ result: resultss }, process.env.JWT_KEY, {
                        expiresIn: process.env.JWT_EXPIRESIN,
                    });
                    const cookieOptions = {
                        expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
                    };
                    res.status(200).cookie("token", jsontoken, cookieOptions).json({
                        success: resultss.success,
                        message: "Бүртгэл үүссэн нэвтэрлээ.",
                        email: req.body.email,
                        token: jsontoken,
                    });
                } else {
                    res.status(500).json({
                        success: resultss.success,
                        error: resultss.data.err.sqlMessage,
                    })
                }
            })
        } else {
            res.status(500).json({
                success: results.success,
                error: results.data.err.sqlMessage,
            })
        }
    })

}
exports.loginUser = (req, res, next) => {
    const body = req.body;
    if (!body.email || body.email == null) {
        return res.status(200).json({
            success: false,
            message: "Цахим хаяг хоосон",
        });
    }
    if (!body.password || body.password == null) {
        return res.status(200).json({
            success: false,
            message: "Нууц үг хоосон",
        });
    }
    getUserByEmail(body.email, (err, results) => {
        const result = compareSync(body.password, results.data.rows[0].user_pass);
        if (result) {
            results.data.rows[0].user_pass = undefined;
            const jsontoken = sign({ result: results }, process.env.JWT_KEY, {
                expiresIn: process.env.JWT_EXPIRESIN,
            });
            const cookieOptions = {
                expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
            };
            res.status(200).cookie("token", jsontoken, cookieOptions).json({
                success: true,
                message: "Нэвтэрлээ",
                token: jsontoken,
                data: results.data.rows[0],
            });
        } else {
            return res.status(200).json({
                success: false,
                message: "Нууц үг таарсангүй ",
            });
        }
    })
}