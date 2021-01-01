import React, {useState} from 'react'
import { StyleSheet, Text, View, Platform, ActivityIndicator } from 'react-native'
import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../../contexts/auth'


import {Background,Container,Logo,AreaInput,Input,SubmitButton,
    SubmitText,Link,LinkText} from '../SignIn/styles'

export default function SignIn() {
    const[nome,setNome] = useState('');
    const[email,setEmail] = useState('');
    const[senha,setSenha] = useState('');    

    const { signUp, loadingAuth } = useContext(AuthContext);

    function handleSignUp(){
        signUp(email,senha,nome);
    }

    return (
        <Background>
            <Container
                behavior={Platform.OS === 'ios' ? 'padding' : ''}
                enabled
            >

                <AreaInput>
                    <Input 
                        placeholder="Nome"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={nome}
                        onChangeText={ (text) => setNome(text) }
                    />
                </AreaInput>

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

                <SubmitButton onPress={handleSignUp}>
                {
                    loadingAuth ? (
                        <ActivityIndicator size={20} color='#FFF'/>
                    ) : (
                        <SubmitText>Cadastrar</SubmitText>
                    )
                }
                </SubmitButton>

            </Container>
        </Background>
    )
}

const styles = StyleSheet.create({})
