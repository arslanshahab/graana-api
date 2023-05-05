import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  id: Schema.Types.ObjectId,
  email: String,
  password: String,
  token: String,
});

export const UserModel = mongoose.model("Users", UserSchema);



// UserSchema.pre('save', ()=> {

// })

// UserSchema.methods.generateToken = () => {
  
// }
// hook PRE SAVE
// MODEL -> METHODS 