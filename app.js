const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');

// 1. Set EJS as the templating engine (The 'V' in MVC)
app.set('view engine', 'ejs');

// 2. Middleware to read data from HTML forms
app.use(express.urlencoded({ extended: true }));

// 3. Use the routes we defined
app.use('/', authRoutes);

// 4. Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`MVC App is running at http://localhost:${PORT}`);
});
