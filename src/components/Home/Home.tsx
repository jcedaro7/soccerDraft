import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, SafeAreaView } from 'react-native';
import Header from '../SharedComponents/Header/Header';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return(
  <SafeAreaView style={styles.container}>
    <Header headerTitle={'Soccer Draft'} />
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate("NewMatch")}>
        <Text style={styles.buttonLabel}>New Match</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={() => navigation.navigate("PlayerList")}>
        <Text style={styles.buttonLabel}>Player List</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#000000'
  },
  buttonsContainer: {
    height: 200,
    width: 330,
    justifyContent: 'center',
    flex: 1,
  },
  buttons: {
    width: 330,
    height: 80,
    backgroundColor: '#7FF2D0',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40
  },
  buttonLabel: {
    fontFamily: 'Arial',
    color: '#000000',
    fontSize: 25,
    fontWeight: "bold"
  }
});

export default Home;