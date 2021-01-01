import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { StyleSheet, Text, View } from 'react-native'

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AppStack = createStackNavigator();

function AppRoutes(){
    return(
        <AppStack.Navigator>
            <AppStack.Screen 
                name="SignIn" 
                component={SignIn}
                options={{headerShown: false}}
            />

            <AppStack.Screen 
                name="SignUp" 
                component={SignUp}
                options={{
                    headerStyle:{
                        backgroundColor:'#131313',
                        borderBottomWidth:1,
                        borderBottomColor:'#00b94a'
                    },
                    headerTintColor:'#fff',
                    headerBackTitleVisible:false,
                    headerTitle:'Voltar'
                }}
            />
        </AppStack.Navigator>
    );
}
export default AppRoutes;