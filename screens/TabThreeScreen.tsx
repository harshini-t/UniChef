import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

export default class Profile extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.profile} source={{uri: 'https://upload.wikimedia.org/wikipedia/en/2/2d/SSU_Kirby_artwork.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>Kirby</Text>
              <Text style={styles.info}>@kirbyeats</Text>
              <Text style={styles.info}>10k Followers / 100 Following / 2 Posts</Text>
              <Text style={styles.bio}> Hi! I'm from Taiwan and I love eating and cooking Asian food. Check out my recipes!</Text>
              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.appButtonText}>Recipes</Text>
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.appButtonText}>Meals for Sale</Text>
              </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#00008b",
    height:200,
  },
  profile: {
    width: 200,
    height: 200,
    borderRadius: 120,
    borderWidth: 5,
    borderColor: "#8b0000",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
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
  }
});
