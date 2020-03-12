import React, { Component } from 'react';

import {Calendar, CalendarList, Agenda, Text} from 'react-native-calendars';
import { View } from 'react-native';
import { connect } from 'react-redux';
import {LocaleConfig} from 'react-native-calendars';


LocaleConfig.locales['br'] = {
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan.','Fev.','Mar','Abr','Mai','Jun','Jul.','Ago','Set.','Out.','Nov.','Dec.'],
    dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'],
    dayNamesShort: ['D','S','T','Q','Q','S','S'],

  };
  LocaleConfig.defaultLocale = 'br';



  export class Home extends Component {


    constructor(props)
    {
        super(props);
    }

    state ={
        refreshing: false,
    }




  render(){


    return (
        <Calendar
        markingType={'custom'}
        markedDates={this.props.calendarMarked}
  style={{
    borderColor: 'gray',
    height: 330
  }}
  // Specify theme properties to override specific styles for calendar parts. Default = {}
  theme={{
    backgroundColor: '#242972',
    calendarBackground: '#242972',
    textSectionTitleColor: '#b6c1cd',
    selectedDayBackgroundColor: '#00adf5',
    selectedDayTextColor: '#ffffff',
    todayTextColor: '#00adf5',
    dayTextColor: '#ffffff',
    textDisabledColor: '#2d4150',
    dotColor: '#00adf5',
    selectedDotColor: '#ffffff',
    arrowColor: '#FFF',
    disabledArrowColor: '#d9e1e8',
    monthTextColor: '#fff',
    indicatorColor: 'blue',
    textDayFontFamily: 'monospace',
    textMonthFontFamily: 'monospace',
    textDayHeaderFontFamily: 'monospace',
    textDayFontWeight: '100',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 20,
    textDayHeaderFontSize: 16
  }}

  />

    );
  }

}


function mapStateToProps(state) {

    return {
        solicitacoesConcluidas: state.UserReducer.solicitacoesConcluidas,
        gerenteAgenda : state.UserReducer.gerenteAgenda,
        gerenteMarked : state.UserReducer.gerenteMarked,
        calendarMarked : state.UserReducer.calendarMarked,

    }

  }

  export default connect( mapStateToProps, {  } )(Home);
