import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { useState } from 'react';
import { ScreenType } from './constants/Constant';
import AddScreen from './screens/AddScreen';
import AllNotes from './screens/AllNotesScreen';
import BackButton from './components/BackButton';

export default function App() {
  const [screen, setScreen] = useState(ScreenType.home);
  const[notes,setNotes] = useState([
    // ...notes,
    // {id:Date.now(),notes:data}
  ]);
  const updateScreen =(data)=>{
    setScreen(data)
  }
  let content;
  if(screen === ScreenType.addNote){
    content = (
    <AddScreen 
    onExit ={updateScreen}
    onSave = {(data)=>setNotes(data)}/>);
  }
  else if(screen === ScreenType.allNotes){
    content = <AllNotes notes={notes}/>;
  }
  else if(screen === ScreenType.home){
    content = <HomeScreen onExit = {updateScreen}/>
  }
  console.log(notes)
  return (
    <View style={styles.container}>
      <Header/>
      {screen !== ScreenType.home &&<BackButton onButtonClick = {updateScreen}/>}
      
      {content}
      {/* <HomeScreen/> */}
      {/* <Text>Helloo baby</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
