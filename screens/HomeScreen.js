import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
// import * as firebase from "firebase";
// import ImageSlider from "react-native-image-slider";
import {Button} from 'native-base';

// conmpoenents
import Header from '../componenets/Header';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
  }
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  componentDidMount = () => {};

  render() {
    const name = this.props.navigation.getParam('name', 'Username name');
    return (
      <View style={styles.container}>
        <Header title="Kharagpur Mobile Media" />
        <Text>Welcome</Text>
        <View style={styles.userDetails}>
          <Text>Hey {name}</Text>
          <Text> Your ar signed in as: {name}</Text>
        </View>
        {/* <Button
          style={styles.button}
          full
          rounded
          success
          onPress={() => {
            this.signOutUser();
          }}>
          <Text style={styles.buttonText}>SignOut</Text>
        </Button> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 100,
  },
  userDetails: {},

  button: {
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
  },
});
