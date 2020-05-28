import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

//AuthContainer
import SignIn from '../containers/AuthContainer/SignIn';
import SignUp from '../containers/AuthContainer/SignUp';
import Account from '../containers/AuthContainer/Account';
import Splash from '../containers/AuthContainer/Splash';
import PrivacyPolicy from '../containers/AuthContainer/PrivacyPolicy';
import TermsOf from '../containers/AuthContainer/TermsOf';

//DashboardContainer
import CreateNewTour from '../containers/DashboardContainer/CreateNewTour';
import Bookings from '../containers/DashboardContainer/Bookings';
import Dashboard from '../containers/DashboardContainer/Dashboard';

//SettingContainer
import UserProfile from '../containers/SettingContainer/UserProfile';
import AccountSetting from '../containers/SettingContainer/AccountSetting';
import SettingMenu from '../containers/SettingContainer/SettingMenu';
import DisplayLanguage from '../containers/SettingContainer/DisplayLanguage';
import NotificationSetting from '../containers/SettingContainer/NotificationSetting';
import PaymentOption from '../containers/SettingContainer/PaymentOption';
import CreatePaymentAccount from '../containers/SettingContainer/CreatePaymentAccount';

const AuthStack = createStackNavigator({
    // Splash: { screen: Splash },
    // Account: { screen: Account },
    // SignIn: { screen: SignIn },
    // SignUp: { screen: SignUp },
    // CreateNewTour: { screen: CreateNewTour },
    // Bookings: { screen: Bookings },
    // SettingMenu: { screen: SettingMenu },
    // UserProfile: { screen: UserProfile },
    // AccountSetting: { screen: AccountSetting },
    // DisplayLanguage: { screen: DisplayLanguage },
    // NotificationSetting: { screen: NotificationSetting },
    // PaymentOption: { screen: PaymentOption },
    // PrivacyPolicy: { screen: PrivacyPolicy },
    // TermsOf: { screen: TermsOf },
    // CreatePaymentAccount: { screen: CreatePaymentAccount }
    Dashboard: { screen: Dashboard },
}, {
    headerMode: 'none',
})

const AppNavigator = createStackNavigator({
    AuthStack,
}, {
    headerMode: 'none',
})

export default createAppContainer(AppNavigator);
