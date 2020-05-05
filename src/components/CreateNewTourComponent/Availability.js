import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
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
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

class Availibility extends Component {
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

        let AVAILABILITY_DATA = [
            {
                name: 'start_date',
                inputType: 'Touchable',
                label: createNewTour.select_date,
                returnKeyType: 'done',
                placeholder: createNewTour.available_date,
                keyboardType: 'default',
                isRequire: true,
                textStyle: { flex: 1 },
                rightIcon: () => <MaterialCommunityIcons size={24} color={StyleConfig.COLOR.GREY_DARK} name={'calendar'}
                    style={styles.rightIconCenterStyle} />,
            },
            {
                name: 'start_time',
                placeholder: createNewTour.from,
                label: createNewTour.select_time,
                inputType: 'Touchable',
                isRequire: true,
                textStyle: { flex: 3 },
                rightIcon: () => <MaterialCommunityIcons size={24} color={StyleConfig.COLOR.GREY_DARK} name={'clock-outline'}
                    style={styles.rightIconCenterStyle} />,
            }
        ]
        let CANCELLATION_DATA = [
            {
                name: 'cancellation_type',
                inputType: 'dropdown',
                textStyle: { fontSize: StyleConfig.countPixelRatio(14) },
                label: createNewTour.cancellation_policy,
                returnKeyType: 'done',
                placeholder: 'Select One',
                keyboardType: 'default',
                isRequire: true,
                isQuestion: true,
                rightIcon: () => <MaterialCommunityIcons size={30} color={StyleConfig.COLOR.RED_REDICAL} name={'chevron-down'}
                    style={styles.rightIconCenterStyle} />,
            }
        ]
        return (
            <ScrollView>
                <View>
                    <View>
                        <View style={{ paddingHorizontal: StyleConfig.countPixelRatio(16), marginTop: StyleConfig.countPixelRatio(10) }}>
                            {this._renderLineView(createNewTour.availability)}
                        </View>
                        <View style={styles.subContent}>
                            {AVAILABILITY_DATA.map((value, key) => { return this._renderItem(value, key) })}
                            <CButton
                                onPress={() => alert('press')}
                                isLeftIcon
                                leftIconName={'plus'}
                                leftIconSize={30}
                                leftIconColor={StyleConfig.COLOR.WHITE_OFF}
                                textStyle={{ fontSize: StyleConfig.fontSizeH3 }}
                                containerStyle={[styles.addButtonContainer, { backgroundColor: StyleConfig.COLOR.GREEN, minHeight: StyleConfig.responsiveHeight(4.5), height: StyleConfig.responsiveHeight(4.5) }]}>
                                {createNewTour.more_times}
                            </CButton>
                            <View>
                                <View style={{ flexDirection: 'row' }}>
                                    <CText type={'bold'} style={styles.label}>{createNewTour.recurring}</CText>
                                    <View style={{ flex: 1 }} />
                                    <Switch
                                        style={{ transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
                                        trackColor={{ true: StyleConfig.COLOR.RED_REDICAL, false: StyleConfig.COLOR.GREY_DIM }}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <CText type={'bold'} style={styles.label}>{createNewTour.instantly_confirmed}</CText>
                                    <View style={{ flex: 1 }} />
                                    <Switch
                                        style={{ transform: [{ scaleX: .9 }, { scaleY: .9 }] }}
                                        trackColor={{ true: StyleConfig.COLOR.RED_REDICAL, false: StyleConfig.COLOR.GREY_DIM }}
                                    />
                                </View>
                                <CText type={'medium'} style={[styles.label, { fontSize: StyleConfig.fontSizeH3_4, }]}>
                                    {createNewTour.confirmation_policy + ' '}
                                    <CText type={'medium'} style={[styles.label,
                                    { fontSize: StyleConfig.fontSizeH3_4, color: StyleConfig.COLOR.RED_REDICAL, textDecorationLine: 'underline' }]}>
                                        {createNewTour.policy}
                                    </CText>
                                </CText>
                                <View style={{ marginTop: StyleConfig.countPixelRatio(20) }}>
                                    <CButton
                                        onPress={() => alert('press')}
                                        isLeftIcon
                                        leftIconName={'plus'}
                                        leftIconSize={30}
                                        leftIconColor={StyleConfig.COLOR.WHITE_OFF}
                                        textStyle={{ fontSize: StyleConfig.fontSizeH3 }}
                                        containerStyle={[styles.addButtonContainer, { backgroundColor: StyleConfig.COLOR.RED_REDICAL, alignSelf: 'center' }]}>
                                        {createNewTour.set_date}
                                    </CButton>
                                </View>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal: StyleConfig.countPixelRatio(16), marginTop: StyleConfig.countPixelRatio(10) }}>
                            {this._renderLineView(createNewTour.calendar_preview)}
                            <View style={{ paddingTop: StyleConfig.countPixelRatio(5) }}>
                                {CANCELLATION_DATA.map((value, key) => { return this._renderItem(value, key) })}
                                <CText type={'medium'} style={[styles.label,
                                { fontSize: StyleConfig.fontSizeH3_4, paddingTop: StyleConfig.countPixelRatio(10) }]}>
                                    {createNewTour.cancellation_details + ' '}
                                    <CText type={'medium'} style={[styles.label,
                                    { fontSize: StyleConfig.fontSizeH3_4, color: StyleConfig.COLOR.RED_REDICAL, textDecorationLine: 'underline' }]}>
                                        {createNewTour.policies}
                                    </CText>
                                </CText>
                                <View style={{ paddingTop: StyleConfig.countPixelRatio(10) }}>
                                    <Calendar
                                        scrollEnabled={true}
                                        theme={{
                                            calendarBackground: StyleConfig.COLOR.WHITE,
                                            backgroundColor: StyleConfig.COLOR.WHITE_MODAL,
                                            todayTextColor: StyleConfig.COLOR.RED_REDICAL,
                                        }}
                                    />
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10, backgroundColor: StyleConfig.COLOR.LIGHTER_GREY }}>
                                    <CText type={'bold'} style={styles.label}>{createNewTour.available_times}</CText>
                                    <CText type={'bold'} style={[styles.label, { color: StyleConfig.COLOR.GREY_DIM }]}>
                                        {moment().format('MM/DD/YYYY')}
                                    </CText>
                                </View>
                                <View style={styles.subContent}>
                                    <CButton
                                        onPress={handleSubmit(this.onPressSaveAndNext)}
                                        textStyle={{ fontSize: 20, color: StyleConfig.COLOR.WHITE, fontFamily: StyleConfig.getFont('medium') }}
                                        containerStyle={styles.buttonContainer}>
                                        {createNewTour.save_and_next}
                                    </CButton>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView >
        )
    }
}

const validate = values => {
    let errors = {};
    errors.start_date = !values.start_date
        ? 'Start Date is required' : undefined;
    errors.start_time = !values.start_time
        ? 'Start Time is required' : undefined;
    errors.cancellation_type = !values.cancellation_type
        ? 'Cnacellation type is required' : undefined;
    return errors;

}

const withForm = reduxForm({
    form: 'availibilityForm',
    validate,
})

const mapStateToProps = (state) => {
    return {
        state,
    }
}

export default connect(mapStateToProps, null)(withForm(Availibility));

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
        padding: StyleConfig.countPixelRatio(20),
    },
    inputContainer: {
        marginBottom: StyleConfig.countPixelRatio(6),
        marginTop: StyleConfig.countPixelRatio(8)
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
        // marginHorizontal: StyleConfig.countPixelRatio(20)
    },
    rightIconCenterStyle: {
        alignSelf: 'center'
    }
})