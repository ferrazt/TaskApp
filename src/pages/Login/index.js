import React, {useState, useEffect} from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import firebase from "../../config/firebaseconfig";
import styles from "./styles";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import { circle } from "react-native/Libraries/Animated/src/Easing";
import { NavigationContainer } from "@react-navigation/native";


export default function Login({ navigation }){
   
    const [] = useState("");
    const[email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState("");

    const LoginFirebase = () =>{
      firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
           
            let user = userCredential.user;
            
             navigation.navigate("Task",{idUser: user.uid});
          })
          .catch((error) => {
            setErrorLogin(true);
          let errorCode = error.code;
          let errorMessage = error.message;

          });
    }

    useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          
          var uid = user.uid;
          navigation.navigate("Task",{idUser: user.uid});
          
        }
      });
    }, []);

    return (
       <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
       >
        <Text style={styles.title}>Task</Text>
        <TextInput
          style={styles.input}
          placeholder={"Enter your Email"}
          type="text"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder={"Enter a Password"}
          type="text"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        {errorLogin === true 
        ?
        <View style={styles.contentAlert}>
            <MaterialCommunityIcons
               name="alert-circle"
               size={24}
               color="#bdbdbd"
            />
            <Text style={styles.warningAlert}>Invalid Email or Password</Text>
        </View>
        :
        <View/>
        }
        {email === "" || password === ""?
            <TouchableOpacity
             disabled={true}
             style={styles.buttonLogin}
            >
              <Text style={styles.textButtonLogin}>Login</Text>
            </TouchableOpacity>
        :
            <TouchableOpacity
             style={styles.buttonLogin}
             onPress={LoginFirebase}
            >
              <Text style={styles.textButtonLogin}>Login</Text>
            </TouchableOpacity>
        }
        <Text style={styles.registration}> Don't have a registration?
        <Text style={styles.linkSubscribe} onPress={() => navigation.navigate("NewUser")}> Subscribe Now...</Text>
        </Text>
        <View style={{height: 100}}/>
       </KeyboardAvoidingView>
    );
}