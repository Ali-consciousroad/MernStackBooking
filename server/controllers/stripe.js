export const createConnectAccount = async(req, res) => {
    console.log("REQ USER FROM REQUIRE_SIGNIN MIDDLEWARE", req.user);
    // Making sure we have a valid user by checking the token 
    console.log("YOU HIT CREATE CONNECT ACCOUNT ENDPOINT");
};