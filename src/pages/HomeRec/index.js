import React, {Component} from 'react';
import {
  StatusBar,
  ScrollView,
  View,
  RefreshControl,
  Button,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import moment from 'moment';

import {connect} from 'react-redux';

import {AnimatedCircularProgress} from 'react-native-circular-progress';

import {PieChart} from 'react-native-svg-charts';
import {Text} from 'react-native-svg';

import {
  getProcessosGarantia,
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

export class HomeRec extends Component {
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


    this.getProcessosGarantia(date.getMonth() + 1, date.getFullYear() , this.props.departamento , function(
      data,
    ) {
      console.log(data);
    });
  }

  _onPress(index) {
    //const newState = !this.state.toggle;
    this.setState({selectIndex: index});
  }

  getProcessosGarantia(mes, ano, departamento) {
    //this.setState({refreshing: true});
    var obj = {
      qid: 'API_APP:TOTAL_PROCESSO_GARANTIA',
      conditions: [
        {
          filterid: 'ANO',
          values: ano,
        },
        {
          filterid: 'MES',
          values: mes,
        },
        {
          filterid: 'DEPARTAMENTO',
          values: departamento,
        },
      ],
    };
    
    self.props.getProcessosGarantia(
      obj,
      self.props.user_data.auth_ticket,
      function(data) {
        console.log(data);
        this.setState({refreshing: false});
      },
    );
  }


  _onChangeMonth(obj) {
    var date = new Date();

    this.getProcessosGarantia(obj.mes, obj.ano, obj.departamento, function(data) {
      console.log(data);
    });
  }

  render() {
    var total = 0;
    var totalConcluidasGrafico = 0;
    var totalAndamentoGrafico = 0;
    var totalPendentesGrafico = 0;


    var total = parseFloat(total.toFixed(0));
    var conta = 0;
    var conta2 = 0;
    var conta3 = 0;

    console.log(total);

    const garantia = [
      {
        key: 1,
        amount: 196,
        svg: {fill: '#242972'},
      },
      {
        key: 2,
        amount: 5,
        svg: {fill: '#303796'},
      },
      {
        key: 3,
        amount: 3,
        svg: {fill: '#3C45BD'},
      },
      {
        key: 4,
        amount: 1,
        svg: {fill: '#3840B0'},
      },
    ];

    const area = [
      {
        key: 1,
        amount: 12937,
        svg: {fill: '#242972'},
      },
      {
        key: 2,
        amount: 46061,
        svg: {fill: '#3840B0'},
      },
    ];

    const citados = [
      {
        key: 1,
        amount: 3986,
        svg: {fill: '#242972'},
      },
      {
        key: 2,
        amount: 564,
        svg: {fill: '#3840B0'},
      },
    ];

    const Labels = ({slices, height, width}) => {
      return slices.map((slice, index) => {
        const {labelCentroid, pieCentroid, data} = slice;
        return (
          <Text
            key={index}
            x={pieCentroid[0]}
            y={pieCentroid[1]}
            fill={'white'}
            textAnchor={'middle'}
            alignmentBaseline={'middle'}
            fontSize={18}
            stroke={'black'}
            strokeWidth={0.2}>
            {data.amount}
          </Text>
        );
      });
    };
    return (
      <>
        <ViewTop>
          <ContainerTop>
            <ButtonIcon
              onPress={() => this.props.navigation.navigate('SelectPage')}>
              <Icon name="ios-arrow-back" size={35} color="#FFF" />
            </ButtonIcon>
            {/*<ButtonIconCalendar onPress={() => this.props.navigation.navigate('CalendarPage')}><Icon name ="ios-calendar" size={35} color="#FFF" /></ButtonIconCalendar>*/}
          </ContainerTop>
        </ViewTop>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this.getToday()}
            />
          }>
          <StatusBar barStyle="light-content" backgroundColor="#242972" />
          <Container>
            <ViewBG>
              <CardMain>
                <TextMain style={{paddingTop: 20, paddingBottom: 40}}>
                  Processos de Garantia
                </TextMain>
                <PieChart
                  style={{height: 200}}
                  valueAccessor={({item}) => item.amount}
                  data={garantia}
                  spacing={0}
                  outerRadius={'100%'}>
                  <Labels />
                </PieChart>
                <ContainerProps>
                  <ContainerCard style={{backgroundColor: '#242972'}} />
                  <TextID>Em análise</TextID>
                  <ContainerCard style={{backgroundColor: '#303796'}} />
                  <TextID>Imóvel</TextID>
                </ContainerProps>
                <ContainerProps>
                  <ContainerCard style={{backgroundColor: '#3C45BD'}} />
                  <TextID>Semoventes</TextID>
                  <ContainerCard
                    style={{backgroundColor: '#3840B0', marginLeft: 48}}
                  />
                  <TextID>Móvel</TextID>
                </ContainerProps>
              </CardMain>

              <CardMain>
                <TextMain style={{paddingTop: 20, paddingBottom: 40}}>
                  Área
                </TextMain>
                <PieChart
                  style={{height: 200}}
                  valueAccessor={({item}) => item.amount}
                  data={area}
                  spacing={0}
                  outerRadius={'100%'}>
                  <Labels />
                </PieChart>
                <ContainerProps>
                  <ContainerCard style={{backgroundColor: '#242972'}} />
                  <TextID>Banco do brasil Autor Rj e MS</TextID>
                </ContainerProps>
                <ContainerProps>
                  <ContainerCard style={{backgroundColor: '#303796'}} />
                  <TextID>Rec credito BB - SP GO RN CE</TextID>
                </ContainerProps>
              </CardMain>

              <CardMain>
                <TextMain style={{paddingTop: 20, paddingBottom: 40}}>
                  Processos citados
                </TextMain>
                <PieChart
                  style={{height: 200}}
                  valueAccessor={({item}) => item.amount}
                  data={area}
                  spacing={0}
                  outerRadius={'100%'}>
                  <Labels />
                </PieChart>
                <ContainerProps>
                  <ContainerCard style={{backgroundColor: '#242972'}} />
                  <TextID>Sim</TextID>
                  <ContainerCard style={{backgroundColor: '#303796'}} />
                  <TextID>Não</TextID>
                </ContainerProps>
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
    totalSolicitacaoSP: state.UserReducer.totalSolicitacaoSP,
  };
}

export default connect(
  mapStateToProps,
  {
    getProcessosGarantia,
  },
)(HomeRec);
