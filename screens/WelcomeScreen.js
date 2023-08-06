import React from "react";
import { ImageBackground } from "react-native";
import { Button } from "react-native";
import { View,Text ,StyleSheet,Image,TouchableOpacity,SafeAreaView} from "react-native";
const WelcomeScreen=({navigation})=>{
    const Submit = ()=>{

        navigation.navigate("ContactUs");
        
        }

return(

<SafeAreaView style={{alignSelf:"center"} }>
    <ImageBackground
    style={{flex:1}}
    source={require("../assets/images/mm.jpg")}
    >




   <View style={styles.profile}>
    <Image source={require("../assets/images/m.png")} style={styles.image} resizeMode="center" ></Image>

   </View>

   <TouchableOpacity
          style={[styles.button, 
            {

            },
        ]}
        onPress={()=>Submit("ContactUs")}

    
         >

<Text style={styles.buttonText}>Login Now



</Text>




         </TouchableOpacity>   
         </ImageBackground>

         </SafeAreaView>


);


};

const styles=StyleSheet.create({

profile:{
width:400,
height:500,
borderRadius:200,
overflow:"hidden"




},
image:{

flex:1,
width:undefined,
height:undefined,
justifyContent:"center",
aignItems:"center",



},
button:{

    borderRadius: 40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
    

    
},
buttonText: {
    color: '#fff',
    fontSize: 30,
    justifyContent: 'center',
    alignContent: 'center',
    fontWeight: 600,
    backgroundColor:"#423A09",
    





  },




});
export default WelcomeScreen;