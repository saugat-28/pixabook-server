// Library Imports
import express from "express";
// Local Imports
import { signIn, signUp } from "../controllers/users.js";

// Get Router from Express
const router = express.Router()

// Set up routes for user requests
router.post('/signin', signIn);
router.post('/signup', signUp);

// Export router for users
export default router;