import * as React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { recipeIngredients } from "./DummyData";
import { useState } from "react";

//fix to be more visually apealing
const styles = StyleSheet.create({
  textInput: {
    borderColor: "gray",
    borderWidth: 1,
  },
  resultContainer: {
    flexDirection: "row",
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  checkboxWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
  },
  item: {
    padding: 10,
    fontSize: 18,
    
  },
  heading: {
    padding: 10,
    fontSize: 24,
    height: 50,
  },
  instruction_heading: {
    padding: 10,
    fontSize: 24,
  },
  arrow: {
    padding: 10,
    fontSize: 24,
    height: 50,
  },
  details: {
    fontSize: 12,
  },
});

function RecipeScreen({ state, setter, plannedRecipes }) {
  const mealtimes = ["b", "l", "d"];
  const mealtimesNames = ["breakfast", "lunch", "dinner"];
  const dayNames = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const [currentDay, setCurrentDay] = useState(0);
  const [mealIndex, setMealIndex] = useState(0);

  function backarrow() {
    if (mealIndex === 0) {
      setMealIndex(2);
      if (currentDay === 0) {
        setCurrentDay(dayNames.length - 1);
      } else {
        setCurrentDay(currentDay - 1);
      }
    } else {
      setMealIndex(mealIndex - 1);
    }
  }
  function forwardarrow() {
    if (mealIndex === 2) {
      setMealIndex(0);
      if (currentDay === dayNames.length - 1) {
        setCurrentDay(0);
      } else {
        setCurrentDay(currentDay + 1);
      }
    } else {
      setMealIndex(mealIndex + 1);
    }
  }

  const currentRecipeDay = plannedRecipes.find(
    (a) => a.name === dayNames[currentDay]
  );
  if (
    (mealIndex === 0 && currentRecipeDay.b.length < 1) ||
    (mealIndex === 1 && currentRecipeDay.l.length < 1) ||
    (mealIndex === 2 && currentRecipeDay.d.length < 1)
  ) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.heading}>
          <Ionicons
            name="caret-back-outline"
            onPress={backarrow}
            style={styles.arrow}
          />{" "}
          {dayNames[currentDay]}{" "}
          <Ionicons
            name="caret-forward-outline"
            onPress={forwardarrow}
            style={styles.arrow}
          />
        </Text>
        <Text style={styles.details}>{mealtimesNames[mealIndex]}</Text>
        <Text style={styles.heading}>Nothing Planned here</Text>
      </View>
    );
  } else {
    var recipeName;
    if (mealIndex === 0) {
      recipeName = currentRecipeDay.b;
    } else if (mealIndex === 1) {
      recipeName = currentRecipeDay.l;
    } else {
      recipeName = currentRecipeDay.d;
    }
    const currentRecipe = recipeIngredients.find((a) => a.name === recipeName); //TODO: change to a state variable

    //find the inices in the planned ingredients for the selected recipe
    const tempstate = JSON.parse(JSON.stringify(state));
    const currentIngredients = tempstate.filter((ingredient) => {
      return currentRecipe.ingredientNames.indexOf(ingredient.name) > -1;
    });
    //display the required amout of each ingredient for the selected recipe
    currentRecipe.ingredientQuantites.forEach((ingredient) => {
      const targetElement = currentIngredients.find(
        (a) => a.name === ingredient.name
      );
      targetElement.quantity = ingredient.quant;
    });

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.heading}>
          <Ionicons
            name="caret-back-outline"
            onPress={backarrow}
            style={styles.arrow}
          />{" "}
          {dayNames[currentDay]}{" "}
          <Ionicons
            name="caret-forward-outline"
            onPress={forwardarrow}
            style={styles.arrow}
          />
        </Text>
        <Text style={styles.details}>{mealtimesNames[mealIndex]}</Text>
        <Text style={styles.heading}>Ingredients</Text>
        <FlatList
          data={currentIngredients}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setter(item.index);
              }}
            >
              <Text style={styles.item}>
                {" "}
                {item.purchased ? (
                  <Ionicons name="ios-stop" />
                ) : (
                  <Ionicons name="ios-stop-outline" />
                )}
                {item.quantity} {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
        <Text style={styles.instruction_heading}>How to make {currentRecipe.name}:</Text>
        <FlatList
          data={currentRecipe.instructions}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        />
        <Button
          title="Finished Meal"
          onPress={() => {
            Alert.alert("Recipe Done! Good Job!");
          }}
        />
      </View>
    );
  }
}

export default RecipeScreen;
