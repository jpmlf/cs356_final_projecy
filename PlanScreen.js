import * as React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

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
    height: 38,
  },
  heading: {
    padding: 10,
    fontSize: 24,
    height: 50,
  },
  details: {
    fontSize: 12,
  },
});

function PlanScreen({ navigation, plannedMeals }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={plannedMeals}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation(item.name);
            }}
          >
            <Text style={styles.item}>
              {item.name}
              {item.planned_meals < 3 ? (
                <Ionicons name="add-circle-outline" />
              ) : (
                <Ionicons name="repeat" />
              )}
            </Text>
            <Text style={styles.details}>Breakfast: {item.b}</Text>
            <Text style={styles.details}>Lunch: {item.l}</Text>
            <Text style={styles.details}>Dinner: {item.d}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default PlanScreen;
