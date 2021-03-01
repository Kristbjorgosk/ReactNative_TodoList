import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import TodoList from "../screens/TodoList";
import Gallery from "../screens/Gallery.js";

// navigation routes, Home is the default page which sill always show as a frontpage because I listed it first below
const screens = {
  // I can pick any name here but I am naming the object "Home" just the same as the "Home.js" file
  Home: {
    screen: Home,
    navigationOptions: {
      title: "My app",
    },
  },
  TodoList: {
    screen: TodoList,
    navigationOptions: {
      title: "My todos",
      headerStyle: {
        backgroundColor: "fuchsia",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  },
  Gallery: {
    screen: Gallery,
    navigationOptions: {
      title: "My uploads",
      headerStyle: {
        backgroundColor: "darkmagenta",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
