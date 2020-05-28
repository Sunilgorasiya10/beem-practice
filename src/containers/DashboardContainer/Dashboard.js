import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import StyleConfig from "../../assets/StyleConfig";
import CText from "../../components/CText";
import { CHeader } from "../../components/CHeader";
import SelectionView from "../../components/SelectionView";
import { bookings, dashboard, messages } from '../../assets/strings';
import CButton from "../../components/CButton";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const [NOTIFICATIONS, BOOKING_STATISTICS] = [0, 1];
const tabs = [{ key: NOTIFICATIONS, name: 'Notifications' },
{ key: BOOKING_STATISTICS, name: 'Booking Statistics' }];

class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedTab: NOTIFICATIONS,
        }
    }

    onTabChange = (selectedTab) => {
        this.setState({ selectedTab })
    }
    render() {
        return (
            <View style={styles.container}>
                <CHeader
                    IsLeftIcon
                    showRight
                    headerValue={'Dashboard'}
                ></CHeader>
                <SelectionView
                    disabled={false}
                    selected={this.state.selectedTab}
                    contentStyle={styles.tabContentStyle}
                    onSelect={({ key }) => this.onTabChange(key)}
                    items={tabs} />
            </View>
        )
    }
}

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleConfig.COLOR.WHITE_OFF,
        paddingBottom: (StyleConfig.isIphone) ? StyleConfig.countPixelRatio(16) : StyleConfig.countPixelRatio(8),
    },
    tabContentStyle: {
        flex: 1,
        marginHorizontal: 20
    },
})