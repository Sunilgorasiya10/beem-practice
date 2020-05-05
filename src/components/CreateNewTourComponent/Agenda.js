import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import CText from '../../components/CText';
import CButton from '../../components/CButton';
import StyleConfig from '../../assets/StyleConfig';
import { createNewTour } from '../../assets/strings';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CTextInput from '../../components/CTextInput';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import AppImages from '../../assets/images/index';


class Agenda extends Component {
    constructor(props) {
        super(props);
    }

    _renderLineView = (text) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.lineView}></View>
                <CText type={'bold'} style={styles.lineText}>{text}</CText>
                <View style={styles.lineView}></View>
            </View>
        )
    }
    _renderItem = (item, index) => {
        const { name, blurOnSubmit, containerStyle, isTime, isCalander, showCurSymbol, isQuestion, isDescription, isDropdown } = item;
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
                <View style={{ flexDirection: 'row' }}>
                    {(item.subLabel) && <CText type={'medium'} style={[styles.label, { fontSize: StyleConfig.fontSizeH3_4 }]}>{item.subLabel}</CText>}
                    {(isQuestion) &&
                        <TouchableOpacity onPress={() => alert('help')}>
                            <AntDesign name={'questioncircle'} size={15} color={StyleConfig.COLOR.RED_REDICAL} style={{ paddingLeft: StyleConfig.countPixelRatio(6), paddingTop: 3 }} />
                        </TouchableOpacity>
                    }
                </View>
                <CTextInput
                    {...item}
                    refField={ref => this[name] = ref}
                    containerStyle={[containerStyle, { backgroundColor: StyleConfig.COLOR.LIGHTER_GREY, marginBottom: 4 }]}
                >
                </CTextInput>
            </View >
        )
    }

    onPressSaveAndNext = () => {
        alert('Sccessful')
    }

    render() {

        const { handleSubmit } = this.props;

        let AGENDA_START_DATA = [
            {
                name: 'agenda_description',
                label: createNewTour.agenda_description,
                placeholder: createNewTour.introduction_to_your_tour_agenda,
                returnKeyType: 'next',
                multiline: true,
                maxLength: 1500,
                keyboardType: 'default',
                containerStyle: styles.textAreaStyle,
                isRequire: true,
                rightIcon: () => <MaterialCommunityIcons size={20} color={StyleConfig.COLOR.RED_REDICAL} name={'pencil'} />,
            },
            {
                name: 'agenda_start_location',
                label: createNewTour.agenda_start,
                subLabel: createNewTour.starting_location,
                returnKeyType: 'done',
                placeholder: createNewTour.select_a_location,
                keyboardType: 'default',
                inputType: 'geoCoder',
                isRequire: true,
                textStyle: { fontSize: 14, textAlign: 'left' },
            },
            {
                name: 'agenda_start_description',
                subLabel: createNewTour.starting_description,
                placeholder: createNewTour.description,
                returnKeyType: 'next',
                multiline: true,
                maxLength: 1500,
                isQuestion: true,
                keyboardType: 'default',
                containerStyle: styles.textAreaStyle,
                rightIcon: () => <MaterialCommunityIcons size={20} color={StyleConfig.COLOR.RED_REDICAL} name={'pencil'} />,
            }
        ];

        let AGENDA_DATA = [
            {
                name: 'title',
                subLabel: createNewTour.title,
                label: createNewTour.agenda_item_1,
                returnKeyType: 'done',
                placeholder: createNewTour.heading,
                keyboardType: 'default',
                // isRequire: true,
            },
            {
                name: 'description',
                subLabel: createNewTour.description,
                placeholder: createNewTour.description,
                returnKeyType: 'next',
                multiline: true,
                maxLength: 1500,
                keyboardType: 'default',
                containerStyle: styles.textAreaStyle,
                rightIcon: () => <MaterialCommunityIcons size={20} color={StyleConfig.COLOR.RED_REDICAL} name={'pencil'} />,
                // isRequire: true,
            },
        ];
        let AGENDA_END_DATA = [
            {
                name: 'agenda_end_location',
                label: createNewTour.agenda_end,
                subLabel: createNewTour.wrap_up_location,
                returnKeyType: 'done',
                placeholder: createNewTour.select_a_location,
                keyboardType: 'default',
                inputType: 'geoCoder',
                isRequire: true,
                textStyle: { fontSize: 14, textAlign: 'left', alignSelf: 'flex-start' },
            },
            {
                name: 'agenda_end_description',
                subLabel: createNewTour.wrap_up_description,
                placeholder: createNewTour.description,
                returnKeyType: 'next',
                multiline: true,
                maxLength: 1500,
                isQuestion: true,
                rightIcon: () => <MaterialCommunityIcons size={20} color={StyleConfig.COLOR.RED_REDICAL} name={'pencil'} />,
                keyboardType: 'default',
                containerStyle: styles.textAreaStyle,
            }
        ]

        return (
            <ScrollView>
                <View>
                    <View>
                        <View style={{ paddingTop: StyleConfig.countPixelRatio(20), paddingHorizontal: StyleConfig.countPixelRatio(20) }}>
                            {this._renderLineView(createNewTour.proposed_agenda)}
                            {AGENDA_START_DATA.map((value, key) => { return this._renderItem(value, key) })}
                            {AGENDA_DATA.map((value, key) => { return this._renderItem(value, key) })}
                            <View style={{ paddingTop: StyleConfig.countPixelRatio(10) }}>
                                <View style={{ paddingBottom: StyleConfig.countPixelRatio(10) }}>
                                    <CText type={'medium'} style={[styles.label, { fontSize: StyleConfig.fontSizeH3_4 }]}>{createNewTour.pictures}</CText>
                                </View>
                                <View style={styles.imageConatiner}>
                                    <Image resizeMode={'contain'} style={{ height: StyleConfig.responsiveHeight(10), width: StyleConfig.responsiveHeight(10) }} source={AppImages.photography}></Image>
                                </View>
                                <View style={styles.uploadBtn}>
                                    <CButton
                                        onPress={() => alert('upload')}
                                        textStyle={{ fontSize: StyleConfig.fontSizeH3, marginHorizontal: StyleConfig.countPixelRatio(20) }}
                                        containerStyle={{ minHeight: StyleConfig.responsiveHeight(4.5), height: StyleConfig.responsiveHeight(4.5) }}>
                                        {createNewTour.upload_pictures}
                                    </CButton>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{ padding: StyleConfig.countPixelRatio(20) }}>
                        <CButton
                            onPress={() => alert('press')}
                            isLeftIcon
                            leftIconName={'close'}
                            leftIconSize={30}
                            leftIconColor={StyleConfig.COLOR.WHITE_OFF}
                            textStyle={{ fontSize: StyleConfig.fontSizeH3 }}
                            containerStyle={[styles.addButtonContainer, { backgroundColor: StyleConfig.COLOR.GREY_LIGHT }]}>
                            {createNewTour.remove_item}
                        </CButton>
                        <CButton
                            onPress={() => alert('press')}
                            isLeftIcon
                            leftIconName={'plus'}
                            leftIconSize={30}
                            leftIconColor={StyleConfig.COLOR.WHITE_OFF}
                            textStyle={{ fontSize: StyleConfig.fontSizeH3 }}
                            containerStyle={styles.addButtonContainer}>
                            {createNewTour.add_item}
                        </CButton>
                        {AGENDA_END_DATA.map((value, key) => { return this._renderItem(value, key) })}
                        <View>
                            <CButton
                                onPress={handleSubmit(this.onPressSaveAndNext)}
                                textStyle={{ fontSize: 20, color: StyleConfig.COLOR.WHITE, fontFamily: StyleConfig.getFont('medium') }}
                                containerStyle={styles.buttonContainer}>
                                {createNewTour.save_show_missing}
                            </CButton>
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const validate = values => {
    let errors = {};
    errors.agenda_description = !values.agenda_description
        ? 'Agenda Description is required' : undefined;
    errors.agenda_start_location = !values.agenda_start_location
        ? 'Agenda start location is required' : undefined;
    errors.agenda_start_description = !values.agenda_start_description
        ? 'Agenda start description is required' : undefined;
    errors.agenda_end_location = !values.agenda_end_location
        ? 'Agenda End locatio is required' : undefined;
    errors.agenda_end_description = !values.agenda_end_description
        ? 'Agenda End Description is required' : undefined;
    return errors;
}

const withForm = reduxForm({
    form: 'agendaForm',
    validate,
})

const mapStateToProps = (state) => {
    return {
        state,
    }
}

export default connect(mapStateToProps, null)(withForm(Agenda));

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

    subContent: {
        // padding: StyleConfig.countPixelRatio(20),
        paddingHorizontal: StyleConfig.countPixelRatio(20)
    },

    textInputStyle: {
        flex: 1,
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
        marginTop: StyleConfig.countPixelRatio(5),
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
    inputContainer: {
        marginBottom: StyleConfig.countPixelRatio(6),
        marginTop: StyleConfig.countPixelRatio(8)
    },
    textAreaStyle: {
        height: 180,
        textAlignVertical: 'top'
    },
    imageConatiner: {
        justifyContent: 'center',
        alignItems: 'center',
        height: StyleConfig.responsiveHeight(15),
        backgroundColor: StyleConfig.COLOR.LIGHTER_GREY,
        borderRadius: StyleConfig.countPixelRatio(30),
    },
    uploadBtn: {
        // flex: 1,
        alignSelf: 'flex-end',
        bottom: -15,
        position: 'absolute',
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
    rightIconCenterStyle: {
        alignSelf: 'center'
    }
})