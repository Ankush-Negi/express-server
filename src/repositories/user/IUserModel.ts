import * as mongoose from 'mongoose';
export default interface IUserModel extends mongoose.Document{
    _id: string,
    email: string,
    name: string,
    role: string,
    address: string,
    dob: Date,
    mobileNumber: number,
    hobbies: string[],
    password: string
}