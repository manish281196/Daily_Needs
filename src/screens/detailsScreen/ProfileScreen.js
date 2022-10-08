import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'rgb(255,0,68)',
  },
  SubHeading: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'rgb(0,0,0)',
  },
  appBrand: {
    height: 80,
    width: 80,
  },
  button: {
    backgroundColor: 'rgb(255,0,68)',
    padding: 10,
    borderRadius: 10,
    width: '50%',
    margin: 10,
    alignSelf: 'center'
  },
  buttonText: {
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

class ProfileScreen extends React.Component {

  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBackgroundColor('#fff');
  }
  handleProducts = () => {
    this.props.navigation.navigate('ProductHomeScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.appBrand}
          source={require('../../../src/assets/icons/basket.png')}
          resizeMode="contain"
          tintColor="rgb(255,0,68)"
        />
        <Text style={styles.Heading}>Congrats!</Text>
        <Text style={styles.SubHeading}>Your Profile is ready to use ...</Text>
        <TouchableOpacity
          onPress={this.handleProducts}
          style={styles.button}>
          <Text style={styles.buttonText}>Go To HomePage</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
export default ProfileScreen;