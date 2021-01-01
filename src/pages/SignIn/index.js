import React, {useState, useContext} from 'react'
import { StyleSheet, Text, View, Platform, ActivityIndicator } from 'react-native'
import { AuthContext } from '../../contexts/auth'

import {Background,Container,Logo,AreaInput,Input,SubmitButton,
    SubmitText,Link,LinkText} from './styles'

export default function SignIn( {navigation} ) {
    const[email,setEmail] = useState('');
    const[senha,setSenha] = useState('');
    const { signIn, loadingAuth } = useContext(AuthContext)

    function handleLogin(){
        signIn(email,senha);
    }

    return (
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >
                <Logo source={require('../../assets/Logo.png')} />

                <AreaInput>
                    <Input 
                        placeholder="Email"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={email}
                        onChangeText={ (text) => setEmail(text) }
                    />
                </AreaInput>

                <AreaInput>
                    <Input 
                        placeholder="Senha"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={senha}
                        onChangeText={ (text) => setSenha(text) }
                        secureTextEntry={true}
                    />
                </AreaInput>

                <SubmitButton onPress = {handleLogin} >
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color='#FFF'/>
                        ) : (
                            <SubmitText>Acessar</SubmitText>
                        )
                    }
                </SubmitButton>

                <Link onPress={ () => navigation.navigate('SignUp')}>
                    <LinkText>Criar uma conta!</LinkText>
                </Link>

            </Container>
        </Background>
    )
}

const styles = StyleSheet.create({})
