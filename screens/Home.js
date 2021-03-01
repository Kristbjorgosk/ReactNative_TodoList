import React from "react";
import { View, Button, StyleSheet, Image } from "react-native";
import { globalStyles } from "../styles/globalStyles";

// navigation route, it is getting the "TodoList" from homeStack.js file
function Home({ navigation }) {
  const pressNavigate = () => {
    // can also be writen like: navigation.push("TodoList")
    // route to go back would be: navigation.goBack("TodoList")
    navigation.push("TodoList");
  };
  const pressNavigateGallery = () => {
    // can also be writen like: navigation.push("TodoList")
    // route to go back would be: navigation.goBack("TodoList")
    navigation.push("Gallery");
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.content}>
        <View style={globalStyles.todoButtons}>
          <Button color={"#fff"} title="Todo List" onPress={pressNavigate} />
        </View>

        <View style={globalStyles.imgButton}>
          <Button
            color={"#fff"}
            title="Share a photo"
            onPress={pressNavigateGallery}
          />
        </View>
      </View>
    </View>
  );
}

export default Home;
