import styled from 'styled-components/native';
import { RectButton,BaseButton } from 'react-native-gesture-handler';
import { Platform } from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS == 'ios',
    behavior: 'padding',
})`
    flex:1;
    padding: 15px;
    background: #fff;
    padding-top:25%;
`;

export const Form = styled.View`
    flex-direction: column;
    padding-bottom: 20px;


`;

export const ImageContent = styled.View`
    align-items: center;
    padding: 2%;
`;

export const Input = styled.TextInput`
    height: 50px;
    width:100%;
    border-radius:10px;
    padding-left: 15px;
    margin-bottom: 15px;
    border: 1px solid #F4F4F4;

`;

export const SubmitButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: #242972;
    height: 50px;
    width: 100%;
    border-radius:10px;
`;

export const SubmitCreate = styled(BaseButton)`
    justify-content: center;
    align-items: center;

    border: 1px solid #242972;
    height: 50px;
    width: 50%;
    border-radius:10px;
`;

export const CheckDivision = styled.View`
    flex-direction: row;
    padding-top: 10px;
`;

export const ButtonDivision = styled.View`
    flex-direction: row;
    padding-top: 10px;
    padding-right: 10px;
`;

export const TextHeader = styled.Text`
    justify-content:center;
    align-items: center;
    padding-left: 30px;
    padding-bottom: 50px;
    font-size: 14px;
    opacity: 50;
    color:#8C8C8C;
`;

export const TextCheck = styled.Text`
    padding-top: 5px;
`;

export const TextButton = styled.Text`
    color: #fff;
`;

export const ForgotPass = styled.View`
    padding-top: 5px;
    padding-left: 40%;
    color: #242972;
`;

export const TextBottom = styled.View`
    justify-content: center;
    align-items: center;
    font-size: 14px;
    padding-top: 100px;
`;

export const TextStyle = styled.Text`
    font-size:14px;
    color:#8c8c8c;
`;

export const ForgotButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-right: 10px;
`;
