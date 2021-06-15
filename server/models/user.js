import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const {Schema} = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    email:{
        type: String,
        trim: true,
        required: 'Email is required',
        unique: true
    },
    password:{
        type: String,
        required: true,
        min: 6,
        max: 64
    },
    stripe_account_id: "",
    stripe_seller:{},
    stripeSession: {},
},
    { timestamps: true }
);

/** 
 * While saving the user's password we need to make sure the password is hashed based on specific conditions 
 * (only when the password is modified)
 */

userSchema.pre("save", function(next) 
{   
    let user = this;
    /* Hash the password only when needed, if we don't use this the password will get autoupdated 
    and hashed and we won't be able to connect again with our original password.
    */
    if (user.isModified("password")) 
    {
        return bcrypt.hash(user.password, 12, function(err, hash) 
        {
            if (err) {
                console.log("BCRYPT HASH ERR ", err);
                return next(err);
            }
            user.password = hash;
            return next();
        });
        } 
        else {
            return next ();
        }
});

userSchema.methods.comparePassword = function (password, next) {
    bcrypt.compare(password, this.password, function (err, match) {
        if (err) {
            console.log("COMPARE PASSWORD ERR", err);
            return next(err, false);
        }
        // if no err, we get null
        console.log("MATCH PASSWORD", match);
        return next(null, match); // true
    });  
};

export default mongoose.model("User", userSchema);