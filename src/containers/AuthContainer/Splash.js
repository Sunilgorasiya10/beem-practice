import React, { Component } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import StyleConfig from '../../assets/StyleConfig';
import AppImages from '../../assets/images/index';

class Splash extends Component {

    componentDidMount() {
        const { navigation } = this.props;
        setTimeout(() => {
            navigation.navigate('Account');
        }, 3000)
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={AppImages.splashLogo1} resizeMode={'contain'} style={styles.appLogoStyle} />
                {/* <View style={styles.versionView}>
                    <CText type={'bold'} style={{ fontSize: StyleConfig.fontSizeH3 }}>{'Version 1.0'}</CText>
                </View> */}
            </View>
        )
    }
}

export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleConfig.COLOR.WHITE_OFF,
        justifyContent: "center",
    },
    appLogoStyle: {
        width: StyleConfig.responsiveWidth(70),
        alignSelf: 'center'
    },
    versionView: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: StyleConfig.countPixelRatio(25),
        paddingTop: StyleConfig.countPixelRatio(60)
    },
});