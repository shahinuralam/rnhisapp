import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Feed from './Feed';
import QandA from './QandA';
import Chat from './Chat';

  const Tab = createMaterialTopTabNavigator();
  export default function Timeline() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Ask Imam" component={QandA} />
      </Tab.Navigator>
    );
  }