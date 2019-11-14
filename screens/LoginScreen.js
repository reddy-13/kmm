import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
} from 'react-native';

import {Form, Item, Input, Label, Button} from 'native-base';

import api from '../constants/api.js';
import HomeScreen from './HomeScreen';
export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  static navigationOptions = {
    title: 'Login',
    header: null,
  };

  singInUser = (email, password) => {
    // Alert.alert(this.state.username + "-- " + this.state.password);
    this.setState({isLoading: true});
    // console.log(api.url + "userCtrl/login");

    fetch(api.url + 'userCtrl/login', {
      method: 'POST',
      headers: {
        Accept: 'applicaton/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(res => {
        console.log(res);

        if (res.status === 'success') {
          this.setState({isLoading: false});
          var user_id = res.user_id;
          var name = res.name;
          console.log(res);
          //   AsyncStorage.setItem("user_id", user_id);
          //   AsyncStorage.setItem("name", name);
          //   AsyncStorage.setItem("user_type", "doctor");
          this.props.navigation.replace('HomeScreen', {name: name});
        } else {
          alert(res.msg);
        }
      });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="position" enabled>
        <View style={styles.logoContainer}>
          {/* <Image source={require('../assets/logo.png')} /> */}
          <Text>mobiledev.in</Text>
        </View>
        <Form style={styles.form}>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={email => this.setState({email})}
            />
          </Item>

          <Item floatingLabel>
            <Label>Pasword</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={password => this.setState({password})}
            />
          </Item>
          <Button
            style={styles.button}
            full
            rounded
            onPress={() => {
              this.singInUser(this.state.email, this.state.password);
            }}>
            <Text style={styles.buttonText}>Sign in</Text>
          </Button>
        </Form>
        {/* <View style={styles.footer}>
          <Text>OR</Text>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('SignUp');
            }}>
            <Text>Creat a new account</Text>
          </TouchableOpacity>
        </View> */}
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 100,
  },
  form: {
    padding: 20,
    width: '100%',
    marginBottom: 30,
  },
  button: {
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
  },
  footer: {
    alignItems: 'center',
  },
});
