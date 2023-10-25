import { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
//import ForgetPassword from "../SignIn/ForgetPassword";
import auth from "../../firebase/firebase.config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function App({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [selectedItems, setSelectedItems] = useState([]);
  const Items = ["I agree to Gallery360's Terms & Conditions"];
  function handleItemSelection(Item) {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(Item)
        ? prevSelected.filter((item) => item !== Item)
        : [...prevSelected, Item]
    );
  }

  const handleSignUp = async () => {
    console.log("line executed!!!");
    console.log(auth);
    try {
      setIsLoading(true);
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = response.user;

      console.log("Registered with:", user.email);
      setIsLoading(false);
      navigation.navigate("Profile");
    } catch (error) {
      console.log(error);
      alert("Please Enter Your Email And Password");
    }
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ color: "white", fontSize: 24 }}>Loading...</Text>
        </View>
      ) : (
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image
              style={{ width: 200, height: 200, alignSelf: "center" }}
              source={require("../../assets/images/gallery36.png")}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.header}>Sign Up</Text>
            <View style={styles.accountLoginContainer}>
              <Text style={styles.smallerText}> create your new account</Text>
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

            <View style={[styles.Items, styles.checkboxContainer]}>
              {Items.map((Item, index) => (
                <>
                  <TouchableOpacity
                    key={index}
                    style={[
                      selectedItems.includes(Item) && styles.selectedCheckbox,
                    ]}
                    onPress={() => handleItemSelection(Item)}
                  >
                    <View style={styles.checkbox}>
                      {selectedItems.includes(Item) && (
                        <Icon name="check" size={18} color="white" />
                      )}
                    </View>
                  </TouchableOpacity>
                  <Text
                    //  key={index}
                    style={[
                      styles.checkboxText,
                      selectedItems.includes(Item) && styles.selectedText,
                    ]}
                  >
                    {Item}
                  </Text>
                </>
              ))}
            </View>

            <TouchableOpacity
              style={styles.signInButton}
              onPress={handleSignUp}
            >
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.smallerButtonText}>
                Already have an account?
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black", // Set this to your desired background color for the whole screen
  },
  imageContainer: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CEB89E",
    borderBottomEndRadius: 40,
    borderBottomLeftRadius: 40,
    height: 350,
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
    textAlign: "left",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
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
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  smallerButtonText: {
    color: "#fff", // Set this to your desired button text color
    fontSize: 14,
  },
  smallerButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    //marginRight: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
    padding: 10,
    backgroundColor: "transparent",
    borderRadius: 15,
  },
  checkboxText: {
    color: "white",
    marginLeft: 10,
    // textTransform: "uppercase",
  },
  selectedCheckbox: {
    backgroundColor: "#CEB89E", // Customize the background color when the checkbox is selected
  },
  selectedText: {
    fontWeight: "bold", // Customize the style when the checkbox is selected
  },
  Items: {
    flexDirection: "column",
    justifyContent: "space-between",
    //flexWrap: "wrap",
  },
});
