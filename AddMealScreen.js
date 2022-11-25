import * as React from "react";
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import { recipeIngredients, mealCategories } from "./DummyData";
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
    padding: 8,
    fontSize: 18,

    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    padding: 10,
    fontSize: 24,
  },
  sectionHeading: {
    padding: 10,
    fontSize: 24,
    backgroundColor: "#ddd",
  },
  details: {
    fontSize: 12,
  },
  arrow: {
    padding: 10,
    fontSize: 24,
    height: 50,
  },
  list: {
    width: "100%",
    height: "100%",
  },
});

function AddMealScreen({ currentDay, adder, navigation }) {
  const mealtimes = ["b", "l", "d"];
  const mealtimesNames = ["breakfast", "lunch", "dinner"];
  const [mealIndex, setMealIndex] = useState(0);

  const Item = ({ title }) => (
    <TouchableOpacity
      onPress={() => {
        adder(title.name, currentDay, mealtimes[mealIndex]);
        navigation("Base");
      }}
      style={styles.item}
    >
      <Text style={styles.item}>{title.name}</Text>
      <Text style={styles.details}>{title.decription}</Text>
      <Text style={styles.details}>
        Calories:{title.calories} Cost:{title.price}
      </Text>
    </TouchableOpacity>
  );

  function backarrow() {
    if (mealIndex === 0) {
      setMealIndex(2);
    } else {
      setMealIndex(mealIndex - 1);
    }
  }
  function forwardarrow() {
    if (mealIndex === 2) {
      setMealIndex(0);
    } else {
      setMealIndex(mealIndex + 1);
    }
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.heading}>
        <Ionicons
          name="caret-back-outline"
          onPress={backarrow}
          style={styles.arrow}
        />{" "}
        {currentDay}{" "}
        <Ionicons
          name="caret-forward-outline"
          onPress={forwardarrow}
          style={styles.arrow}
        />
      </Text>
      <Text style={styles.details}>{mealtimesNames[mealIndex]}</Text>
      {/* <FlatList
        data={recipeIngredients}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              adder(item.name, currentDay, mealtimes[mealIndex]);
              navigation("Base");
            }}
          >
            <Text style={styles.item}>{item.name}</Text>
            <Text style={styles.details}>{item.decription}</Text>
          </TouchableOpacity>
        )}
      /> */}
      <SectionList
        sections={mealCategories}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeading}>{title}</Text>
        )}
        style={styles.list}
      />

      <Button
        title="Back"
        onPress={() => {
          navigation("Base");
        }}
      />
    </View>
  );
}

export default AddMealScreen;
