const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');  

const signup = async (request, response) => {
    try {
        const { name, email, password } = request.body;
        const db = request.app.locals.db;

        const existingUser = await db.collection("users").findOne({ email });
        if (existingUser) {
            return response.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await db.collection("users").insertOne({
            name,
            email,
            password: hashedPassword,
            createdAt: new Date(),
        });

        response.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "Internal server error" });
    }
};

const login = async (req, res) => {
    try{
       const {email, password} = req.body; 
       const db = req.app.locals.db; 
       const userDb = await db.collection("users").findOne({ email }); 
       if(!userDb){
         return res.status(400).json({message: "Email or password mismatched"}); 
       }
       const isMatch = await bcrypt.compare(password, userDb.password); 
       if(!isMatch){
        return res.status(400).json({message: "Password is incorrect"}); 
       }
       const token = jwt.sign({userId: userDb._id, email: userDb.email}, process.env.JWT_KEY, {expiresIn: "1h"} ); 
       res.status(200).json({
        message: "Login successfully", 
        token
       }); 
    }catch(error){
        res.status(500).json({message: "Internal server error"})
    }
}

module.exports = { signup, login };
