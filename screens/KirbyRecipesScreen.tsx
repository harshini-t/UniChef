import * as React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';


export default function KirbyRecipesScreen({ navigation }: RootTabScreenProps<'TabThree'>) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}> Kirby's Recipes </Text>
      </View>    

    {"\n"}
    {"\n"}

    <View style={styles.RectangleShapeView}>
      <View style={styles.RectangleShapeView2}> 
      <Text style={styles.name}> Veggie Fried Rice </Text> {"\n"}{"\n"}
      <Text style={styles.general}> Cook time: 30 minutes </Text> {"\n"}
        <img src="https://www.dinneratthezoo.com/wp-content/uploads/2016/10/veggie-fried-rice-6.jpg" alt="Veggie Fried Rice" 
       className = "center" width="250" height="300"></img>

{"\n"}
              {"\n"}

<TouchableOpacity style={styles.buttonContainer}
                onPress={() => navigation.navigate('VeggieFriedRice')}
                >

                <Text style={styles.appButtonText}>Directions</Text>
              </TouchableOpacity>  

              {"\n"}
              {"\n"}

              <TouchableOpacity style={styles.buttonContainer}
                onPress={() => navigation.navigate('VeggieFriedRiceReviews')}
                >

                <Text style={styles.appButtonText}>Reviews</Text>
              </TouchableOpacity>  
      
      </View>
    </View>
      
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
  },
  title: {
    marginTop: 70,
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFFFFF',
    justifyContent: 'center'
  },

  secondTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4B0082'
  },

  foodTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "000000"
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  wrapper: {
    padding: 10,
    backgroundColor: '#FFFFFF'
},

header:{
  backgroundColor: "#00008b",
  height: 180,
},

RectangleShapeView: {
 
    marginTop: 20,
    width: 800,
    height: 600,
    alignSelf: 'center',
    backgroundColor: '#E6E6FA'
 
  },

  RectangleShapeView2: {
 
    marginTop: 20,
    width: 550,
    height: 500,
    alignSelf: 'center',
    backgroundColor: '#FFFFFF'
 
  },

  text: {
      fontSize: 20,
      color:"#8A2BE2",
  },

  body: {
    fontSize: 15, 
    color: "000000",
    alignSelf: "center"
  },

  prices: {
    fontSize: 15,
    color: "000000",
    fontStyle: "italic"
  },

  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00008b",
  },
  appButtonText: {
    fontSize: 14,
    color: "#ffffff",
  },

  general: {
    fontSize: 20,
    fontWeight: "300",
    alignSelf: 'center',
    color: "#000000"
  },

  name:{
    fontSize:28,
    color: "#00008b",
    fontWeight: "600",
    alignSelf: 'center'
  }

});
