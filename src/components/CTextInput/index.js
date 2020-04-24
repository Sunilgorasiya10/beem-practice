import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import StyleConfig from '../../assets/StyleConfig'

const CTextInput = (props) => {
    const { placeholderTextColor,
        placeholder,
        secureTextEntry,
        refField,
        returnKeyType,
        multiline,
        maxLength,
        numberOfLines,
        keyboardType,
        containerStyle,
        input: { onChange, value, },
        meta: { error, touched },
        onSubmitEditing } = props;

    return (
        <View >
            <TextInput
                ref={refField}
                returnKeyType={returnKeyType}
                style={[styles.txtInputStyle, containerStyle]}
                placeholder={placeholder}
                multiline={multiline}
                maxLength={maxLength}
                keyboardType={keyboardType}
                numberOfLines={numberOfLines}
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChange}
                onSubmitEditing={onSubmitEditing}
            >
            </TextInput>
            {touched && error && <Text style={{ color: 'red' }}>{error}</Text>}
        </View>
    )
}

export default CTextInput;

const styles = StyleSheet.create({

    // txtInputStyle: {
    // width: '100%'
    //     // flex: 1,
    //     // flexDirection: 'row',
    //     // alignItems: 'center',
    //     // justifyContent: 'center',
    //     // marginTop: StyleConfig.countPixelRatio(12),
    //     // borderWidth: StyleConfig.countPixelRatio(1),
    //     // borderRadius: StyleConfig.countPixelRatio(30),
    //     // borderColor: StyleConfig.COLOR.WHITE_OFF,
    //     // fontSize: StyleConfig.fontSizeH3,
    //     // fontFamily: StyleConfig.fontMedium,
    //     // backgroundColor: StyleConfig.COLOR.WHITE,
    //     // paddingHorizontal: StyleConfig.countPixelRatio(15),
    //     // shadowColor: StyleConfig.COLOR.BLACK,
    //     // shadowOpacity: 0.1,
    //     // elevation: 2,
    //     // shadowOffset: {
    //     //     height: 0,
    //     //     width: 0
    //     // },
    // }
})