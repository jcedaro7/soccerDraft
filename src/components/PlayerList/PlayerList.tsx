import React from 'react';
import { 
  Image,
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity 
} from 'react-native';
import user from '../../../assets/user.png';
import { players } from '../../utils/players';
import { Player } from '../../core/Player';
import { useNavigation } from '@react-navigation/native';
import PlayerForm from '../PlayerForm/PlayerForm';

const PlayerList = () => {

  const navigation = useNavigation();

  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {
          players.map((player: Player) =>   {
            return (
              <View style={styles.playerContainer} key={player.id}>
                <View>
                  <Image source={user} style={styles.logo} />
                </View>
                <View>
                  <Text style={styles.playerName}>{player.name}</Text>
                  <Text style={styles.playerNickName}>{player.nickName}</Text>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
      <View>
        <TouchableOpacity style={styles.addPlayerButton} onPress={() => navigation.navigate('PlayerForm')}>
          <Text style={styles.buttonLabel}>Add Player</Text>
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
  logo:{
    width: 50,
    height: 50,
    margin: 10
  },
  playerContainer: {
    height: 100,
    width: 400,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#0000',
    borderBottomWidth: 1,
    borderColor: "#fff"
  },
  playerLogo: {
    width: 50,
    height: 50,
    margin: 10
  },
  playerName: {
    marginBottom: 10,
    color: '#fff',
  },
  playerNickName: {
    fontFamily: 'Arial',
    color: 'red',
    fontSize: 20,
    fontWeight: "bold"
  },
  addPlayerButton: {
    width: 256,
    height: 49,
    backgroundColor: '#7FF2D0',
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 23,
    marginTop: 23,
  },
  buttonLabel: {
    fontFamily: 'Arial',
    color: '#000000',
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default PlayerList;