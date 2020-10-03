/** Copyright Beem Technologies LLC 2019 */

import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, Modal } from 'react-native'
import StyleConfig from "../../assets/StyleConfig";
import { paymentRequest } from "../../assets/strings";
import { CHeader } from "../../components/CHeader";
import { formValueSelector, reduxForm } from "redux-form";
// import withLoader from "../../redux/actionCreator/withLoader";
// import withToast from "../../redux/actionCreator/withToast";
import { connect } from "react-redux";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CText from "../../components/CText";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
// import ReduxField from "../../components/ReduxField";
import CButton from "../../components/CButton";

class PaymentRequest extends Component {

    constructor(props) {
        super(props)
    }
    // DATA = [ 
    //     {
    //         name: 'amount',
    //         label: paymentRequest.request_amount,
    //         returnKeyType: 'done',
    //         placeholder: 'Enter Amount',
    //         keyboardType: 'numeric',
    //         showCurSymbol: '$',
    //         isRequire: true,
    //         blurOnSubmit: true,
    //     },
    //     {
    //         name: 'comments',
    //         label: paymentRequest.notes_comments,
    //         placeholder: paymentRequest.description,
    //         returnKeyType: 'done',
    //         multiline: true,
    //         maxLength: 1500,
    //         isShowLimit: true,
    //         keyboardType: 'default',
    //         containerStyle: styles.textAreaStyle,
    //         isRequire: true,
    //         blurOnSubmit: true,
    //         rightIcon: () => <MaterialCommunityIcons size={20} color={StyleConfig.COLOR.BLACK} name={'pencil'}
    //             style={styles.rightIconStyle} />,
    //     },
    // ];

    // constructor(props) {
    //     super(props);
    // };

    // _renderItem = (item, index) => {
    //     const { name, modalHeading, isType, blurOnSubmit, containerStyle } = item;

    //     return (
    //         <View key={'fields' + index} style={styles.inputContainer}>
    //             {(item.label) &&
    //                 <View style={{ flexDirection: 'row' }}>
    //                     {(item.label) && <CText type={'bold'} style={styles.label}>{item.label}</CText>}
    //                     {(item.isRequire) &&
    //                         <FontAwesome5 name={'star-of-life'} size={6} style={{ paddingLeft: StyleConfig.countPixelRatio(6) }}
    //                             color={StyleConfig.COLOR.RED} />}
    //                 </View>
    //             }

    //             <ReduxField
    //                 {...item}
    //                 refField={ref => this[name] = ref}
    //                 autoCapitalize={'none'}
    //                 editable={true}
    //                 isCancelModal
    //                 isType={isType}
    //                 inputStyle={{ fontSize: StyleConfig.countPixelRatio(14) }}
    //                 textStyle={{ fontSize: StyleConfig.countPixelRatio(14) }}
    //                 blurOnSubmit={(blurOnSubmit) ? blurOnSubmit : false}
    //                 containerStyle={[containerStyle, { backgroundColor: StyleConfig.COLOR.LIGHTER_GREY, marginBottom: 4 }]}
    //                 flatListContainerStyle={styles.dropDownContainerStyle}
    //                 modalHeading={modalHeading}
    //             />
    //         </View>
    //     )
    // };

    // onPressRequestPayment = (values) => {
    //     const { amount, comments } = this.props;
    //     const amountData = (amount && amount !== null && amount !== undefined && (amount.toString()).includes('$')) ? amount.replace('$', '') : amount;
    //     const data = {
    //         amount: (amountData) ? Number(amountData) : 0,
    //         note: comments,
    //     };
    //     this.props.onPressRequest(data);
    //     this.props.change('amount', '');
    //     this.props.change('comments', '');
    // };

    render() {
        const { handleSubmit, visible, onDismiss, userName } = this.props;
        return (
            <Modal
                animationType="slideInDown"
                transparent
                visible={visible}
                onRequestClose={onDismiss}>
                <View style={styles.container}>
                    <CHeader
                        showLeft
                        headerValue={'payment_request'}
                        pressLeftAction={() => onDismiss}
                    />
                    <ScrollView>
                        <View style={styles.content}>
                            <View style={styles.itemButtonContainer}>
                                <CText type={'bold'} style={{ fontSize: StyleConfig.fontSizeParagraph, color: StyleConfig.COLOR.WHITE, textAlign: 'center' }}>
                                    {'userName'}
                                </CText>
                            </View>
                            {/* {this.DATA.map((value, key) => { return this._renderItem(value, key) })} */}
                            <CButton
                                onPress={() => alert('done')}
                                textStyle={{ fontSize: 20, color: StyleConfig.COLOR.WHITE, fontFamily: StyleConfig.getFont('medium') }}
                                containerStyle={styles.buttonContainer}>{'done'}
                            </CButton>
                        </View>
                    </ScrollView>
                </View>
            </Modal>
        )
    }
}

// const initialValues = {
//     amount: '',
//     comments: '',
// };

// const validate = values => {
//     let errors = {};
//     errors.amount = !values.amount
//         ? 'Amount is required' : undefined;
//     errors.comments = !values.comments
//         ? 'Comments are required' : undefined;
//     return errors;
// };

// const selector = formValueSelector('paymentRequestForm');

// const withForm = reduxForm({
//     form: 'paymentRequestForm',
//     validate,
//     initialValues,
// });

// const mapStateToProps = state => {
//     return {
//         amount: selector(state, 'amount'),
//         comments: selector(state, 'comments'),
//     }
// };

export default PaymentRequest;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleConfig.COLOR.WHITE_OFF,
        paddingBottom: (StyleConfig.isIphone) ? StyleConfig.countPixelRatio(16) : StyleConfig.countPixelRatio(8),
    },
    content: {
        backgroundColor: StyleConfig.COLOR.WHITE_OFF,
        marginVertical: StyleConfig.countPixelRatio(10),
        paddingHorizontal: StyleConfig.countPixelRatio(20)
    },
    itemButtonContainer: {
        flexDirection: 'row',
        height: StyleConfig.countPixelRatio(36),
        width: StyleConfig.responsiveWidth(70),
        minHeight: StyleConfig.countPixelRatio(36),
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        borderWidth: StyleConfig.countPixelRatio(1),
        borderColor: StyleConfig.COLOR.BACKGROUND,
        borderRadius: StyleConfig.countPixelRatio(30),
        marginBottom: StyleConfig.countPixelRatio(8),
        backgroundColor: StyleConfig.COLOR.BACKGROUND,
        shadowColor: StyleConfig.COLOR.BACKGROUND,
        shadowOpacity: 0.5,
        elevation: 3,
        shadowOffset: {
            height: 0,
            width: 0
        }
    },
    dropDownContainerStyle: {
        height: StyleConfig.responsiveHeight(35),
        borderWidth: StyleConfig.countPixelRatio(0),
        borderColor: StyleConfig.COLOR.WHITE_OFF,
        borderRadius: StyleConfig.countPixelRatio(0),
        marginVertical: StyleConfig.countPixelRatio(0),
        backgroundColor: StyleConfig.COLOR.LIGHTER_GREY,
        shadowColor: StyleConfig.COLOR.WHITE_OFF,
        shadowOpacity: 0,
        elevation: 0,
        shadowOffset: {
            height: 0,
            width: 0
        },
    },
    label: {
        fontSize: StyleConfig.fontSizeH3,
        color: StyleConfig.COLOR.BLACK_OFF,
        marginBottom: StyleConfig.countPixelRatio(8)
    },
    inputContainer: {
        marginBottom: StyleConfig.countPixelRatio(6),
        marginTop: StyleConfig.countPixelRatio(8)
    },
    buttonContainer: {
        marginVertical: StyleConfig.countPixelRatio(20),
    },
    textAreaStyle: {
        height: 180,
        alignItems: 'flex-start',
        paddingVertical: StyleConfig.countPixelRatio(6)
    },
});
