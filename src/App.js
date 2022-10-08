import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MyStack } from './navigators/stackNavigator/StackNavigator';

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    )
  }
}
export default App;