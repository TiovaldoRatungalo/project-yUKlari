import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';

// screens
import {
  Splash,
  SignIn,
  SignUp,
  Home,
  Profil
} from './screens';

// images
import { DefaultProfilePicture } from './assets/images';



const Stack = createNativeStackNavigator();



export default function App() {
  const [profilePicture, setProfilePicture] = useState(DefaultProfilePicture);



  return (
    <NavigationContainer>
      <FlashMessage position='top' />
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp'>
          {props => <SignUp {...props} profilePicture={profilePicture} setProfilePicture={setProfilePicture} />}
        </Stack.Screen>
        <Stack.Screen name='Home'>
          {props => <Home {...props} profilePicture={profilePicture} />}
        </Stack.Screen>
        <Stack.Screen name='Profil'>
          {props => <Profil {...props} profilePicture={profilePicture} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
