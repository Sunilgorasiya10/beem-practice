import React, { Component } from 'react';
import { View, StyleSheet, Image, Keyboard, ScrollView, TouchableOpacity } from 'react-native';
import CText from '../../components/CText';
import CButton from '../../components/CButton';
import AppImages from '../../assets/images/index';
import StyleConfig from '../../assets/StyleConfig';
import { createNewTour } from '../../assets/strings';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CTextInput from '../../components/CTextInput';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class BasicInfo extends Component {

    constructor(props) {
        super(props);
    }

    _renderLineView = (text) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <View style={styles.lineView}></View>
                <CText type={'bold'} style={styles.lineText}>{text}</CText>
                <View style={styles.lineView}></View>
            </View>
        )
    }
    _renderItem = (item, index) => {
        const { name, blurOnSubmit, containerStyle, showCurSymbol, isQuestion, isDescription, isDropdown } = item;
        return (
            <View style={styles.inputContainer}>
                {(item.label) &&
                    <View style={{ flexDirection: 'row' }}>
                        {(item.label) && <CText type={'bold'} style={styles.label}>{item.label}</CText>}
                        {(item.isRequire) &&
                            <FontAwesome5 name={'star-of-life'} size={6} style={{ paddingLeft: StyleConfig.countPixelRatio(6) }} color={StyleConfig.COLOR.RED}></FontAwesome5>}
                        {(isQuestion) &&
                            <TouchableOpacity onPress={() => alert('help')}>
                                <AntDesign name={'questioncircle'} size={15} color={StyleConfig.COLOR.RED_REDICAL} style={{ paddingLeft: StyleConfig.countPixelRatio(6), paddingTop: 3 }} />
                            </TouchableOpacity>
                        }
                    </View>
                }
                {(isDropdown !== true) ?
                    (isDescription !== true) ?
                        <View style={styles.textInputStyle}>
                            <Field
                                {...item}
                                refField={ref => this[name] = ref}
                                containerStyle={[containerStyle, { backgroundColor: StyleConfig.COLOR.LIGHTER_GREY, marginBottom: 4 }]}
                                component={CTextInput}></Field>
                        </View>
                        :
                        <View style={styles.textInputStyle}>
                            <Field
                                {...item}
                                refField={ref => this[name] = ref}
                                containerStyle={[containerStyle, { backgroundColor: StyleConfig.COLOR.LIGHTER_GREY, marginBottom: 4 }]}
                                component={CTextInput}>
                            </Field>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <MaterialCommunityIcons name={'pencil'} size={20} style={{ position: 'absolute', right: 0 }} color={StyleConfig.COLOR.RED_REDICAL} />
                            </View>
                        </View>
                    :
                    <View style={styles.textInputStyle}>
                        <Field
                            {...item}
                            refField={ref => this[name] = ref}
                            containerStyle={[containerStyle, { backgroundColor: StyleConfig.COLOR.LIGHTER_GREY, marginBottom: 4 }]}
                            component={CTextInput}>
                        </Field>
                        <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                            <MaterialCommunityIcons name={'chevron-down'} size={30} style={{ position: 'absolute', right: -15 }} color={StyleConfig.COLOR.RED_REDICAL}></MaterialCommunityIcons>
                        </View>
                    </View>

                }
            </View >
        )
    }
    render() {
        let FIELDS_DATA = [
            {
                name: 'tour_name',
                label: createNewTour.experience_name,
                placeholder: createNewTour.enter_a_tour_name,
                keyboardType: 'default',
                returnKeyType: 'next',
                isRequire: true,
                onSubmitEditing: () => { Keyboard.dismiss() }
            },
            {
                name: 'location',
                inputType: 'geoCoder',
                label: createNewTour.experience_region,
                returnKeyType: 'done',
                placeholder: createNewTour.select_a_location,
                keyboardType: 'default',
                isRequire: true,
                outSideLeftIcon: AppImages.rightArrow,
                textStyle: { fontSize: 14, textAlign: 'left' },
                containerStyle: { justifyContent: 'flex-start' },
                onPress: () => this.onPressLocation(),
            },
            {
                name: 'tour_type',
                inputType: 'dropdown',
                textStyle: { fontSize: StyleConfig.countPixelRatio(14) },
                label: createNewTour.experience_type,
                returnKeyType: 'done',
                placeholder: createNewTour.select_a_tour_type,
                keyboardType: 'default',
                isRequire: true,
                isDropdown: true,
                isDropdown: true,
            },
            {
                name: 'transportation_method',
                inputType: 'dropdown',
                textStyle: { fontSize: StyleConfig.countPixelRatio(14) },
                label: createNewTour.means_of_getting_arround,
                returnKeyType: 'done',
                placeholder: createNewTour.select_a_transportation_method,
                keyboardType: 'default',
                isRequire: true,
                isDropdown: true,
            },
            {
                name: 'number_of_participants',
                textStyle: { fontSize: StyleConfig.countPixelRatio(14) },
                label: createNewTour.maximum_participants,
                returnKeyType: 'done',
                placeholder: createNewTour.maximum_number_of_participants,
                keyboardType: 'numeric',
                isRequire: true,
                blurOnSubmit: true,
                onSubmitEditing: () => { Keyboard.dismiss() }
            },
            {
                name: 'public_private_tour',
                inputType: 'dropdown',
                textStyle: { fontSize: StyleConfig.countPixelRatio(14) },
                label: createNewTour.shared_private_experience,
                returnKeyType: 'done',
                placeholder: createNewTour.select_a_tour_option,
                keyboardType: 'default',
                isRequire: true,
                isDropdown: true,
            },
            {
                name: 'duration',
                inputType: 'DurationPicker',
                textStyle: { fontSize: StyleConfig.countPixelRatio(14) },
                label: createNewTour.duration,
                returnKeyType: 'done',
                placeholder: createNewTour.duration,
                keyboardType: 'default',
                isRequire: true,
            },
            {
                name: 'base_shared_price',
                label: createNewTour.base_shared_price,
                returnKeyType: 'done',
                placeholder: createNewTour.base_shared_price_of_the_tour,
                keyboardType: 'numeric',
                isRequire: true,
                blurOnSubmit: true,
            },
            {
                name: 'base_private_price',
                label: createNewTour.base_private_price,
                returnKeyType: 'done',
                placeholder: createNewTour.base_private_price_of_the_tour,
                keyboardType: 'numeric',
                isRequire: true,
                blurOnSubmit: true,
            },
            {
                name: 'additional_price',
                label: createNewTour.extra_person_price,
                returnKeyType: 'done',
                placeholder: createNewTour.extra_person_price,
                keyboardType: 'numeric',
                isRequire: true,
                blurOnSubmit: true,
            },
            {
                name: 'tour_description',
                label: createNewTour.experience_description,
                placeholder: createNewTour.a_small_description_about_the_tour,
                returnKeyType: 'next',
                multiline: true,
                keyboardType: 'default',
                maxLength: 1500,
                isShowLimit: true,
                containerStyle: styles.textAreaStyle,
                isRequire: true,
                isDescription: true

            },
            {
                name: 'languages',
                inputType: 'dropdown',
                textStyle: { fontSize: StyleConfig.countPixelRatio(14) },
                label: createNewTour.language_offer,
                returnKeyType: 'done',
                placeholder: 'Select Language',
                keyboardType: 'default',
                isRequire: true,
                isDropdown: true,
            },
            {
                name: 'restrictions',
                inputType: 'dropdown',
                textStyle: { fontSize: StyleConfig.countPixelRatio(14) },
                label: createNewTour.restrictions,
                returnKeyType: 'done',
                placeholder: 'Select Restrictions',
                keyboardType: 'default',
                isQuestion: true,
                isDropdown: true,
            },
        ];
        let INCLUSIONS_DATA = [
            {
                name: 'inclusion_type',
                text: 'inclusionType',
                input: 'dropdown',
                textStyle: { fontSize: StyleConfig.countPixelRatio(14) },
                label: createNewTour.inclusion_type,
                returnKeyType: 'done',
                placeholder: 'Select Inclusion Type',
                keyboardType: 'default',
                isRequire: true,
                isQuestion: true,
                isDropdown: true,

            },
            {
                name: 'inclusion_description',
                text: 'inclusionDescription',
                textStyle: { fontSize: StyleConfig.countPixelRatio(14) },
                label: createNewTour.inclusion_description,
                returnKeyType: 'next',
                placeholder: createNewTour.inclusion_description,
                keyboardType: 'default',
                isRequire: true,
                isQuestion: true,
                maxLength: 1500,
                multiline: true,
                containerStyle: styles.textAreaStyle,
                isDescription: true,
            }
        ];

        let BRING_DATA = [
            {
                name: 'suggested_to_bring',
                label: createNewTour.suggested_to_bring,
                placeholder: createNewTour.suggested_to_bring,
                returnKeyType: 'next',
                multiline: true,
                maxLength: 1500,
                keyboardType: 'default',
                containerStyle: styles.textAreaStyle,
                isRequire: true,
                isDescription: true,
            }
        ]
        return (
            <ScrollView>
                <View>
                    <View>
                        <View style={{ paddingBottom: 20, paddingHorizontal: StyleConfig.countPixelRatio(16), marginTop: StyleConfig.countPixelRatio(10) }}>
                            {this._renderLineView(createNewTour.basic_info)}
                        </View>
                        <View style={{ flexDirection: 'row', paddingHorizontal: StyleConfig.countPixelRatio(20) }}>
                            <View style={{ flexDirection: 'row' }}>
                                <CText type={'bold'} style={styles.label}>{createNewTour.cover_photos}</CText>
                                <FontAwesome5 name={'star-of-life'} size={6} style={{ paddingLeft: StyleConfig.countPixelRatio(6) }} color={StyleConfig.COLOR.RED}></FontAwesome5>
                            </View>
                            <View style={{ flex: 1 }} />
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesome5 name={'star-of-life'} size={6} color={StyleConfig.COLOR.RED}></FontAwesome5>
                                <CText type={'regular'} style={{ color: StyleConfig.COLOR.RED }}>{'Required Fields'}</CText>
                            </View>
                        </View>
                        <View style={styles.profileImage}>
                            <Image source={AppImages.photography} resizeMode={'contain'} style={styles.profileStyle} />
                        </View>
                        <View style={styles.uploadBtn}>
                            <CButton
                                onPress={() => alert('upload picture')}
                                textStyle={{ fontSize: StyleConfig.fontSizeH3, marginHorizontal: StyleConfig.countPixelRatio(20) }}>{createNewTour.upload_pictures}
                            </CButton>
                        </View>
                    </View>
                    <View style={styles.subContent}>
                        {FIELDS_DATA.map((value, key) => {
                            return this._renderItem(value, key)
                        })}
                        {this._renderLineView(createNewTour.inclusions)}
                        {INCLUSIONS_DATA.map((value, key) => { return this._renderItem(value, key) })}
                        <CButton
                            onPress={() => alert('press')}
                            isLeftIcon
                            leftIconName={'plus'}
                            leftIconSize={30}
                            leftIconColor={StyleConfig.COLOR.WHITE_OFF}
                            textStyle={{ fontSize: StyleConfig.fontSizeH3 }}
                            containerStyle={[styles.addButtonContainer, { backgroundColor: StyleConfig.COLOR.GREY_DARK }]}>
                            {createNewTour.add_inclusion}
                        </CButton>
                        {BRING_DATA.map((value, key) => this._renderItem(value, key))}
                        <View>
                            <CButton
                                onPress={() => alert('pressed')}
                                textStyle={{ fontSize: 20, color: StyleConfig.COLOR.WHITE, fontFamily: StyleConfig.getFont('medium') }}
                                containerStyle={styles.buttonContainer}>
                                {createNewTour.save_and_next}
                            </CButton>
                        </View>
                    </View>
                </View>
            </ScrollView >
        )
    }
}

const withForm = reduxForm({
    form: 'basicInfoForm',

})

const mapStateToProps = (state) => {
    return {
        state,
    }
}

export default connect(mapStateToProps, null)(withForm(BasicInfo));

const styles = StyleSheet.create({
    lineView: {
        flex: 1,
        height: StyleConfig.countPixelRatio(2),
        backgroundColor: StyleConfig.COLOR.SHAMROCK
    },
    lineText: {
        paddingHorizontal: StyleConfig.countPixelRatio(10),
        fontSize: StyleConfig.fontSizeH2,
        color: StyleConfig.COLOR.HEADER_ICON,
    },
    label: {
        fontSize: StyleConfig.fontSizeH3,
        color: StyleConfig.COLOR.BLACK_OFF,

    },
    profileImage: {
        backgroundColor: StyleConfig.COLOR.GREY_LIGHT,
        height: StyleConfig.responsiveHeight(25),
        shadowColor: StyleConfig.COLOR.GREY_DARK,
        shadowOpacity: StyleConfig.countPixelRatio(0.8),
        elevation: StyleConfig.countPixelRatio(2),
        shadowOffset: { height: 0 },
        justifyContent: 'center'
    },
    profileStyle: {
        height: StyleConfig.responsiveHeight(10),
        width: StyleConfig.responsiveHeight(10),
        alignSelf: 'center',
    },
    uploadBtn: {
        // flex: 1,
        alignSelf: 'flex-end',
        bottom: -35,
        position: 'absolute',
    },
    subContent: {
        padding: StyleConfig.countPixelRatio(20),
    },
    inputContainer: {
        marginBottom: StyleConfig.countPixelRatio(6),
        marginTop: StyleConfig.countPixelRatio(8)
    },
    textAreaStyle: {
        height: 180,
        textAlignVertical: 'top'
    },
    setIconContainer: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 30,
        backgroundColor: 'yellow',
        justifyContent: 'space-between'
        // justifyContent: 'flex-end'
    },
    textInputStyle: {
        flex: 1,
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
        marginTop: StyleConfig.countPixelRatio(12),
        borderWidth: StyleConfig.countPixelRatio(1),
        borderRadius: StyleConfig.countPixelRatio(30),
        borderColor: StyleConfig.COLOR.WHITE_OFF,
        fontSize: StyleConfig.fontSizeH3,
        fontFamily: StyleConfig.fontMedium,
        backgroundColor: StyleConfig.COLOR.LIGHTER_GREY,
        paddingHorizontal: StyleConfig.countPixelRatio(15),
        shadowColor: StyleConfig.COLOR.BLACK,
        shadowOpacity: 0.1,
        elevation: 2,
        shadowOffset: {
            height: 0,
            width: 0
        },
    },
    addButtonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: StyleConfig.responsiveWidth(40),
        alignSelf: 'flex-end',
        borderColor: 'transparent'
    },
    buttonContainer: {
        marginVertical: StyleConfig.countPixelRatio(20),
        marginHorizontal: StyleConfig.countPixelRatio(20)
    },
})