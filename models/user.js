import mongoose from "mongoose";

// Create a new schema for User
// User will have: Name, Email, Password, user ID
const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    id: {type: String}
})

export default mongoose.model("User", userSchema);