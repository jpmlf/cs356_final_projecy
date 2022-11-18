import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import ShoppingListScreen from "./ShoppingListScreen";
import PlanScreen from "./PlanScreen";
import RecipeScreen from "./RecipeScreen";
import { plannedMeals, recipeIngredients } from "./DummyData";
import { useState } from "react";
import AddMealScreen from "./AddMealScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  const [stateVariable, setStateVar] = useState([]);
  const [planDay, setPlanDay] = useState("Base");
  const [plannedRecipes, setPlannedRecipes] = useState(plannedMeals);

  //setStateVar(newValue)

  //changes whether a planned ingredient has been purchased
  function setPurchased(index) {
    const nextState = [...stateVariable];
    const item = stateVariable.find((a) => a.index === index);
    item.purchased = !item.purchased;
    setStateVar(nextState);
  }

  function addMeal(recipieName) {
    const recipe = recipeIngredients.find((a) => a.name === recipieName);
    var newIngredients = [];
    var newLen = stateVariable.length;
    recipe.ingredientQuantites.forEach((ingredient) => {
      //check if the planned ingredients already contains the ingredient
      const isFound = stateVariable.some((element) => {
        if (element.name === ingredient.name) {
          return true;
        }

        return false;
      });
      //if it does increase the value by quantity and set to unpurchased
      if (isFound) {
        const nextState = [...stateVariable];
        const item = stateVariable.find((a) => a.name === ingredient.name);
        item.purchased = false;
        item.quantity = item.quantity + ingredient.quant;
        setStateVar(nextState);
      }
      //if it is not found create a new entry in the list
      else {
        const newItem = [
          {
            index: newLen + 1,
            name: ingredient.name,
            quantity: ingredient.quant,
            purchased: false,
          },
        ];
        newIngredients = newIngredients.concat(newItem);
        newLen++;
      }
    });
    setStateVar(stateVariable.concat(newIngredients));
  }

  function removeMeal(recipieName) {
    const recipe = recipeIngredients.find((a) => a.name === recipieName);

    recipe.ingredientQuantites.forEach((ingredient) => {
      var nextState = [...stateVariable];
      const item = stateVariable.find((a) => a.name === ingredient.name);

      //if removing the quantity results in more than zero decrement quantity
      if (item.quantity > ingredient.quant) {
        item.quantity = item.quantity - ingredient.quant;
        setStateVar(nextState);
      }
      //if removing the in the quantity results in zero or less remove the item
      else {
        setStateVar(stateVariable.splice(stateVariable.indexOf(item),1));
      }
    });
    
  }

  function addRecipe(recipieName, day, meal) {
    const nextState = [...plannedRecipes];
    const item = plannedRecipes.find((a) => a.name === day);
    if (meal === "b") {
      if (item.b.length < 1) {
        item.planned_meals = item.planned_meals + 1;
      } else {
        removeMeal(item.b);
      }
      item.b = recipieName;
      addMeal(item.b);
    } else if (meal === "l") {
      if (item.l.length < 1) {
        item.planned_meals = item.planned_meals + 1;
      } else {
        removeMeal(item.l);
      }
      item.l = recipieName;
      addMeal(item.l);
    } else if (meal === "d") {
      if (item.d.length < 1) {
        item.planned_meals = item.planned_meals + 1;
      } else {
        removeMeal(item.d);
      }
      item.d = recipieName;
      addMeal(item.d);
    }
    setPlannedRecipes(nextState);
  }

  function Plan({ navigation }) {
    return planDay === "Base" ? (
      <PlanScreen navigation={setPlanDay} plannedMeals={plannedRecipes} />
    ) : (
      <AddMealScreen
        currentDay={planDay}
        navigation={setPlanDay}
        adder={addRecipe}
      />
    );
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Plan") {
            iconName = focused ? "ios-calendar" : "ios-calendar-outline";
          } else if (route.name === "Shopping List") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          } else if (route.name === "Recipe") {
            iconName = focused ? "ios-receipt" : "ios-receipt-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Plan" component={Plan} />

      <Tab.Screen
        name="Shopping List"
        children={() => (
          <ShoppingListScreen state={stateVariable} setter={setPurchased} />
        )}
      />
      <Tab.Screen
        name="Recipe"
        children={() => (
          <RecipeScreen
            state={stateVariable}
            setter={setPurchased}
            plannedRecipes={plannedRecipes}
          />
        )}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
