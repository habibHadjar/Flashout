import React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../types/types'; 

const BottomBar = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.bottomBar}>
      <Ionicons name="home-outline" size={30} color="#000" />
      <Ionicons name="calendar-outline" size={30} color="#000" />
      <Ionicons name="notifications-outline" size={30} color="#000" />
      <Ionicons name="map-outline" size={30} color="#000" onPress={() => navigation.navigate('Map')} />
      <Ionicons name="menu-outline" size={30} color="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
});

export default BottomBar;
