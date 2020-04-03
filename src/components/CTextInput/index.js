import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import StyleConfig from '../../assets/StyleConfig'

const CTextInput = (props) => {
    const { placeholderTextColor,
        placeholder,
        secureTextEntry,
        refField,
        returnKeyType,
        input: { onChange, value },
        meta: { error, touched },
        onSubmitEdit } = props;

    return (
        <View>
            <TextInput
                ref={refField}
                returnKeyType={returnKeyType}
                style={styles.txtInputStyle}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                secureTextEntry={secureTextEntry}
                value={value}
                onChangeText={onChange}
                onSubmitEditing={() => {
                    if (onSubmitEdit) {
                        onSubmitEdit()
                    }
                }}>
            </TextInput>
            {touched && error && <Text style={{ color: 'red' }}>{error}</Text>}
        </View>
    )
}

export default CTextInput;

const styles = StyleSheet.create({
    txtInputStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StyleConfig.countPixelRatio(12),
        minHeight: StyleConfig.countPixelRatio(StyleConfig.isIphone ? 44 : 32),
        borderWidth: StyleConfig.countPixelRatio(1),
        borderRadius: StyleConfig.countPixelRatio(30),
        borderColor: StyleConfig.COLOR.WHITE_OFF,
        fontSize: StyleConfig.fontSizeH3,
        fontFamily: StyleConfig.fontMedium,
        backgroundColor: StyleConfig.COLOR.WHITE,
        paddingHorizontal: StyleConfig.countPixelRatio(12),
        shadowColor: StyleConfig.COLOR.BLACK,
        shadowOpacity: 0.1,
        elevation: 2,
        shadowOffset: {
            height: 0,
            width: 0
        },

    }
})