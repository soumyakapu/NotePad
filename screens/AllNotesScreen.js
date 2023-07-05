import { FlatList } from "react-native";
import { Text } from "react-native"
import { View } from "react-native"
import ListItem from "../components/ListItem";
import { StyleSheet } from "react-native";

const AllNotes = ({notes}) =>{
    const renderItem = (itemData) =>{
      return  <ListItem notes={itemData.item.notes}/>
    }
    return(
        <View style={styles.Container}>
            <FlatList data={notes} renderItem={renderItem}/>
            <Text style={styles.title}>AllNotes</Text>
        </View>
    )
}
export default AllNotes;
const styles = StyleSheet.create({
    Container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:10
    },
    title:{
        fontSize:20,
        fontWeight:'700',
        borderWidth:3,
        borderRadius:2,
        borderColor:'grey',
        padding:10
    }  
})