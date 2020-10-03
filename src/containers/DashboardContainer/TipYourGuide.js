import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Modal } from 'react-native';
import { CHeader } from '../../components/CHeader';
import StyleConfig from '../../assets/StyleConfig';
import CText from '../../components/CText';
import { tipYourGuide } from '../../assets/strings';
import CTextInput from "../../components/CTextInput";
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import CButton from '../../components/CButton';


class TipYourGuide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPayment: {},
        };
    }

    _renderItem = (item, index) => {
        const { containerStyle, name } = item;
        return (
            <View style={styles.inputContainer}>
                <View>
                    {(item.label) && <CText type={'bold'} style={styles.label}>{item.label}</CText>}
                </View>
                <View style={{ marginBottom: StyleConfig.countPixelRatio(8) }}>
                    {(item.sublabel) && <CText type={'medium'} style={[styles.label, { fontSize: StyleConfig.fontSizeH3_4 }]}>{item.sublabel}</CText>}
                </View>
                <CTextInput
                    {...item}
                    refField={ref => this[name] = ref}
                    containerStyle={containerStyle}
                >
                </CTextInput>
            </View>
        )
    }
    render() {

        const { handleSubmit, visible, onDismiss, onPressPayment, navigation } = this.props;

        let FIELDS_DATA = [
            {
                name: 'tip_amount',
                inputType: 'dropdown',
                modalHeading: 'Select Tip Amount',
                data: tipYourGuide.tip_amount_data,
                label: tipYourGuide.tip_amount,
                sublabel: tipYourGuide.select_amount,
                placeholder: 'Select Amount',
                returnKeyType: 'done',
                keyboardType: 'default',
                blurOnSubmit: true,
                rightIcon: () => <MaterialCommunityIcons size={30} color={StyleConfig.COLOR.RED_REDICAL} name={'chevron-down'}
                    style={styles.rightIconCenterStyle} />,
            },
            {
                name: 'payment_total',
                label: tipYourGuide.payment_total,
                sublabel: tipYourGuide.charged_amount,
                placeholder: "$ 15.00",
                returnKeyType: 'done',
                keyboardType: 'default',
                blurOnSubmit: true,
            },
            {
                name: 'comments',
                label: tipYourGuide.comments,
                placeholderTextColor: StyleConfig.COLOR.BLACK,
                placeholder: tipYourGuide.comment_placeholder1,
                keyboardType: 'default',
                returnKeyType: 'next',
                multiline: true,
                maxLength: 1500,
                numberOfLines: 3,
                blurOnSubmit: true,
                // isShowLimit: false,
                containerStyle: styles.textAreaStyle,
            }
        ]

        let RENDER_DATA = [
            {
                label: tipYourGuide.tip_policy_1,
            },
            {
                label: tipYourGuide.tip_policy_2,
            },
            {
                label: tipYourGuide.tip_policy_3,
            },
        ]

        return (
            <Modal
                animationType="slideInDown"
                transparent
                visible={visible}
                onRequestClose={onDismiss}>
                <View style={styles.container}>
                    <CHeader
                        showLeft
                        showRight
                        headerValue={'Tip Your Guide'}
                    ></CHeader>
                    <ScrollView>
                        <View style={{ paddingHorizontal: StyleConfig.countPixelRatio(20), marginTop: StyleConfig.countPixelRatio(10) }}>
                            <View >
                                {FIELDS_DATA.map((value, key) => { return this._renderItem(value, key) })}
                            </View>
                            <View>
                                {RENDER_DATA.map((item) =>
                                    <CText type={'medium'} style={styles.textStyle}>{item.label}</CText>
                                )}
                            </View>
                            <CButton
                                onPress={() => alert('Send Tip')}
                                containerStyle={styles.buttonContainer}>{tipYourGuide.send_tip}
                            </CButton>
                        </View>
                    </ScrollView>
                </View>
            </Modal>
        )
    }
}

const withForm = reduxForm({
    form: 'tipYourGuideFrom'
})

const mapStateToProps = (state) => {
    return {
        state
    }
}
export default connect(mapStateToProps, null)(withForm(TipYourGuide));

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleConfig.COLOR.WHITE_OFF,
    },
    rightIconCenterStyle: {
        alignSelf: 'center'
    },
    label: {
        fontSize: StyleConfig.fontSizeH3,
        color: StyleConfig.COLOR.BLACK_OFF,

    },
    inputContainer: {
        marginBottom: StyleConfig.countPixelRatio(20),
        marginTop: StyleConfig.countPixelRatio(8)
    },
    textAreaStyle: {
        height: 180,
        textAlignVertical: 'top',
    },
    textStyle: {
        marginBottom: StyleConfig.countPixelRatio(10),
        color: StyleConfig.COLOR.RED_REDICAL,
        fontSize: StyleConfig.fontSizeH3_4,
    },
    buttonContainer: {
        marginVertical: StyleConfig.countPixelRatio(20),
        marginTop: StyleConfig.countPixelRatio(40)
    },
})