import { useState, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import ForgetPassword from "./ForgetPassword";

import auth from "../../firebase/firebase.config.js";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

export default function App({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const handleOpenModal = () => {
    setModalIsVisible(true);
  };

  const handleCloseModal = () => {
    setModalIsVisible(false);
  };

  //const auth = getAuth(app);

  // async function handleSignIn() {
  //   if (email === "" || password === "") {
  //     setError("Email and password are mandatory.");
  //     Alert(error)
  //     return;
  //   }

  //   try {
  //     await signInWithEmailAndPassword(auth, email, password);
  //   } catch (err) {
  //     console.log(err);
  //     setError(err.message);
  //   }
  // }

  useEffect(() => {
    console.log(auth);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace("Tabs");
      }
    });
    return unsubscribe;
  }, []);

  const handleLogin = async () => {
    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      console.log("Logged in with:", user.email);
      navigation.replace("Tabs");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        // Handle incorrect password error
        console.log("Your password is incorrect. Please try again.");
        Alert.alert("Your password is incorrect. Please try again.");
      } else if (error.code === "auth/wrong-email") {
        // Handle other authentication errors
        Alert.alert("Enter a Valid Email");
        console.error("Authentication error:", error);
      } else {
        console.error("Authentication error:", error);
        Alert.alert("Failed to connect to the database");
      }
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            style={{ width: 200, height: 200, alignSelf: "center" }}
            source={require("../../assets/images/gallery36.png")}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.header}>Welcome Back !</Text>
          <View style={styles.accountLoginContainer}>
            <Text style={styles.smallerText}> Login to your account</Text>
            <View style={styles.iconContainer}>
              <Icon
                name="google"
                size={20}
                style={{ paddingRight: 20 }}
                color="gray"
              />
              <Icon name="facebook" size={20} color="gray" />
            </View>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="white"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <View style={styles.smallerButtonContainer}>
            <Text>hello</Text>
            <TouchableOpacity style={styles.button} onPress={handleOpenModal}>
              <Text style={styles.smallerButtonText}>I forgot my password</Text>
            </TouchableOpacity>
          </View>
          {
            <ForgetPassword
              visible={modalIsVisible}
              closeModal={handleCloseModal}
            />
          }

          <TouchableOpacity style={styles.signInButton} onPress={handleLogin}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.smallerButtonText}>
              I don't have an account
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  imageContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CEB89E",
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,
    height: 380,
  },
  accountLoginContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    marginLeft: 100,
    flexDirection: "row",
  },
  image: {
    width: "50%", // Adjust this value to control the image size
    height: "100%", // Adjust this value to control the image size
    resizeMode: "contain",
  },
  card: {
    flex: 1,
    backgroundColor: "#f0f0f0", // Set this to your desired card background color
    padding: 20,
  },
  smallerText: {
    color: "white",
    textAlign: "right",
  },
  header: {
    fontSize: 44,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  inputContainer: {
    flex: 1,
    marginTop: 40,
    alignItems: "center",
    backgroundColor: "transparent", // Set this to your desired background color for the whole screen
  },
  input: {
    width: "80%",
    height: 50,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingHorizontal: 12,
    marginBottom: 20,
    color: "#fff",
    textDecorationColor: "white",
  },
  signInButton: {
    width: "80%",
    height: 50,
    backgroundColor: "#CEB89E", // Set this to your desired button background color
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff", // Set this to your desired button text color
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "transparent", // Set this to your desired button color
    padding: 2,
    borderRadius: 5,

    marginBottom: 10,
    marginLeft: 100,
  },
  smallerButtonText: {
    color: "#fff", // Set this to your desired button text color
    fontSize: 14,
  },
  smallerButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
