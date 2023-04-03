const shoppingList = ["Unga", "Eggs", "Toothpaste", "Arimis", "Peanut"];
const names = ["Kenneth", "Ruth", "Slyvia", "Maimuna"];

const fruits = [
  "Apples",
  "Bananas",
  "Oranges",
  "Grapes",
  "Strawberries",
  "Blueberries",
  "Raspberries",
  "Pineapple",
  "Watermelon",
  "Cantaloupe",
  "Honeydew",
  "Mango",
  "Peaches",
  "Plums",
  "Kiwi",
  "Pears",
  "Lemons",
  "Limes",
  "Grapefruit",
  "Cherries",
  "Avocado",
  "Tomatoes",
  "Cucumbers",
  "Carrots",
  "Bell peppers",
  "Onions",
  "Garlic",
  "Potatoes",
  "Sweet potatoes",
  "Squash",
  "Zucchini",
  "Eggplant",
  "Corn",
  "Peas",
  "Green beans",
  "Asparagus",
  "Broccoli",
  "Lettuce",
  "Apples",
  "Bananas",
  "Oranges",
  "Grapes",
  "Strawberries",
  "Blueberries",
  "Raspberries",
  "Pineapple",
  "Watermelon",
  "Cantaloupe",
  "Honeydew",
  "Mango",
  "Peaches",
  "Plums",
  "Kiwi",
  "Pears",
  "Lemons",
  "Limes",
  "Grapefruit",
  "Cherries",
  "Avocado",
  "Tomatoes",
  "Cucumbers",
  "Carrots",
  "Bell peppers",
  "Onions",
  "Garlic",
  "Potatoes",
  "Sweet potatoes",
  "Squash",
  "Zucchini",
  "Eggplant",
  "Corn",
  "Peas",
  "Green beans",
  "Asparagus",
  "Broccoli",
  "Cauliflower",
];

// Function to find the element inside an array given the index of the Array --> courtesy of Philip Nzau
function elementFinder(array, indexOfElement) {
  let indexLength = array.length - 1;
  if (indexLength >= indexOfElement) {
    console.log(array[indexOfElement]);
  } else {
    console.log("Array out of bounds");
  }
}

// Function to find the index of an element given the element value --> courtesy of Dickson and Donvine
function positionFinder(arr, item) {
  const index = arr.indexOf(item);
  if (index === -1) {
    return "Error: Item not found";
  }
  return index;
}

elementFinder(fruits, 70); //Corn
console.log(positionFinder(fruits, "Apples")); // 0
