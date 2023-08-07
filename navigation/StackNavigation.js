import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// Onboarding
import Onboarding from "../screens/OnBording/completeScreen";
//SignIn
import LoginComponent from "../screens/SignIn/SignIn";
//SignUp
import SignUp from "../screens/SignUp/signUp";
import Profile from "../screens/SignUp/Profile";
import Signature from "../screens/SignUp/signature";
import Artwork from "../screens/SignUp/ArtWork";
import Payment from "../screens/SignUp/Payment";
//Tabs Navigation
import TabsNavigation from "./TabsNavigation";
//Artworks
import Artworks from "../screens/Tabs/Artworks";
import NewArtwork from "../screens/Artworks/NewArtwork";
import AddArtwork from "../screens/Artworks/NewArtworkShow";
import SearchArtwork from "../screens/Artworks/Search";
//Exhibitions
import Exhibitions from "../screens/Tabs/Exhibitions";
import NewExhibition from "../screens/Exhibitions/NewExhibition";
import ExhibitionCollection from "../screens/Exhibitions/ExhibitionCollection";
import ExhibitionShow from "../screens/Exhibitions/ExhibitionCollectionShow";
import Congradulations from "../screens/Exhibitions/Congratulations";
//Notifications
import Notifications from "../screens/Tabs/Notifications";
import NotificationShow from "../screens/Tabs/NotificationShow";
//Profile
import Profiles from "../screens/Tabs/Profile";
import EditProfile from "../screens/Tabs/ProfileShow";

//import Artworks from "../screens/Artworks/Artworks";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Onboarding"
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Login" component={LoginComponent} />
      <Stack.Screen name="Signup" component={SignUp} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Artwork" component={Artwork} />
      <Stack.Screen name="Signature" component={Signature} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Tabs" component={TabsNavigation} />
    </Stack.Navigator>
  );
};

const ArtworkStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Artworks" component={Artworks} />
      <Stack.Screen name="NewArtwork" component={NewArtwork} />
      <Stack.Screen name="AddArtwork" component={AddArtwork} />
      <Stack.Screen name="SearchArtwork" component={SearchArtwork} />
    </Stack.Navigator>
  );
};

const NotificationStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="NotificationShow" component={NotificationShow} />
    </Stack.Navigator>
  );
};

const ExhibitionStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Exhibitions" component={Exhibitions} />
      <Stack.Screen name="NewExhibition" component={NewExhibition} />
      <Stack.Screen
        name="ExhibitionCollection"
        component={ExhibitionCollection}
      />
      <Stack.Screen name="ExhibitionShow" component={ExhibitionShow} />
      <Stack.Screen name="Congradulations" component={Congradulations} />
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={Profiles} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export {
  MainStack,
  ArtworkStack,
  NotificationStack,
  ExhibitionStack,
  ProfileStack,
};
