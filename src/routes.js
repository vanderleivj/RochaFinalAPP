import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoginComponent from './pages/Login/LoginComponent';
import Home from './pages/Home';
import PageID from './pages/PageID';
import CalendarPage from './pages/CalendarPage';
import SolicitationConc from './pages/SolicitationConc';
import PersonPage from './pages/PersonPage';
import SolicitationAnd from './pages/SolicitationAnd';
import SolicitationPend from './pages/SolicitationPend';
import SelectPage from './pages/SelectPage';
import SpRj from './pages/SelectPage/SpRj';
import HomeRec from './pages/HomeRec';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login: {
        screen: LoginComponent,
        navigationOptions: {
          headerShown: false,
        },
      },
      Home: {
        screen: Home,
        navigationOptions: {
          headerShown: false,
        },
      },
      PageID: {
        screen: PageID,
        navigationOptions: {
          headerShown: false,
        },
      },
      CalendarPage: {
        screen: CalendarPage,
        navigationOptions: {
          headerShown: false,
        },
      },
      SolicitationConc: {
        screen: SolicitationConc,
        navigationOptions: {
          headerShown: false,
        },
      },
      SolicitationAnd: {
        screen: SolicitationAnd,
        navigationOptions: {
          headerShown: false,
        },
      },
      SolicitationPend: {
        screen: SolicitationPend,
        navigationOptions: {
          headerShown: false,
        },
      },
      PersonPage: {
        screen: PersonPage,
        navigationOptions: {
          headerShown: false,
        },
      },
      SelectPage: {
        screen: SelectPage,
        navigationOptions: {
          headerShown: false,
        },
      },
      SpRj: {
        screen: SpRj,
        navigationOptions: {
          headerShown: false,
        },
      },
      HomeRec: {
        screen: HomeRec,
        navigationOptions: {
          headerShown: false,
        },
      },
    },
    {
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerBackTitleVisible: false,
      },
      initialRouteName: 'Login',
    },
  ),
);

export default Routes;
