import React, { useState } from 'react';
import { 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput, 
  View, 
  TouchableOpacity
} from 'react-native';
import { AirbnbRating } from "react-native-elements";

const PlayerForm = () => {

  const [playerData, setPlayerData] = useState({
    name: '',
    nickName: '',
    skills: 0
  });
  return (
    <SafeAreaView style={styles.playerFormContainer}>
      <View style={styles.inputsContainer}>
        <View>
          <TextInput 
            style={styles.textInput}
            placeholder='Full Name...'
            placeholderTextColor='#D3D3D3'
            onChangeText={() => console.log('hola')} 
          />
        </View>
        <View>
          <TextInput
            style={styles.textInput}
            placeholder='Nick Name...' 
            placeholderTextColor='#D3D3D3'
            onChangeText={() => console.log('hola')} 
          />
        </View>
      </View>
      <View style={styles.ratingContainer}>
        <View>
          <Text style={styles.ratingLabel}>Skills</Text>
          <AirbnbRating
            count={5}
            defaultRating={0}
            showRating
            selectedColor='#7FF2D0'
            reviews={[]}
            onFinishRating={(e) => console.log('e', e)}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.buttons} onPress={() => alert('add player')}>
        <Text style={styles.buttonLabel}>Add Player</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  playerFormContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    borderBottomColor: '#7FF2D0',
    borderBottomWidth: 2,
    width: 260,
    height: 50,
    color: '#fff',
    fontSize: 30,
    marginBottom: 50
  },
  ratingLabel: {
    color: '#fff',
    width: 260,
    textAlign: 'center',
    fontSize: 30
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
  },
  ratingContainer: {
    flex: 1
  }
});

export default PlayerForm;