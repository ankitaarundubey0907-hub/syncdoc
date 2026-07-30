const authService = require("../services/auth.service");

<<<<<<< HEAD
// Register User
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
      });
    }

    const user = await User.create({
      username,
      email,
      password,
    });

    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    // 👇 Ye line add ki hai
    console.log("REGISTER ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  register,
};
=======
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
>>>>>>> a3f6a982307797257c7d666503f42bdc941950d5
