import React from "react";
import { Button } from "react-native";
import { View,Text ,StyleSheet} from "react-native";
const HomeScreen=()=>{

return(

<View style={styles.Main }>
    <Text style={styles.Header}>Welcome HomeScreen  </Text>
    <Button title="Go Back"/>
</View>

);


};

const styles=StyleSheet.create({
Main:{

width:"100%",
height:"100%",
display:"flex",
justifyContent:"center",
aignItems:"center",


},

Header:{

fontSize:35,
color:"#4c5dad",
marginTop:0,
textTransform:"capitalize",




},


});
export default HomeScreen;