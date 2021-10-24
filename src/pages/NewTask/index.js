import { NavigationContainer } from "@react-navigation/native";
import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import firebase from "../../config/firebaseconfig";
const database = firebase.firestore();
//import styles from "../Task/style";
import styles from "./style";


export default function NewTask({navigation, route}){
   const[description, setDescription] = useState(null);  

    function addTask(){
        database.collection(route.params.idUser).add({
            description: description,
            status: false
        });
    navigation.navigate("Task", {idUser: route.params.idUser});
    }

    return(
        <View style={styles.container}>
            <Text style={styles.label}>Description</Text>
            <TextInput
             style={styles.input}
             placeholder="Ex: Estudar Java"
             onChangeText={setDescription}
             value={description}
            />
            <TouchableOpacity style={styles.buttonNewTask} onPress={() => {addTask()}}>
                <Text style={styles.iconButton}>Save</Text>
            </TouchableOpacity>
        </View>
    );
}