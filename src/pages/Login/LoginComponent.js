import React, { Component } from 'react';
import { Text, Image, CheckBox, StatusBar, ScrollView } from 'react-native';

import { connect } from 'react-redux';

import{ doLogin,getSolicitacoes } from '../../redux/actions/UserActions';


import logo from '../../assets/logo.png';


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

var self = null;

export class LoginComponent extends Component {

    constructor(props) {
        super(props);
        self = this;
    }

    state = {
        username: '',
        password: '',
    }


    componentDidMount(){
        //console.log(this.props.navigation)
    }

    onLogin()
    {
        this.props.doLogin(this.state.username, this.state.password, function(data) {


            self.props.navigation.navigate("Home");
            var obj = {
                qid : 'API_SOLICITACOES:SOLICITACOES',
                conditions: [
                ]
              }
            self.props.getSolicitacoes(obj, self.props.user_data.auth_ticket, function(data) {

            });

            navigation.navigate("Forgotpass")
        });
    }


    render()
    {
        return (
        <ScrollView style={{backgroundColor:'#fff'}}>
        <Container>
            <StatusBar barStyle = "dark-content" backgroundColor="#fff" />
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
                        value={this.state.username}
                        onChangeText={(text) => this.setState({username: text})}
                    />
                    <Input
                        autoCorrect={false}
                        secureTextEntry
                        placeholder="Digite sua Senha"
                        value={this.state.password}
                        onChangeText={(text) => this.setState({password: text})}
                    />
                    <Text>{this.props.errorMessage}</Text>
                    <SubmitButton onPress={() => this.onLogin()}>
                            <TextButton>Entrar</TextButton>
                    </SubmitButton>

                </Form>
            </Container>
            </ScrollView>
            );

    }
}

function mapStateToProps(state) {

    return {
      user_data: state.UserReducer.user_data,
      errorMessage: state.UserReducer.errorMessage,
    }

  }

  export default connect( mapStateToProps, { doLogin, getSolicitacoes } )(LoginComponent) ;
