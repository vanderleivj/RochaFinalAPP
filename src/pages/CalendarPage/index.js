import React from 'react';
import { StatusBar, ScrollView } from 'react-native';
import Calendar from '../../components/Calendar';

import Icon from 'react-native-vector-icons/Ionicons'

import {
    Container,
    ViewBG,
    CardMain,
    TextMain,
    TextCardInside,
    TextID,
    DateCard,
    ContainerCard,
    ContainerCardMain,
    Divider,
    ViewButton,
    ContainerTop,
    ButtonIcon,
    ViewTop
} from './styles';



export default function CalendarPage({ navigation }) {

    return (
        <>
        <ViewTop>
            <ContainerTop>
                <ButtonIcon onPress={() =>navigation.navigate('Home')}><Icon name ="ios-arrow-back" size={35} color="#FFF" /></ButtonIcon>
            </ContainerTop>
        </ViewTop>
        <ScrollView style={{backgroundColor:'#242972'}}>
            <StatusBar barStyle = "light-content" backgroundColor="#242972" />
            <Container>
                <ViewBG>
                    <Calendar />
                    <CardMain>
                            <TextMain>Progresso de solicitações</TextMain>

                            <ContainerCard>
                                <ContainerCardMain>
                                <TextCardInside>Alterações Gerador</TextCardInside>
                                <TextID>ID: 336</TextID>
                                </ContainerCardMain>
                                <DateCard>20/05/2019</DateCard>
                            </ContainerCard>
                            <Divider />
                    </CardMain>

                </ViewBG>

            </Container>
        </ScrollView>
        </>
    );
  }
  function mapStateToProps(state) {

    return {
        calendarMarked : state.UserReducer.calendarMarked,

    }

  }
