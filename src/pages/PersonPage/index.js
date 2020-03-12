import React, { Component } from 'react';
import { StatusBar, Text, ScrollView, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


import { getUser } from '../../redux/actions/UserActions';

import moment from 'moment';

import { connect } from 'react-redux';


import {
    Container,
    TextHeader,
    ViewBG,
    Card,
    CardMain,
    TextMain,
    ContainerProps,
    TextCardInside,
    TextID,
    DateCard,
    ContainerCard,
    ContainerCardMain,
    Divider,
    ViewButton,
    CardID,
    H1,
    ImageBG,
    ID,
    ViewTop,
    ContainerTop,
    ButtonIcon,
    ButtonIconCalendar
} from './styles';

var self = null;


export class PageID extends Component {


    constructor(props)
    {
        super(props);
        self = this;
    }

    state = {
        selectedItem: null,
        user: null,
    }

    componentDidMount(){

        var date = new Date()
        this.setState({selectedItem: this.props.navigation.state.params.item});

        //this.getUser(this.props.navigation.state.params.item.ID, function(data) {

        //});
    }

    getUser(solicitacao) {

        //this.setState({refreshing: true});
        var obj = {
            qid : 'APP_SOLICITACOES:SOLICITACAO',
            conditions:  [
                {
                    filterid: 'SOLICITACAO',
                    values: solicitacao,
                  },
              ]
          }
        self.props.getUser(obj, self.props.user_data.auth_ticket, function(data) {
            self.setState({refreshing: false});
            //console.log(data);
        });
    }

    render() {
        return(
            <View>
            <ViewTop>
                  <ContainerTop>
                      <ButtonIcon onPress={() => this.props.navigation.navigate('PageID')}><Icon name ="ios-arrow-back" size={35} color="#FFF" /></ButtonIcon>
                      {/*<ButtonIconCalendar onPress={() => this.props.navigation.navigate('CalendarPage')}><Icon name ="ios-calendar" size={35} color="#FFF" /></ButtonIconCalendar> */}
                  </ContainerTop>
              </ViewTop>
          <ScrollView>
              <StatusBar barStyle = "light-content" backgroundColor="#242972" />
              <Container>
                  <ViewBG>
                      <H1>jose</H1>

                      <ContainerProps>
                          <CardID>
                              <TextHeader>Data de inicio</TextHeader>
                              <TextHeader ellipsizeMode='tail' numberOfLines={1}>{moment(this.state.selectedItem != null ? this.state.selectedItem.DATA_INICIO: '').format('DD/MM/YYYY')}</TextHeader>
                          </CardID>

                          <CardID>
                              <TextHeader>Data prevista</TextHeader>
                              <TextHeader ellipsizeMode='tail' numberOfLines={1}>{moment(this.state.selectedItem != null ?this.state.selectedItem.DATA_FINAL: '').format('DD/MM/YYYY') }</TextHeader>
                          </CardID>

                          <CardID>
                              <TextHeader>Data final</TextHeader>
                              <TextHeader ellipsizeMode='tail' numberOfLines={1}>{moment(this.state.selectedItem != null ?this.state.selectedItem.DATA_PREVISTA: '').format('DD/MM/YYYY') }</TextHeader>
                          </CardID>

                          <CardID>
                              <TextHeader>Horas</TextHeader>
                              <TextHeader ellipsizeMode='tail' numberOfLines={1}>{moment(this.state.selectedItem != null ?this.state.selectedItem.HORAS: '').format('hh:mm:ss')}</TextHeader>
                          </CardID>
                      </ContainerProps>
                      <CardMain>
                          <TextMain>Detalhe da tarefa</TextMain>
                          <Text>
                          {(this.state.selectedItem != null ? this.state.selectedItem.TITULO: '')}
                          </Text>
                          <Text>
                          {(this.state.selectedItem != null ? this.state.selectedItem.DETALHE: '')}
                          </Text>
                      </CardMain>
                  </ViewBG>

              </Container>
          </ScrollView>
          </View>
        )
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
      user: state.UserReducer.user,
    }

  }

  export default connect( mapStateToProps, { getUser} )(PageID);

