import { useState } from "react"
import { StyleSheet } from "react-native"
import { TextInput } from "react-native"
import { Button } from "react-native"
import { Text } from "react-native"
import { View } from "react-native"
import { ScreenType } from "../constants/Constant"

const AddScreen = (onSave, onExit) =>{
    const[enteredText, setEnteredText] = useState("")
    const handleChange = (val) =>{
        setEnteredText(val)
    }
    const handleClick = (val) =>{
        if(enteredText.trim().length>0){
            onSave(enteredText);
            onExit(ScreenType.allNotes)
        }
        console.log(val)
    }
    return(
        <View style={styles.Container}>
            
            <View style = {styles.FormContainer}>
                <Text style= {styles.title}>Add Note</Text>
                <TextInput onChangeText={handleChange} style ={styles.input}/>
                <Button onPress ={handleClick} title="Save"/>
            </View>
            
        </View>
    )
}
export default AddScreen
const styles = StyleSheet.create({
    Container:{
        flex:1
    },
    FormContainer:{
        backgroundColor: '#fff',
        marginVertical:10,
        marginHorizontal:10,
        padding:10
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    },
    input:{
        marginVertical:20,
        width:"100%",
        fontSize:16,
        padding:10,
        borderBottomWidth2
    }
})