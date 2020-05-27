import React, { Component } from 'react';
import { View, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity, Text } from 'react-native';
import StyleConfig from "../../assets/StyleConfig";
import { CHeader } from "../../components/CHeader";
import { paymentOption } from "../../assets/strings";
import AppImages from "../../assets/images";
import CText from "../../components/CText";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const PAYMENT_OPTION = [
    {
        name: 'Bank Card',
        details: 'Ending in 1506',
        icon: AppImages.visa,
    },
];
class PaymentOption extends Component {

    AddBankAccount = () => {
        navigation.navigate('CreatePaymentAccount')
    }
    render() {
        return (
            <View style={styles.container}>
                <CHeader
                    showLeft
                    showRight
                    headerValue={paymentOption.payment}
                ></CHeader>
                <ScrollView>
                    <FlatList
                        data={PAYMENT_OPTION}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                onPress={() => alert('pressed')}
                                style={styles.paymentCard}
                            >
                                <Image
                                    style={styles.paymentLogo}
                                    source={item.icon}
                                    resizeMode={'contain'}
                                />
                                <View style={styles.paymentCardText}>
                                    <CText style={styles.paymentText}>{item.name}</CText>
                                    <CText style={styles.paymentDetail}>{item.details}</CText>
                                </View>
                                <TouchableOpacity onPress={() => alert('pressed')}>
                                    <Image
                                        style={styles.editPayment}
                                        source={AppImages.edit}
                                        resizeMode={'contain'}
                                    />
                                </TouchableOpacity>
                            </TouchableOpacity>
                        )}
                    >
                    </FlatList>
                    <TouchableOpacity style={[styles.paymentCard, { alignItems: 'center', justifyContent: 'center' }]}
                        onPress={() => this.props.navigation.navigate('CreatePaymentAccount')}>
                        <MaterialCommunityIcons name={'plus'} color={StyleConfig.COLOR.RED_REDICAL} size={34} />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

export default PaymentOption;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleConfig.COLOR.WHITE_OFF,
        alignItems: 'center',
    },
    paymentCard: {
        height: StyleConfig.responsiveHeight(16),
        width: StyleConfig.responsiveWidth(85),
        backgroundColor: StyleConfig.COLOR.CORNFLOWER_BLUE,
        marginVertical: StyleConfig.countPixelRatio(10),
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    paymentLogo: {
        height: StyleConfig.countPixelRatio(50),
        width: StyleConfig.countPixelRatio(50),
        marginHorizontal: StyleConfig.countPixelRatio(10)
    },
    paymentCardText: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        margin: StyleConfig.countPixelRatio(10)
    },
    paymentText: {
        fontSize: StyleConfig.fontSizeH1,
        color: StyleConfig.COLOR.BLACK
    },
    paymentDetail: {
        fontSize: StyleConfig.fontSizeH3,
        color: StyleConfig.COLOR.GREY_DIM
    },
    editPayment: {
        height: StyleConfig.countPixelRatio(20),
        width: StyleConfig.countPixelRatio(20),
        marginHorizontal: StyleConfig.countPixelRatio(10)
    },
})