# foondamath

## About
Foondamath is a web based application that solves equations and lists the steps involved at arriving at the final solution/answer. The name **foondamath** was coined from **foondamate** which is the company's name and **math** (😂🙈) because it helps users to learn mathematics. This is my submission for the FoondaMate Software Engineer Coding Challenge-002

### Live site
https://foondamath.onrender.com
---

### Technologies Used

---

-   Node.js & Express.js => used as the primary backend technologies for the runtime.
-   openai => used for the solving the equations
-   Socket.io => used for enabling real-time communication between the server and clients
-   HTML, CSS, Javacript => for the UI

### How it works
---

1. Introduction - Foondamath is a web-based application designed to solve equations and list the steps involved in arriving at the final solution. To use the application, users simply enter an equation into the input box on the main page and hit the send button.

2. User Interface - The user interface for Foondamath is a chat interface, easy to use. It includes an input box where users can enter their equations, as well as a send button that initiates the solution process. Once the solution is complete, the steps involved in solving the equation are displayed on the screen.

3. Functionality - Foondamath uses OpenAI to solve equations entered by the user. When a user enters an equation into the input box, the application sends the equation to OpenAI's API to parse the equation and identify the variables and constants involved. From there, OpenAI uses advanced mathematical algorithms and natural language processing to solve the equation step-by-step. Once the solution is found, the results and solution steps are returned to the application, and Foondamath displays the solution steps on the screen for the user to view.

4. Backend - Foondamath is built using Node.js and Express, two popular server-side technologies, and utilizes OpenAI's mathematical language processing algorithm to solve equations. When a user enters an equation into the input box on the website, the application sends the equation to OpenAI's API to parse the equation and identify the variables and constants required to solve it. OpenAI then uses its advanced mathematical algorithms and natural language processing to solve the equation step-by-step. Once the solution is found, Foondamath displays the solution steps on the screen for the user to view. 

5. Conclusion - Overall, Foondamath is a powerful tool for solving equations quickly and efficiently. Whether you're a student, teacher, or professional, the application offers an easy-to-use interface and robust functionality that makes understanding to how solve equations simple.



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


## Thanks!!!
