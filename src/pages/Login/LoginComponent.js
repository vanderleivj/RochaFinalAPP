import React, {Component} from 'react';
import {Text, Image, CheckBox, StatusBar, ScrollView} from 'react-native';

import {connect} from 'react-redux';

import {doLogin, getSolicitacoes} from '../../redux/actions/UserActions';

import logo from '../../assets/logo.png';

import AsyncStorage from '@react-native-community/async-storage';

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
  };

  async componentDidMount() {
    const username = await AsyncStorage.getItem('username');
    if (username) {
      this.setState({username: JSON.parse(username)});
    }

    const password = await AsyncStorage.getItem('password');
    if (password) {
      this.setState({password: JSON.parse(password)});
    }
  }

  componentDidUpdate(_ , prevState) {
    const {username} = this.state;
    const {password} = this.state;

    if (prevState.username !== username) {
      AsyncStorage.setItem('username', JSON.stringify(username));
    }
    if (prevState.password !== password) {
      AsyncStorage.setItem('password', JSON.stringify(password));
    }
  }

  onLogin() {
    this.props.doLogin(this.state.username, this.state.password, function(
      data,
    ) {
      self.props.navigation.navigate('SelectPage');
      var obj = {
        qid: 'API_SOLICITACOES:SOLICITACOES',
        conditions: [],
      };
      self.props.getSolicitacoes(
        obj,
        self.props.user_data.auth_ticket,
        function(data) {},
      );

      navigation.navigate('Forgotpass');
    });
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: '#fff'}}>
        <Container>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <ImageContent>
            <Image source={logo} />
          </ImageContent>
          <TextHeader>
            Bem-vindo(a)! Por favor, faça o login na sua conta.
          </TextHeader>
          <Form>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Digite seu Email"
              value={this.state.username}
              onChangeText={text => this.setState({username: text})}
            />
            <Input
              autoCorrect={false}
              secureTextEntry
              placeholder="Digite sua Senha"
              value={this.state.password}
              onChangeText={text => this.setState({password: text})}
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
  };
}

export default connect(
  mapStateToProps,
  {doLogin, getSolicitacoes},
)(LoginComponent);
