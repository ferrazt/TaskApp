import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 20
    },
    Tasks: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 5
    },
    deleteTasks: {
        justifyContent: "center",
        paddingLeft: 15
    },
    buttonNewTaks:{
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 30,
        left: 20,
        backgroundColor: "#F92e6a",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
      },
    DescriptionTask:{
        width:"75%",
        alignContent: "flex-start",
        backgroundColor: "#f5f5f5cf",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginRight: 15,
        color: "#282b2db5"
    },
    iconButton:{
        color: "#ffffff",
        fontSize: 25,
        fontWeight: "bold"
    },
    buttonNewTaksy:{
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 30,
        right: 20,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },

    iconButtonLogouty:{
       color: "#ffffff",
        fontSize: 25,
        fontWeight: "bold"
    },
   

});
export default styles