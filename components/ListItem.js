import { StyleSheet } from "react-native";
import { Text } from "react-native"
import { View } from "react-native"

const ListItem = ({notes})=>{
    return(
        <View style={styles.ListItem}>
            {/* <Text style={styles.title}>View Notes</Text> */}
            <Text style ={styles.input}>{notes}</Text>
        </View>
    )
}
export default ListItem;
const styles = StyleSheet.create({
    ListItem:{
        borderWidth:4,
        borderColor:"green",
        padding:10,
        borderRadius:5,
        backgroundColor:'#fff',
        marginTop:20
        },
    input:{
        fontSize:20,
        fontWeight:'bold'
    }  ,
    title:{
        fontSize:20,
        fontWeight:'700',
        borderWidth:3,
        borderRadius:2,
        borderColor:'grey',
        padding:10
    }  
})