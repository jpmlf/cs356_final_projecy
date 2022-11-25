import * as React from "react";

//template for state storage
export const plannedMeals = [
  { name: "MON", b: "", l: "", d: "", planned_meals: 0 },
  { name: "TUE", b: "", l: "", d: "", planned_meals: 0 },
  { name: "WED", b: "", l: "", d: "", planned_meals: 0 },
  { name: "THU", b: "", l: "", d: "", planned_meals: 0 },
  { name: "FRI", b: "", l: "", d: "", planned_meals: 0 },
  { name: "SAT", b: "", l: "", d: "", planned_meals: 0 },
  { name: "SUN", b: "", l: "", d: "", planned_meals: 0 },
];

//meal type data
export const mealCategories = [
  {
    title: "Main dishes",
    data: [
      { name: "Grilled Cheese", decription: "A tasty simple sandwich", calories: "700", price: "$3"},
      {
        name: "Tomato Soup",
        decription: "Hearty soup with everyone's favorite fruit",
        calories:"300",
        price: "$4"
      },
      { name: "Chunky Harms", decription: "MEATY Breakfast cereal", calories: "9000", price: "$9 grand" },
    ],
  },
];

//recipe data
export const recipeIngredients = [
  {
    index: 1,
    name: "Grilled Cheese",
    ingredientNames: ["Bread", "Cheese", "Butter"],
    ingredientQuantites: [
      { name: "Bread", quant: 2 },
      { name: "Cheese", quant: 1 },
      { name: "Butter", quant: 1 },
    ],
    instructions: [
      "Step 1: put butter on pan ",
      "Step 2: put slice of bread on pan",
      "Step 3: put cheese on bread",
      "Step 4: put another bread on top",
      "Step 5: flip until both sides are browned",
    ],
  },
  {
    index: 2,
    name: "Tomato Soup",
    ingredientNames: ["Tomato", "Soup", "Bread"],
    ingredientQuantites: [
      { name: "Tomato", quant: 1 },
      { name: "Soup", quant: 2 },
      { name: "Bread", quant: 1 },
    ],
    instructions: [
      "Step 1: boil soup ",
      "Step 2: add Tomato",
      "Step 3(optional): chew Bread",
    ],
  },
  {
    index: 3,
    name: "Chunky Harms",
    ingredientNames: ["Tomato", "Beef", "Oreos", "Wheaties"],
    ingredientQuantites: [
      { name: "Tomato", quant: 1 },
      { name: "Beef", quant: 5 },
      { name: "Oreos", quant: 1 },
      { name: "Wheaties", quant: 3 },
    ],
    instructions: [
      "Step 1: mix tomatos and oreos in a bowl",
      "Step 2: cook beef",
      "Step 3: sprinkle tomatoreo mix on the beef",
      "Step 4: pour Wheaties into regular bowl",
      'Step 5: Top Wheaties with the meat "milk"',
      "Step 6(optional): Enjoy?",
    ],
  },
  {
    index: 4,
    name: "The Sad European",
    ingredientNames: ["Wheat"],
    ingredientQuantites: [{ name: "Wheat", quant: 1 }],
    instructions: ["Step 1: cry", "..."],
    decription: "Zero Calories!",
  },
  {
    index: 5,
    name: "Grilled Cheese 2",
    ingredientNames: ["Bread", "Cheese", "Butter"],
    ingredientQuantites: [
      { name: "Bread", quant: 2 },
      { name: "Cheese", quant: 1 },
      { name: "Butter", quant: 1 },
    ],
    instructions: [
      "Step 1: put butter on pan ",
      "???????",
      "Step 3: put cheese on bread",
      "Step 4: revenge",
      "Step 5: flip until both sides are browned",
      "Step 2: stay unpredictable",
    ],
    decription: "This time it's personal",
  },
];
