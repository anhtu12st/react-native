import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import {globalStyles, images} from '../styles/global';
import Card from '../routes/Card';

export default function Review({navigation, route}) {
  const handlePress = () => {
    navigation.goBack();
  };

  const {title, rating, body} = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.text}>{title}</Text>
        <Text style={globalStyles.text}>{body}</Text>
        <View style={styles.rating}>
          <Text style={globalStyles.text}>Rating: </Text>
          <Image source={images.ratings[rating]} />
        </View>
      </Card>
      <Button title="go to home" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#aaa',
  },
});
