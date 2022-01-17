import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface HeaderProps {
  headerTitle: string;
}

const Header: React.FC<HeaderProps> = ({ headerTitle }) => (
  <View style={styles.titleContainer}>
  <Text style={styles.title}>
    {headerTitle}
  </Text>
</View>
);

const styles = StyleSheet.create({
  titleContainer: {
    width: 300,
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
})

export default Header;