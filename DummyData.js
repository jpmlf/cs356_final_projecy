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
    title: "Easy Essentials",
    data: [
      { name: "Grilled Cheese", decription: "A tasty simple sandwich", calories: "700", price: "$3"},
      {
        name: "Tomato Soup",
        decription: "Hearty soup with everyone's favorite fruit",
        calories:"300",
        price: "$4"
      },
    ],
  },
  {
    title: "Simple Breakfasts",
    data: [
      { name: "Ham and Swiss Omelet", decription: "easy omelet will be a snap", calories: "530", price: "$12"},
      { name: "Rise and Shine Parfait", decription: "Start your day with a smile", calories: "259", price: "$7"},
      { name: "Stuffed Ham & Egg Bread", decription: "Stuffed Ham & Egg Bread", calories: "321", price: "$45"},
      { name: "Italian Cloud Eggs", decription: "egg yolks on nests of whipped Italian-seasoned egg whites", calories: "96", price: "$22"},
    ]
  },
  {
    title:"Joke Meals",
    data: [
      { name: "Chunky Harms", decription: "MEATY Breakfast cereal", calories: "9000", price: "$9 grand" },
      { name: "The Sad European", decription: "Zero Calories!", calories: "800", price: "$45" },
      { name: "Grilled Cheese 2", decription: "This time it's personal", calories: "1400", price: "$6"},
    ],
  }
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
  },
  {
    index: 6,
    name: "Ham and Swiss Omelet",
    ingredientNames: ["Eggs", "Cheese", "Butter"],
    ingredientQuantites: [
      { name: "Eggs", quant: 3 },
      { name: "Cheese", quant: 1 },
      { name: "Butter", quant: 1 },
    ],
    instructions: [
      "Step 1: melt butter over medium-high heat",
      "Step 2: Whisk the eggs",
      "Step 3: As eggs set, push cooked edges toward the center",
      "Step 4: finish the omlete",
      "Step 5: etc. etc."
    ],
  },
  {
    index: 7,
    name: "Rise and Shine Parfait",
    ingredientNames: ["vanilla yogurt", "Peaches", "Granola"],
    ingredientQuantites: [
      { name: "vanilla yogurt", quant: 4 },
      { name: "Peaches", quant: 2 },
      { name: "Granola", quant: 1 },
    ],
    instructions: [
      "Step 1: Layer half the yogurt, peaches, blackberries and granola into 4 parfait glasses",
      "Step 2: Repeat"
    ],
  },
  {
    index: 8,
    name: "Stuffed Ham & Egg Bread",
    ingredientNames: ["teaspoons canola oil", "Tomato", "Eggs"],
    ingredientQuantites: [
      { name: "teaspoons canola oil", quant: 2 },
      { name: "Tomato", quant: 1 },
      { name: "Eggs", quant: 6 },
    ],
    instructions: [
      "Step 1: Add tomatoes ",
      "Step 2: cook and stir until juices are evaporated",
      "Step 3: Add eggs",
      "Step 4: cook and stir until thickened",
      "Step 5: Unroll dough onto a greased baking sheet",
      "Step 2: Sprinkle cheese lengthwise",
    ],
  },
  {
    index: 9,
    name: "Italian Cloud Eggs",
    ingredientNames: ["Eggs", "Italian seasoning", "Salt", "Pepper", "Cheese"],
    ingredientQuantites: [
      { name: "Eggs", quant: 4 },
      { name: "Italian seasoning", quant: 1 },
      { name: "Salt", quant: 1 },
      { name: "Pepper", quant: 1 },
      { name: "Cheese", quant: 1 },
    ],
    instructions: [
      "Step 1: Preheat oven to 450° ",
      "Step 2: Separate eggs",
      "Step 3: place whites in a large bowl and yolks in 4 separate small bowls",
      "Step 4: Beat egg whites, Italian seasoning, salt and pepper until stiff peaks form",
      "Step 5: drop egg white mixture into 4 mounds on skillet",
      "Step 6: Bake until light brown",
    ],
  },
];
