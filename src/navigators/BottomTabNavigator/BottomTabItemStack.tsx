import React from 'react';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import {
  CrewMembersScreen,
  CrewMemberScreen,
  RocketsScreen,
} from '../../screens';
import { RootStackParamList } from '../navigation/navigationParamList';

const Stack = createStackNavigator<RootStackParamList>();

const initialScreenOptions: StackNavigationOptions = {
  headerStyle: {
    elevation: 0,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  headerTitleAlign: 'left',
};

const RocketsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Rockets"
        component={RocketsScreen}
        options={initialScreenOptions}
      />
    </Stack.Navigator>
  );
};

const CrewMembersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CrewMembers"
        component={CrewMembersScreen}
        options={initialScreenOptions}
      />
      <Stack.Screen name="CrewMember" component={CrewMemberScreen} />
    </Stack.Navigator>
  );
};

export { RocketsStack, CrewMembersStack };