import React, { useState } from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import styles from "../Details/style";
import firebase from "../../config/firebaseconfig";
const database = firebase.firestore();

export default function Details({navigation , route}){

    const [descriptionEdit,setDescriptionEdit] = useState(route.params.description);
    const idTask = route.params.id;
    function editTask(description, id){
        database.collection(route.params.idUser).doc(id).update({description: descriptionEdit});
    navigation.navigate("Task", {idUser: route.params.idUser});
    }
    return(
        <View style={styles.container}>
        <Text style={styles.label}>Description</Text>
        <TextInput
         style={styles.input}
         placeholder="Ex: Estudar Java"
         onChangeText={setDescriptionEdit}
         value={descriptionEdit}
        />
        <TouchableOpacity style={styles.buttonNewTask} onPress={() => {editTask(descriptionEdit, idTask)}}>
            <Text style={styles.iconButton}>Save</Text>
        </TouchableOpacity>
    </View>
    );
}