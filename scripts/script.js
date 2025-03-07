// JavaScript functions for future features

// Function to validate email
function validateEmail(email) {
    return email.includes("@") && email.includes(".");
}

// Function to get a random project
const projects = ["Portfolio", "Blog", "Weather App"];
function getRandomProject() {
    const index = Math.floor(Math.random() * projects.length);
    return projects[index];
}

// Function to calculate total price
const prices = [19.99, 29.99, 49.99];
function getTotalPrice() {
    return prices.reduce((total, price) => total + price, 0);
}

// Function to add feedback
let feedback = [];
function addFeedback(message) {
    feedback.push(message);
    return feedback;
}
