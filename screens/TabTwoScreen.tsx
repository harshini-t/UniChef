import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>Marketplace</Text>
      </View>
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
    justifyContent: 'center'
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
}
});
