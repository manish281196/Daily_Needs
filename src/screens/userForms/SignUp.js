import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, StatusBar, Button, TouchableOpacity, } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  appName: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'rgb(255,0,68)',
  },
  appBrand: {
    height: 100,
    width: 100,
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 5,
    borderColor: '#444',
    width: 300,
    borderRadius: 20,
  },
  btn: {
    width: 20,

  },
  AppPlatform: {
    margin: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  signinBtn: {
    color: 'rgb(255,0,68)',
  },
  buttonStyle: {
    margin: 10,
    backgroundColor: 'rgb(255,0,80)',
  }
});

class SignUp extends React.Component {

  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBackgroundColor('#fff');
  }


  handleSignIn = () => {
    this.props.navigation.navigate('SignIn');
  }

  handleAppBrand = () => {
    return (
      <Image
        style={styles.appBrand}
        source={require('../../../src/assets/icons/basket.png')}
        resizeMode="contain"
        tintColor="rgb(255,0,68)"
      />
    );
  };

  handleAppForm = () => {
    return (
      <View>
        <Text style={styles.appHeading}>SIGN UP FOR FREE</Text>
        <Text>E-mail:</Text>
        <TextInput style={styles.input} placeholder='Enter the Email address' />
        <Text>Password:</Text>
        <TextInput style={styles.input} placeholder='Enter the Password' secureTextEntry={true} />
        <Button style={styles.btn} title='SIGN UP' color='rgb(255,0,80)' onPress={this.handleSignIn} />
      </View>
    );
  };

  handleAppPlatform = () => {
    return (
      <View>
        <Text style={styles.AppPlatform}>Or Continue With</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.buttonStyle}>
            <Button title={"Facebook"} color='rgb(255,0,80)' />
          </View>
          <View style={styles.buttonStyle}>
            <Button title={"Google"} color='rgb(255,0,80)' />
          </View>
        </View>
      </View>
    );
  };

  handleAppBtn = () => {
    return (
      <View>
        <Text style={styles.AppPlatform}> Already Have a account :
          <TouchableOpacity TouchableOpacity onPress={this.handleSignIn}>
            <Text style={styles.signinBtn}> SignIn</Text>
          </TouchableOpacity>
        </Text>

      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.handleAppBrand()}
        {this.handleAppForm()}
        {this.handleAppPlatform()}
        {this.handleAppBtn()}
      </View>
    )
  }
}
export default SignUp;