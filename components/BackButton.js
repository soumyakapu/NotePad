import { StyleSheet } from "react-native";
import { Button } from "react-native"
import { View } from "react-native"
import { ScreenType } from "../constants/Constant";

const BackButton = (onButtonClick) =>{
    return(
        <View style = {styles.Container}>
            <View style ={styles.button}>
           <Button onPress={()=>onButtonClick(ScreenType.home)} color="#fff" title="< Back"/>
           </View>
        </View>
    )
}
export default BackButton;
const styles = StyleSheet.create({
    Container :{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"flex-start"
    },
    button :{
        margin:1
    }
})