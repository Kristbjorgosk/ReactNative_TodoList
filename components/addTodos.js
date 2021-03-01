import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import { globalStyles } from "../styles/globalStyles";

function AddTodos({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (value) => {
    setText(value);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Write a new todo"
        onChangeText={changeHandler}
        value={text}
      />
      <View style={globalStyles.todoButtons}>
        <Button
          onPress={() => {
            submitHandler(text), setText("");
          }}
          title="Add new todo"
          color="#fff"
        />
      </View>
    </View>
  );
}

export default AddTodos;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    fontSize: 20,
    borderBottomColor: "dimgrey",
  },
});
