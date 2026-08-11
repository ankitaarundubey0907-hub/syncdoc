const authService = require("../services/auth.service");

class AuthController {

    // Register User
    async register(req, res) {

        try {

            const result = await authService.register(req.body);

            res.status(201).json({
                success: true,
                message: "User registered successfully.",
                token: result.token,
                user: result.user,
            });

        } catch (error) {

    console.error("REGISTER ERROR:");
    console.error(error.stack);

    res.status(400).json({
        success: false,
        message: error.message,
    });

}

    }

    // Login User
    async login(req, res) {

        try {

            const { email, password } = req.body;

            const result = await authService.login(email, password);

            res.status(200).json({
                success: true,
                message: "Login successful.",
                token: result.token,
                user: result.user,
            });

        } catch (error) {

            res.status(401).json({
                success: false,
                message: error.message,
            });

        }

    }

    // Get Logged-in User Profile
    async getProfile(req, res) {

        try {

            const user = await authService.getProfile(req.user.id);

            res.status(200).json({
                success: true,
                user,
            });

        } catch (error) {
          console.error(error);
            res.status(404).json({
                success: false,
                message: error.message,
            });

        }

    }

    // Update User Profile
    async updateProfile(req, res) {

        try {

            const user = await authService.updateProfile(
                req.user.id,
                req.body
            );

            res.status(200).json({
                success: true,
                message: "Profile updated successfully.",
                user,
            });

        } catch (error) {

            res.status(400).json({
                success: false,
                message: error.message,
            });

        }

    }

}

module.exports = new AuthController();