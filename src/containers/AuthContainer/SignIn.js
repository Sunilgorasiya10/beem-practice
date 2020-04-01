import React, { Component } from 'react';
import { View, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import StyleConfig from "../../assets/StyleConfig";
import { auth } from "../../assets/strings";
import CText from "../../components/CText";
import AppImages from '../../assets/images';
import CTextInput from '../../components/CTextInput';
import CButton from '../../components/CButton';
import { Field } from 'redux-form';

class SignIn extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.imageContainer}>
                        <CText type={'bold'} style={styles.detailText}>{auth.sign_in}</CText>
                        <Image source={AppImages.signIn} resizeMode={'contain'} style={styles.imageStyle} />
                    </View>
                    <View style={{ paddingHorizontal: StyleConfig.countPixelRatio(20) }}>
                        <Field
                            name='email'
                            ref='email'
                            refField={ref => (this['email'] = ref)}
                            placeholder="Email Address"
                            placeholderTextColor={StyleConfig.COLOR.GREY_DIM}
                            nextField={'password'}
                            returnKeyType={'next'}
                            onSubmitEdit={(event) => { this['password'].focus() }}>
                            component={CTextInput}
                        </Field>
                        <Field
                            name='password'
                            ref='password'
                            refField={ref => (this['password'] = ref)}
                            placeholder="Password"
                            placeholderTextColor={StyleConfig.COLOR.GREY_DIM}
                            secureTextEntry={true}
                            component={CTextInput}>
                        </Field>
                        <CButton
                            onPress={() => alert('successful')}
                            containerStyle={styles.buttonContainer}>{auth.sign_in}
                        </CButton>
                        <View style={{ flexDirection: 'row', paddingHorizontal: StyleConfig.countPixelRatio(24) }}>
                            <CText type={'medium'} style={styles.textStyle} onPress={() => alert('forgot password')}>{auth.forgot_password}</CText>
                            <View style={{ flex: 1 }} />
                            <CText type={'medium'} style={styles.textStyle} onPress={navigation.navigate('SignUp')}>{auth.create_an_account}</CText>
                        </View>
                        <View style={styles.alternativeView}>
                            <CText type={'regular'} style={styles.textStyle} >{auth.alternatively_sign_in_with}</CText>
                        </View>
                        <View style={styles.socialView}>
                            <CButton
                                isIcon
                                source={AppImages.facebookLogo}
                                onPress={() => alert('facebook')}
                                textStyle={[styles.socialText, { color: StyleConfig.COLOR.FACEBOOK_BLUE }]}
                                containerStyle={styles.socialButton}>{auth.facebook}
                            </CButton>
                            <CButton
                                isIcon
                                source={AppImages.googleLogo}
                                onPress={() => alert('google')}
                                textStyle={[styles.socialText, { color: StyleConfig.COLOR.GOOGLE_CINABAR }]}
                                containerStyle={styles.socialButton}>{auth.google}
                            </CButton>
                            <CButton
                                isIcon
                                source={AppImages.weChatLogo}
                                onPress={() => alert('weChat')}
                                textStyle={[styles.socialText, { color: StyleConfig.COLOR.WECHAT_PARROT }]}
                                containerStyle={styles.socialButton}>{auth.weChat}
                            </CButton>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default SignIn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleConfig.COLOR.WHITE_OFF,
        paddingBottom: (StyleConfig.isIphone) ? StyleConfig.countPixelRatio(16) : StyleConfig.countPixelRatio(8),
    },

    imageContainer: {
        height: StyleConfig.responsiveHeight(40),
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageStyle: {
        width: StyleConfig.responsiveWidth(50),
        height: StyleConfig.responsiveWidth(50),
    },

    detailText: {
        bottom: StyleConfig.countPixelRatio(26),
        fontSize: StyleConfig.fontSizeH2_3,
        color: StyleConfig.COLOR.GREY_DARK
    },

    buttonContainer: {
        marginVertical: StyleConfig.countPixelRatio(20)
    },
    buttonText: {
        color: StyleConfig.COLOR.BLACK,
    },
    alternativeView: {
        paddingTop: StyleConfig.countPixelRatio(10),
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: StyleConfig.fontSizeH3,
        color: StyleConfig.COLOR.BLACK_OFF
    },
    socialView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: StyleConfig.countPixelRatio(10)
    },
    socialButton: {
        flex: 1,
        backgroundColor: StyleConfig.COLOR.WHITE,
        borderColor: StyleConfig.COLOR.GREY_DIM,
        borderWidth: StyleConfig.countPixelRatio(0.8),
        shadowOpacity: StyleConfig.countPixelRatio(0),
        height: StyleConfig.countPixelRatio(30),
        minHeight: StyleConfig.countPixelRatio(30),
        marginHorizontal: StyleConfig.countPixelRatio(4)
    },
    socialText: {
        paddingLeft: StyleConfig.countPixelRatio(5),
        fontSize: StyleConfig.fontSizeH3_4,
    },
});