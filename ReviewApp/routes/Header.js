import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default function Header({navigation}) {
  return (
    <ImageBackground
      source={require('../assets/game_bg.png')}
      style={styles.container}>
      <Icon
        style={{position: 'absolute', left: 16}}
        name="menu"
        size={28}
        onPress={() => {
          navigation.openDrawer();
        }}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require('../assets/heart_logo.png')}
          style={styles.titleImg}
        />
        <Text style={styles.header}>Header</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#aaa',

    elevation: 3,
    shadowOffset: {width: 1, height: 0},
  },
  header: {
    fontFamily: 'LongCang-Regular',
    fontSize: 30,
    color: '#333',
    letterSpacing: 1,
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleImg: {
    marginHorizontal: 15,
    width: 28,
    height: 28,
  },
});
