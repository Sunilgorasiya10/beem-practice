import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { CHeader } from "../../components/CHeader";
import StyleConfig from "../../assets/StyleConfig";
import AppImages from "../../assets/images";
import CText from "../../components/CText";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CButton from "../../components/CButton";
import { settingMenu } from '../../assets/strings'
import { connect } from "react-redux";

const [MY_PROFILE, ACCOUNT, NOTIFICATION, LANGUAGE, PAYMENT, PRIVACY, LEGAL] = [1, 2, 3, 4, 5, 6, 7];
const DATA = [
    {
        id: 1,
        url: AppImages.ic_profile,
        title: settingMenu.my_profile,
    },
    {
        id: 2,
        url: AppImages.accountIcon,
        title: settingMenu.account,
    },
    {
        id: 3,
        url: AppImages.notifications,
        title: settingMenu.notifications,
    },
    {
        id: 4,
        url: AppImages.display_language,
        title: settingMenu.display_language,
    },
    {
        id: 5,
        url: AppImages.payment,
        title: settingMenu.payment,
    },
    {
        id: 6,
        url: AppImages.privacy,
        title: settingMenu.privacy,
    },
    {
        id: 7,
        url: AppImages.legal,
        title: settingMenu.legal,
    },
]
class SettingMenu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CHeader
                    showLeft
                    showRight
                    headerValue={settingMenu.settings}
                >
                </CHeader>
                <View style={styles.profileView}>
                    <View style={styles.imageContainer}>
                        <Image source={AppImages.user_profile} resizeMode={'contain'} style={styles.profileImage}></Image>
                    </View>
                    <View style={{ paddingLeft: 15, justifyContent: 'center' }}>
                        <View style={styles.emailView}>
                            <MaterialCommunityIcons
                                name={'email-outline'}
                                size={StyleConfig.fontSizeH2_3}
                                color={StyleConfig.COLOR.RED_REDICAL}
                            >
                            </MaterialCommunityIcons>
                            <View style={{ width: StyleConfig.responsiveWidth(55) }}>
                                <CText type={'regular'} style={styles.emailText}
                                    numberOfLines={1} ellipseMode={'tail'}>{'sunilasda ASSS ASWWWWW asSKAsojasd jjZJlxAxx aljdxa xjal '}</CText>
                            </View>
                        </View>
                    </View>
                </View>
                {
                    DATA.map((item) =>
                        <View style={styles.settingsOption}>
                            <CButton
                                setting
                                isIcon
                                isRightImage
                                containerStyle={styles.settingButtons}
                                source={item.url}
                                children={item.title}
                                rightSource={AppImages.rightArrow}
                                imageStyle={{ marginLeft: StyleConfig.countPixelRatio(0) }}
                                textStyle={styles.textStyle}
                                onPress={() => alert('pressed')}
                            ></CButton>
                        </View>
                    )
                }
                <CButton containerStyle={styles.signOutButton} onPress={() => alert('pressed')}>{settingMenu.sign_out}</CButton>
            </View>
        )
    }
}

export default SettingMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleConfig.COLOR.WHITE_OFF
    },
    profileView: {
        flexDirection: 'row',
        paddingVertical: StyleConfig.countPixelRatio(15),
        paddingLeft: StyleConfig.countPixelRatio(25),
        // backgroundColor: 'yellow'
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
    },
    profileImage: {
        height: StyleConfig.responsiveHeight(15),
        width: StyleConfig.responsiveHeight(15),
        tintColor: '#D3D3D3',
    },
    emailView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    emailText: {
        fontSize: StyleConfig.fontSizeH2_3,
        color: StyleConfig.COLOR.GREY_DIM,
        paddingLeft: StyleConfig.countPixelRatio(5),
    },
    settingsOption: {
        // marginTop: StyleConfig.countPixelRatio(10),
        marginHorizontal: StyleConfig.countPixelRatio(20)
    },
    settingButtons: {
        width: StyleConfig.responsiveWidth(90),
        backgroundColor: StyleConfig.COLOR.WHITE_OFF,
        borderWidth: StyleConfig.countPixelRatio(0),
        paddingHorizontal: StyleConfig.countPixelRatio(15)
    },
    textStyle: {
        color: StyleConfig.COLOR.HEADER_ICON,
        fontSize: StyleConfig.fontSizeH3,
    },
    signOutButton: {
        marginTop: StyleConfig.countPixelRatio(10),
        marginHorizontal: StyleConfig.countPixelRatio(20)
    },
})