import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import CText from '../../components/CText';
import StyleConfig from '../../assets/StyleConfig';

const CButton = ({ children, containerStyle, onPress, textStyle }) => (
    <TouchableOpacity
        style={[styles.buttonContainer, containerStyle]}
        onPress={onPress}>
        <CText type={'medium'} style={[styles.buttonText, textStyle]}>{children}</CText>
    </TouchableOpacity>
);

export default CButton;

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        height: StyleConfig.countPixelRatio(44),
        minHeight: StyleConfig.countPixelRatio(44),
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: StyleConfig.countPixelRatio(1),
        borderColor: StyleConfig.COLOR.RED_REDICAL,
        borderRadius: StyleConfig.countPixelRatio(30),
        marginVertical: StyleConfig.countPixelRatio(8),
        backgroundColor: StyleConfig.COLOR.RED_REDICAL,
        shadowColor: StyleConfig.COLOR.RED_REDICAL,
        shadowOpacity: 0.5,
        elevation: 3,
        shadowOffset: {
            height: 0,
            width: 0
        }
    },

    buttonText: {
        color: StyleConfig.COLOR.WHITE,
        fontSize: StyleConfig.fontSizeH2_3
    },
})