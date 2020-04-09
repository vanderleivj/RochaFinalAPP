import React from 'react';
import {StatusBar} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import IconAnt from 'react-native-vector-icons/AntDesign';

import {Container, ViewTop, Button, Text, ButtonOne} from './styles';

export default function SelectPage({navigation}) {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#242972" />
      <ViewTop>
        <Icon name="ios-arrow-back" size={35} color="#FFF" />
        <Container>
          <Button
            onPress={() => navigation.navigate('HomeRec')}
            style={{alignItems: 'center'}}>
            <Text style={{fontSize:26}}>São Paulo</Text>
          </Button>
        </Container>
        <Container>
          <ButtonOne
            onPress={() => navigation.navigate('Home')}
            style={{alignItems: 'center'}}>
            <Text style={{fontSize:26}}>Rio de Janeiro</Text>
          </ButtonOne>
        </Container>
      </ViewTop>
    </>
  );
}
