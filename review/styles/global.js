import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: 'LongCang-Regular',
    fontSize: 40,
    color: '#222',
  },
  text: {
    fontSize: 18,
    color: '#111',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
  },
  error: {
    marginTop: 3,
    marginBottom: 10,
    color: 'crimson',
    textAlign: 'center',
  },
});

export const images = {
  ratings: {
    1: require('../assets/rating-1.png'),
    2: require('../assets/rating-2.png'),
    3: require('../assets/rating-3.png'),
    4: require('../assets/rating-4.png'),
    5: require('../assets/rating-5.png'),
  },
};
