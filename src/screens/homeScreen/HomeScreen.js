import React from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appName: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'rgb(255,0,68)',
  },
  appBrand: {
    height: 120,
    width: 120,
  },
});

class HomeScreen extends React.Component {

  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBackgroundColor('#fff');

    setTimeout(() => {
      this.props.navigation.navigate('Splash');
    }, 1000);
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
        <Text style={styles.appName}>Daily Needs</Text>
      </View>
    )
  }
}
export default HomeScreen;