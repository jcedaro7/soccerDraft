import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, SafeAreaView } from 'react-native';
import Header from '../SharedComponents/Header/Header';

const NewMatch: React.FC = () => (
  <SafeAreaView style={styles.container}>
    <Header headerTitle={'Match Selector'} />
    <View style={styles.buttonsContainer}>
      <TouchableOpacity style={styles.buttons} onPress={() => alert('Work in Progress')}>
        <Text style={styles.buttonLabel}>5 v 5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={() => alert('Work in Progress')}>
        <Text style={styles.buttonLabel}>6 v 6</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons} onPress={() => alert('Work in Progress')}>
        <Text style={styles.buttonLabel}>7 v 7</Text>
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

export default NewMatch;