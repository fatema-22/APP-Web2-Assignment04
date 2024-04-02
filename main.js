// array of background colors
const bgColors = ["#5DADE2", "#AF7AC5", "#F7DC6F", "#F5B041", "#52BE80", "#17A589", "#839192", "#E6B0AA", "#295E66", "#7FA047", "#C830E0", "#E08230"];;
// array of meals
const meals = [
    { name: "meal 1", src: "meal1.jpg", price: 18 },
    { name: "meal 2", src: "meal2.jpg", price: 16 },
    { name: "meal 3", src: "meal3.jpg", price: 14 },
    { name: "meal 4", src: "meal4.jpg", price: 20 },
    { name: "meal 5", src: "meal5.jpg", price: 19 },
    { name: "meal 6", src: "meal6.jpg", price: 21 },
];
//Wallet cost
let wallet = 100;

//declare generateRandomNumber function
function generateRandomNumber(max) {
  console.log("Running generateRandomNumber function");
  const randomFinalNum = Math.floor(Math.random() * max);
    console.log(randomFinalNum);
    return randomFinalNum;
}

//declare generateBackgroundColor function
function generateBackgroundColor(none) {
console.log( "Running generateBackgroundColor function");
console.log("Running generateBackgroundColor function");
const randomBox = generateRandomNumber(bgColors.length);
const randomColor = bgColors[randomBox];
document.body.style.backgroundColor = randomColor;
return none;
}

 // generation of meals and background color
generateBackgroundColor();
generateMeals();

function generateMeals(none) {
  console.log( "Running generateMeals function");

  //1.
  const meal1Box = generateRandomNumber(meals.length);
    const meal2Box  = generateRandomNumber(meals.length);
    const meal3Box  = generateRandomNumber(meals.length);
  
    const meal1 = meals[meal1Box ];
    const meal2 = meals[meal2Box ];
    const meal3 = meals[meal3Box ];
  
   //2.
    document.querySelector("#meal1 img").src = meal1.src;
    document.querySelector(".card-body .card-title").textContent = meal1.name;
    document.querySelector(".card-body .price").textContent = meal1.price;
  
    document.querySelector("#meal2 img").src = meal2.src;
    document.querySelector("#meal2 .card-title").textContent = meal2.name;
    document.querySelector("#meal2 .price").textContent = meal2.price;
  
    document.querySelector("#meal3 img").src = meal3.src;
    document.querySelector("#meal3 .card-title").textContent = meal3.name;
    document.querySelector("#meal3 .price").textContent = meal3.price;
  //5
    calculateBill();
}

function calculateBill(none) {
  console.log( "Running calculateBill function");
  const meal1Price = parseInt(document.querySelector("#meal1 .price").textContent);
    const meal2Price = parseInt(document.querySelector("#meal2 .price").textContent);
    const meal3Price = parseInt(document.querySelector("#meal3 .price").textContent);
    const total = meal1Price + meal2Price + meal3Price;
    document.querySelector("#total").textContent = total;
}
// add Event listener for "Generate Meals" button
document.querySelector("#generate-button").addEventListener("click", generateMeals);

  
// Function to the purchase
function purchase(total) {
  console.log("Running purchase function");                        
  if (wallet >= total) {
    wallet -= total;
    document.querySelector("#wallet").textContent = wallet;
    document.querySelector("#message").classList.remove("invisible");
    generateMeals();
    generateBackgroundColor();
    document.querySelector("#purchase-cost").textContent = parseInt(total);
  } else {
    alert("Sorry, you cannot purchase the meals!");
    document.querySelector("#message").classList.add("invisible");
  }
}
function addFunds(funds) {
  console.log("Running purchase function");
}

 // Event listener for "Purchase All Meals" button
 document.querySelector("#purchase-button").addEventListener("click", function() {
  const total = parseInt(document.querySelector("#total").textContent);
  purchase(total);
});

// Function to add funds to the wallet
function addFunds(funds) {
  console.log("Running addFunds function");
  wallet += funds;
  console.log(wallet);
  document.querySelector("#wallet").textContent = wallet;
}

  // Event listener for "Add Funds to Wallet" button
  document.querySelector("#add-funds-button").addEventListener("click", function() {
    const funds = parseInt(prompt("How much funds would you like to put in?"));
    addFunds(funds);
  });