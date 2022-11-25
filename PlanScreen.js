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
  },
  heading: {
    padding: 10,
    fontSize: 24,
  },
  details: {
    fontSize: 14,
  },
  listButton: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "row",
    flex: 1,
    padding: 9,
  },
  list: {
    width: "100%",
    height: "100%",
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
            style={styles.listButton}
          >
            {item.planned_meals < 3 ? (
              <Ionicons name="add" style={styles.item} />
            ) : (
              <Ionicons name="repeat" style={styles.item} />
            )}
            <Text style={styles.item}>{item.name}</Text>
            <Text style={{ maxWidth: 200 }}>
              <Text style={styles.details}>
                Breakfast: {item.b}
                {"\n"}
              </Text>

              <Text style={styles.details}>
                Lunch: {item.l}
                {"\n"}
              </Text>
              <Text style={styles.details}>
                Dinner: {item.d}
                {"\n"}
              </Text>
            </Text>
          </TouchableOpacity>
        )}
        style={styles.list}
      />
    </View>
  );
}

export default PlanScreen;
