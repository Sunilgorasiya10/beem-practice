import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import StyleConfig from '../../assets/StyleConfig';
import BasicInfo from '../../components/CreateNewTourComponent/BasicInfo';

class CreateNewTour extends Component {
    render() {
        return (
            <View style={styles.container}>
                <BasicInfo></BasicInfo>
            </View>
        )
    }
}

export default CreateNewTour;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleConfig.COLOR.WHITE,
    }
})