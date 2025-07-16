# Pet Paws Project

This project, "Pet Paws," is a web application designed to facilitate the buying and selling of pets, along with managing pet-related accessories like food, toys, and medicines. It's built using the MEEN stack (MongoDB, Express.js, EJS, Node.js) and includes user authentication features.

## Features

* **Pet Management**:
    * View all available pets.
    * Add new pets for sale.
    * View details of a specific pet.
    * Edit existing pet listings.
    * Delete pet listings.
* **User Authentication**:
    * User signup.
    * User login.
    * User logout.
* **Product Categories**:
    * **Foods**: Browse various pet food products.
    * **Toys**: Explore a range of pet toys.
    * **Utilities**: Discover different pet utilities.
    * **Medicines**: View available pet medicines and consult doctors.
* **Informational Pages**:
    * About Us page, detailing the platform's mission and government authorization.
    * Contact Us page with a contact form.

## Technologies Used

The project is built with the following technologies:

* **MongoDB**: NoSQL database for data storage.
* **Express.js**: Web application framework for Node.js.
* **EJS (Embedded JavaScript)**: Templating engine for generating HTML with JavaScript.
* **Node.js**: JavaScript runtime environment.
* **Mongoose**: MongoDB object data modeling (ODM) for Node.js.
* **Passport.js**: Authentication middleware for Node.js.
    * `passport-local`: Passport strategy for authenticating with a username and password.
    * `passport-local-mongoose`: Mongoose plugin for Passport.js that simplifies building username and password authentication.
* **express-session**: Session middleware for Express.
* **method-override**: Middleware for Express that allows you to use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
* **jake**: JavaScript build tool.
* **chalk**: Terminal string styling.
* **filelist**: List files.
* **minimatch**: Glob matching.
* **async**: Utility module for asynchronous operations.

## Project Structure

The project follows a Model-View-Controller (MVC) architecture:

* `app.js`: Main application file, setting up the server, database connection, middleware, and routes.
* `models/`: Contains Mongoose schemas and models for different data entities (e.g., `petModel.js`, `foodModel.js`, `toyModel.js`, `medicineModal.js`, `utilitiesModel.js`, `user.js`).
* `controllers/`: Houses the logic for handling requests and interacting with models (e.g., `petController.js`, `foodController.js`, `toyController.js`, `medicineController.js`, `utilitiesController.js`, `userController.js`, `aboutController.js`, `contactController.js`, `logoutController.js`).
* `routes/`: Defines the API endpoints and links them to the respective controller functions (e.g., `petRouter.js`, `foodRouter.js`, `toyRouter.js`, `utilitiesRouter.js`, `medicineRouter.js`, `userRoute.js`, `logoutRouter.js`, `aboutRouter.js`, `contactRouter.js`).
* `views/`: Contains EJS templates for rendering dynamic content (e.g., `pets/`, `foods/`, `medicines/`, `users/`, `includes/`, `layouts/`).
* `public/`: Stores static assets like CSS (`public/css/style.css`).

## Setup Instructions

To set up and run this project locally, follow these steps:

1.  **Clone the repository**:
    ```bash
    git clone <repository_url>
    cd Pet-Paws-Project
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Set up MongoDB**:
    Ensure you have a MongoDB instance running or set up a MongoDB Atlas cluster. Update the `URL` variable in `app.js` with your MongoDB connection string.
    The current connection string in `app.js` is:
    `let URL = "mongodb+srv://48vineet:PASSS@airbnb.5tsow.mongodb.net/pets";`
4.  **Run the application**:
    ```bash
    node app.js
    ```
    The application will start on `http://localhost:8080`.

## Contact

For any questions or inquiries, please refer to the contact information on the Contact Us page within the application.
