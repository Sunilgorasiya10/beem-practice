import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Text, TextInputComponent } from 'react-native';
import StyleConfig from '../../assets/StyleConfig'
import CText from '../CText';
import { Field } from 'redux-form';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CDropdown from '../../components/CDropdown';


class ReduxFieldComponent extends Component {
    render() {
        const { placeholderTextColor,
            placeholder,
            secureTextEntry,
            refField,
            returnKeyType,
            multiline,
            maxLength,
            numberOfLines,
            keyboardType,
            rightIcon,
            leftIcon,
            inputType,
            data,
            isType,
            disabled,
            textStyle,
            isChangeRightIcon,
            flatListContainerStyle,
            modalHeading,
            containerStyle,
            isShowLimit,
            blurOnSubmit,
            input: { value, ...restInput },
            meta: { error, touched },
            onSubmitEditing } = this.props;

        const textInputComponent = (

            <TextInput
                ref={refField}
                returnKeyType={returnKeyType}
                style={[styles.inputStyle]}
                placeholder={placeholder}
                multiline={multiline}
                maxLength={maxLength}
                keyboardType={keyboardType}
                numberOfLines={numberOfLines}
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={secureTextEntry}
                value={value}
                blurOnSubmit={blurOnSubmit}
                isShowLimit={isShowLimit}
                // onChangeText={onChange}
                onSubmitEditing={onSubmitEditing}
                {...restInput}
            >
            </TextInput>
        );
        const errorComponent = (
            <View>
                {touched && error && <CText type={'regular'} style={styles.errorText}>{error}</CText>}
            </View>
        );
        switch (inputType) {
            case 'dropdown':
                return (
                    <View>
                        <CDropdown
                            placeHolder={placeholder}
                            item={data}
                            isLeftIcon
                            leftIcon={leftIcon}
                            isCancelModal
                            flatListContainerStyle={flatListContainerStyle}
                            modalHeading={modalHeading}
                            // displayImageBtn={(displayImageBtn) ? displayImageBtn : false}
                            isType={(isType) ? isType : undefined}
                            dropdownContainerStyle={[styles.dropdownStyle, containerStyle]}
                            dropdownTextStyle={textStyle}
                            selectedItem={(item) => onSelectChange(item)}
                            disabled={(disabled) ? disabled : false}
                        // selectedDataPrev={selectedDataPrev}
                        // arrowStyle={arrowStyle}
                        // selectedData={selectedData}
                        />
                        <View style={[styles.errorView, { paddingLeft: StyleConfig.countPixelRatio(5) }]}>
                            {errorComponent}
                        </View>
                    </View>
                )
            default:
                return (
                    <View>
                        <View style={[styles.txtInputStyle, containerStyle]}>
                            {leftIcon && leftIcon()}
                            {textInputComponent}
                            {rightIcon && rightIcon()}
                        </View>
                        <View style={styles.errorView}>
                            {errorComponent}
                        </View>
                    </View>
                )
        }

    }
}

class CTextInput extends Component {
    render() {
        return (
            <Field
                {...this.props}
                component={ReduxFieldComponent}
                withRef

            />
        )
    }
}


export default CTextInput;

const styles = StyleSheet.create({

    errorText: {
        color: StyleConfig.COLOR.RED,
        fontFamily: StyleConfig.fontRegular,
        fontSize: StyleConfig.countPixelRatio(12),
        marginTop: StyleConfig.countPixelRatio(6),
    },
    errorView: {
        marginHorizontal: StyleConfig.countPixelRatio(10),
    },
    txtInputStyle: {
        // width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        // justifyContent: 'flex-start',
        minHeight: StyleConfig.countPixelRatio(44),
        // marginTop: StyleConfig.countPixelRatio(12),
        borderWidth: StyleConfig.countPixelRatio(1),
        borderRadius: StyleConfig.countPixelRatio(30),
        borderColor: StyleConfig.COLOR.WHITE_OFF,
        fontSize: StyleConfig.fontSizeH3,
        fontFamily: StyleConfig.fontMedium,
        backgroundColor: StyleConfig.COLOR.WHITE,
        paddingHorizontal: StyleConfig.countPixelRatio(15),
        shadowColor: StyleConfig.COLOR.BLACK,
        shadowOpacity: 0.1,
        elevation: 2,
        shadowOffset: {
            height: 0,
            width: 0
        },
    },
    inputStyle: {
        flex: 1
    },
    dropdownStyle: {
        shadowColor: StyleConfig.COLOR.BLACK,
        borderColor: StyleConfig.COLOR.WHITE_OFF,
        shadowOpacity: 0.1,
        elevation: 2,
        shadowOffset: {
            height: 0,
            width: 0
        },
        marginVertical: 0
    },
    // leftIconStyle: {
    //     // paddingLeft: StyleConfig.countPixelRatio(8),
    //     flex: 1,
    //     alignItems: 'flex-end',
    //     justifyContent: 'flex-end'
    // }
})