// The Model handles the data and business logic.
const users = [
    { username: "admin", password: "password123" },
    { username: "student", password: "123" }
];

class User {
    // Function to check if credentials match our "database"
    static authenticate(username, password) {
        return users.find(user => user.username === username && user.password === password);
    }
}

module.exports = User;
