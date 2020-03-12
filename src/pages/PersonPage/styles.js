import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { Platform } from 'react-native';

export const ViewBG = styled.View`
    width:100%;
    height: 30%;
    background: #242972;
    padding-top:30px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 120px;
`;

export const Container = styled.View`
    flex:1;
    background: #F3F5F7;
`;

export const ContainerCard = styled.View`
    flex-direction: row;
`;

export const ContainerCardMain = styled.View`
    height: 20%;
`;

export const ContainerProps = styled.View`
    flex-direction: row;
    margin-top:20px;
    width:100%;
    flex-grow:1;
`;

export const Card = styled.View`
    width:100%;
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
    border-radius:10px;
    height: 50px;

`;

export const CardHeaderTwo = styled.View`
    background: #5359B1;
    padding-top:10px;
    border-radius:10px;
    height: 50px;

`;

export const CardHeaderThree = styled.View`
    background: #9DA1DE;
    padding-top:10px;
    border-radius:10px;
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
    height: 425px;
    margin-bottom:30px;
    margin-top:50px;
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
    padding: 18px;

`;

export const TextMain = styled.Text`
    align-items: flex-start;
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
    font-size: 12px;
    padding-left:5px;
    padding-right:5px;
    color:#fff;

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
    padding-top: 10px;
    padding-left: 20px;
    padding-bottom:2px;
    font-size: 20px;
`;

export const TextID = styled.Text `
    font-size: 15px;
    padding-left: 20px;
`;

export const DateCard = styled.Text `
    opacity: 50;
    font-size: 12px;
    padding-top: 18px;
    padding-left: 30px;

`;

export const Divider = styled.View `
    border: 1px solid #E8E9EC;
    margin-left: 20px;
    margin-top:20px;
    margin-right:20px;
    margin-bottom:10px;
`;

export const ViewButton = styled(RectButton) `

`;
 export const CardID = styled.View `
    margin-left:0.5%;
    margin-right:0.5%;
    align-items: center;
    flex-grow: 1;
 `;

 export const H1 = styled.Text `
    font-size: 30px;
    align-items: center;
    textAlign: center;
    color: #fff;
 `;

 export const ImageBG = styled.View `
    background : #242972;
    width:50px;
    height: 50px;
    border-radius: 100px;
    margin-left:10px;
    margin-top:10px;
 `;

 export const ID = styled.Text `
    font-size:10px;
    color: #fff;
    textAlign: center;
    padding: 18px;
 `;

 export const ContainerTop = styled.View `
    padding-top:20px;
    flex-direction:row;

`;

export const ButtonIcon = styled(RectButton) `

`;

export const ViewTop = styled.View`

    background: #242972;
    padding-top:30px;
    padding-left: 20px;
    padding-right: 10px;
    padding-bottom:5px;
`;

export const ButtonIconCalendar = styled(RectButton) `
    margin-left:85%;
`;
