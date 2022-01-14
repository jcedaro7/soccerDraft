import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, SafeAreaView } from 'react-native';

const Home = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>
        Soccer Draft
      </Text>
    </View>
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.buttons} onPress={() => alert('Work in Progress')}>
        <Text style={styles.buttonLabel}>New Match</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={() => alert('Work in Progress')}>
        <Text style={styles.buttonLabel}>Player List</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#000000'
  },
  titleContainer: {
    width: 250,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  title: {
    fontFamily: 'Arial',
    color: '#7FF2D0',
    fontSize: 35,
    fontWeight: "bold"
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