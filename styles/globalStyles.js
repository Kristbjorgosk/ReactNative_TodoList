import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    paddingTop: 40,
  },
  imgButton: {
    backgroundColor: "darkmagenta",
    paddingVertical: 5,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 3.0,
    alignSelf: "center",
    marginTop: 10,
    width: "80%",
  },
  todoButtons: {
    backgroundColor: "fuchsia",
    paddingVertical: 5,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.1,
    shadowRadius: 3.0,
    alignSelf: "center",
    width: "80%",
    marginTop: 10,
  },
});
