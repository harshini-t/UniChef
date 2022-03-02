import * as React from 'react';
import { StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity, ScrollView} from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
//import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>UniChefs</Text>
      
       
      <View style={styles.container}>
      {"\n"}
      {"\n"}
        <View style={styles.SquareShapeView} />
 
        <View style={styles.RectangleShapeView} />

        <View style={styles.RectangleShapeView} />

        <View style={styles.RectangleShapeView} />
        
        </View>
      
        {"\n"}
      {"\n"}

      {/* <Text style={styles.card}>
        <Text style={styles.name}> Veggie Fried Rice </Text> {"\n"}
      Cook time: 30 minutes{"\n"}
      <img src="https://www.dinneratthezoo.com/wp-content/uploads/2016/10/veggie-fried-rice-6.jpg" alt="Veggie Fried Rice" 
      width="100" height="150"></img>{"\n"} */} {"\n"}
      <Text style={styles.collapsible}>Directions</Text>
      {/* </Text> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },

  title: {
    marginTop: 100,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  card: {
    marginTop: 5,
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderWidth: 20,
    borderColor: "#696969",
    borderRadius: 5,
    backgroundColor: "#D3D3D3",
    color: "#696969",
  },

  collapsible: {
    marginTop: 10,
    backgroundColor: "#DC143C",
    color: "#000000",
    cursor: "pointer",
    paddingHorizontal: 50,
    fontSize: 15,
    outline: "none",

  },
  
  header:{
    backgroundColor: "#00008b",
    height:200,
  },

  body:{
    marginTop:100,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#00008b",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#696969",
    marginTop:10
  },
  bio:{
    fontSize:16,
    color: "#00008b",
    marginTop:10,
    textAlign: 'center'
  },

  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00008b",
  },
  appButtonText: {
    fontSize: 14,
    color: "#ffffff",
  },

  SquareShapeView: {
 
    width: 200,
    height: 200,
    justifyContent: 'center',
    backgroundColor: '#00BCD4'
 
  },
 
  RectangleShapeView: {
 
    marginTop: 20,
    width: 120 * 2,
    height: 120,
    justifyContent: 'center',
    backgroundColor: '#FFC107'
 
  }
  

});
