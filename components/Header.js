import { Platform, StyleSheet, Text, View } from "react-native"

const Header = () =>{
    return(
        <View style={styles.HeaderContainer}>
            <Text style={styles.HeaderTitle}>NotePad</Text>
        </View>
    )
}
export default Header;
const styles = StyleSheet.create({
    HeaderContainer :{
        width: "100%",
        height:"10%",
        backgroundColor : Platform.OS == "android" ? "blue" :"white",
        paddingTop : 30
    },
    HeaderTitle :{
        color: "white",
        fontWeight : "bold",
        marginLeft : 120,
        fontSize:20,
        // marginRight:5,
        // marginLeft:5,
        padding : 3,
        alignItems:"center"
    }
})