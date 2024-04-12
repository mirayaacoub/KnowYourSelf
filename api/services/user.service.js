/***
 *user.service.js
 ****/

 const { User } = require("../models/user.model");

 const getUserByEmail = async (data) => {
     const { email } = data;
     try {
         const user = await User.findOne({ where: { email: email } });
         if (user) {
             return { status: 200, message: "User found", userId: user.user_id };
         } else {
             return { status: 404, message: "User does not exist" };
         }
     } catch (error) {
         return { status: 500, message: "Internal error" };
     }
 }
 
 module.exports = {
     getUserByEmail,
 };
 