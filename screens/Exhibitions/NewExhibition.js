import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
//import Icon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/FontAwesome5";
import AddSocialMedia from "./screens/SignUp/AddSocialMedia";

// Replace "FontAwesome5" with the icon library of your choice.
const SetupProfileScreen = () => {
  const [image, setImage] = useState("");
  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [bio, setBio] = useState("");

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const handleOpenModal = () => {
    setModalIsVisible(true);
  };

  const handleCloseModal = () => {
    setModalIsVisible(false);
  };

  const handleSaveProfile = () => {
    // Here you can save the profile data to your backend or perform any necessary actions
    // For simplicity, we'll just log the data for now.
    console.log("Profile Data:");
    console.log("Image:", image);
    console.log("Full Name:", fullName);
    console.log("Contact Number:", contactNumber);
    console.log("Website:", website);
    console.log("Date of Birth:", dateOfBirth);
    console.log("Bio:", bio);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.header}>New Exhibition</Text>
        </View>
        <View>
          <View style={styles.imageContainer}>
            <Icon
              name="camera"
              size={20}
              color="gray"
              style={styles.cameraIcon}
            />
            <Text style={styles.textIcon}>Exhibition Thumbnail</Text>
          </View>
          <Text style={styles.header2}>EXHIBITION CONTENT</Text>
          <View style={styles.imageContainer2}>
            <Icon
              name="image"
              size={20}
              color="gray"
              style={styles.cameraIcon2}
            />
            <Text style={styles.textIcon}>Add Collection</Text>
          </View>
        </View>
        {/* Image Input */}
        {/* Full Name Input */}
        <TextInput
          style={styles.input}
          placeholder="NAME"
          placeholderTextColor="white"
          value={fullName}
          onChangeText={setFullName}
        />

        <TextInput
          style={styles.input}
          placeholder="ADDRESS"
          placeholderTextColor="white"
          value={address}
          onChangeText={setAddress}
        />

        {/* Contact Number Input */}
        <TextInput
          style={styles.input}
          placeholder="PHONE NUMBER"
          placeholderTextColor="white"
          value={contactNumber}
          onChangeText={setContactNumber}
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          placeholder="EMAIL"
          placeholderTextColor="white"
          value={address}
          onChangeText={setAddress}
        />

        {/* Bio Input */}
        <TextInput
          style={{
            width: "100%",
            height: 100,
            fontSize: 16,
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
            marginBottom: 20,
            color: "#fff",
          }}
          placeholder="DESCRIPTION"
          placeholderTextColor="white"
          value={bio}
          onChangeText={setBio}
          multiline
        />
        {/* Save Profile Button */}
        <TouchableOpacity
          style={styles.signInButton}
          onPress={handleSaveProfile}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },
  input: {
    width: "100%",
    height: 50,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 20,
    color: "#fff",
  },
  signInButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#CEB89E",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  header: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
    textAlign: "left",
  },
  header2: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    color: "white",
    textAlign: "left",
  },
  smallerText: {
    color: "#fff", // Set this to your desired button text color
    fontSize: 14,
  },
  imageContainer: {
    marginTop: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: 180,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    borderStyle: "dashed",
  },
  button: {
    marginTop: 15,
    backgroundColor: "transparent", // Set this to your desired button color
    padding: 12,
    borderRadius: 5,
    marginBottom: 30,
    borderRadius: 50,
    flexDirection: "row",
    backgroundColor: "gray",
  },
  smallerButtonText: {
    color: "#fff", // Set this to your desired button text color
    fontSize: 14,
  },
  iconContainer: {
    marginTop: 30,
    flexDirection: "row",
  },
  cameraIcon: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 20,
    position: "absolute",
    bottom: "50%", // Move the camera icon a bit lower to center it
  },
  imageContainer2: {
    marginTop: 20,
    padding: 20,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: 150,
    width: 150,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 10,
    borderStyle: "dashed",
    marginBottom: 20,
  },
  cameraIcon2: {
    padding: 10,
    backgroundColor: "transparent",
    borderRadius: 20,
    position: "absolute",
    bottom: "50%", // Move the camera icon a bit lower to center it
  },
  textIcon: {
    color: "#fff",
    fontSize: 14,
    position: "absolute",
    bottom: "35%",
  },
});

export default SetupProfileScreen;
