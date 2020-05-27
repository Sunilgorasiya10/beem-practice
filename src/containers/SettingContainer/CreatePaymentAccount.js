import React, { Component } from 'react';
import { View, StyleSheet, Text, AsyncStorage } from 'react-native';
import StyleConfig from "../../assets/StyleConfig";
import { paymentOption } from "../../assets/strings";
import { CHeader } from "../../components/CHeader";
import AppImages from "../../assets/images";
import CText from "../../components/CText";
import CTextInput from '../../components/CTextInput';
import { reduxForm } from "redux-form";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CButton from "../../components/CButton";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class CreatePaymentAccount extends Component {

    FIELDS_DATA = [
        {
            name: 'name',
            label: 'Nick Name',
            returnKeyType: 'next',
            nextField: 'accountType',
            placeholder: 'Enter Nick Name',
            keyboardType: 'default',
        },
        {
            name: 'accountType',
            label: 'Account Type',
            returnKeyType: 'next',
            placeholder: 'Select Account Type',
            nextField: 'accountNumber',
            keyboardType: 'default',
            rightIcon: () => <MaterialCommunityIcons size={30} color={StyleConfig.COLOR.RED_REDICAL} name={'chevron-down'}
                style={styles.rightIconCenterStyle} />,
        },
        {
            name: 'accountNumber',
            label: 'Account Number',
            returnKeyType: 'next',
            placeholder: 'Enter Account Number',
            nextField: 'routingNumber',
            keyboardType: 'number-pad',
        },
        {
            name: 'routingNumber',
            label: 'Routing Number',
            returnKeyType: 'done',
            placeholder: 'Enter Routing Number',
            keyboardType: 'number-pad',
        },
    ];

    _renderItem = (item, index) => {
        return (
            <View style={styles.inputContainer}>
                <CText type={'medium'} style={styles.label}>{item.label}</CText>
                <CTextInput
                    {...item}
                >
                </CTextInput>
            </View >
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <CHeader
                    showLeft
                    headerValue={paymentOption.add_bank_account}
                ></CHeader>

                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.content}>
                        {this.FIELDS_DATA.map((value, key) => {
                            return this._renderItem(value, key)
                        })}
                    </View>
                    <View style={{ height: StyleConfig.responsiveHeight(18) }} />
                    <CButton
                        onPress={() => alert('pressed')}
                        containerStyle={styles.buttonContainer}>{paymentOption.save}
                    </CButton>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

const validate = values => {
    let errors = {};
    errors.name = !values.name
        ? 'Name is required'
        : (!name_validator.test(values.name)) ? 'Invalid name' : undefined;
    errors.accountType = !values.accountType
        ? 'Account Type is required'
        : undefined;
    errors.accountNumber = !values.accountNumber
        ? 'Account Number is required'
        : undefined;
    errors.routingNumber = !values.routingNumber
        ? 'Routing Number is required'
        : undefined;
    return errors
};

const withForm = reduxForm({
    form: 'createPaymentAccount',
    validate,
});

export default withForm(CreatePaymentAccount);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleConfig.COLOR.WHITE_OFF,
        // alignItems: 'center',
        paddingBottom: StyleConfig.countPixelRatio(8),
    },

    content: {
        padding: StyleConfig.countPixelRatio(20),
    },
    inputContainer: {
        marginBottom: StyleConfig.countPixelRatio(6),
        // width: StyleConfig.responsiveWidth(85),
    },
    label: {
        fontSize: StyleConfig.fontSizeH3,
        color: StyleConfig.COLOR.GREY_DARK,
        marginVertical: StyleConfig.countPixelRatio(4),
        paddingLeft: StyleConfig.countPixelRatio(10)
    },
    buttonContainer: {
        marginVertical: StyleConfig.countPixelRatio(20),
        marginHorizontal: StyleConfig.countPixelRatio(20)
    },
    rightIconCenterStyle: {
        alignSelf: 'center'
    }
})