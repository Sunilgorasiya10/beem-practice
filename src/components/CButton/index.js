import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import CText from '../../components/CText';
import StyleConfig from '../../assets/StyleConfig';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CButton = ({ children, containerStyle, onPress, textStyle, rightIconColor, isLeftIcon, leftIconName,
    leftIconSize, leftIconColor, setting, isCenter, source, isImage, isRightIcon, dropdown, rightIconStyle, rightIconName, rightIconSize, imageStyle, isIcon, isRightImage, rightSource,
    rightImageStyle }) => {

    if (setting) {
        return (
            <TouchableOpacity
                onPress={onPress}
                style={[styles.settingButtonContainer, containerStyle, { justifyContent: isIcon ? 'flex-start' : 'center' }]}
            >
                {isIcon &&
                    <Image source={source} resizeMode={'contain'} style={[styles.iamge, imageStyle]}></Image>
                }
                <CText type={'medium'} style={[styles.settingButtonText, textStyle]}>{children}</CText>
                {isRightImage &&
                    <View style={{ alignItems: 'flex-end', justifyContent: 'center', flex: 1 }}>
                        <Image source={rightSource} resizeMode={'contain'} style={[styles.rightSettingImage, rightImageStyle]} />
                    </View>
                }
            </TouchableOpacity>
        )

    } else if (dropdown) {
        return <TouchableOpacity
            style={[styles.buttonContainer, { justifyContent: isIcon ? 'flex-start' : 'center' }, containerStyle,]}
            onPress={onPress} >

            {isImage ? <Icon name={name} size={size} color={color} /> :
                <CText type={'medium'} style={[styles.buttonText, textStyle]}>{children}</CText>}

            {!isCenter && <View style={{ flex: 1 }} />}
            {isRightIcon &&
                <Icon style={rightIconStyle} name={rightIconName} size={rightIconSize} color={rightIconColor} />
            }
        </TouchableOpacity>
    } else {
        return (
            <TouchableOpacity
                style={[styles.buttonContainer, containerStyle]}
                onPress={onPress}>
                {isLeftIcon &&
                    <Icon style={styles.leftIconStyle} name={leftIconName} size={leftIconSize} color={leftIconColor}></Icon>
                }
                <CText type={'medium'} style={[styles.buttonText, textStyle]}>{children}</CText>
            </TouchableOpacity>
        )
    }

}

export default CButton;

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        height: StyleConfig.responsiveHeight(6.4),
        // height: StyleConfig.countPixelRatio(44),
        minHeight: StyleConfig.countPixelRatio(55),
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
    },
    iamge: {
        height: StyleConfig.countPixelRatio(20),
        width: StyleConfig.countPixelRatio(20)
    },
    settingButtonContainer: {
        flexDirection: 'row',
        height: StyleConfig.countPixelRatio(44),
        minHeight: StyleConfig.countPixelRatio(44),
        alignItems: 'center',
        marginVertical: StyleConfig.countPixelRatio(5),
        // backgroundColor: StyleConfig.COLOR.BACKGROUND
    },
    settingButtonText: {
        paddingLeft: StyleConfig.countPixelRatio(10)
    },
    rightSettingImage: {
        height: StyleConfig.countPixelRatio(10),
        width: StyleConfig.countPixelRatio(10),
        // position: 'absolute'
    },
})