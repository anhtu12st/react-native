import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../routes/Card';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ReviewForm from './ReviewForm';

export default function Home({navigation}) {
  const [showModal, setShowModal] = useState(false);

  const [reviews, setReviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air',
      rating: 5,
      body: 'lorem ipsum',
      key: '1',
    },
    {
      title: 'Gotta Catch Them All (again)',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3'},
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((curReviews) => [review, ...curReviews]);
    setShowModal(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={showModal} animationType="fade">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.container}>
            <View style={{...styles.modalToggle, marginTop: 20}}>
              <Icon
                name="close"
                size={40}
                onPress={() => setShowModal(false)}
              />
            </View>
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <View style={styles.modalToggle}>
        <Icon name="add" size={40} onPress={() => setShowModal(true)} />
      </View>
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Review', item);
            }}>
            <Card>
              <Text style={globalStyles.text}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    alignSelf: 'center',
    padding: 5,
    borderRadius: 100,
    backgroundColor: '#aaa',
    shadowOffset: {width: 1, height: 1},
    elevation: 6,
    shadowColor: '#000',
  },
});
