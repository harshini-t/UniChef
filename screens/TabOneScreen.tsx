import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>UniChefs</Text>
      <Text style={styles.card}><p>Veggie Fried Rice {"\n"}
      Cook time: 30 minutes{"\n"}
      <img src="https://www.dinneratthezoo.com/wp-content/uploads/2016/10/veggie-fried-rice-6.jpg" alt="Veggie Fried Rice" 
      width="100" height="150"></img>{"\n"} {"\n"}
      <Text style={styles.collapsible}>Directions</Text>
      </p></Text>
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    overflowY: 'scroll',
  },
  title: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  card: {
    marginTop: 5,
    paddingVertical: 20,
    paddingHorizontal: 100,
    borderWidth: 20,
    borderColor: "#696969",
    borderRadius: 10,
    backgroundColor: "#D3D3D3",
    color: "#696969",
  },

  collapsible: {
    backgroundColor: "#DC143C",
    color: "#000000",
    cursor: "pointer",
    paddingHorizontal: 50,
    fontSize: 15,
    outline: "none",

  },
  

});
