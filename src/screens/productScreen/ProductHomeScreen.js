import React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductScreen from './ProductScreen';
import ProfileScreen from './ProfileScreen';
import ProductItemScreen from './ProductItemScreen';

class ProductHomeScreen extends React.Component {

  componentDidMount() {
    StatusBar.setBarStyle('dark-content', true);
    StatusBar.setBackgroundColor('#fff');
  }

  render() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        tabBarOptions={{
          showLabel: false,
        }}>
        <Tab.Screen
          name="About"
          component={ProductScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('../../assets/icons/home.png')}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? 'rgb(255,0,68)' : 'grey',
                  }}
                />
                <Text
                  style={{ color: focused ? 'rgb(255,0,68)' : 'grey', fontSize: 12 }}>
                  Home
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Product"
          component={ProductItemScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('../../assets/icons/user.png')}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? 'rgb(255,0,68)' : 'grey',
                  }}
                />
                <Text
                  style={{ color: focused ? 'rgb(255,0,68)' : 'grey', fontSize: 12 }}>
                  Product
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('../../assets/icons/user.png')}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? 'rgb(255,0,68)' : 'grey',
                  }}
                />
                <Text
                  style={{ color: focused ? 'rgb(255,0,68)' : 'grey', fontSize: 12 }}>
                  Profile
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    )
  }
}
export default ProductHomeScreen;