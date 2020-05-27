import React, { Component } from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity, ScrollView, Text } from 'react-native'
import StyleConfig from "../../assets/StyleConfig";
import { language, settingMenu } from "../../assets/strings";
import { CHeader } from "../../components/CHeader";
import CText from "../../components/CText";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const DATA = [
    {
        id: 1,
        name: 'English'
    },
    {
        id: 2,
        name: 'Deutsche ( German )'
    },
    {
        id: 3,
        name: 'Ελληνικά ( Greek )'
    },
    {
        id: 4,
        name: '中文 ( Chinese )'
    },
    {
        id: 5,
        name: 'dansk ( Danish )'
    },
    {
        id: 6,
        name: 'Nederlands ( Dutch )'
    },
    {
        id: 7,
        name: '( Arabic ) عربى'
    },
    {
        id: 8,
        name: 'Suomalainen ( Finnish )'
    },
    {
        id: 9,
        name: 'français ( French ) '
    },
]
class DisplayLanguage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CHeader
                    showLeft
                    headerValue={settingMenu.display_language}
                    headerTextStyle={styles.headerTextStyle}
                ></CHeader>
                <ScrollView style={styles.content}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item, index }) => (
                            <View style={{ marginVertical: StyleConfig.countPixelRatio(5) }}>
                                <TouchableOpacity>
                                    <CText type={'regular'} style={styles.textStyle}>{item.name}</CText>
                                </TouchableOpacity>
                                <View style={styles.underLineView}></View>
                            </View>
                        )}
                    ></FlatList>
                </ScrollView>
            </View>
        )
    }
}

export default DisplayLanguage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleConfig.COLOR.WHITE_OFF,
    },
    headerTextStyle: {
        fontSize: StyleConfig.fontSizeH2
    },
    content: {
        backgroundColor: StyleConfig.COLOR.WHITE_OFF,
        paddingHorizontal: StyleConfig.countPixelRatio(20)
    },
    textStyle: {
        fontSize: StyleConfig.fontSizeH2_3,
        color: StyleConfig.COLOR.HEADER_ICON
    },
    underLineView: {
        borderBottomWidth: StyleConfig.countPixelRatio(0.3),
        borderColor: StyleConfig.COLOR.GREY_DIM,
        height: StyleConfig.countPixelRatio(23)
    }
})