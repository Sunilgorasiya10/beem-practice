import React, { Component } from 'react';
import { View, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import StyleConfig from "../../assets/StyleConfig";
import { auth } from "../../assets/strings";
import CText from "../../components/CText";
import AppImages from '../../assets/images';
import CTextInput from '../../components/CTextInput';
import CButton from '../../components/CButton';
import { Field, reduxForm } from 'redux-form';
import { email_validator, password_validator, name_validator } from '../../common/global';
import { connect } from 'react-redux';

class SignUp extends Component {

    actions = (values) => {
        alert('Successful')
    }
    render() {
        const { navigation, handleSubmit } = this.props;
        return (
            <View style={styles.container}>
                <View>
                    <View style={styles.imageContainer}>
                        <CText type={'bold'} style={styles.detailText}>{auth.create_an_account}</CText>
                        <Image source={AppImages.SignUp} resizeMode={'contain'} style={styles.imageStyle} />
                    </View>
                    <View style={{ paddingHorizontal: StyleConfig.countPixelRatio(20) }}>
                        <Field
                            name='name'
                            ref='name'
                            refField={ref => (this['name'] = ref)}
                            placeholder="Name"
                            nextField={'email'}
                            returnKeyType={'next'}
                            onSubmitEdit={(event) => { this['email'].focus() }}
                            component={CTextInput}>
                        </Field>
                        <Field
                            name='email'
                            ref='email'
                            refField={ref => (this['email'] = ref)}
                            placeholder="Email Address"
                            nextField={'password'}
                            returnKeyType={'next'}
                            onSubmitEdit={(event) => { this['password'].focus() }}
                            component={CTextInput}>
                        </Field>
                        <Field
                            name='password'
                            ref='password'
                            refField={ref => (this['password'] = ref)}
                            placeholder="Password"
                            secureTextEntry={true}
                            component={CTextInput}>
                        </Field>

                        <View style={{ marginHorizontal: StyleConfig.countPixelRatio(20), marginTop: StyleConfig.countPixelRatio(10) }}>
                            <CText type={'bold'} style={styles.textStyle} >{auth.register_note}
                                <CText type={'bold'} style={[styles.textStyle, { color: StyleConfig.COLOR.RED_REDICAL }]} onPress={() => alert('policy')}>
                                    {auth.us_terms}</CText>
                                <CText type={'bold'} style={styles.textStyle}>{auth.and}</CText>
                                <CText type={'bold'} style={[styles.textStyle, { color: StyleConfig.COLOR.RED_REDICAL }]} onPress={() => alert('policy')}>
                                    {auth.us_policy}</CText>
                            </CText>
                        </View>
                        <CButton
                            onPress={() => navigation.navigate('SignIn')}
                            containerStyle={styles.buttonContainer}>{auth.sign_up}
                        </CButton>

                        <View style={styles.alternativeView}>
                            <CText type={'regular'} style={styles.textStyle} >{auth.alternatively_sign_up_with}</CText>
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

const initialValues = {
    email: '',
    password: '',
    name: '',
};

const Validation = values => {
    const errors = {};

    errors.name = !values.name
        ? 'Name is required'
        : (!name_validator.test(values.name)) ? 'Invalid name' : 'undefined';
    errors.email = !values.email
        ? 'Email is required'
        : (!email_validator.test(values.email)) ? 'Invalid Email' : 'undefined';
    errors.password = !values.password
        ? 'Password is required'
        : (values.password.length < 8) ? 'password must containt at least 8 characters' :
            (!password_validator.test(values.password)) ? 'Password must contain at least one number and one special character' : undefined;
    return errors;
}

const withForm = reduxForm({
    form: 'signUpForm',
    Validation,
    initialValues
})

const mapStateToProps = (state) => {
    return {
        state,
    }
}

export default connect(mapStateToProps, null)(withForm(SignUp));

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleConfig.COLOR.WHITE_OFF,
        paddingBottom: (StyleConfig.isIphone) ? StyleConfig.countPixelRatio(16) : StyleConfig.countPixelRatio(8),
    },

    imageContainer: {
        height: StyleConfig.responsiveHeight(30),
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageStyle: {
        width: StyleConfig.responsiveWidth(50),
        height: StyleConfig.responsiveWidth(50),
    },

    detailText: {
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
        fontSize: StyleConfig.fontSizeH4,
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