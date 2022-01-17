import React, { useState } from 'react';
import { Image, View, Text,ScrollView, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Header from '../SharedComponents/Header/Header';
import user from '../../../assets/user.png';
import { players } from '../../utils/players'
import { Player } from '../../core/Player';

const PlayerSelection = () => {
  const [selectedPlayer, setSelectedPlayer] = useState<any>([])

  const handleChange = (playerID: number) => {
    const existPlayer = selectedPlayer.some((player: number) => player === playerID)
    if( !existPlayer ) {
      return setSelectedPlayer([...selectedPlayer, playerID])
    }
    const updatedPlayersList = selectedPlayer.filter((player: number) => player !== playerID)
    return setSelectedPlayer(updatedPlayersList)
  }

  const defineStyle = (playerId: number) => selectedPlayer.some((item: number) => item === playerId);

  return(
    <SafeAreaView style={styles.container}>
      <Header headerTitle={'Player Selection'} />
      <ScrollView>
        {
          players.map((player: Player) => {
            return (
              <TouchableOpacity
                style={defineStyle(player.id) ? styles.selectedPlayer : styles.playerContainer}
                key={player.id}
                onPress={() => handleChange(player.id)}>
                <View>
                  <Image source={user} style={styles.logo} />
                </View>
                <View>
                  <Text style={defineStyle(player.id) ? styles.selectedPlayerName : styles.playerName}>{player.name}</Text>
                  <Text style={defineStyle(player.id) ? styles.selectedPlayerNickName : styles.playerNickName}>{player.nickName}</Text>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
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
  selectedPlayer: {
    height: 100,
    width: 400,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#7FF2D0',
  },
  selectedPlayerName: {
    marginBottom: 10,
    color: 'black',
  },
  selectedPlayerNickName: {
    fontFamily: 'Arial',
    color: 'green',
    fontSize: 20,
    fontWeight: "bold"
  },
});

export default PlayerSelection;