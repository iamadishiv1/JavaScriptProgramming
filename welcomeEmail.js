const users = [
    {name: "Adarsh", email: "adarshshivam80@gmail.com"}, 
    {name: "Shivam", email: "adarshshivam32@gmail.com"}, 
    {name: "Meena", email: "meenakumar9960@gmail.com"},
];


function sendWelcomeEmail(email) {
    console.log(`Welcome email is sent to ${email}`);
}

users.forEach((user) => {
    sendWelcomeEmail(user.email);
});

//Extract product prices

const products = [
    {name: "Laptop", price: 50000},
    {name: "Mobile", price: 20000},
    {name: "Tablet", price: 15000},
]

products.map((product) => {
    console.log(`The price of ${product.name} is ${product.price}`);
});

// Reduce method example
const numbers = [10, 20, 30, 40, 50];
const totalSum = numbers.reduce((accumulator, currentValue) => 
    accumulator + currentValue
, 0);
console.log(`The total sum is ${totalSum}`);