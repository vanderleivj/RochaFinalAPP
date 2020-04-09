import React from 'react';
import {StatusBar} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import IconAnt from 'react-native-vector-icons/AntDesign';

import {Container, ViewTop, Button, Text} from './styles';

export default function SelectPage({navigation}) {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#242972" />
      <ViewTop>
        <Icon name="ios-arrow-back" size={35} color="#FFF" />
        <Container>
          <Button
            onPress={() => navigation.navigate('Home')}
            style={{alignItems: 'center'}}>
            <Text>Solicitações totais</Text>
            <IconAnt name="inbox" size={35} color="#242972" />
          </Button>
          <Button
            onPress={() => navigation.navigate('SpRj')}
            style={{alignItems: 'center'}}>
            <Text>Recuperação de crédito</Text>
            <IconAnt name="areachart" size={35} color="#242972" />
          </Button>
        </Container>
      </ViewTop>
    </>
  );
}
