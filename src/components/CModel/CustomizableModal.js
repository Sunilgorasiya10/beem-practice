/** Copyright Wegether Technologies LLC 2019 */

import React, {Component} from 'react';
import {View, StyleSheet, Modal, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';
import StyleConfig from "../../assets/StyleConfig";
import CButton from "../CButton";
import CText from "../CText";


class CustomizableModal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {visible, onSubmit, onDismiss, children, heading, containerStyle, noCancelButton, noSubmitButton, headingTextStyle} = this.props;
        return (
            <Modal
                animationType="fade"
                transparent
                visible={visible}
                onRequestClose={onDismiss}>
                <TouchableHighlight style={styles.mainContainer} onPress={onDismiss}>
                    <TouchableWithoutFeedback onPress={() => {
                    }}>
                        <View style={[styles.container, containerStyle]}>
                            <CText style={[styles.detailText, headingTextStyle]} type={'bold'}>{heading}</CText>
                            {children}
                            <View style={styles.buttonView}>
                                {!noCancelButton && <View style={styles.leftView}>
                                    <CButton
                                        isImage
                                        name={'close'}
                                        size={35}
                                        onPress={onDismiss}
                                        color={StyleConfig.COLOR.RED_REDICAL}
                                        containerStyle={styles.buttonContainer}
                                    />
                                </View>}
                                {!noSubmitButton &&
                                    <View style={styles.rightView}>
                                        <CButton
                                            isImage
                                            name={'check'}
                                            size={35}
                                            onPress={onSubmit}
                                            color={StyleConfig.COLOR.WHITE}
                                            containerStyle={styles.selectedButton}
                                        />
                                    </View>
                                }
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </TouchableHighlight>
            </Modal>
        )
    }
}

export default CustomizableModal;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        marginHorizontal: StyleConfig.countPixelRatio(10),
        alignItems: 'center',
        borderRadius: StyleConfig.countPixelRatio(12),
        shadowColor: StyleConfig.COLOR.BLACK,
        backgroundColor: StyleConfig.COLOR.WHITE,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 0.3,
        borderWidth: StyleConfig.countPixelRatio(0.6),
        borderColor: StyleConfig.COLOR.GREY_DARK,
    },
    detailText: {
        fontSize: StyleConfig.countPixelRatio(22),
        marginVertical: StyleConfig.countPixelRatio(28),
        color: StyleConfig.COLOR.HEADER_ICON
    },
    buttonView: {
        flexDirection: 'row',
        marginHorizontal: StyleConfig.countPixelRatio(25),
        marginVertical: StyleConfig.countPixelRatio(10)
    },
    leftView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rightView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        backgroundColor: StyleConfig.COLOR.WHITE,
        borderColor: StyleConfig.COLOR.RED_REDICAL,
        borderWidth: StyleConfig.countPixelRatio(0.8),
        borderRadius: StyleConfig.countPixelRatio(22),
        width: StyleConfig.countPixelRatio(44),
        height: StyleConfig.countPixelRatio(44),
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectedButton: {
        backgroundColor: StyleConfig.COLOR.RED_REDICAL,
        borderRadius: StyleConfig.countPixelRatio(22),
        width: StyleConfig.countPixelRatio(44),
        height: StyleConfig.countPixelRatio(44),
        alignItems: 'center',
        justifyContent: 'center'
    },
    tripButtonContainer: {
        width: StyleConfig.responsiveWidth(80),
        height: StyleConfig.countPixelRatio(80),
        marginBottom: StyleConfig.countPixelRatio(15),
        marginHorizontal: StyleConfig.countPixelRatio(20),
        backgroundColor: StyleConfig.COLOR.WHITE,
        borderWidth: StyleConfig.countPixelRatio(0.8),
        shadowOpacity: 0,
        borderRadius: StyleConfig.countPixelRatio(15)
    },
});
