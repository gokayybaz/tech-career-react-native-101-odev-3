import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './ProfileScreen';

const ProfileStack = createNativeStackNavigator();


const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name='ProfileScreen' component={ProfileScreen} options={{headerTitle: "Profil"}} />
    </ProfileStack.Navigator>
  )
}

export default ProfileStackScreen