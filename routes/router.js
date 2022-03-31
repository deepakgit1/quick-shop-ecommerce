const express = require("express");
const Products = require("../models/productschema");
const USER = require("../models/userschema");
const router = new express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
const crypto = require('crypto')
const async = require('async')
const nodemailer = require('nodemailer')

//Getting products data
router.get("/getproducts", async (req, res) => {
    try {
        const productsdata = await Products.find();
        // console.log("console the data"+ productsdata);
        res.status(201).json(productsdata)
    } catch (error) {
        console.log("error" + error.message);
    }
})

//Getting individual Data

router.post("/getproductsone/:id", async (req, res) => {
    try {
        const { id } = req.params;
        // console.log(id); 
        const individualdata = await Products.findOne({ id: id })
        // console.log(individualdata +"individual data");
        res.status(201).json(individualdata)
    } catch (error) {
        res.status(400).json(individualdata)
        console.log("error" + error.message);
    }
});

//Register User 
router.post("/register", async (req, res) => {
    // console.log(req.body);

    const { fname, email, mobile, password, cpassword } = req.body;
    if (!fname || !email || !mobile || !password || !cpassword) {
        res.status(422).json({ error: "Please fill all data" })
        console.log("not data available");

    }

    try {
        const preuser = await USER.findOne({ email: email });
        if (preuser) {
            res.status(422).json({ error: "this user is already exists." })
        } else if (password !== cpassword) {
            res.status(422).json({ error: "password and confirm password not match." })
        } else {
            const finaluser = new USER({
                fname, email, mobile, password, cpassword
            });
            // console.log(finaluser);

            //password hashing process
            const storeData = await finaluser.save()
            console.log(storeData);
            res.status(201).json(storeData);
        }
    } catch (error) {
        console.log("Error " + error);
    }

});
//Login user api

router.post("/login", async (req, res) => {
    const { email, password } = req.body
    // console.log(password);
    if (!email || !password) {
        res.status(400).json({ error: "Please fill all the data" })
    };
    try {
        const userlogin = await USER.findOne({ email: email });
        // console.log("userlogin");
        // console.log(userlogin.password);   
        if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);
            // console.log(isMatch);

            if (!isMatch) {
                res.status(400).json({ error: "invalid crediential pass" });
            } else {
                //token genrate
                const token = await userlogin.generateAuthtoken();
                // console.log(token);

                res.cookie("Ecommerce", token, {
                    expires: new Date(Date.now() + 1800000),
                    httpOnly: true
                });
                res.status(201).json({ userlogin });
            }

        } else {
            res.status(400).json({ error: "user not exist" });
        }

    }
    catch (error) {
        console.log(error);
        res.status(400).json({ error: "error" })

    }
});

//Add to Cart Api

router.post("/addcart/:id", authenticate, async (req, res) => {
    try {
        const { id } = req.params
        const cart = await Products.findOne({ id: id });
        // console.log(cart + "Cart Value");

        const UserContact = await USER.findOne({ _id: req.userID });
        // console.log(UserContact);

        if (UserContact) {
            const cartData = await UserContact.addcartdata(cart);
            await UserContact.save();
            console.log(cartData);
            res.status(201).json(UserContact);
        } else {
            res.status(401).json({ error: "Invalid user" });
        }

    } catch (error) {
        console.log(error);
        res.status(401).json({ error: "Invalid user" });

    }
});

//Getting cart details

router.get("/cartdetails", authenticate, async (req, res) => {
    try {
        const buyuser = await USER.findOne({ _id: req.userID })
        res.status(201).json(buyuser)
    } catch (error) {
        console.log(error);
    }
})

//Getting valid user

router.get("/validuser", authenticate, async (req, res) => {
    try {
        const validuserone = await USER.findOne({ _id: req.userID })
        res.status(201).json(validuserone)
    } catch (error) {
        console.log(error);
    }
})

//Deleting items from cart

router.delete("/remove/:id", authenticate, async (req, res) => {
    try {
        const { id } = req.params
        // console.log(id);
        req.rootUser.carts = req.rootUser.carts.filter((crrval) => {
            return crrval.id != id
        });

        req.rootUser.save()
        res.status(201).json(req.rootUser)
        console.log("item removed");
    } catch (error) {
        console.log("error" + error);
        res.status(400).json(req.rootUser)
    }
})

//Cancel order

router.delete("/delete", authenticate, async (req, res) => {
    try {
        // console.log(id);
        req.rootUser.carts = []

        req.rootUser.save()
        res.status(201).json(req.rootUser)
        console.log("item removed");
    } catch (error) {
        console.log("error" + error);
        res.status(400).json(req.rootUser)
    }
})

//Logout Functionality

router.get("/logout", authenticate, (req, res) => {
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((currelem) => {
            return currelem.token !== req.token
        });

        res.clearCookie("Ecommerce", { path: "/" });
        req.rootUser.save();
        res.status(201).json(req.rootUser.tokens);
        console.log("User Loggout");
    } catch (error) {
        console.log("error for user logout");
    }
})


///Routes to handle forgot password

// router.post('/forgot', (req, res, next) => {
//     let recoveryPassword = "";
//     async.waterfall([
//         (done) => {
//             crypto.randomBytes(20, (err, buf) => {
//                 let token = buf.toString('hex')
//                 done(err, token)
//             })
//         },
//         (token, done) => {
//             USER.findOne({ email: req.body.email })
//                 .then(user => {
//                     // if(!user){
//                     //     res.status(400).json({ error: "user not exist" });
//                     //     console.log("User does not exist with this email")
//                     //    return res.redirect('/forgot')
//                     // }
//                     if (user) {
//                         user.resetPasswordToken = token
//                         user.resetPasswordExpires = Date.now() + 1800000; //milisec to 1/2hours
//                         user.save(err => {
//                             done(err, token, user);
//                         })
//                     } else {
//                         res.status(400).json({ error: "user not exist" });
//                         console.log("User does not exist with this email")
//                     }

//                 }).catch(err => {
//                     console.log("Error : " + err)
//                     res.redirect("/forgot")
//                 })
//         },

//         (token, user) => {
//             //SMTP = simple mail transfer protocol
//             let smtpTransport = nodemailer.createTransport({
//                 service: "Gmail",
//                 auth: {
//                     user: process.env.GMAIL_EMAIL,
//                     pass: process.env.GMAIL_PASSWORD
//                 }
//             });
//             let mailOptions = {
//                 to: user.email,
//                 from: "Deepak Gaidhane deepakgaidhane@gmail.com",
//                 subject: "Recovery email from QuickShop.com",
//                 text: "Please click the following link to recover your password: \n\n" +
//                     'http://localhost:3000/newpassword/' + token + '\n\n' +
//                     'If you did not request this, Please ignor this email.'
//             };
//             smtpTransport.sendMail(mailOptions, err => {
//                 console.log('success_msg', "Email Send with further instructions. Please Check your mail.")
//                 res.redirect('/forgot')
//             })
//         }

//     ], err => {
//         if (err) res.redirect('/forgot')
//     });
// });


//Reset password Routes

// router.post('/newpassword', (req, res) => {
//     const newPassword = req.body.password
//     const sentToken = req.body.token
//     USER.findOne({ resetPasswordToken: sentToken, resetPasswordExpires: { $gt: Date.now() } })
//         .then(user => {
//             if (!user) {
//                 return res.status(422).json({ error: "Try again session expired" })
//             }
//             bcrypt.hash(newPassword, 12).then(hashedpassword => {
//                 user.password = newPassword
//                 user.resetPasswordToken = undefined
//                 user.resetPasswordExpires = undefined
//                 user.save().then((saveduser) => {
//                     res.json({ message: "password updated success" })
//                 })
//             })
//         }).catch(err => {
//             console.log(err)
//         })
// })

module.exports = router