import styled from 'styled-components/native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { Platform } from 'react-native';
import Button from 'react-native';

export const ViewBG = styled.View`
    width:100%;
    height: 2%;
    background: #242972;
    padding-top:30px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 50px;
`;

export const Container = styled.View`
    flex:1;
    background: #F3F5F7;
`;

export const ContainerTop = styled.View `
    flex-direction:row;
    padding-top:28px;

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
    margin-left:8%;
    align-content: center;
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

    margin-right: 1%;
    width:22%;
    height: 80px;
    border: 2px solid #242972;
    border-radius: 10px;
    background: #EDECFE;

`;


export const CardMain = styled.View`
    width:100%;
    height: 425px;
    margin-bottom:30px;
    margin-top:0px;
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
    padding-top:2.5%;
    flex-grow: 1;


`;

export const TextMain = styled.Text`
    align-items: flex-start;
    margin-left:8%;
    padding-bottom:30px
    font-size: 18px;
    opacity: 50;
    color:#000;
`;

export const TextCard = styled.Text`
    align-items: flex-start;
    padding-left: 20px;
    font-size: 22px;
    opacity: 50;
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
    font-size: 28px;
    color:#4D4F5C;
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
    padding-left: 20px;
    padding-bottom:2px;
    font-size:16;
`;

export const TextID = styled.Text `
    font-size: 15px;
    padding-left: 20px;
`;

export const DateCard = styled.Text `
    opacity: 50;
    font-size: 12px;
    padding-top: 15px;
    textAlign:right;
    padding-left:10%;
    padding-right:5%;
    flex-grow: 1;

`;

export const Divider = styled.View `
    border: 1px solid #E8E9EC;
    margin-left: 20px;
    margin-top:10px;
    margin-right:10px;
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
    font-size: 32px;
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

export const ContainerCarousel = styled.View `
    align-items: center;
    padding-right: 20px;
`;

export const View = styled.View `
    padding-left: 10px;
    padding-right: 90px;
    padding-top: 20px;
    background: #242972;
    align-items: center;
`;

export const CarrouselStyle = styled.View `
    align-items: center;
    background: #242972;
    padding-top:20px;
    padding-bottom:20px;
`;

export const CarrouselText = styled.Text `
    padding-right:10px;
    textAlign: center;
    font-size: 24px;
    color: #FFF;
`;