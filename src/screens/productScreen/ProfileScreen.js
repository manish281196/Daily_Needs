import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableHighlight, Image, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({

  appName: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'rgb(255,0,68)',
  },
  appBrand: {
    height: 120,
    width: 120,
  },
  profileImgContainer: {
    marginLeft: 8,
    height: 140,
    width: 140,
    borderRadius: 70,
    alignSelf: 'center'
  },
  profileImg: {
    height: 140,
    width: 140,
    borderRadius: 70,
    alignSelf: 'center'
  },
  Username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 10,
    alignSelf: 'center'
  },
  Usermail: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(255,0,68)',
    marginTop: 10,
    alignSelf: 'center'
  },
  alignText: {
    textAlign: 'left',
    marginTop: 40,
    fontSize: 16,
    fontWeight: 'bold'
  },
  icon: {
    height: 20,
    width: 20,
    marginTop: 40,
    marginHorizontal: 24,
  }
});

class ProfileScreen extends React.Component {

  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBackgroundColor('#fff');
  }
  handleImage = () => {
    return (
      <View style={{ marginTop: 50 }}>
        <TouchableHighlight style={[styles.profileImgContainer, { borderColor: 'green', borderWidth: 1 }]} >
          <Image source={require('../../../src/assets/splash.jpg')} style={styles.profileImg} />
        </TouchableHighlight>
      </View>
    )
  }
  handleHorizontalLine = () => {
    return (
      <View style={{ height: 1, width: '90%', marginTop: 10, alignSelf: 'center', backgroundColor: 'black' }} />
    )
  }

  handleTabs = () => {
    return (
      <View>
        <TouchableOpacity onPress={() => alert('Privacy & Policy')}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../assets/icons/privacy.png')} resizeMode="contain" style={styles.icon} />
            <Text style={styles.alignText}>Privacy & Policy</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Terms & Conditions')}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../assets/icons/terms-and-conditions.png')} resizeMode="contain" style={styles.icon} />
            <Text style={styles.alignText}>Terms & Conditions</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('LogOut')}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={require('../../assets/icons/power-off.png')} resizeMode="contain" style={styles.icon} />
            <Text style={styles.alignText}>LogOut</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.handleImage()}
        <Text style={styles.Username}>Manish Gupta</Text>
        <Text style={styles.Usermail}>Manishgupta2896@gmail.com</Text>
        {this.handleHorizontalLine()}
        {this.handleTabs()}
      </View>
    )
  }
}
export default ProfileScreen;