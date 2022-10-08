import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20
  },
  button: {
    backgroundColor: 'rgb(255,0,80)',
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
  cards: {
    height: 200,
    width: '90%',
    borderWidth: 1,
    borderColor: 'rgb(255,0,80)',
    margin: 10,
    borderRadius: 20,
    padding: 10
  },
  appName: {
    fontSize: 18,
    fontWeight: '500',
    color: 'rgb(255,0,68)',
    textAlign: 'center'
  },
  appBrand: {
    flex: 1,
    height: 60,
    width: 60,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

});

class ImageScreen extends React.Component {

  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBackgroundColor('#fff');
  }
  handleViewImage = () => {
    this.props.navigation.navigate('ImagePreview');
  }

  handleCamera = () => {
    let options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchCamera(options, response => {
      console.log('Response =', response)
    });
  }

  handleGallery = () => {
    let options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includeBase64: true,
    };
    launchImageLibrary(options, response => {
      console.log('Response =', response)
    });
  }

  handleCustomBlock1 = () => {
    return (
      <View style={styles.cards}>
        <Image
          style={styles.appBrand}
          source={require('../../../src/assets/icons/camera.png')}
          resizeMode="contain"
          tintColor="rgb(255,0,68)"
        />
        <TouchableOpacity onPress={this.handleCamera}>
          <Text style={styles.appName}>Camera</Text>
        </TouchableOpacity>
      </View>
    )
  }

  handleCustomBlock2 = () => {
    return (
      <View style={styles.cards}>
        <Image

          style={styles.appBrand}
          source={require('../../../src/assets/icons/folder.png')}
          resizeMode="contain"
          tintColor="rgb(255,0,68)"
        />
        <TouchableOpacity onPress={this.handleGallery}>
          <Text style={styles.appName}>Gallery</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Heading}>This data will be displayed in your account profile for the security reasons.</Text>
        {this.handleCustomBlock1()}
        {this.handleCustomBlock2()}
        <TouchableOpacity
          onPress={this.handleViewImage}
          style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
export default ImageScreen;