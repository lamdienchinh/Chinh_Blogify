const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let refreshTokens = []
const authController = {
    register: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashed = await bcrypt.hash(req.body.password, salt);
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                phonenumber: "",
                dob: ""
            })
            const user = await newUser.save();
            res.status(200).json(user)
        }
        catch (err) {
            res.status(500).json(err)
        }
    },
    generateAccessToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin
            }, process.env.JWT_ACCESS_KEY,
            { expiresIn: "24h" }
        )
    },
    generateRefreshToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin
            }, process.env.JWT_REFRESH_KEY,
            { expiresIn: "365d" }
        )
    },
    login: async (req, res) => {
        try {
            const user = await User.findOne({ username: req.body.username })
            if (!user) {
                return res.status(404).json("Wrong username")
            }
            const validPassword = await bcrypt.compare(req.body.password, user.password)
            if (!validPassword) {
                return res.status(404).json("Wrong password")
            }
            if (user && validPassword) {
                const accessToken = authController.generateAccessToken(user)
                const refreshToken = authController.generateRefreshToken(user)
                refreshTokens.push(refreshToken)
                res.cookie('refreshToken', refreshToken, {
                    httpOnly: true,
                    sameSite: "strict",
                    secure: false
                })
                const { password, ...others } = user._doc;
                return res.status(200).json({ ...others, accessToken: accessToken });
            }
        }
        catch (err) {
            return res.status(500).json(err)
        }
    },
    requestRefreshToken: async (req, res) => {
        // Take refresh token
        const refreshToken = req.cookies.refreshToken
        if (!refreshToken) return res.status(401).json("You're not authenticated");
        if (!refreshTokens.includes(refreshToken)) {
            return res.status(403).json("Refresh token is invalid")
        }
        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
            if (err) {
                console.log(err)
            }
            refreshTokens = refreshTokens.filter((token) => token !== refreshToken)
            const newAccessToken = authController.generateAccessToken(user)
            const newRefreshToken = authController.generateRefreshToken(user)
            refreshTokens.push(newRefreshToken)
            res.cookie('refreshToken', newRefreshToken, {
                httpOnly: true,
                sameSite: "strict",
                secure: false
            })
            res.status(200).json({ accessToken: newAccessToken })
        })
    },
    logout: async (req, res) => {
        try {
            refreshTokens = refreshTokens.filter(token => token !== req.cookies.refreshToken)
            res.clearCookie("refreshToken");
            res.status(200).json('Log out')
        }
        catch (err) {
            return res.status(500).json(err)
        }
    }
}
module.exports = authController