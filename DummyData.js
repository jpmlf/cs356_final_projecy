import * as React from "react";

//make empty when needed
export const plannedMeals = [
  { name: "MON", b: "", l: "", d: "", planned_meals: 0 },
  { name: "TUE", b: "", l: "", d: "", planned_meals: 0  },
  { name: "WED", b: "", l: "", d: "", planned_meals: 0  },
  { name: "THU", b: "", l: "", d: "", planned_meals: 0  },
  { name: "FRI", b: "", l: "", d: "", planned_meals: 0  },
  { name: "SAT", b: "", l: "", d: "", planned_meals: 0  },
  { name: "SUN", b: "", l: "", d: "", planned_meals: 0  },
];

//static data, keep this
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
    decription: "A tasty simple sandwich"
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
    decription: "Hearty soup with everyone's favorite fruit"
  },
  {
    index: 3,
    name: "Chunky Harms",
    ingredientNames: ["Tomato", "Beef", "Oreos", "Wheaties"],
    ingredientQuantites: [
      {name: "Tomato", quant: 1},
      {name: "Beef", quant: 5},
      {name: "Oreos", quant: 1},
      {name: "Wheaties", quant: 3},
    ],
    instructions: [
      "Step 1: mix tomatos and oreos in a bowl",
      "Step 2: cook beef",
      "Step 3: sprinkle tomatoreo mix on the beef",
      "Step 4: pour Wheaties into regular bowl",
      "Step 5: Top Wheaties with the meat \"milk\"",
      "Step 6(optional): Enjoy?"
    ],
    decription: "MEATY Breakfast cereal"
  },
  {
    index: 4,
    name: "The Sad European",
    ingredientNames: ["Wheat"],
    ingredientQuantites: [
      {name: "Wheat", quant: 1},
    ],
    instructions: [
      "Step 1: cry",
      "...",
    ],
    decription: "Zero Calories!"
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
      "Step 2: stay unpredictable"
    ],
    decription: "This time it's personal"
  },
];


