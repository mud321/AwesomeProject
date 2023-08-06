import { View,Text,StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import CheckBox from"expo-checkbox";

const ContactUs=({navigation})=>{

const[userName,setUserName]=useState("");
const[password,setPassword]=useState("");
const [agree,setAgree] =useState(false);

console.log(userName,password);
const Submit = ()=>{

if(userName==="Mudassar" && password ==="muqh" ){

Alert.alert('Thank You');
navigation.navigate("Home");

}
else{
Alert.alert("Username and password is incorrect");

}

};


return(

    <View style={styles.Main}>

<Text style={styles.Header}>Login Form</Text>
<Text style={styles.Description}> You can Teach us anytime time !!!!</Text>
    
    <View style={styles.input}>
        
        <Text style={styles.Label} >Enter your Name
        </Text>
        <TextInput style={styles.Inputs}
        autoCapitalize="none"
        autoCorrect={false}
             value={userName}
        onChangeText={(actualData)=>setUserName(actualData)}
        />
 
       
   
        
         </View>
         <View style={styles.input}>
        
        <Text style={styles.Label} >Enter your Password
        </Text>
        <TextInput style={styles.Inputs}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
          value={password}
        onChangeText={(actualData)=>setPassword(actualData)}
        />
     
         </View>
         <View style={styles.Wrapper} >


            <CheckBox  
             value={agree}
             onValueChange={()=> setAgree(!agree)}
             color={agree ? "#B87333" : undefined}
            
            />
            <Text style={styles.WrapperText} > I have read and agreed with terms & conditions</Text>
         </View>
         <TouchableOpacity
          style={[styles.button, 
            {
                backgroundColor:agree ? "#B87333" : "gray",
            },
        ]}
         disabled={!agree}
         onPress={()=>Submit("Home")}
         >

<Text style={styles.buttonText}>Login</Text>

         </TouchableOpacity>
    </View>

);


};
const styles= StyleSheet.create({
Main:{

height:"100%",
paddingHorizontal:30,
paddingTop:30,
backgroundColor:"#fff",

},
Header:{
fontSize:25,
color:"#344055",
fontWeight:"500",
paddingTop:20,
paddingBottom:15,
textTransform:"capitalize",





},
Description:{
fontSize:20,
color:"#B87333",
paddingBottom:20,
lineHeight:25,



},
input:{

marginTop:20,

},

Label:{

fontSize:18,
color:"#B87333",
marginTop:10,
marginBottom:5,
lineHeight:25,
},
Inputs:{

borderWidth:1,
borderColor:"rgba(0,0,0,0,3)",
paddingHorizontal:15,
paddingVertical:7,
borderRadius:1,
fontSize:18,


},
Wrapper:{
    marginTop: 15,
    marginBottom: 36,
    flexDirection:"row",
    alignItems:"center",


},

WrapperText:{
   // paddingLeft: 30
   marginTop: 0,



},

button:{

    borderRadius: 40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'


},
buttonText: {
    color: '#fff',
    fontSize: 20,
    justifyContent: 'center',
    alignContent: 'center',
    fontWeight: 600
  },



});
export default ContactUs;