import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/homeScreen/HomeScreen';
import SplashScreen from '../../screens/splashScreen/SplashScreen';
import SignIn from '../../screens/userForms/SignIn';
import SignUp from '../../screens/userForms/SignUp';
import PersonalInfoScreen from '../../screens/detailsScreen/PersonalInfoScreen';
import ImageScreen from '../../screens/detailsScreen/ImageScreen';
import ImagePreviewScreen from '../../screens/detailsScreen/ImagePreviewScreen';
import ProfileScreen from '../../screens/detailsScreen/ProfileScreen';
import ProductHomeScreen from '../../screens/productScreen/ProductHomeScreen';


const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Personal"
        component={PersonalInfoScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ImageUpload"
        component={ImageScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="ImagePreview"
        component={ImagePreviewScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductHomeScreen"
        component={ProductHomeScreen}
        options={{ headerShown: false }}
      />


    </Stack.Navigator>
  );
}