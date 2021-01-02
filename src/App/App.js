/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Const from '../Common/Const';
import Login from '../Login/Login';
import Register from '../Register/Register';
import HomeTab from '../Home/HomeTab';
// import Prayertime from '../Prayertime/Prayertime';
// import Dashboard from '../Dashboard/Dashboard';
// import EditPrayertime from '../Prayertime/EditPrayerTime';
import HalalPlaceDetails from '../Services/HalalPlaceDetails';

const Stack = createStackNavigator();

const App = () =>  {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title: 'Login'}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{title: 'Register'}}
        /> 
        <Stack.Screen
          name= "Home"
          component={HomeTab}
          options={{title: Const.SYSTEM.ORG_NAME}}
        />
        {/* <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{title: 'Dashboard'}}
        />
        <Stack.Screen
          name="Prayertime"
          component={Prayertime}
          options={{title: 'Prayertime'}}
        />
        <Stack.Screen
          name="EditPrayertime"
          component={EditPrayertime}
          options={{title: 'EditPrayertime'}}
        /> */}
        <Stack.Screen
          name="HalalPlaceDetails"
          component={HalalPlaceDetails}
          options={{title: 'HalalPlaceDetails'}}
        /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;