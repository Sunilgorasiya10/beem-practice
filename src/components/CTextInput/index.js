import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import StyleConfig from '../../assets/StyleConfig'

const CTextInput = (props) => {
    const { placeholderTextColor,
        placeholder,
        secureTextEntry,
        refField,
        returnKeyType,
        input: { onChange, value },
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
        </View>
    )
}

export default CTextInput;

const styles = StyleSheet.create({
    txtInputStyle: {
        borderWidth: 1,
        borderColor: 'red',
        paddingHorizontal: StyleConfig.countPixelRatio(15),
        borderRadius: 6,
        marginVertical: StyleConfig.countPixelRatio(8),
        color: StyleConfig.COLOR.WHITE,
    }
})