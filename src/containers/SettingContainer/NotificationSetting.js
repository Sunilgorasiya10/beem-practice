import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView, Text } from 'react-native';
import CText from "../../components/CText";
import StyleConfig from "../../assets/StyleConfig";
import { CHeader } from "../../components/CHeader";
import { notification } from '../../assets/strings';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const DATA = [
    {
        title: notification.location_based,
        data: 'location',
        description: notification.get_tips,
    },
    {
        title: notification.trips,
        data: 'trip',
        description: notification.receive_more_notification,
    },
    {
        title: notification.question_updates,
        data: 'question',
        description: notification.get_notified,
    },
    {
        title: notification.price_drops,
        data: 'price',
        description: notification.dont_miss_a_price_reduction,
    },
];
class NotificationSetting extends Component {

    constructor(props) {
        super(props)
    }

    renderItem = (item, index) => (
        <View key={index} style={styles.itemMainContainer}>
            <View style={styles.itemLeftContainer}>
                <View style={{ flex: 0.8 }}>
                    <CText type={'bold'} style={styles.itemHeader}>{item.title}</CText>
                    <CText type={'regular'} style={[styles.itemHeader, {
                        fontSize: StyleConfig.fontSizeH3_4,
                        marginTop: StyleConfig.countPixelRatio(5)
                    }]}>{item.description}</CText>
                </View>
                <View style={{ flex: 0.1 }}></View>
                <TouchableOpacity style={styles.iconContainer}>

                </TouchableOpacity>
            </View>
        </View>
    )
    render() {
        return (
            <View style={styles.container}>
                <CHeader
                    showLeft
                    headerValue={notification.notifications}
                ></CHeader>
                <ScrollView style={{ paddingHorizontal: StyleConfig.countPixelRatio(20) }}>
                    <CText type={'regular'} style={styles.headerText}>{notification.title}</CText>
                    <View>
                        {DATA.map((item, index) => this.renderItem(item, index))}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default NotificationSetting;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleConfig.COLOR.WHITE_OFF,
    },
    headerText: {
        fontSize: StyleConfig.fontSizeH3,
        paddingVertical: StyleConfig.countPixelRatio(10)
    },
    itemMainContainer: {
        flex: 1,
        marginVertical: StyleConfig.countPixelRatio(14),
    },
    itemLeftContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    itemHeader: {
        fontSize: StyleConfig.fontSizeH2_3,
        color: StyleConfig.COLOR.GREY_DIM
    },
    iconContainer: {
        flex: 0.1,
        alignItems: 'flex-end',
        justifyContent: 'center',
        height: StyleConfig.countPixelRatio(25),
        width: StyleConfig.countPixelRatio(40),
        borderWidth: StyleConfig.countPixelRatio(3),
        borderColor: StyleConfig.COLOR.GREY_DIM,
        borderRadius: StyleConfig.countPixelRatio(5)
    }
})