import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

//AuthContainer
import SignIn from '../containers/AuthContainer/SignIn';
import SignUp from '../containers/AuthContainer/SignUp';
import Account from '../containers/AuthContainer/Account';
import Splash from '../containers/AuthContainer/Splash';

//DashboardContainer
import CreateNewTour from '../containers/DashboardContainer/CreateNewTour';

const AuthStack = createStackNavigator({
    Splash: { screen: Splash },
    Account: { screen: Account },
    SignIn: { screen: SignIn },
    SignUp: { screen: SignUp },
    CreateNewTour: { screen: CreateNewTour },
}, {
    // headerMode: 'none',
})

const AppNavigator = createStackNavigator({
    AuthStack,
}, {
    headerMode: 'none',
})

export default createAppContainer(AppNavigator);
