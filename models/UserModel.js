import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  id: Schema.Types.ObjectId,
  email: String,
  password: String,
  token: String,
});

export const UserModel = mongoose.model("Users", UserSchema);


// hook PRE SAVE
// MODEL -> METHODS 