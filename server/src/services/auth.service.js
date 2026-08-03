const User = require("../models/User");
const generateToken = require("../utils/generateToken");

class AuthService {

    /**
     * Register User
     */
    async register(userData) {

        const { username, email, password } = userData;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            throw new Error("User already exists.");
        }

        const user = await User.create({
            username,
            email,
            password
        });

        const token = generateToken(user._id);

        return {
            token,
            user
        };

    }

    /**
     * Login User
     */
    async login(email, password) {

        const user = await User.findOne({
            email
        }).select("+password");

        if (!user) {
            throw new Error("Invalid email or password.");
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch) {
            throw new Error("Invalid email or password.");
        }

        const token = generateToken(user._id);

        return {
            token,
            user
        };

    }

    /**
     * Get User Profile
     */
    async getProfile(userId) {

        const user = await User.findById(userId);

        if (!user) {
            throw new Error("User not found.");
        }

        return user;

    }

    /**
     * Update Profile
     */
    async updateProfile(userId, data) {

        const user = await User.findByIdAndUpdate(
            userId,
            data,
            {
                new: true,
                runValidators: true
            }
        );

        if (!user) {
            throw new Error("User not found.");
        }

        return user;

    }

}

module.exports = new AuthService();