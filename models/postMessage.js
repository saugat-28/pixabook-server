import mongoose from "mongoose";

// Create a new schema for Post
// Posts will have: Title, Message, Name of Creator, Creator ID, Tags, 
    // SelectedFile Likes Array, Comments Array and Date of Post Creation
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],
        default: []
    },
    comments: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;