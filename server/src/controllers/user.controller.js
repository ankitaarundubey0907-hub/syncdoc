const User = require("../models/User");

class UserController {

    // Get All Users
    async getAllUsers(req, res) {

        try {

            const users = await User.find().select("-password");

            res.status(200).json({
                success: true,
                data: users,
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message,
            });

        }

    }

    // Get User By Id
    async getUserById(req, res) {

        try {

            const user = await User.findById(req.params.id)
                .select("-password");

            if (!user) {

                return res.status(404).json({
                    success: false,
                    message: "User not found.",
                });

            }

            res.status(200).json({
                success: true,
                data: user,
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message,
            });

        }

    }

    // Delete User
    async deleteUser(req, res) {

        try {

            const user = await User.findByIdAndDelete(req.params.id);

            if (!user) {

                return res.status(404).json({
                    success: false,
                    message: "User not found.",
                });

            }

            res.status(200).json({
                success: true,
                message: "User deleted successfully.",
            });

        } catch (error) {

            res.status(500).json({
                success: false,
                message: error.message,
            });

        }

    }

}

module.exports = new UserController();