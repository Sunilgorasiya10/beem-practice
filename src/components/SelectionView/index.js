import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, PixelRatio } from 'react-native';
import StyleConfig from "../../assets/StyleConfig";
import CText from "../CText";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const RADIUS = 10;
class SelectionView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { items, isGreyTab, selected, disabled, contentStyle, onSelect } = this.props;
        return (
            <View style={styles.container}>
                <View style={[styles.content, contentStyle]}>
                    {
                        items.map((item, index) => {
                            if (isGreyTab) {
                                return (
                                    <TouchableOpacity
                                        disabled={disabled}
                                        onPress={() => onSelect(item)}
                                        style={[styles.selectedTabView, { borderBottomWidth: (selected === item.key) ? 2 : 0, borderColor: StyleConfig.COLOR.SHAMROCK }]}
                                        key={item.key}>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <CText style={selected === item.key ? styles.selectedItemText : styles.itemText}>{item.name}</CText>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }
                            // else {
                            //     return (
                            //         <TouchableOpacity
                            //             disabled={disabled}
                            //             onPress={() => onSelect(item)}
                            //             style={[selected === item.key ? styles.selectedItemView : styles.itemView, index === 0 ? styles.radiusLeft : index.length - 1 ? styles.radiusRight : styles.borderTopBottom]}
                            //             key={item.key}>
                            //             <CText type={'medium'} style={selected === item.key ? styles.selectedText : styles.textStyle}>{item.name}</CText>
                            //         </TouchableOpacity>
                            //     )
                            // }
                        })
                    }
                </View>
            </View>
        )
    }
}

export default SelectionView;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    content: {
        flexDirection: 'row',
        // width: StyleConfig.responsiveWidth(10),
        height: StyleConfig.countPixelRatio(36),
        justifyContent: 'center'
    },
    selectedTabView: {
        flex: 1,
        backgroundColor: StyleConfig.COLOR.BACKGROUND,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOpacity: 0.5,
        shadowColor: StyleConfig.COLOR.BACKGROUND,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        // elevation: 1,
    },
    selectedItemText: {
        color: StyleConfig.COLOR.WHITE,
        fontSize: StyleConfig.fontSizeH3_4,
        letterSpacing: 0.75,
        fontFamily: StyleConfig.getFont('medium'),
    },
    itemText: {
        color: StyleConfig.COLOR.WHITE_OFF,
        fontSize: StyleConfig.fontSizeH3_4,
        letterSpacing: 0.75,
        fontFamily: StyleConfig.getFont('regular'),
    },
    selectedItemView: {
        flex: 1,
        backgroundColor: StyleConfig.COLOR.RED_REDICAL,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOpacity: 0.5,
        shadowColor: StyleConfig.COLOR.GREY_DIM,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: (StyleConfig.isIphone) ? 0 : 1,
    },
    itemView: {
        flex: 1,
        backgroundColor: StyleConfig.COLOR.WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOpacity: 0.5,
        shadowColor: StyleConfig.COLOR.GREY_DIM,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        elevation: (StyleConfig.isIphone) ? 0 : 1,
    },
    radiusLeft: {
        borderTopLeftRadius: StyleConfig.countPixelRatio(RADIUS),
        borderBottomLeftRadius: StyleConfig.countPixelRatio(RADIUS),
        borderColor: StyleConfig.COLOR.CHAMBRAY,
        borderWidth: StyleConfig.countPixelRatio(0.8),
        borderRightWidth: StyleConfig.countPixelRatio(0),
    },
    borderTopBottom: {
        borderColor: StyleConfig.COLOR.CHAMBRAY,
        borderWidth: StyleConfig.countPixelRatio(0.8),
        borderRightWidth: StyleConfig.countPixelRatio(0.8),
    },
    radiusRight: {
        borderTopRightRadius: StyleConfig.countPixelRatio(RADIUS),
        borderBottomRightRadius: StyleConfig.countPixelRatio(RADIUS),
        borderColor: StyleConfig.COLOR.CHAMBRAY,
        borderWidth: StyleConfig.countPixelRatio(0.8),
        borderLeftWidth: StyleConfig.countPixelRatio(0),
    },
    textStyle: {
        color: StyleConfig.COLOR.CHAMBRAY,
        fontSize: StyleConfig.fontSizeH3_4,
        letterSpacing: 0.75
    },
    selectedText: {
        color: StyleConfig.COLOR.WHITE,
        fontSize: StyleConfig.fontSizeH3_4,
        letterSpacing: 0.75
    },
})