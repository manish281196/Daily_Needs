import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
  StatusBar,
} from 'react-native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  appHeading: {
    fontSize: 12,
    fontWeight: '500',
    color: '#fff',
  },
  button: {
    backgroundColor: 'rgb(255,0,80)',
    padding: 10,
    borderRadius: 10,
    width: '50%',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
  },
  img: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class SplashScreen extends React.Component {
  componentDidMount() {
    StatusBar.setBarStyle('light-content', true);
    StatusBar.setBackgroundColor('#000');
  }
  handleUserForm = () => {
    this.props.navigation.navigate('SignUp');
  };
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../src/assets/splash.jpg')}
          resizeMode="stretch"
          style={styles.img}>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 2 }}></View>
            <View style={{ alignItems: 'center', margin: 40 }}>
              <Text style={styles.appName}>Daily Needs</Text>
              <Text style={styles.appHeading}>
                The best ordering and delivering app in the century...
              </Text>
              <TouchableOpacity
                onPress={this.handleUserForm}
                style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }
}
export default SplashScreen;