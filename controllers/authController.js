const User = require('../models/User');

// Controller function to show the login page
exports.getLoginPage = (req, res) => {
    res.render('login', { error: null });
};

// Controller function to handle the login form submission
exports.processLogin = (req, res) => {
    const { username, password } = req.body;
    
    // 1. Ask the MODEL to verify data
    const user = User.authenticate(username, password);

    // 2. Decide which VIEW to show based on the result
    if (user) {
        res.render('dashboard', { username: user.username });
    } else {
        res.render('login', { error: 'Invalid username or password. Please try again.' });
    }
};
