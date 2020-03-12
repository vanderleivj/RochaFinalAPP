import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Platform } from 'react-native';

export const ViewBG = styled.View`
    width:100%;
    height: 50%;
    background: #242972;
    padding-top:10px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 100px;;
`;

export const Container = styled.View`
    flex:1;
    background: #F3F5F7;
`;

export const ContainerTop = styled.View `
    flex-direction:row;
    padding-top:18px;

`;

export const ButtonIcon = styled(RectButton) `

`;

export const ButtonIconCalendar = styled(RectButton) `
    margin-left:85%;
`;

export const ContainerCard = styled.View`
    flex-direction: row;

`;

export const ContainerCardMain = styled.View`

`;

export const ContainerProps = styled.View`
    flex-direction: row;
    margin-top:20px;
`;

export const Card = styled.View`
    width:100%;
    height: 425px;
    margin-bottom:20px;
    border-radius: 10px;
    background: #FFF;
    shadowColor: #000;
    shadowOffset: {
        width: 0;
        height: 1;
    };
    shadowOpacity: 0.22;
    shadowRadius: 2.22;
    elevation: 3;

`;

export const CardHeader = styled.View`
    background: #242972;
    padding-top:10px;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    height: 50px;

`;

export const CardHeaderTwo = styled.View`
    background: #5359B1;
    padding-top:10px;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    height: 50px;

`;

export const CardHeaderThree = styled.View`
    background: #9DA1DE;
    padding-top:10px;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    height: 50px;

`;

export const CardOne = styled(RectButton) `
    margin-left: 5px;
    margin-right: 5px;
    width:75px;
    height: 75px;
    border: 2px solid #242972;
    padding-top:10px;
    border-radius:10px;


`;


export const CardMain = styled.View`
    width:100%;
    margin-bottom:30px;
    margin-top:30px;
    border-radius: 10px;
    background: #fff;
    shadowColor: #000;
    shadowOffset: {
        width: 0;
        height: 1;
    };
    shadowOpacity: 0.22;
    shadowRadius: 2.22;
    elevation: 3;
    padding-left:18px;
    padding-right:18px;
    padding-bottom:18px;

`;

export const TextMain = styled.Text`
    align-items: flex-start;
    padding-bottom:30px
    font-size: 18px;
    opacity: 50;
    color:#000;
`;

export const TextCard = styled.Text`
    textAlign: center;
    font-size: 27px;
    color:#fff;
`;

export const TextHeader = styled.Text`
    justify-content:center;
    align-items: center;
    textAlign: center;
    font-size: 14px;
    opacity: 50;
    color:#8C8C8C;
`;

export const TextNumber = styled.Text`
    justify-content:center;
    align-items: center;
    textAlign: center;
    font-size: 78px;
    color:#FFF;
`;

export const TextCardB = styled.Text `
    justify-content:center;
    align-items: center;
    textAlign: center;
    font-size: 9px;
    color:#4D4F5C;
`;

export const TextCardInside = styled.Text `
    width: 200px;
    padding-top: 10px;
    padding-left: 10px;
    padding-bottom:2px;
    font-size:16;
`;

export const TextID = styled.Text `
    font-size: 15px;
    padding-left: 10px;
`;

export const DateCard = styled.Text `
    opacity: 50;
    font-size: 12px;
    padding-top: 15px;
    textAlign:right;
    padding-left:5%;
    margin-right:5%;
    flex-grow: 1;

`;

export const Divider = styled.View `
    border: 1px solid #E8E9EC;
    margin-top:10px;
`;

export const ViewButton = styled(RectButton) `

`;

export const TextAll = styled.Text `
    font-size: 12px;
    margin-top:40px;
    color: #3B86FF;
    textAlign: center;
`;

export const TextDate = styled.Text `
    font-size: 26px;
    margin-top:40px;
    color: #FFF;
    textAlign: center;
`;

export const ViewTop = styled.View`

    background: #242972;
    padding-top:20px;
    padding-left: 20px;
    padding-right: 10px;
    padding-bottom: 5px;
`;
