import React, { Component } from 'react';
import { StatusBar, Text, ScrollView, View, RefreshControl  } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import moment from 'moment';

import { connect } from 'react-redux';

import { AnimatedCircularProgress } from 'react-native-circular-progress';

import { getTotal, getSolicitacoesConcluidas,getSolicitacoesAndamento } from '../../redux/actions/UserActions';

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
    ViewTop
} from './styles';


var self = null;

export class SolicitationAnd extends Component {


    constructor(props)
    {
        super(props);
        self = this;
    }

    state ={
        toggle:false,
        refreshing: false,
    }

    componentDidMount(){
        this.getToday();
    }

    getToday()
    {
        var date = new Date()
        this.getTotaisSolicitacoes(date.getMonth() + 1, date.getFullYear(), function(data) {
            console.log(data);
        });
        this.getSolicitacoesConcluidas(date.getMonth() + 1, date.getFullYear(), function(data) {
            console.log(data);
        });
        this.getSolicitacoesAndamento(date.getMonth() + 1, date.getFullYear(), function(data) {
            console.log(data);
        });

    }

    _onPress(){
        const newState = !this.state.toggle;
        this.setState({toggle:newState})
    }

    getTotaisSolicitacoes(mes, ano) {

        //this.setState({refreshing: true});
        var obj = {
            qid : 'APP_SOLICITACOES:STATUS',
            conditions:  [
                {
                  filterid: 'ANO',
                  values: ano,
                },
                {
                    filterid: 'MES',
                    values: mes,
                  }
              ]
          }
        self.props.getTotal(obj, self.props.user_data.auth_ticket, function(data) {
            console.log(data);
            this.setState({refreshing: false});
        });
    }

    getSolicitacoesConcluidas(mes,ano)
    {
            var obj = {
                qid : 'APP_SOLICITACOES:SOLICITACOES',
                conditions: [
                    {
                      filterid: 'ANO',
                      values: ano,
                    },
                    {
                        filterid: 'MES',
                        values: mes,
                    }
                  ]
            }
            self.props.getSolicitacoesConcluidas(obj, self.props.user_data.auth_ticket, function(data) {

            });

    }

    getSolicitacoesAndamento(mes,ano)
    {
            var obj = {
                qid : 'APP_SOLICITACOES:SOLICITACOES',
                conditions: [
                    {
                      filterid: 'ANO',
                      values: ano,
                    },
                    {
                        filterid: 'MES',
                        values: mes,
                    }
                  ]
            }
            self.props.getSolicitacoesAndamento(obj, self.props.user_data.auth_ticket, function(data) {

            });

    }





  render(){

    const {toggle} = this.state;
    const buttonBg = toggle?"#fff":'#242972';
    const textColor = toggle?'black':'white';




    var total = 0;

    if(this.props.totalSolicitacao != 0)
    {
        total = (this.props.totalConcluidos / this.props.totalSolicitacao) * 100;
    }


    console.log(total);
    return (
        <>
        <ViewTop>
            <ContainerTop>
                <ButtonIcon onPress={() => this.props.navigation.navigate('Home')}><Icon name ="ios-arrow-back" size={35} color="#FFF" /></ButtonIcon>
                {/*<ButtonIconCalendar onPress={() => this.props.navigation.navigate('CalendarPage')}><Icon name ="ios-calendar" size={35} color="#FFF" /></ButtonIconCalendar>*/}
            </ContainerTop>
        </ViewTop>
      <ScrollView refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={() => this.getToday()}
          />
        }>
          <StatusBar barStyle = "light-content" backgroundColor="#242972" />
          <Container>

              <ViewBG>
                <TextNumber>{this.props.totalAndamento}</TextNumber>
                <TextCard>Itens em andamento</TextCard>
                  <CardMain>
                    {

                        this.props.solicitacoesConcluidas.map(function(value, index) {


                            if(value.STATUS == 103)
                            {

                                return (
                                    <ViewButton onPress={() => self.props.navigation.navigate('PageID', {
                                        item: value
                                    })}>
                                    <ContainerCard>
                                        <ContainerCardMain>
                                <TextCardInside ellipsizeMode='tail' numberOfLines={1}>{value.TITULO}</TextCardInside>
                                        <TextID ellipsizeMode='tail' numberOfLines={1}>ID {value.ID}</TextID>
                                        </ContainerCardMain>
                                <DateCard ellipsizeMode='tail' numberOfLines={1}>{moment(value.DATA).format('DD/MM/YYYY')}</DateCard>
                                    </ContainerCard>
                                    <Divider />
                                </ViewButton>)
                            }

                        })
                    }
                  </CardMain>
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
    }

  }

  export default connect( mapStateToProps, { getTotal, getSolicitacoesConcluidas,getSolicitacoesAndamento } )(SolicitationAnd);

