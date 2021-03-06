import React from 'react';
import {View, StyleSheet} from 'react-native';

export default function Card(props) {
  return (
    <View style={styles.container}>
      <View style={styles.context}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#eee',
    marginHorizontal: 6,
    marginVertical: 10,

    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowColor: '#333',
  },
  context: {
    marginVertical: 10,
    marginHorizontal: 8,
  },
});
