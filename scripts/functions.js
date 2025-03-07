// Function to calculate the purchase of shirts
function calculateShirtPurchase(numberOfShirts, pricePerShirt) {
    return numberOfShirts * pricePerShirt;
}

// Function to calculate remaining tickets
function calculateRemainingTickets(totalTickets, ticketsSold) {
    return totalTickets - ticketsSold;
}

// Function to greet the user
function greetUser(userName) {
    return `Hello, ${userName}! Welcome!`;
}

// Function to add a new user to the list
let users = [];
function addUser(userName) {
    users.push(userName);
    return users;
}

// Function to find a user in the list
function findUser(userName) {
    return users.includes(userName) ? `${userName} is found.` : `${userName} is not found.`;
}

// Function to get a random user from a list
let usersRaffle = [];
function getRandomUser() {
    const index = Math.floor(Math.random() * usersRaffle.length);
    return usersRaffle[index];
}

console.log(`Total cost for 3 shirts: $${calculateShirtPurchase(3, 19.99)}`); // Total cost for 3 shirts
console.log(`Remaining tickets: ${calculateRemainingTickets(100, 25)}`); // Remaining tickets
console.log(greetUser("Alice")); // Greeting the user
console.log(addUser("Bob")); // Adding a new user
console.log(findUser("Bob")); // Finding a user
console.log(getRandomUser()); // Getting a random user
