import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const ViewTop = styled.View`
  background: #242972;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 10px;
  padding-bottom: 5px;
  height: 100%;
`;

export const Container = styled.View`
  flex-direction: row;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled(RectButton)`
  width: 40px;
  height: 150px;
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 0px;
  border-radius: 10px;
  background: #fff;
  flex-grow: 1;
  padding:20px
`;
export const ButtonOne = styled(RectButton)`
  width: 40px;
  height: 150px;
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 0px;
  border-radius: 10px;
  background: #fff;
  flex-grow: 1;
  padding:20px
`;

export const Text = styled.Text`
  font-size: 16px;
  justify-content: center;
  align-items: center;
  padding-bottom:30px
`;
