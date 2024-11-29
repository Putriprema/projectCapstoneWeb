const query = require("../database");
const { randomUUID } = require("crypto");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function register(req, res) {
    const { name, email, phoneNumber, password, confPassword, codeAffiliate } = req.body;
    const codeAffiliateValue = codeAffiliate === '' ? null : codeAffiliate;

    if (
        name === undefined ||
        name === "" ||
        email === undefined ||
        email === "" ||
        phoneNumber === undefined ||
        isNaN(+phoneNumber) ||
        password === undefined ||
        password === "" ||
        confPassword === undefined ||
        confPassword === ""
    ) 
    return res.status(400).json("Invalid data!");

    if (password !== confPassword) return res.status(400).json("Password not match!");

    try {
        // logic handling
    console.log(req.body)

    const isDuplicate = await query(
    `
        SELECT id FROM users WHERE email = ? OR phone_number = ?
    `, 
        [email, phoneNumber]
    );

    if(isDuplicate.length > 0) return res.status(400).json("User already exists!");
    
    const salt = await bcryptjs.genSalt(12)
    const hash = await bcryptjs.hash(password, salt)
    
    await query (`
        INSERT INTO users (
            uuid, name, email, phone_number, password, code_affiliate
        ) VALUE (
            ?, ?, ?, ?, ?, ?
        );
    `,
        [randomUUID(), name, email, phoneNumber, hash, codeAffiliateValue]
    );

    return res.status(200).json("Register Success!")
    } catch (error) {
        return res.status(400).json("Something went wrong!!");
    }
}

async function login(req, res) {
    const { email, password } = req.body;

    try {
        const user = await query(`
            SELECT id, name, email, password FROM users WHERE email = ?
        `, [email]);

        if (user.length === 0) {
            return res.status(400).json("Invalid Email");
        }

        const isPasswordValid = await bcryptjs.compare(password, user[0].password);

        if (!isPasswordValid) return res.status(400).json("Password Wrong!");

        const payload = {
            id: user[0].id,
            name: user[0].name,
            email: user[0].email
        }
    
        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '1m'
        });
        const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });
    
        await query(`

            UPDATE users SET refresh_token = ? WHERE id = ?
        
        `, [refreshToken, user[0].id]);
    
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        })

        return res.status(200).json ("Login Success!");
    } catch (error) {
        console.error(error);
        return res.status(500).json("Something Went Wrong!");
    }
}



module.exports = {
    register,
    login,

};