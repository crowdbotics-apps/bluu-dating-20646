import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings109008Navigator from '../features/Settings109008/navigator';
import UserProfile109001Navigator from '../features/UserProfile109001/navigator';
import Settings109000Navigator from '../features/Settings109000/navigator';
import Settings108998Navigator from '../features/Settings108998/navigator';
import SignIn2108996Navigator from '../features/SignIn2108996/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings109008: { screen: Settings109008Navigator },
UserProfile109001: { screen: UserProfile109001Navigator },
Settings109000: { screen: Settings109000Navigator },
Settings108998: { screen: Settings108998Navigator },
SignIn2108996: { screen: SignIn2108996Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
