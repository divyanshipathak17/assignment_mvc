MVC Node.js Login Application

Description

This is a lightweight web application built to demonstrate the Model-View-Controller (MVC) software design pattern. It features a basic user authentication flow using Node.js, Express, and EJS templating.

MVC Architecture Implementation

Model (models/User.js): Handles data logic. In this mock application, it manages a hardcoded array of user credentials and handles the authentication verification.

View (views/): The presentation layer. Uses EJS (Embedded JavaScript) to render dynamic HTML pages (login.ejs and dashboard.ejs) based on the controller's data.

Controller (controllers/authController.js): The middleman. It intercepts the HTTP requests, asks the Model to validate the data, and renders the appropriate View (either a successful dashboard or an error message on the login screen).

Routes (routes/authRoutes.js): Maps incoming URLs to the specific controller functions.

Technologies Used

Node.js - Server environment

Express.js - Web framework for routing and middleware

EJS - Templating engine for rendering views

How to Run

Prerequisites

Node.js installed.

Setup Instructions

Download or clone this repository.

Open a terminal and navigate to the project directory.

Install the required Node packages:

npm install


Start the application server:

npm start


Open a web browser and navigate to http://localhost:3000.

Test Credentials

To test the successful login flow, use the following credentials provided by the mock Model:

Username: admin

Password: password123
