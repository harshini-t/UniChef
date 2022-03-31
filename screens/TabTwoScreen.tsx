import * as React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Carousel from 'flat-carousel';


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import navigation from '../navigation';
import { RootTabScreenProps } from '../types';


export default function TabTwoScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>Marketplace</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer}
                onPress={() => navigation.navigate('VeggieFriedRice')}
                >

                <Text style={styles.appButtonText}>Sell Something!</Text>
              </TouchableOpacity>  

              {"\n"}
              {"\n"}
      <View style={styles.wrapper}>
            <View>
                <View style={{flexDirection:"row"}}>
                    <View style={{flex:1}}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Acme_Fresh_Market.jpg" alt="ACME" 
      width="400" height="250" style={{justifyContent: 'flex-start',}} ></img>{"\n"} {"\n"}
                    </View>
                    <View style={{flex:1}}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Taco_Truck_St_Louis_MO.jpg" alt="tacos" 
      width="400" height="250" style={{justifyContent: 'flex-start',}}></img>{"\n"} {"\n"}
                    </View>
                    <View style={{flex:1}}>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Asian_Street_Food_Vendor_%28Unsplash%29.jpg" alt="food" 
      width="400" height="250" style={{justifyContent: 'flex-start',}}></img>{"\n"} {"\n"}
                    </View>
                </View>
         

      </View>
      </View>
      
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
  title: {
    marginTop: 100,
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFFFFF',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  buttonContainer: {
    marginTop: 10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00008b",
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
appButtonText: {
  fontSize: 14,
  color: "#ffffff",
  alignSelf: 'center'
},

header:{
  backgroundColor: "#00008b",
  height: 180,
}
});

const images = [
  { src: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Taco_Truck_St_Louis_MO.jpg' }
];

const MyCarousel = () => (
  <Carousel>
      {images.map((image, index) => (
          <div
              key={index}
              className="demo-item"
              style={{ backgroundImage: 'url(' + image.src + ')' }}
          />
          
      ))}
  </Carousel>
);
