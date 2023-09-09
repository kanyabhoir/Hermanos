import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Text,
  View,
  Button,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {useSelector} from 'react-redux';

const Login = ({navigation}) => {
  const [validcred, setValidcred] = useState(false);
  // const LoggedUser = useSelector(state => state.UserReducer.registeredUser);
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm({mode: 'onBlur'});

  const onSubmit = data => {
    console.log('data', data);
    // if (
    //   data.email === LoggedUser.email &&
    //   data.password === LoggedUser.password
    // ) {
    //   navigation.navigate('postupload');
    //   reset();
    // } else {
    //   setValidcred(true);
    // }
    navigation.navigate('home');
  };
  return (
    <SafeAreaView>
      <View
        style={{
          borderWidth: 1,
          paddingVertical: 20,
          backgroundColor: '#00113E',
        }}>
        <View
          style={{
            marginTop: 30,
            alignItems: 'center',
            backgroundColor: '#00113E',
          }}>
          <Text style={{fontSize: 18, color: '#fff', fontWeight: '700'}}>
            Sign In
          </Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.inputNames}>Email</Text>
          <Controller
            control={control}
            name="email"
            rules={{
              required: true,
            }}
            render={({field: {onChange, value, onBlur}}) => (
              <TextInput
                style={styles.input}
                keyboardType="email-address"
                value={value}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                placeholder="Enter your Email here"
              />
            )}
          />

          {errors.email && (
            <Text style={styles.errorMsg}>Email field is required!</Text>
          )}

          <Text style={styles.inputNames}>Password</Text>
          <Controller
            control={control}
            name="password"
            rules={{
              required: {
                value: true,
              },
            }}
            render={({field: {onChange, value, onBlur}}) => (
              <TextInput
                style={styles.input}
                secureTextEntry={true}
                value={value}
                onBlur={onBlur}
                onChangeText={value => {
                  onChange(value);
                }}
                placeholder="***************"
              />
            )}
          />

          {errors.password && (
            <Text style={styles.errorMsg}>Password is required!</Text>
          )}
          {validcred && (
            <Text style={styles.errorMsg}>Invalid Credentials</Text>
          )}

          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={styles.subButton}>
            <Text style={styles.submitText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  subButton: {
    borderColor: '#ccc',
    borderRadius: 4,
    height: 50,
    width: Dimensions.get('screen').width / 1.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#003AD0',
    marginTop: 250,
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  input: {
    borderColor: '#ccc',
    borderRadius: 4,
    borderWidth: 1,
    height: 50,
    padding: 10,
    marginBottom: 10,
    marginTop: 7,
  },
  inputNames: {
    fontSize: 16,
    fontWeight: '500',
  },
  errorMsg: {
    color: 'red',
    marginBottom: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems:'center'
    marginTop: 50,
    paddingHorizontal: 20,
  },
});
