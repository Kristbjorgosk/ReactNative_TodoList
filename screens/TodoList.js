import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";

import {
  View,
  FlatList,
  StyleSheet,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from "react-native";

import AddTodos from "../components/addTodos";
import TodoItems from "../components/todoItems";
import { globalStyles } from "../styles/globalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

function TodoList({ navigation }) {
  // useState to import a new todo
  const [todos, setTodos] = useState([]);

  // function that is passed as a prop to "TodoItem" component
  // to delete an tiem and because the key is passed it it will delete that item you chose, not just the most recent item added
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  // function that is passed as a prop to "AddTodos" component
  // to add a new todo, it has to be grater then 1 char if its less you get alert
  const submitHandler = (text) => {
    if (text.length > 0) {
      setTodos((prevTodos) => {
        // return the new added todo item as a text and give it a random string key, once thats done the show all the items that has aldready been added too
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("Opsy!", "You can not add an empty field", [
        { text: "Okey", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={globalStyles.container}>
        <View style={styles.content}>
          <AddTodos submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItems item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default TodoList;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
