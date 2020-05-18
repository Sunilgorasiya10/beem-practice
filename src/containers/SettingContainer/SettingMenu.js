import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { CHeader } from "../../components/CHeader";
import StyleConfig from "../../assets/StyleConfig";
import AppImages from "../../assets/images";
import CText from "../../components/CText";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CButton from "../../components/CButton";
import { settingMenu } from '../../assets/strings'
import { connect } from "react-redux";


class SettingMenu extends Component {
    render() {
        return (
            <View>
                <View>
                    <CHeader
                        showLeft
                        showRight
                        headerValue={}
                    >
                    </CHeader>
                </View>
            </View>
        )
    }
}