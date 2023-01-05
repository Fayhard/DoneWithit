import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ListingScreen from '../Screens/ListingScreen';
import ListingDetailScreen from '../Screens/ListingDetailScreen';


const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Listing" component={ListingScreen}/>
        <Stack.Screen name="ListingDetail" component={ListingDetailScreen}/>
    </Stack.Navigator>
);

export default FeedNavigator;