import expressJwt from "express-jwt";
// Protect the routes
export const requireSignin = expressJwt({
    // secret, expiryDate
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
});