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
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

function ShoppingListScreen({ state, setter }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <FlatList
        data={state}
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
    </View>
  );
}

export default ShoppingListScreen;
