import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Container,Nome,NewLink,NewText,Logout,LogoutText} from "./styles";
import {useNavigation} from '@react-navigation/native'
import Header from '../../components/Header'

import {AuthContext} from '../../contexts/auth';

export default function Profile() {
    const navigation = useNavigation();
    const {user,signOut} = useContext(AuthContext)


    return (
        <Container>
            <Header/>
            <Nome>
                {user && user.nome}
            </Nome>
            <NewLink onPress={ () => navigation.navigate('Registrar') }>
                <NewText>Registrar gastos</NewText>
            </NewLink>

            <Logout onPress={ () => signOut()}>
                <LogoutText>Sair</LogoutText>
            </Logout>
        </Container>
    )
}

const styles = StyleSheet.create({})
