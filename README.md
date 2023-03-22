# foondamath

## About
Foondamath is a web based application that solves equations and lists the steps involved at arriving at the final solution/answer. The name **foondamath** was coined from **foondamate** which is the company's name and **math** (😂🙈) because it helps users to learn mathematics. This is my submission for the FoondaMate Software Engineer Coding Challenge-002


### Technologies Used

---

-   Node.js & Express.js => used as the primary backend technologies for building the server and  logic.
-   Socket.io => used for enabling real-time communication between the server and clients
-   algebra.js => math library used for solving the equations
-  HTML, CSS, Javacript => for the UI

### How it works
---

- Foondamath was built with socket.io to enable realtime communication between the server and the client;
- A prompt is sent to the user to input their name
- The application server then sends a message asking for the client to send an equation
- First, the server validates whether the equation is a linear equation in the form of `ax + b = c` or `ax + b = cx + d`
- The user input is matched against a regex pattern to check if it matches the required format 
- When validation is passed, the server responds with a solution to the equation and the steps used to arrive at the solution



### Getting Started Locally
---
1. Clone the repository:
    - `https://github.com/KorkuTegbe/foondamath.git`
2. Change directory to where your cloned repo is.

3. Install all necessary dependencies:
    - `npm install`
4. Create a .env file in the root directory using the sample.env file as a guide 

5. Start the application:
    - `npm run start`
6. Open the application in your browser:
    - `http://localhost:3400`

### Usage
---


## Thanks!!!