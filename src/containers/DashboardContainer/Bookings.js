import React, { Component } from 'react';
import { Text, View, StyleSheet, ImagePickerIOS } from 'react-native';
import CText from '../../components/CText';
import moment from 'moment';
import { bookings } from '../../assets/strings'
import StyleConfig from '../../assets/StyleConfig';
import { CHeader } from '../../components/CHeader';
import SelectionView from '../../components/SelectionView';
import { Calendar } from 'react-native-calendars';

const [INPROGRESS_UPCOMING, PREVIOUS_CANCELLED] = [0, 1];
const tabs = [{ key: INPROGRESS_UPCOMING, name: bookings.inProgress_upcoming }, { key: PREVIOUS_CANCELLED, name: bookings.previous_cancelled }]
class Bookings extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: INPROGRESS_UPCOMING,
            // tabs: tabs,
        }
    }

    onTabChange = async (tab) => {
        await this.setState({ selectedTab: tab });
    }
    render() {
        const { selectedTab } = this.state;
        return (
            <View style={styles.container}>
                <CHeader
                    showLeft
                    showRight
                    headerValue={bookings.bookings}
                >
                </CHeader>
                <View style={{ paddingHorizontal: StyleConfig.countPixelRatio(20) }}>
                    <SelectionView
                        selected={selectedTab}
                        // style={styles.selectView}
                        contentStyle={styles.tabContentStyle}
                        onSelect={({ key }) => this.onTabChange(key)}
                        items={tabs}>
                    </SelectionView>
                    {(selectedTab === INPROGRESS_UPCOMING) ?
                        <View style={{ marginTop: StyleConfig.countPixelRatio(2) }}>
                            <CText type={'bold'} style={styles.txtStyle}>{bookings.upcoming_booking}</CText>
                            <Calendar
                                theme={{
                                    todayTextColor: StyleConfig.COLOR.RED_REDICAL,
                                }}>

                            </Calendar>
                            <View style={{ flexDirection: 'row' }}>
                                <CText type={'bold'} style={styles.txtStyle}>{bookings.upcoming_for}</CText>
                                <CText type={'bold'} style={styles.txtStyle}>{moment().format('MM/DD/YYYY')}</CText>
                            </View>
                        </View>
                        :
                        (selectedTab === PREVIOUS_CANCELLED) ?
                            <View style={{ marginTop: StyleConfig.countPixelRatio(18) }}>
                                <Calendar
                                    theme={{
                                        todayTextColor: StyleConfig.COLOR.RED_REDICAL,
                                    }}>
                                </Calendar>
                                <View style={{ flexDirection: 'row' }}>
                                    <CText type={'bold'} style={styles.txtStyle}>{bookings.booking_history_for}</CText>
                                    <CText type={'bold'} style={styles.txtStyle}>{moment().format('MM/DD/YYYY')}</CText>
                                </View>
                            </View>
                            : null

                    }
                </View>
            </View >
        )
    }
}

export default Bookings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleConfig.COLOR.WHITE_OFF
    },
    tabContentStyle: {
        width: StyleConfig.responsiveWidth(90)
    },
    headerTitle: {
        fontSize: StyleConfig.fontSizeH3,
        marginVertical: StyleConfig.countPixelRatio(8)
    },
    txtStyle: {
        marginVertical: StyleConfig.countPixelRatio(15),
        fontSize: StyleConfig.fontSizeH2_3,
        color: StyleConfig.COLOR.GREY_DARK

    }
})