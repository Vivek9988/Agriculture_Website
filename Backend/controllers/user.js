const User=require ('../models/users')
async function handleUserSignup(req, res) {
    const { name, email, password } = req.body;
    await User.create({
        name,
        email,
        password
    });
    res.json({ message: 'Signup successful!' ,name});

}

module.exports={handleUserSignup}