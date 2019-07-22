import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Keyboard,
  TextInput,
  Button,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={yup.object().shape({
            email: yup
              .string()
              .email()
              .required(),
          })}
          onSubmit={(values, {}) => {
            Alert.alert(JSON.stringify(values, null, 2));
            Keyboard.dismiss();
          }}
        >
          {({ handleChange, handleSubmit, values, errors }) => (
            <View>
              <TextInput
                style={{
                  borderWidth: 1,
                  height: 40,
                }}
                onChangeText={handleChange('email')}
                value={values.email}
                placeholder="Input Email!"
              />
              <Text>{errors.email}</Text>
              <Button
                // @ts-ignore
                onPress={handleSubmit}
                style={styles.button}
                title="Submit"
              />
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  content: {
    padding: 16,
  },
  button: {
    marginTop: 16,
  },
});
