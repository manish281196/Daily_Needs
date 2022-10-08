import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, TouchableHighlight } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'rgb(255,0,80)',
    padding: 10,
    borderRadius: 10,
    width: '50%',
    margin: 10,
    alignSelf: 'center',
    marginTop: 64
  },
  buttonText: {
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',

  },
  profileImgContainer: {
    marginLeft: 8,
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  profileImg: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
});

class ImagePreviewScreen extends React.Component {

  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBackgroundColor('#fff');
  }
  handleProfile = () => {
    this.props.navigation.navigate('ProfileScreen');
  }
  handleImage = () => {
    return (
      <View>
        <TouchableHighlight style={[styles.profileImgContainer, { borderColor: 'green', borderWidth: 1 }]} >
          <Image source={require('../../../src/assets/splash.jpg')} style={styles.profileImg} />
        </TouchableHighlight>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        {this.handleImage()}
        <TouchableOpacity
          onPress={this.handleProfile}
          style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
export default ImagePreviewScreen;