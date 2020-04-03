import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import StyleConfig from '../../assets/StyleConfig';
import AppImages from '../../assets/images/index'
import CText from '../../components/CText';
import { auth } from '../../assets/strings';
import CButton from '../../components/CButton';

class Account extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container} >
                <View>
                    <Image source={AppImages.beemLogo} resizeMode='contain' style={styles.headerLogoStyle}></Image>
                    <View style={styles.imageContainer}>
                        <Image source={AppImages.account} resizeMode='contain' style={styles.imageStyle}></Image>
                        <CText type={'regular'} style={styles.detailText}>{auth.title}</CText>
                    </View>
                    <View>
                        <CButton
                            onPress={() => navigation.navigate('SignIn')}
                            containerStyle={styles.buttonContainer}>{auth.sign_in}
                        </CButton>
                        <CButton
                            onPress={() => navigation.navigate('SignUp')}
                            textStyle={styles.buttonText}
                            containerStyle={styles.signUpButtonContainer}>{auth.create_an_account}
                        </CButton>
                    </View>
                </View>
            </View>
        )
    }
}

export default Account;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleConfig.COLOR.WHITE_OFF,
    },

    headerLogoStyle: {
        height: StyleConfig.responsiveHeight(15),
        width: StyleConfig.responsiveHeight(15),
        marginTop: StyleConfig.countPixelRatio(25),
        alignSelf: 'center'
    },

    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: StyleConfig.countPixelRatio(20),
        marginBottom: StyleConfig.countPixelRatio(10),
    },

    imageStyle: {
        height: StyleConfig.responsiveHeight(44),
        width: StyleConfig.responsiveWidth(80),
    },

    detailText: {
        marginTop: StyleConfig.countPixelRatio(15),
        fontSize: StyleConfig.fontSizeH3_4,
        color: StyleConfig.COLOR.GREY_DIM,
        alignSelf: 'center'
    },

    buttonContainer: {
        marginHorizontal: StyleConfig.countPixelRatio(20),
        marginBottom: StyleConfig.countPixelRatio(15),
    },

    signUpButtonContainer: {
        marginHorizontal: StyleConfig.countPixelRatio(20),
        marginBottom: StyleConfig.countPixelRatio(30),
        backgroundColor: StyleConfig.COLOR.WHITE,
        borderColor: StyleConfig.COLOR.RED_REDICAL,
        borderWidth: StyleConfig.countPixelRatio(0.8),
    },

    buttonText: {
        color: StyleConfig.COLOR.BLACK,
    },
})

