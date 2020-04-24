import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import CText from '../../components/CText';
import StyleConfig from '../../assets/StyleConfig';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CButton = ({ children, containerStyle, onPress, textStyle, isLeftIcon, leftIconName, leftIconSize, leftIconColor }) => (
    <TouchableOpacity
        style={[styles.buttonContainer, containerStyle]}
        onPress={onPress}>
        {isLeftIcon &&
            <Icon style={styles.leftIconStyle} name={leftIconName} size={leftIconSize} color={leftIconColor}></Icon>
        }
        <CText type={'medium'} style={[styles.buttonText, textStyle]}>{children}</CText>
    </TouchableOpacity>
);

export default CButton;

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        height: StyleConfig.responsiveHeight(6.4),
        // height: StyleConfig.countPixelRatio(44),
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
    leftIconStyle: {
        paddingRight: StyleConfig.countPixelRatio(8),
    }
})