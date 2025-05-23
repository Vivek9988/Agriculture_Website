const User = require('../models/users');

async function handleUserSignup(req, res) {
    try {
        const { name, email, password } = req.body;

        // Optional: Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'Email already registered!',
            });
        }

        await User.create({ name, email, password });

        return res.status(201).json({
            success: true,
            message: 'Signup successful!',
            name,
        });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
}

module.exports = { handleUserSignup };
