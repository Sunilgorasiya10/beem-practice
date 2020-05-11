import React from 'react';
import { View, StyleSheet } from 'react-native';
import CButton from '../../components/CButton';
import CText from '../../components/CText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import StyleConfig from '../../assets/StyleConfig';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function CHeader({ headerValue, showRight, containerStyle }) {
    return (
        <View style={[styles.headerContainer, containerStyle]}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginLeft: 25 }} >
                <CText type={'bold'} style={styles.headerText}>{headerValue}</CText>
            </View>
            <View>
                {showRight &&
                    <TouchableOpacity onPress={() => alert('pressed')}
                        style={styles.buttonMenuContainer}
                    >
                        <MaterialCommunityIcons name={'menu'} size={26} color={StyleConfig.COLOR.HEADER_ICON}></MaterialCommunityIcons>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: StyleConfig.COLOR.WHITE_OFF,
        paddingHorizontal: StyleConfig.countPixelRatio(30),
        paddingBottom: StyleConfig.countPixelRatio(8),
        // justifyContent: 'center',
        flexDirection: 'row',
    },
    headerText: {
        color: StyleConfig.COLOR.HEADER_ICON,
        fontSize: StyleConfig.fontSizeH1_2
    },
    buttonMenuContainer: {
        justifyContent: 'center',
        height: StyleConfig.countPixelRatio(36),
        width: StyleConfig.countPixelRatio(36),
        alignItems: 'center',
        marginTop: StyleConfig.countPixelRatio(3)
    }
})

