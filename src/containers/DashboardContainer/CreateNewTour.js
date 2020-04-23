import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'
import StyleConfig from '../../assets/StyleConfig';
import BasicInfo from '../../components/CreateNewTourComponent/BasicInfo';
import Availability from '../../components/CreateNewTourComponent/Availability';

class CreateNewTour extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <BasicInfo></BasicInfo> */}
                <Availability></Availability>
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