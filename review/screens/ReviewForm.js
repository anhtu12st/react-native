import React from 'react';
import {Formik} from 'formik';
import {View, TextInput, Text} from 'react-native';
import {globalStyles} from '../styles/global';
import * as yup from 'yup';
import Button from '../routes/Button';

const ReviewSchema = yup.object({
  title: yup.string().required().min(4),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test(
      'is-num-1-5',
      'Rating must be a number 1-5',
      (val) => parseInt(val) > 0 && parseInt(val) < 6,
    ),
});

export default function ReviewForm({addReview}) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{title: '', body: '', rating: ''}}
        validationSchema={ReviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}>
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur={props.handleBlur('title')}
            />
            <Text style={globalStyles.error}>
              {props.touched.title && props.errors.title}
            </Text>
            <TextInput
              multiline
              style={globalStyles.input}
              placeholder="Review Body"
              onChangeText={props.handleChange('body')}
              value={props.values.body}
              onBlur={props.handleBlur('body')}
            />
            <Text style={globalStyles.error}>
              {props.touched.body && props.errors.body}
            </Text>
            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType="numeric"
              onBlur={props.handleBlur('rating')}
            />
            <Text style={globalStyles.error}>
              {props.touched.rating && props.errors.rating}
            </Text>
            <Button title="submit" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
