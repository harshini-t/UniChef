import * as React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


export default function KirbyMealsForSaleScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}> Kirby's Meals for Sale </Text>
      </View>    

    {"\n"}
    {"\n"}

    <View style={styles.RectangleShapeView}>
      <View style={styles.RectangleShapeView2}> 
        <Text style={styles.foodTitle}> Dumplings </Text>  
        <Text style={styles.prices}> {"\n"}  10 for $20 {"\n"} 20 for $25 {"\n"} 30 for $30  {"\n"} </Text>  
        <img src="https://static.onecms.io/wp-content/uploads/sites/44/2021/07/21/steamed-vegetable-dumplings-recipe.jpg" alt="Dumplings" 
       className = "center" width="250" height="300"></img>
        <Text style={styles.body}> {"\n"} Fresh homemade dumplings! Made from scratch using a recipe
        passed down among generations in my family, these dumplings will not disappoint. Vegan and gluten-free
        substitutes available. {"\n"} </Text>  
        <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.appButtonText}>Add to Cart</Text>
        </TouchableOpacity>  
      </View>
       {"\n"}
       <View style={styles.RectangleShapeView2}> 
        <Text style={styles.foodTitle}> Egg Tarts </Text>  
        <Text style={styles.prices}> {"\n"}  1 for $1.75 {"\n"} 5 for $7.50 {"\n"} 10 for $10  {"\n"} </Text>  
        <img src="https://img.buzzfeed.com/video-api-prod/assets/18da0a2f7c65489abdaaa1767aba847a/BFV6265_EggTart_FB_Thumbnail.jpg" alt="Dumplings" 
       className = "center" width="250" height="300"></img>
        <Text style={styles.body}> {"\n"} Hong Kong style egg tarts that are made fresh daily. A popular
        dessert choice and my best seller by far. Indulge in this delicious delicacy after a hearty meal
        or with coffee! {"\n"} </Text>  
        <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.appButtonText}>Add to Cart</Text>
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
    height: 1250,
    alignSelf: 'center',
    backgroundColor: '#E6E6FA'
 
  },

  RectangleShapeView2: {
 
    marginTop: 20,
    width: 550,
    height: 600,
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
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00008b",
  },
  appButtonText: {
    fontSize: 14,
    color: "#ffffff",
  }

});
