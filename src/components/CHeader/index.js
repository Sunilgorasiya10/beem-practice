import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import CButton from '../../components/CButton';
import CText from '../../components/CText';
import AppImages from '../../assets/images/index';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import StyleConfig from '../../assets/StyleConfig';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function CHeader({ headerValue, showRight, showLeft, containerStyle, headerTextStyle, IsIcon, IsLeftIcon }) {
    return (
        <View style={[styles.headerContainer, containerStyle]}>

            {showLeft &&
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => alert('pressed')}
                        style={styles.buttonContainer}
                    >
                        <MaterialCommunityIcons
                            name={'arrow-left'}
                            size={30}
                            color={StyleConfig.COLOR.HEADER_ICON}
                            style={{ paddingTop: 8 }}
                        >
                        </MaterialCommunityIcons>
                    </TouchableOpacity>
                </View>

            }

            {IsLeftIcon &&
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => alert('pressed')}
                        style={styles.buttonContainer}
                    >
                        <MaterialCommunityIcons
                            name={'email'}
                            size={30}
                            color={StyleConfig.COLOR.RED_REDICAL}
                            style={{ padding: 8 }}
                        >
                        </MaterialCommunityIcons>
                    </TouchableOpacity>
                </View>

            }

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <CText type={'bold'} style={[styles.headerText, headerTextStyle]}>{headerValue}</CText>
            </View>
            {showRight &&
                <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => alert('pressed')}
                        style={styles.buttonMenuContainer}
                    >
                        <MaterialCommunityIcons name={'menu'} size={26} color={StyleConfig.COLOR.HEADER_ICON} ></MaterialCommunityIcons>
                    </TouchableOpacity>
                </View>
            }
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
        marginTop: StyleConfig.countPixelRatio(3),
        // padding: StyleConfig.countPixelRatio(5)
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: StyleConfig.countPixelRatio(8)
    },
    appIconStyle: {
        height: StyleConfig.countPixelRatio(50),
    },
})

