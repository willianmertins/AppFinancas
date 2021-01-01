import React from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import {useNavigation} from '@react-navigation/native'

export default function Header() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback 
                style={styles.buttonMenu} 
                onPress={ () => navigation.toggleDrawer()}
            >
                    <Icon name="menu" color="#fff" size={30} />
            </TouchableWithoutFeedback>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'flex-start',
        alignItems:'flex-start',
        marginTop:30,
        marginLeft:15,
        marginBottom:15,
        width:'100%',
        height:50
    },
    buttonMenu:{
        justifyContent:'center',
        alignItems:'center',
    }
})
