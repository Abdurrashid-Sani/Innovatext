import { View ,Text,Image,StyleSheet, Button, Dimensions,TextInput,Video,FlatList, SafeAreaView,Alert,Platform,StatusBar, ImageBackground, TouchableOpacity} from "react-native";
import React from "react";
import colors from "./colors";
import { Icon } from "react-native-elements";


export default function Login() {
   
    return(
       <SafeAreaView>


         <View>
        <Image source={require("../assets/ENT2.jpg")} style={{width:"100%",height:200,marginTop:30}}/>
        <View style={styles.cotainer}>
        <Text style={styles.welcome}>Entrepreneurship Trainining Flatform</Text>
        <Text style={styles.wise}>Unlock Your Entrepreneurial Spirit</Text>
        <TouchableOpacity style={styles.button} >
        <Image source={require("../assets/G-icon.png")} style={{width:20,height:20,borderRadius:100}}/>
      <Text style={styles.text}>Sigin with Google Account</Text>
    </TouchableOpacity>
        <Image source={require("../assets/logo.jpg")} style={{width:90,height:90}}/>
        <Text style={styles.wise}>Business Oppotunites and<Text style={styles.com}> Market Analysis</Text></Text>
        <View style={styles.social}>
       <TouchableOpacity>
       <Image source={require("../assets/fb-icon.png")} style={styles.icon}/> 
       </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require("../assets/twitter-icon.png")} style={styles.icon}/> 
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source={require("../assets/instagram-icon.png")} style={styles.icon}/> 
        </TouchableOpacity>
       
        </View>
        </View>
        </View>
       
       </SafeAreaView>
       
    )
}

const styles = StyleSheet.create({
   
    icon:{
        backgroundColor:colors.primary,
        width:30,
        height:30,
        borderRadius:100
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:colors.primary,
        padding: 10,
        borderRadius: 8,
        width: '70%',
        gap:10,
        alignSelf: 'center',
      },
      text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
    social:{
       
display:'flex',
justifyContent:'center',
alignItems:'center',
flexDirection:'row',
gap:40
    },
    com:{
        color:colors.primary
    },
    wise:{
color:colors.orange
    },
    bg:{
        flex:3
    },
    Button:{

    },
    cotainer:{
        display:'flex',
       justifyContent:'center',
       alignItems:'center',
        flexDirection:'column',
        gap:20,
   paddingTop:Platform.OS==='android'? StatusBar.currentHeight:0,
marginTop:-25,
backgroundColor:colors.white,
borderTopRightRadius:20,
borderTopLeftRadius:20,


    },
    welcome:{
        marginLeft:10,
        textAlign:"center",
        fontWeight:'bold',
        fontSize:20,
        color:colors.primary
    },
    sign:{
     textAlign:'center',
     fontSize:25,
     marginTop:10   
    },
    

});