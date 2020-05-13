import React, { Component } from 'react';
import { View, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import StyleConfig from "../../assets/StyleConfig";
import { CHeader } from "../../components/CHeader";
import AppImages from "../../assets/images";
import CText from "../../components/CText";
import CTextInput from '../../components/CTextInput';
import { reduxForm } from 'redux-form'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CButton from "../../components/CButton";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { email_validator, address_validator, password_validator } from "../../common/global";

import Ionicons from "react-native-vector-icons/Ionicons";
import { connect } from 'react-redux';
import { accountSetting } from '../../assets/strings';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

class AccountSetting extends Component {

    constructor(props) {
        super(props)
    }

    _renderItem = (item, index) => {
        const { containerStyle, name } = item;
        return (
            <View>

                {(item.label && <CText type={'medium'} style={styles.label}>{item.label}</CText>)}

                <CTextInput
                    {...item}
                    refField={ref => this[name] = ref}
                    containerStyle={[containerStyle, { backgroundColor: StyleConfig.COLOR.LIGHTER_GREY, marginTop: StyleConfig.countPixelRatio(0) }]}
                />
            </View>
        )
    }

    onPressSave = () => {
        alert('pressed')
    }
    render() {
        const { handleSubmit } = this.props;

        let FIELDS_DATA = [
            {
                name: 'address',
                label: accountSetting.home_location,
                returnKeyType: 'next',
                placeholder: 'Enter Home Location',
                placeholderTextColor: StyleConfig.COLOR.BLACK,
                keyboardType: 'default',
                inputType: 'geoCoder',
                isRequire: true,
                rightIcon: () => <MaterialCommunityIcons size={24} color={StyleConfig.COLOR.RED_REDICAL} name={'pencil'}
                    style={styles.rightIconCenterStyle} />,
                leftIcon: () => <MaterialIcons size={24} color={StyleConfig.COLOR.RED_REDICAL} name={'location-on'}
                    style={styles.rightIconCenterStyle} />,

            },
            {
                name: 'email',
                label: 'Email',
                returnKeyType: 'next',
                placeholder: 'Enter Email',
                keyboardType: 'email-address',
                rightIcon: () => <MaterialCommunityIcons size={24} color={StyleConfig.COLOR.RED_REDICAL} name={'pencil'}
                    style={styles.rightIconCenterStyle} />,
                leftIcon: () => <MaterialCommunityIcons size={24} color={StyleConfig.COLOR.RED_REDICAL} name={'email'}
                    style={styles.rightIconCenterStyle} />,

            },
            {
                name: 'number',
                inputType: 'phone_number',
                label: 'Phone Number',
                returnKeyType: 'next',
                placeholder: 'Enter Phone Number',
                keyboardType: 'number-pad',
                leftIcon: () => <MaterialCommunityIcons size={24} color={StyleConfig.COLOR.RED_REDICAL} name={'phone'}
                    style={styles.rightIconCenterStyle} />,
            },
            {
                name: 'password',
                label: 'Password',
                returnKeyType: 'done',
                placeholder: '********',
                keyboardType: 'default',
                secureTextEntry: true,
                textStyle: styles.textStyle,
                rightIcon: () => <MaterialCommunityIcons size={24} color={StyleConfig.COLOR.RED_REDICAL} name={'pencil'}
                    style={styles.rightIconCenterStyle} />,
                leftIcon: () => <MaterialCommunityIcons size={24} color={StyleConfig.COLOR.RED_REDICAL} name={'lock'}
                    style={styles.rightIconCenterStyle} />,

            }
        ]
        return (
            <View style={styles.container}>
                <CHeader
                    showLeft
                    showRight
                    headerValue={accountSetting.account}
                >
                </CHeader>
                <KeyboardAwareScrollView>
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.imageConatiner}>
                            <Image source={AppImages.user_profile} style={styles.profileStyle}></Image>
                            <View style={styles.imageEditButtonContainer}>
                                <TouchableOpacity
                                    onPress={() => alert('pressed')}
                                >
                                    <Image source={AppImages.edit} style={styles.imageEditButton}></Image>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: StyleConfig.countPixelRatio(70), paddingHorizontal: StyleConfig.countPixelRatio(20), }}>
                        {FIELDS_DATA.map((value, key) => {
                            return this._renderItem(value, key)
                        })}
                        <CButton
                            isLeftIcon
                            leftIconName={'plus'}
                            leftIconSize={40}
                            leftIconColor={StyleConfig.COLOR.RED_REDICAL}
                            textStyle={{ color: StyleConfig.COLOR.RED_REDICAL, fontSize: StyleConfig.fontSizeH2_3 }}
                            onPress={() => alert('pressed')}
                            containerStyle={[styles.buttonStyle]}>
                            {accountSetting.add_authorized_user}
                        </CButton>
                        <CButton
                            onPress={handleSubmit(this.onPressSave)}>
                            {accountSetting.save_changes}
                        </CButton>
                        <CButton
                            onPress={() => this.onDeleteAccount()}
                            textStyle={{ color: StyleConfig.COLOR.RED_REDICAL }}
                            containerStyle={{
                                backgroundColor: StyleConfig.COLOR.WHITE,
                            }}>
                            {accountSetting.delete_account}
                        </CButton>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

const validate = values => {
    let errors = {};
    errors.email = !values.email
        ? 'Email is required'
        : (!email_validator.test(values.email)) ? 'Invalid email' : undefined;
    errors.password = !values.password
        ? 'Password is required'
        : (values.password.length < 8) ? 'Password must contains at least 8 characters' :
            (!password_validator.test(values.password)) ? 'Password must contain at least one number and one special character' : undefined;
    errors.number = !values.number
        ? 'Number is required'
        : false ? 'Invalid number' : undefined;
    errors.address = !values.address
        ? 'Address is required'
        : (!address_validator.test(values.address)) ? 'Invalid address' : undefined;
    return errors
}

const withForm = reduxForm({
    form: 'accountSettingForm',
    validate
})

const mapStateToProps = (state) => {
    return {
        state,
    }
}

export default connect(mapStateToProps, null)(withForm(AccountSetting));

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleConfig.COLOR.WHITE_OFF,
        // alignItems: 'center',
    },
    imageConatiner: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    profileStyle: {
        height: StyleConfig.responsiveHeight(15),
        width: StyleConfig.responsiveHeight(15),
        tintColor: '#D3D3D3',
    },
    imageEditButtonContainer: {
        position: 'absolute',
    },
    imageEditButton: {
        height: StyleConfig.responsiveHeight(2.5),
        width: StyleConfig.responsiveHeight(2.5)
    },
    label: {
        fontSize: StyleConfig.fontSizeH3,
        color: StyleConfig.COLOR.GREY_DARK,
        marginTop: StyleConfig.countPixelRatio(12)
    },
    buttonStyle: {
        height: StyleConfig.responsiveHeight(10),
        borderColor: StyleConfig.COLOR.WHITE,
        borderRadius: StyleConfig.countPixelRatio(17),
        shadowRadius: StyleConfig.countPixelRatio(15),
        shadowColor: StyleConfig.COLOR.GREY_DARK,
        marginVertical: StyleConfig.countPixelRatio(25),
        backgroundColor: StyleConfig.COLOR.WHITE,
        elevation: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
    },
    rightIconCenterStyle: {
        alignSelf: 'center'
    }
})