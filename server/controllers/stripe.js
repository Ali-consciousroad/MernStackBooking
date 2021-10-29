import User from "../models/user";
//import Stripe from "stripe";
// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')(process.env.STRIPE_SECRET);

export const createConnectAccount = async(req, res) => {
    // console.log("REQ USER FROM REQUIRE_SIGNIN MIDDLEWARE", req.user);
    // Making sure we have a valid user by checking the token 
    // console.log("YOU HIT CREATE CONNECT ACCOUNT ENDPOINT");
    // 1. find user from the db
    const user = await User.findById(req.user._id).exec();
    console.log("USER ==> ", user);

    // 2. If user don't have stripe_account_id yet, create now
    const account = await stripe.accounts.create({
        type: "express",
    });
    console.log("ACCOUNT ===> ", account);
    
    // 3. Create account link based on account id (for frontend to complete onboarding)
    // 4. Update payment schedule (optional. default is 2 days)
    process.on('unhandledRejection', (reason, p) => {
        console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
        // application specific logging, throwing an error, or other logic here
      });
};