import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

export default function Button({onPress, title}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 18,
    backgroundColor: '#f01da1',
  },
  title: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
