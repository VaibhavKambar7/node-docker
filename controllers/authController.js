const User = require("../models/userModel")
const bcrypt = require('bcrypt')

const signUp = async(req,res) => {

    const {username,password} = req.body
    const hashpassword = await bcrypt.hash(password,12)


    try {
        const newUser = await User.create(
           { username:username,
            password : hashpassword,}
        );
        res.status(201).json({
            status:"success",
            data:{
                user:newUser
            }
        })
        
    } catch (error) {

        res.status(400).json({
            status:"fail",
        })
        
    }
}

const login = async(req,res) => {

    const {username,password} = req.body

    try {

        const user = await User.findOne({username})

        if(!user){
            return res.status(404).json({
                status:"fail",
                message:'user not found'
            })
        }

        //else username is present in the database

        const isCorrect = await bcrypt.compare(password,user.password)

        if(isCorrect){
            res.status(200).json({
                status:"success"
            })
        }
        else{
            res.status(400).json({
                status:'fail',
                message:'incorrect username and password'
            })
        }
    
    } catch (error) {

        res.status(400).json({
            status:"fail",
        })
        
    }
}




module.exports = {signUp,login}