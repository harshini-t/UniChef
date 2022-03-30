import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


export default function VeggieFriedRiceScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}> Recipe</Text>
      </View>    

    {"\n"}
    {"\n"}

    <View style={styles.RectangleShapeView}>
        <Text style={styles.secondTitle}> Ingredients </Text>
        <Text style={styles.text}> {"\n"}
                                     2 teaspoons oil {"\n"}
                                     ½ cup carrot, diced {"\n"}
                                     1 tablespoon garlic, minced {"\n"}
                                     ½ cup onion, diced {"\n"}
                                     ½ cup bell pepper, diced {"\n"}
                                     ½ cup broccoli floret {"\n"}
                                     ½ cup pea {"\n"}
                                     ⅓ cup corn {"\n"}
                                     3 eggs, beaten {"\n"}
                                     3 cups white rice, cooked {"\n"}
                                     2 tablespoons soy sauce {"\n"}
                                     1 tablespoon sesame oil {"\n"}
                                     pepper, to taste </Text> 
    </View>

    <View style={styles.RectangleShapeView2}>
        <Text style={styles.secondTitle}> Directions </Text>
        <Text style={styles.text}> {"\n"} 1. In a wok or deep skillet, heat up the oil over high heat and cook carrots, onions, and garlic until onions are translucent. {"\n"} {"\n"} 
 2. Add bell peppers and broccoli and cook an additional 3-4 minutes. Push all of the cooked vegetables to the side of the pan. {"\n"} {"\n"}
 3. Beat the eggs and pour into the cleared half of the pan. Scramble the eggs and mix with the rest of the vegetables. {"\n"} {"\n"}
 4. Add peas, corn, rice, soy sauce, sesame oil, and pepper. Mix well and let the rice cook until slightly crispy. {"\n"} {"\n"}
 5. Enjoy! </Text> 
    </View>

      
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    width: 600,
    height: 450,
    alignSelf: 'center',
    backgroundColor: '#CCCCFF'
 
  },

  RectangleShapeView2: {
 
    marginTop: 20,
    width: 600,
    height: 450,
    alignSelf: 'center',
    backgroundColor: '#CCCCFF'
 
  },

  text: {
      fontSize: 20,
      color:"#000000",
      alignSelf: "center"
  }

});
