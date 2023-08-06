import React from "react";
import { View,Text } from "react-native";
import Contact from "./screens/Contact";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
const App=()=>{
    const Stack=createNativeStackNavigator();

return(

<NavigationContainer >    
<Stack.Navigator initialRouteName="Welcome"> 

<Stack.Screen  name="ContactUs" component={Contact}/>
<Stack.Screen  name="Welcome" component={WelcomeScreen}/>
<Stack.Screen  name="Home" component={HomeScreen}/>





</Stack.Navigator>



</NavigationContainer>

);

};
export default App;