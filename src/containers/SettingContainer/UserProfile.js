import React, { Component } from 'react';
import { View, StyleSheet, Image, Switch, Text, TouchableOpacity } from 'react-native';
import CButton from '../../components/CButton';
import CText from '../../components/CText';
import { connect } from 'react-redux'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import CTextInput from '../../components/CTextInput';
import AppImages from '../../assets/images/index';
import { CHeader } from '../../components/CHeader';
import { my_profile } from '../../assets/strings';
import StyleConfig from '../../assets/StyleConfig';
import { reduxForm } from 'redux-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AntDesign from 'react-native-vector-icons/AntDesign';

class UserProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isAvailable: false,
        }
    }

    _onValueChange = () => {
        this.setState({ isAvailable: !this.state.isAvailable });

        // this.props.change('businessEntity', !this.state.isAvailable)
        // { this._renderItem }
    }

    _renderItem = (item, index) => {
        const { containerStyle, name, disabled } = item;
        return (

            <View style={styles.inputContainer}>
                {item.label &&
                    <View style={{ flexDirection: 'row' }}>
                        {(this.state.isAvailable === false && (item.name === 'businessName' || item.name === 'businessCountry' || item.name === 'employee_id_number')) ?
                            null
                            :
                            <CText type={'bold'} style={styles.label}>{item.label}</CText>}
                        {(this.state.isAvailable === false && (item.name === 'businessName' || item.name === 'businessCountry' || item.name === 'employee_id_number')) ?
                            null
                            :
                            (item.isRequire) && <View style={{ flexDirection: 'row' }} >
                                <FontAwesome5 name={'star-of-life'} size={6} style={{ paddingLeft: StyleConfig.countPixelRatio(6) }} color={StyleConfig.COLOR.RED}></FontAwesome5>
                                {(item.isQuestion) &&
                                    <TouchableOpacity onPress={() => alert('help')}>
                                        <AntDesign name={'questioncircle'} size={15} color={StyleConfig.COLOR.RED_REDICAL} style={{ paddingLeft: StyleConfig.countPixelRatio(6), paddingTop: 3 }} />
                                    </TouchableOpacity>
                                }
                            </View>
                        }
                        {item.name === 'businessEntity' && <View style={{ flex: 1, }}></View>}
                        {item.name === 'businessEntity' &&
                            <Switch
                                onValueChange={(this._onValueChange)}
                                value={this.state.isAvailable}
                                // disabled={disabled}
                                style={{ transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
                                thumbColor={StyleConfig.COLOR.WHITE}
                                trackColor={{ true: StyleConfig.COLOR.RED_REDICAL, false: StyleConfig.COLOR.GREY_DIM }}
                            />
                        }
                    </View>
                }

                {(item.subLabel) && <CText type={'medium'} style={[styles.label, { fontSize: StyleConfig.fontSizeH3_4 }]}>{item.subLabel}</CText>}
                {item.name === 'businessEntity' ?
                    null
                    :
                    (item.name === 'identification_scan1') ?
                        <TouchableOpacity style={styles.imageConatiner}>
                            <Image source={AppImages.identity_card} style={{ height: StyleConfig.responsiveHeight(8), width: StyleConfig.responsiveHeight(8), }} resizeMode={'contain'}></Image>
                            <Image source={AppImages.photography} style={{ height: StyleConfig.responsiveHeight(8), width: StyleConfig.responsiveHeight(8), marginLeft: StyleConfig.countPixelRatio(30) }} resizeMode={'contain'}></Image>
                        </TouchableOpacity>
                        :
                        (item.name === 'identification_scan2') ?
                            <TouchableOpacity style={styles.imageConatiner}>
                                <Image source={AppImages.identity_user} style={{ height: StyleConfig.responsiveHeight(8), width: StyleConfig.responsiveHeight(8), }} resizeMode={'contain'}></Image>
                                <Image source={AppImages.photography} style={{ height: StyleConfig.responsiveHeight(8), width: StyleConfig.responsiveHeight(8), marginLeft: StyleConfig.countPixelRatio(30) }} resizeMode={'contain'}></Image>
                            </TouchableOpacity>
                            :
                            (this.state.isAvailable === false && (item.name === 'businessName' || item.name === 'businessCountry' || item.name === 'employee_id_number')) ?
                                null
                                :
                                <CTextInput
                                    {...item}
                                    refField={ref => this[name] = ref}
                                    containerStyle={[containerStyle, { backgroundColor: StyleConfig.COLOR.LIGHTER_GREY, }]}
                                />
                }
                {item.subText &&
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        {(item.subText) &&
                            <FontAwesome5 name={'star-of-life'} size={6} style={{ paddingRight: StyleConfig.countPixelRatio(6) }}
                                color={StyleConfig.COLOR.RED} />}
                        {(item.subText) && <CText type={'medium'}
                            style={[styles.label, { fontSize: StyleConfig.fontSizeH3_4 }]}>{item.subText}</CText>}
                    </View>}
            </View>
        )
    }


    render() {

        let FIELDS_DATA = [
            {
                name: 'firstName',
                label: my_profile.first_name,
                returnKeyType: 'next',
                placeholder: 'Enter Your FirstName',
                keyboardType: 'default',
                disabled: false,
                isRequire: true,
            },
            {
                name: 'lastName',
                label: my_profile.last_name,
                returnKeyType: 'done',
                placeholder: 'Enter Your LastName',
                keyboardType: 'default',
                disabled: false,
                isRequire: true,
            },
            {
                name: 'businessEntity',
                label: my_profile.business_entity,
                returnKeyType: 'done',
                isRequire: true,
                disabled: true,
                subLabel: my_profile.business_entity_label,
            },
            {
                name: 'employee_id_number',
                label: my_profile.ein,
                returnKeyType: 'done',
                placeholder: 'Enter Your Employee Identity Number',
                keyboardType: 'default',
                isRequire: true,
                disabled: false,
                isQuestion: true,
            },
            {
                name: 'businessName',
                label: my_profile.business_name,
                returnKeyType: 'done',
                placeholder: 'Enter Your Business Name',
                keyboardType: 'default',
                disabled: false,
                isRequire: true,
            },
            {
                name: 'businessCountry',
                label: my_profile.business_country,
                returnKeyType: 'done',
                placeholder: 'Select Country',
                keyboardType: 'default',
                isRequire: true,
                disabled: true,
                rightIcon: () => <MaterialCommunityIcons size={30} color={StyleConfig.COLOR.RED_REDICAL} name={'chevron-down'}
                    style={styles.rightIconCenterStyle} />,
            },
            {
                name: 'nationality',
                label: my_profile.nationality,
                returnKeyType: 'done',
                placeholder: 'Select Nationality',
                keyboardType: 'default',
                disabled: true,
                isRequire: true,
                rightIcon: () => <MaterialCommunityIcons size={30} color={StyleConfig.COLOR.RED_REDICAL} name={'chevron-down'}
                    style={styles.rightIconCenterStyle} />,
            },
            {
                name: 'identification_type',
                label: my_profile.identification_type,
                returnKeyType: 'done',
                placeholder: 'Select One',
                keyboardType: 'default',
                isRequire: true,
                disabled: true,
                rightIcon: () => <MaterialCommunityIcons size={30} color={StyleConfig.COLOR.RED_REDICAL} name={'chevron-down'}
                    style={styles.rightIconCenterStyle} />,
            },
            {
                name: 'identification_scan1',
                // inputType: 'image',
                label: my_profile.identification_scan,
                isRequire: true,
                disabled: true,
                imageData1: AppImages.identity_card,
                imageData2: AppImages.photography,
            },
            {
                name: 'identification_scan2',
                // inputType: 'image',
                disabled: true,
                imageData1: AppImages.identity_user,
                imageData2: AppImages.photography,
                subText: my_profile.identification,
            },
            {
                name: 'about_me',
                label: my_profile.about_me,
                subLabel: my_profile.let_people_know_about_yourself,
                returnKeyType: 'next',
                multiline: true,
                placeholder: 'Write about Yourself',
                keyboardType: 'default',
                maxLength: 1500,
                isShowLimit: true,
                containerStyle: styles.textAreaStyle,
                rightIcon: () => <MaterialCommunityIcons size={20} color={StyleConfig.COLOR.RED_REDICAL} name={'pencil'} />,
            },
            {
                name: 'services',
                label: my_profile.what_i_offer,
                subLabel: my_profile.select_what_services_you_offer,
                placeholder: 'Select Multiple',
                keyboardType: 'default',
                rightIcon: () => <MaterialCommunityIcons size={30} color={StyleConfig.COLOR.RED_REDICAL} name={'chevron-down'}
                    style={styles.rightIconCenterStyle} />,
            },
            {
                name: 'languages',
                label: my_profile.spoken_languages,
                subLabel: my_profile.languages_you_are_good_at,
                returnKeyType: 'done',
                placeholder: 'Select Multiple',
                keyboardType: 'default',
                rightIcon: () => <MaterialCommunityIcons size={30} color={StyleConfig.COLOR.RED_REDICAL} name={'chevron-down'}
                    style={styles.rightIconCenterStyle} />,
            }
        ]
        return (
            <View style={{ flex: 1, backgroundColor: StyleConfig.COLOR.WHITE }}>
                <View style={{ backgroundColor: StyleConfig.COLOR.WHITE, height: StyleConfig.responsiveHeight(15) }}>
                    <CHeader
                        showRight
                        headerValue={my_profile.profile_setup}
                        containerStyle={{ backgroundColor: StyleConfig.COLOR.WHITE }}
                    >
                    </CHeader>
                    <View style={styles.statusContainer}>
                        <CText type={'bold'} style={{ fontSize: StyleConfig.fontSizeH3, color: StyleConfig.COLOR.GREY_DIM }}>{'Listing 0.00% Complete'}</CText>
                        <View style={{ flex: 1 }}></View>
                        <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                            <CButton
                                containerStyle={styles.saveBtnContainer}
                                onPress={() => alert('pressed')}
                            >{'Save'}
                            </CButton>
                        </View>
                    </View>
                </View>

                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <View style={styles.profileImage}>
                            <Image source={AppImages.photography} resizeMode={'contain'} style={{ height: StyleConfig.responsiveHeight(10), width: StyleConfig.responsiveHeight(10), alignSelf: 'center' }}></Image>
                        </View>
                        <View style={styles.uploadBtn}>
                            <CButton
                                onPress={() => alert('upload')}
                                textStyle={{ fontSize: StyleConfig.fontSizeH3, marginHorizontal: StyleConfig.countPixelRatio(20) }}
                                containerStyle={[styles.buttonContainer, { marginVertical: StyleConfig.countPixelRatio(20) }]}
                            >{my_profile.upload_picture}
                            </CButton>
                        </View>
                    </View>
                    <View style={styles.subContect}>
                        {FIELDS_DATA.map((value, key) => {
                            return this._renderItem(value, key)
                        })}
                    </View>
                    <CButton
                        onPress={() => alert('ss')}
                        textStyle={{ color: StyleConfig.COLOR.GREY_DIM, fontFamily: StyleConfig.getFont('bold') }}
                        containerStyle={[styles.buttonContainer, { backgroundColor: StyleConfig.COLOR.WHITE, borderColor: StyleConfig.COLOR.WHITE_OFF }]}>{my_profile.complete_profile}
                    </CButton>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

const withForm = reduxForm({
    form: 'profileForm'
})

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, null)(withForm(UserProfile));

const styles = StyleSheet.create({
    statusContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: StyleConfig.countPixelRatio(16)
    },
    saveBtnContainer: {
        width: StyleConfig.responsiveHeight(10),
        height: StyleConfig.countPixelRatio(35)
    },
    profileImage: {
        backgroundColor: StyleConfig.COLOR.GREY_LIGHT,
        height: StyleConfig.responsiveHeight(25),
        minHeight: StyleConfig.responsiveHeight(25),
        shadowColor: StyleConfig.COLOR.GREY_DARK,
        shadowOpacity: StyleConfig.countPixelRatio(0.8),
        elevation: StyleConfig.countPixelRatio(2),
        shadowOffset: { height: 0, width: 0 },
        justifyContent: 'center'
    },
    uploadBtn: {
        flex: 1,
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: -45
    },
    buttonContainer: {
        marginHorizontal: StyleConfig.countPixelRatio(20)
    },
    subContect: {
        padding: StyleConfig.countPixelRatio(20)
    },
    inputContainer: {
        marginBottom: StyleConfig.countPixelRatio(6),
        marginTop: StyleConfig.countPixelRatio(8)
    },
    label: {
        fontSize: StyleConfig.fontSizeH3,
        color: StyleConfig.COLOR.BLACK_OFF,
    },
    textAreaStyle: {
        height: 180,
        textAlignVertical: 'top'
    },
    rightIconCenterStyle: {
        alignSelf: 'center'
    },
    imageConatiner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: StyleConfig.responsiveHeight(12),
        backgroundColor: StyleConfig.COLOR.LIGHTER_GREY,
        borderRadius: StyleConfig.countPixelRatio(30),
        marginBottom: StyleConfig.countPixelRatio(6),
        marginTop: StyleConfig.countPixelRatio(12)
    },
})