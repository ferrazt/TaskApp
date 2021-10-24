import React, {useState, useEffect} from "react";
import {SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    FlatList
} from "react-native";
import {FontAwesome, MaterialCommunityIcons} from "@expo/vector-icons"; 
import firebase from "../../config/firebaseconfig";
const database = firebase.firestore();
import styles from "./style";

export default function Taks({ navigation , route}){
   const[task,setTask] = useState([]);

    function Logout(){
        firebase.auth().signOut().then(() => {
            navigation.navigate("Login");
          }).catch((error) => {
           
          });
    }

   function deleteTask(id){
       database.collection(route.params.idUser).doc(id).delete()
   }

   useEffect(() =>{
       database.collection(route.params.idUser).onSnapshot((query) => {
 
           const list = []
           query.forEach((doc) => {
               list.push({...doc.data(), id: doc.id});
           });
           setTask(list);
       })

   }, []);

    return(
        <View style={styles.container}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={task}
              renderItem={( item ) =>{
                  return(
                  <View style={styles.Tasks}>
                        <TouchableOpacity
                          style={styles.deleteTasks}
                          onPress={() =>{
                              deleteTask(item.item.id)
                          }}
                        >
                          <FontAwesome
                            name="star"
                            size={23}
                            color="#F92e6A"
                          >
                          </FontAwesome>
                        </TouchableOpacity>
                        <Text
                          style={styles.DescriptionTask}
                          onPress={() => {
                              navigation.navigate("Details",{
                                  id: item.item.id,
                                  description: item.item.description,
                                  idUser: route.params.idUser
                              })
                          }}
                        >
                            {item.item.description}
                        </Text>
                  </View>
                  );
              }}
            />
            <TouchableOpacity
              style={styles.buttonNewTaks}
              onPress={() => navigation.navigate("NewTask",{idUser: route.params.idUser})}
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={styles.buttonNewTaksy}
               onPress={() => {Logout()}}
            >
                <Text style={styles.iconButtonLogouty}>
                    <MaterialCommunityIcons 
                        name="location-exit"
                        size={23}
                        color="#F92E6A"
                    />
                </Text>
            </TouchableOpacity>
        </View>
    );
}