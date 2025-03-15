import { model, Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
name: {
    type: String, 
    required: true
},
email: {
    type: String, 
    required: [true, "Please provide your email"],
    unique: true
},
password: {
    type: String, 
    required: true
}
})

const user = model<IUser>('User', userSchema)

export default user