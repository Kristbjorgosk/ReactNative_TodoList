import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";

function TodoItems({ item, pressHandler }) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{item.text}</Text>
      <TouchableOpacity
        onPress={() =>
          Alert.alert("Delete task", "Are you sure you want to delete task?", [
            { text: "Yes", onPress: () => pressHandler(item.key) },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      >
        <Feather name="x-circle" size={24} color="crimson" />
      </TouchableOpacity>
    </View>
  );
}

export default TodoItems;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 18,
    color: "#393b3b",
  },
});
