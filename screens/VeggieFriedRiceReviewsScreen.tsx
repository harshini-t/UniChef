import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


export default function VeggieFriedRiceScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}> Reviews </Text>
      </View>    

    {"\n"}
    {"\n"}

    <View style={styles.RectangleShapeView}>
    <Text style={styles.secondTitle}> Overall Rating: 4.6/5 </Text>  {"\n"}
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Star_rating_4.5_of_5.png" alt="Veggie Fried Rice Ratings" 
      width="505" height="105"></img>
      <View style={styles.RectangleShapeView2}> 
        <Text style={styles.reviewsTitle}> Super easy! </Text>  
        <Text style={styles.author}> {"\n"}  By lovestocook385 {"\n"} Rating: 5/5 </Text>  
        <Text style={styles.body}> {"\n"} The recipe is pretty straightforward and easy to follow. 
        I love to make this the night before a long day of classes and then pack it and eat it
        in between class. The recipe can be modified to have vegetables and protein of your liking. 
        Overall very pleased and a new staple of my diet! </Text>  
      </View>
       {"\n"}
       <View style={styles.RectangleShapeView2}> 
        <Text style={styles.reviewsTitle}> Wish it was quicker but overall I'm pleased </Text>  
        <Text style={styles.author}> {"\n"}  By quaker123 {"\n"} Rating: 4/5 </Text>  
        <Text style={styles.body}> {"\n"} This recipe is definetely one of my go-to's for 
        when it comes to making fried rice. I find it however to be a bit bland but found
        that if I add the right amount of sriracha and soy sauce in addition to this 
        recipe that it turns out okay. Might make my own post with this new discovery
        of mine! Stay tuned. </Text>  
      </View>
      {"\n"}
       <View style={styles.RectangleShapeView2}> 
        <Text style={styles.reviewsTitle}> Fantastic! </Text>  
        <Text style={styles.author}> {"\n"}  By pennbaker {"\n"} Rating: 4.7/5 </Text>  
        <Text style={styles.body}> {"\n"} I am an avid baker so cooking is new for me. 
        Decided to come on here and give it a try and this was one of the first recipes
        I found. Overall it is a good, filling meal - my only complaint is I wish the instructions
        also factored in how long it takes to cook rice in the cook time.  </Text>  
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

  reviewsTitle: {
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
    height: 850,
    alignSelf: 'center',
    backgroundColor: '#E6E6FA'
 
  },

  RectangleShapeView2: {
 
    marginTop: 20,
    width: 550,
    height: 200,
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

  author: {
    fontSize: 10,
    color: "000000",
    fontStyle: "italic"
  }

});
