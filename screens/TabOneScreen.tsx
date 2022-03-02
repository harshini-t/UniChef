import React, {Component} from 'react';
import { StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity, 
  ScrollView,
  LayoutAnimation,
  Platform, UIManager, Button, Alert} from 'react-native';
import {ExpandableListView} from 'react-native-expandable-listview';

import EditScreenInfo from '../components/EditScreenInfo';
//import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
/*   function YourComponent() {
    function handleItemClick({index}) {
      console.log(index);
    };
  
    function handleInnerItemClick({innerIndex, item, itemIndex}) {
      console.log(innerIndex);
    };
  } */

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>UniChefs</Text>
      </View>
        <View style={styles.RectangleShapeView}>
        <Text style={styles.name}> Veggie Fried Rice </Text> {"\n"}{"\n"}
      Cook time: 30 minutes{"\n"}
      <img src="https://www.dinneratthezoo.com/wp-content/uploads/2016/10/veggie-fried-rice-6.jpg" alt="Veggie Fried Rice" 
      width="250" height="300"></img>
      

      <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.appButtonText}>Directions</Text>
                onPress={() => Alert.alert('Simple Button pressed')}
              </TouchableOpacity>  

              {"\n"}
              {"\n"}
        </View>        

        <View style={styles.RectangleShapeView}>
        <Text style={styles.name}> Grilled Cheese </Text> {"\n"}
      Cook time: 5 minutes{"\n"}
      <img src="https://natashaskitchen.com/wp-content/uploads/2021/08/Grilled-Cheese-Sandwich-SQ.jpg" alt="Veggie Fried Rice" 
      width="250" height="300"></img>

      {"\n"}
      {"\n"}

      <Text style={styles.collapsible}>Directions</Text>
        </View>

      
        <View style={styles.RectangleShapeView}>
        <Text style={styles.name}> Teriyaki Stir Fry </Text> {"\n"}
        Cook time: 40 minutes{"\n"}
        <img src="https://www.connoisseurusveg.com/wp-content/uploads/2018/12/teriyaki-tofu-5-of-5.jpg" alt="Veggie Fried Rice" 
        width="250" height="300"></img>

        {"\n"}
        {"\n"}

      <Text style={styles.collapsible}>Directions</Text>
        </View>

        <View style={styles.RectangleShapeView}>
        <Text style={styles.name}> Fetuccine Alfredo Pasta </Text> {"\n"}
        Cook time: 25 minutes{"\n"}
        <img src="https://www.seannaskitchen.com/wp-content/uploads/2021/11/Alfredo-Hero-2-1.jpg" alt="Veggie Fried Rice" 
        width="250" height="300"></img>

        {"\n"}
        {"\n"}

      <Text style={styles.collapsible}>Directions</Text>
        </View>



        

      {/* <Text style={styles.card}>
        <Text style={styles.name}> Veggie Fried Rice </Text> {"\n"}
      Cook time: 30 minutes{"\n"}
      <img src="https://www.dinneratthezoo.com/wp-content/uploads/2016/10/veggie-fried-rice-6.jpg" alt="Veggie Fried Rice" 
      width="100" height="150"></img>{"\n"} */} 
      
      {"\n"}
      {"\n"}
      
      
      {/* </Text> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },

  title: {
    marginTop: 100,
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFFFFF',
    justifyContent: 'center'
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
    backgroundColor: "#301934",
    color: "#FFFFFF",
    cursor: "pointer",
    paddingHorizontal: 70,
    fontSize: 15,
    outline: "none",
    fontWeight: 'bold',

  },
  
  header:{
    backgroundColor: "#00008b",
    height: 180,
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
    marginTop: 10,
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
    backgroundColor: '#00BCD4'
 
  },
 
  RectangleShapeView: {
 
    marginTop: 20,
    width: 450 * 2,
    height: 450,
    alignItems: 'center',
    backgroundColor: '#E6E6FA'
 
  }
  

});
