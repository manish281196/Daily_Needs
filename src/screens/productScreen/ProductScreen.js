import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar, Dimensions, TextInput, ScrollView, TouchableOpacity } from 'react-native';


const { width: windowWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30
  },
  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgb(255,0,68)',
    marginHorizontal: 10
  },
  appBrand: {
    height: 40,
    width: 40,
  },
  searchBar: {
    borderWidth: 1,
    borderColor: '#eaeaea',
    width: windowWidth - 48,
    height: 52,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    flexDirection: 'row',
    overflow: 'hidden',
    alignItems: 'center',
    alignSelf: 'center',
  },
  serachIcon: {
    height: 24,
    width: 24,
    marginRight: 8,
  },
  txtInput: {
    flex: 1,
    fontSize: 14,
  },
  img: {
    height: 180,
    width: 280,
    margin: 10,
    borderWidth: 1,
    borderRadius: 20
  },
  Categoryheading: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },
  item: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 20
  }
});



class ProductScreen extends React.Component {

  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBackgroundColor('#fff');
  }
  handleAppLogo = () => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={styles.appBrand}
          source={require('../../../src/assets/icons/basket.png')}
          resizeMode="contain"
          tintColor="rgb(255,0,68)"
        />
        <Text style={styles.appName}>Daily Needs</Text>
      </View>
    );
  };
  handleSearchBar = () => {
    return (
      <View style={styles.searchBar}>
        <Image
          source={require('../../assets/icons/search.png')}
          resizeMode="contain"
          style={styles.serachIcon}
        />
        <TextInput style={styles.txtInput} placeholder="Search" />
      </View>
    );
  };
  handleSlider = () => {
    return (
      <View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <Image
            source={require('../../assets/Images/Vegetables.jpg')}
            resizeMode="contain"
            style={styles.img}
          />
          <Image
            source={require('../../assets/Images/Fruits.jpg')}
            resizeMode="contain"
            style={styles.img}
          />
          <Image
            source={require('../../assets/Images/Dairy.jpg')}
            resizeMode="contain"
            style={styles.img}
          />
        </ScrollView>
      </View>
    );
  };
  handleProductItems = () => {
    return (
      alert('Product Items Screen')
    )
  }
  handleProductCategory = () => {
    return (
      <View style={{ flexDirection: 'column' }}>
        <Text style={styles.Categoryheading}>Products Category</Text>
        <TouchableOpacity onPress={this.handleProductItems}>
          <Text style={styles.item}>Fruits</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleProductItems}>
          <Text style={styles.item}>Vegetables</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleProductItems}>
          <Text style={styles.item}>Dairy Products</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.handleAppLogo()}
        {this.handleSearchBar()}
        {this.handleSlider()}
        {this.handleProductCategory()}
      </View>
    )
  }
}
export default ProductScreen;