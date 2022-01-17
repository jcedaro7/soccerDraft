import React from 'react';
import { Image, View, Text,ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../SharedComponents/Header/Header';
import user from '../../../assets/user.png';
import { players } from '../../utils/players';
import { Player } from '../../core/Player';

const PlayerList = () => {

  return(
    <SafeAreaView style={styles.container}>
      <Header headerTitle={'Player List'} />
      <ScrollView>
        {
          players.map((player: Player) =>   {
            return (
              <View style={styles.playerContainer} key={player.id}>
                <View>
                  <Image source={user} style={{ width: 50, height: 50, margin: 10 }} />
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
  }
});

export default PlayerList;