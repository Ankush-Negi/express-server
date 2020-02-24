import * as mongoose from "mongoose";

export default class UserSchema extends mongoose.Schema{
    constructor (options: any){
        const userSchema = {
            id: String,
            email: String,
            name: String,
            role: String,
            address: String,
            dob: Date,
            mobileNumber: Number,
            hobbies: [String],
            password: String
        };
        super(userSchema,options);
    }
}