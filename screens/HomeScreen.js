import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native"
import Icon from 'react-native-vector-icons/Ionicons'
const HomeScreen = () =>{
    return(
        <View style={styles.HomeScreenContainer}>
            <Pressable>
        <View style= {styles.itemButton}>
            <Text style = {styles.title}>Add Notes</Text>
            <Icon style={styles.icons} name="arrow-forward-outline" />
        </View></Pressable>
        <Pressable>
            <View style= {styles.itemButton}>
            <Text style = {styles.title}>View Notes</Text>
            <Icon style={styles.icons} name="arrow-forward-outline"/>
        </View>
        </Pressable>
        </View>
    )
} 
export default HomeScreen;
const styles = StyleSheet.create({
    HomeScreenContainer :{
        flex:1,
        justifyContent :"space-evenly",
        alignItems :"center",
        marginTop:40

    },
    itemButton :{
        width :Dimensions.get("screen").width -100,
        height:"50%",
        marginVertical:30,
        backgroundColor :"#f5f5f5",
        justifyContent :"center",
        alignItems :"center",
        elevation : 10
    },
    title :{
        fontSize :30,
        fontWeight:'bold',
        textAlign :'center'
    },
    icons :{
        fontSize:25,
        paddingTop :20
    }
});