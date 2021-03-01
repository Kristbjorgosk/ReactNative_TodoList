import React from "react";
import { Image, StyleSheet, Text, View, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Sharing from "expo-sharing";
import { globalStyles } from "../styles/globalStyles";

export default function App() {
  // setting up the useState
  let [selectedImage, setSelectedImage] = React.useState(null);

  // async function to get permission to access the camera roll
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    // if permission in denied then show this alert
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    // choose photo from you phone, if you you decide not to then go back
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (pickerResult.cancelled === true) {
      return;
    }

    // useState to set the image as the one you picked (the function above)
    setSelectedImage({ localUri: pickerResult.uri });
  };

  // to share the photo open up the share obtion or show the alert if its not possible
  let openShareDialogAsync = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    // sharing the photo you chose, it is getting the "selectedImage" from useState and "localUri" from the pickerResult
    await Sharing.shareAsync(selectedImage.localUri);
  };

  // if no photo is picked the show nothing, else show the photo
  if (selectedImage !== null) {
    return (
      <View style={styles.container}>
        <Image
          // this sourse is coming from the "setSelectedImage" above
          source={{ uri: selectedImage.localUri }}
          style={styles.thumbnail}
        />
        <Text style={styles.instructions}>
          Now you can click share and send the photo via Facebook, messanger,
          email etc
        </Text>
        <View style={globalStyles.imgButton}>
          <Button
            title={"Share this photo"}
            color={"#fff"}
            onPress={openShareDialogAsync}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.content}>
        <Text style={styles.instructions}>
          Press the button and accept the permission to select a photo from your
          phone, once you have select the photo it should appear here.
        </Text>
        <Text style={styles.instructions}>
          I am not using any database for this so your image is not beeing store
          anywhere and will disapear if you refresh ":)"
        </Text>
        <View style={globalStyles.imgButton}>
          <Button
            title={"Upload a photo"}
            color={"#fff"}
            onPress={openImagePickerAsync}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 44,
    marginBottom: 10,
    fontSize: 18,
  },
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    alignSelf: "center",
  },
});
