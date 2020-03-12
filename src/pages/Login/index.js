import React from 'react';
import { Text, Image, CheckBox, StatusBar, navigation } from 'react-native';


import logo from '~/assets/logo.png';


import {
    Container,
    Form,
    Input,
    SubmitButton,
    CheckDivision,
    SubmitCreate,
    TextHeader,
    ImageContent,
    ButtonDivision,
    TextCheck,
    TextButton,
    ForgotPass,
    TextBottom,
    TextStyle,
    ForgotButton,
} from './styles';


export default function Login({ navigation }) {
  return (
    <Container>
    <StatusBar barStyle = "light-content" backgroundColor="#fff" />
        <ImageContent>
            <Image source={logo} />
        </ImageContent>
        <TextHeader>Bem-vindo(a)! Por favor, faça o login na sua conta.</TextHeader>
        <Form>
            <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                placeholder="Digite seu Email"
            />
            <Input
                autoCorrect={false}
                secureTextEntry
                placeholder="Digite sua Senha"
            />
            <CheckDivision>
                <ButtonDivision>
                <CheckBox/>
                    <TextCheck>Lembre-me</TextCheck>
                <ForgotPass>
                    <ForgotButton onPress={() => navigation.navigate('Forgotpass')}>
                        <Text>Esqueci a Senha</Text>
                    </ForgotButton>
                </ForgotPass>

                </ButtonDivision>

            </CheckDivision>
            <ButtonDivision>
                <SubmitButton onPress={() => navigation.navigate('Home')}>
                    <TextButton>Entrar</TextButton>
                </SubmitButton>
                <SubmitCreate onPress={() => navigation.navigate('Forgotpass')}>
                    <Text>Criar Conta</Text>
                </SubmitCreate>
            </ButtonDivision>

        </Form>
        <TextBottom>
            <TextStyle>Termos de uso e Política de privacidade.</TextStyle>
        </TextBottom>
    </Container>
  );
}

