import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";//js library to encrypt the user password
export const signup = async(req, res) => {
    try {
        const { fullname, email, password } = req.body;//signup page me jo credentials dalte h wo req.body se ayega 
        const user = await User.findOne({ email });//DB me check kar rahe h ki agar same email wala credentials exist karta h toh user exist show kara denge
        if (user) {
            return res.status(400).json({ message: "User already exists" });//400 status for error
        }
        //if user doesnot exist
        const hashPassword = await bcryptjs.hash(password, 10);//password ko different string format me store kara do inorder to ensure security of password
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        });
        await createdUser.save();//the created user will  be saved in DB in collection user
        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};
export const login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcryptjs.compare(password, user.password);//to compare password of DB and user typed password //tabtak wait karega jabtak pura kam nahi ho jaye async function is used synchronously
        if (!user || !isMatch) {//if user or pass doesnot match then it goes to if and shows error
            return res.status(400).json({ message: "Invalid username or password" });
        } else {
            res.status(200).json({
                message: "Login successful",
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                },
            });
        }
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};