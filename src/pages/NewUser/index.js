import React, {useState, useEffect} from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import styles from "./styles";
import firebase from "../../config/firebaseconfig";
const database = firebase.firestore();
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function NewUser({navigation}){
    const [] = useState("");
    const[email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorRegister, setErrorRegister] = useState("");

    const register = () =>{
      
      database.collection("users").add({
        email: email,
        senha: password
    });
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          let user = userCredential.user;
           navigation.navigate("Login");
        })
        .catch((error) => {
          console.log("Erro: ", error);
          setErrorRegister(true);
          let errorCode = error.code;
          let errorMessage = error.message;

        });
    }
    
    return (
      
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Text style={styles.title}>Create a Task Accout</Text>
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
        {errorRegister === true 
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
             style={styles.buttonRegister}
            >
              <Text style={styles.textButtonRegister}>Register</Text>
            </TouchableOpacity>
        :
            <TouchableOpacity
             style={styles.buttonRegister}
             onPress={register}
            >
              <Text style={styles.textButtonRegister}>Register</Text>
            </TouchableOpacity>
        }
        <Text style={styles.login}> Already register?
        <Text style={styles.linkLogin} onPress={() => navigation.navigate("Login")}>Link login</Text>
        </Text>
        <View style={{height: 100}}/>
       </KeyboardAvoidingView>
        
    );
}