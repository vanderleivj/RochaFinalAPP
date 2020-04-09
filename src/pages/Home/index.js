import React, {Component} from 'react';
import {
  StatusBar,
  Text,
  ScrollView,
  View,
  RefreshControl,
  Button,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import moment from 'moment';

import Carrousel from './Carrousel';

import {connect} from 'react-redux';

import {AnimatedCircularProgress} from 'react-native-circular-progress';

import {
  getTotal,
  getSolicitacoesConcluidas,
  getSolicitacoesAndamento,
} from '../../redux/actions/UserActions';

//import Carousel from './Carrousel';

import {
  Container,
  TextHeader,
  ViewBG,
  Card,
  CardHeader,
  TextCard,
  CardMain,
  TextMain,
  CardOne,
  ContainerProps,
  TextNumber,
  TextCardB,
  CardHeaderTwo,
  CardHeaderThree,
  TextCardInside,
  TextID,
  DateCard,
  ContainerCard,
  ContainerCardMain,
  Divider,
  ViewButton,
  TextAll,
  TextDate,
  ContainerTop,
  ButtonIcon,
  ButtonIconCalendar,
  ViewTop,
  ContainerCarousel,
} from './styles';

var self = null;
const date = moment();

console.log(date);

export class Home extends Component {
  constructor(props) {
    super(props);
    self = this;
  }

  state = {
    refreshing: false,
  };

  componentDidMount() {
    this.getToday();
  }

  getToday() {
    var date = new Date();
    this.getTotaisSolicitacoes(
      date.getMonth() + 1,
      date.getFullYear(),
      function(data) {
        console.log(data);
      },
    );
    this.getSolicitacoesConcluidas(
      date.getMonth() + 1,
      date.getFullYear(),
      function(data) {
        console.log(data);
      },
    );
    this.getSolicitacoesAndamento(
      date.getMonth() + 1,
      date.getFullYear(),
      function(data) {
        console.log(data);
      },
    );
  }

  _onPress(index) {
    //const newState = !this.state.toggle;
    this.setState({selectIndex: index});
  }

  getTotaisSolicitacoes(mes, ano) {
    //this.setState({refreshing: true});
    var obj = {
      qid: 'APP_SOLICITACOES:STATUS',
      conditions: [
        {
          filterid: 'ANO',
          values: ano,
        },
        {
          filterid: 'MES',
          values: mes,
        },
      ],
    };
    self.props.getTotal(obj, self.props.user_data.auth_ticket, function(data) {
      console.log(data);
      this.setState({refreshing: false});
    });
  }

  getSolicitacoesConcluidas(mes, ano) {
    var obj = {
      qid: 'APP_SOLICITACOES:SOLICITACOES',
      conditions: [
        {
          filterid: 'ANO',
          values: ano,
        },
        {
          filterid: 'MES',
          values: mes,
        },
      ],
    };
    self.props.getSolicitacoesConcluidas(
      obj,
      self.props.user_data.auth_ticket,
      function(data) {},
    );
  }

  getSolicitacoesAndamento(mes, ano) {
    var obj = {
      qid: 'APP_SOLICITACOES:SOLICITACOES',
      conditions: [
        {
          filterid: 'ANO',
          values: ano,
        },
        {
          filterid: 'MES',
          values: mes,
        },
      ],
    };
    self.props.getSolicitacoesAndamento(
      obj,
      self.props.user_data.auth_ticket,
      function(data) {},
    );
  }

  _onChangeMonth(obj) {
    var date = new Date();
    this.getTotaisSolicitacoes(obj.mes, obj.ano, function(data) {
      console.log(data);
    });
    this.getSolicitacoesConcluidas(obj.mes, obj.ano, function(data) {
      console.log(data);
    });
    this.getSolicitacoesAndamento(obj.mes, obj.ano, function(data) {
      console.log(data);
    });
  }

  render() {
    var total = 0;
    var totalConcluidasGrafico = 0;
    var totalAndamentoGrafico = 0;
    var totalPendentesGrafico = 0;

    if (this.props.totalSolicitacao != 0) {
      total = (this.props.totalConcluidos / this.props.totalSolicitacao) * 100;
      totalConcluidasGrafico =
        (this.props.totalAndamento / this.props.totalSolicitacao) * 100;
      totalAndamentoGrafico =
        (this.props.totalAndamento / this.props.totalSolicitacao) * 100;
      totalPendentesGrafico =
        ((this.props.totalSolicitacao - this.props.totalConcluidos) /
          this.props.totalSolicitacao) *
        100;
    }

    var total = parseFloat(total.toFixed(0));
    var conta = 0;
    var conta2 = 0;
    var conta3 = 0;

    console.log(total);
    return (
      <>
        <ViewTop>
          <ContainerTop>
            <ButtonIcon onPress={() => this.props.navigation.navigate('SelectPage')}>
              <Icon name="ios-arrow-back" size={35} color="#FFF" />
            </ButtonIcon>
            {/*<ButtonIconCalendar onPress={() => this.props.navigation.navigate('CalendarPage')}><Icon name ="ios-calendar" size={35} color="#FFF" /></ButtonIconCalendar>*/}
          </ContainerTop>
          <Carrousel
            color={'red'}
            onChangeMonth={obj => this._onChangeMonth(obj)}
          />
        </ViewTop>
        <ScrollView //refreshControl={
        //<RefreshControl
        // refreshing={this.state.refreshing}
        // onRefresh={() => this.getToday()}
        ///>
        //}>
        >
          <StatusBar barStyle="light-content" backgroundColor="#242972" />

          <Container>
            <ViewBG>
              <CardMain>
                <TextMain>Progresso de solicitações</TextMain>
                <View style={{alignItems: 'center'}}>
                  <AnimatedCircularProgress
                    size={200}
                    width={10}
                    fill={total}
                    tintColor="#242972"
                    onAnimationComplete={() =>
                      console.log('onAnimationComplete')
                    }
                    backgroundColor="#9B9B9B">
                    {() => (
                      <View style={{alignItems: 'center'}}>
                        <Text
                          style={{
                            fontSize: 28,
                            fontWeight: 'bold',
                            color: '#242972',
                            allowFontScaling: false,
                          }}>
                          {total} %
                        </Text>
                        <Text
                          style={{
                            fontSize: 20,
                            color: '#959595',
                            textAlign: 'center',
                          }}>
                          Concluidas
                        </Text>
                      </View>
                    )}
                  </AnimatedCircularProgress>
                </View>

                <ContainerProps>
                  <CardOne
                    onPress={() => this._onPress(0)}
                    style={{
                      backgroundColor:
                        this.state.selectIndex == 0 ? '#9B9B9B' : '#FBFBFB',
                    }}>
                    <TextNumber
                      style={{
                        color: this.state.selectIndex == 0 ? '#FFF' : '#000',
                      }}>
                      {this.props.totalSolicitacao}
                    </TextNumber>

                    <TextCardB
                      style={{
                        color: this.state.selectIndex == 0 ? '#FFF' : '#000',
                      }}>
                      Solicitações totais
                    </TextCardB>
                  </CardOne>

                  <CardOne
                    onPress={() => this._onPress(1)}
                    style={{
                      backgroundColor:
                        this.state.selectIndex == 1 ? '#242972' : '#FBFBFB',
                    }}>
                    <TextNumber
                      style={{
                        color: this.state.selectIndex == 1 ? '#FFF' : '#000',
                      }}>
                      {this.props.totalConcluidos}
                    </TextNumber>
                    <TextCardB
                      style={{
                        color: this.state.selectIndex == 1 ? '#FFF' : '#000',
                      }}>
                      Solicitações concluídas
                    </TextCardB>
                  </CardOne>

                  <CardOne
                    onPress={() => this._onPress(2)}
                    style={{
                      backgroundColor:
                        this.state.selectIndex == 2 ? '#5359B1' : '#FBFBFB',
                    }}>
                    <TextNumber
                      style={{
                        color: this.state.selectIndex == 2 ? '#FFF' : '#000',
                      }}>
                      {this.props.totalAndamento}
                    </TextNumber>
                    <TextCardB
                      style={{
                        color: this.state.selectIndex == 2 ? '#FFF' : '#000',
                      }}>
                      Solicitações em andamento
                    </TextCardB>
                  </CardOne>

                  <CardOne
                    onPress={() => this._onPress(3)}
                    style={{
                      backgroundColor:
                        this.state.selectIndex == 3 ? '#9DA1DE' : '#FBFBFB',
                    }}>
                    <TextNumber
                      style={{
                        color: this.state.selectIndex == 3 ? '#FFF' : '#000',
                      }}>
                      {this.props.totalSolicitacao - this.props.totalConcluidos}
                    </TextNumber>
                    <TextCardB
                      style={{
                        color: this.state.selectIndex == 3 ? '#FFF' : '#000',
                      }}>
                      Solicitações pendentes
                    </TextCardB>
                  </CardOne>
                </ContainerProps>
              </CardMain>
              <View>
                {!!(
                  this.state.selectIndex == 1 || this.state.selectIndex == 0
                ) && (
                  <Card>
                    <CardHeader>
                      <TextCard>Solicitações concluídas </TextCard>
                    </CardHeader>
                    {this.props.solicitacoesConcluidas.map(function(
                      value,
                      index,
                    ) {
                      if (value.STATUS == 102 && conta < 4) {
                        conta++;

                        return (
                          <ViewButton
                            onPress={() =>
                              self.props.navigation.navigate('PageID', {
                                item: value,
                              })
                            }>
                            <ContainerCard>
                              <ContainerCardMain>
                                <TextCardInside
                                  ellipsizeMode="tail"
                                  numberOfLines={1}>
                                  {value.TITULO}
                                </TextCardInside>
                                <TextID ellipsizeMode="tail" numberOfLines={1}>
                                  ID: {value.ID}
                                </TextID>
                              </ContainerCardMain>
                              <DateCard ellipsizeMode="tail" numberOfLines={1}>
                                {moment(value.DATA).format('DD/MM/YYYY')}
                              </DateCard>
                            </ContainerCard>
                            <Divider />
                          </ViewButton>
                        );
                      }
                    })}
                    <ViewButton
                      onPress={() =>
                        this.props.navigation.navigate('SolicitationConc')
                      }>
                      <TextAll>
                        Visualizar todas as solicitações concluidas
                      </TextAll>
                    </ViewButton>
                  </Card>
                )}

                {!!(
                  this.state.selectIndex == 2 || this.state.selectIndex == 0
                ) && (
                  <Card>
                    <CardHeaderTwo>
                      <TextCard>Solicitações em andamento</TextCard>
                    </CardHeaderTwo>
                    {this.props.solicitacoesConcluidas.map(function(
                      value,
                      index,
                    ) {
                      if (value.STATUS == 103 && conta3 < 4) {
                        conta3++;

                        return (
                          <ViewButton
                            onPress={() =>
                              self.props.navigation.navigate('PageID', {
                                item: value,
                              })
                            }>
                            <ContainerCard>
                              <ContainerCardMain>
                                <TextCardInside
                                  ellipsizeMode="tail"
                                  numberOfLines={1}>
                                  {value.TITULO}
                                </TextCardInside>
                                <TextID ellipsizeMode="tail" numberOfLines={1}>
                                  ID: {value.ID}
                                </TextID>
                              </ContainerCardMain>
                              <DateCard ellipsizeMode="tail" numberOfLines={1}>
                                {moment(value.DATA).format('DD/MM/YYYY')}
                              </DateCard>
                            </ContainerCard>
                            <Divider />
                          </ViewButton>
                        );
                      }
                    })}
                    <ViewButton
                      onPress={() =>
                        this.props.navigation.navigate('SolicitationAnd')
                      }>
                      <TextAll>
                        Visualizar todas as solicitações em andamento
                      </TextAll>
                    </ViewButton>
                  </Card>
                )}

                {!!(
                  this.state.selectIndex == 3 || this.state.selectIndex == 0
                ) && (
                  <Card>
                    <CardHeaderThree>
                      <TextCard>Solicitações pendentes</TextCard>
                    </CardHeaderThree>
                    {this.props.solicitacoesConcluidas.map(function(
                      value,
                      index,
                    ) {
                      if (
                        (value.STATUS == 100 ||
                          value.STATUS == 101 ||
                          value.STATUS == 103 ||
                          value.STATUS == 104) &&
                        conta2 < 4
                      ) {
                        conta2++;
                        return (
                          <ViewButton
                            onPress={() =>
                              self.props.navigation.navigate('PageID', {
                                item: value,
                              })
                            }>
                            <ContainerCard>
                              <ContainerCardMain>
                                <TextCardInside
                                  ellipsizeMode="tail"
                                  numberOfLines={1}>
                                  {value.TITULO}
                                </TextCardInside>
                                <TextID ellipsizeMode="tail" numberOfLines={1}>
                                  ID: {value.ID}
                                </TextID>
                              </ContainerCardMain>
                              <DateCard ellipsizeMode="tail" numberOfLines={1}>
                                {moment(value.DATA).format('DD/MM/YYYY')}
                              </DateCard>
                            </ContainerCard>
                            <Divider />
                          </ViewButton>
                        );
                      }
                    })}
                    <ViewButton
                      onPress={() =>
                        this.props.navigation.navigate('SolicitationPend')
                      }>
                      <TextAll>
                        Visualizar todas as solicitações pendentes
                      </TextAll>
                    </ViewButton>
                  </Card>
                )}
              </View>
            </ViewBG>
          </Container>
        </ScrollView>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    user_data: state.UserReducer.user_data,
    listaSolicitacoes: state.UserReducer.listaSolicitacoes,
    totalSolicitacao: state.UserReducer.totalSolicitacao,
    totalConcluidos: state.UserReducer.totalConcluidos,
    totalAndamento: state.UserReducer.totalAndamento,
    solicitacoesConcluidas: state.UserReducer.solicitacoesConcluidas,
    solicitacoesAndamento: state.UserReducer.solicitacoesAndamento,
  };
}

export default connect(
  mapStateToProps,
  {getTotal, getSolicitacoesConcluidas, getSolicitacoesAndamento},
)(Home);
