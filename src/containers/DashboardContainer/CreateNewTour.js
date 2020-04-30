import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Text } from 'react-native'
import StyleConfig from '../../assets/StyleConfig';
import BasicInfo from '../../components/CreateNewTourComponent/BasicInfo';
import Availability from '../../components/CreateNewTourComponent/Availability';
import Agenda from '../../components/CreateNewTourComponent/Agenda';
import SelectionView from '../../components/SelectionView';

const [BASIC_INFO, AVAILABILITY, AGENDA] = [0, 1, 2];
const tabs = [{ key: BASIC_INFO, name: 'BASIC INFO', icon: '' }, { key: AVAILABILITY, name: 'AVAILABILITY', icon: '' }, { key: AGENDA, name: 'AGENDA', icon: '' }]
class CreateNewTour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: BASIC_INFO,
            tabs: tabs,
        }
    }

    onTabChange = async (tab) => {
        await this.setState({ selectedTab: tab })
    }

    onPressBasic = () => {
        this.setState({ selectedTab: AVAILABILITY })
        // console.log(this.state.selectedTab)
    }
    onPressAvail = () => {
        this.setState({ selectedTab: AGENDA })
    }

    render() {
        const { selectedTab } = this.state;
        return (
            <View style={styles.container}>
                <SelectionView
                    isGreyTab
                    disabled={false}
                    selected={selectedTab}
                    // style={styles.selectView}
                    contentStyle={styles.tabContentStyle}
                    onSelect={({ key }) => this.onTabChange(key)}
                    items={this.state.tabs}>
                </SelectionView>
                <View style={styles.content}>
                    <KeyboardAvoidingView>
                        {(selectedTab === BASIC_INFO) ?
                            <BasicInfo onPressBasic={() => this.onPressBasic()} />
                            :
                            (selectedTab === AVAILABILITY) ?
                                <Availability onPressAvail={() => this.onPressAvail()} />
                                :
                                (selectedTab === AGENDA) ?
                                    <Agenda />
                                    : null
                        }
                    </KeyboardAvoidingView>
                </View>
            </View>
        )
    }
}

export default CreateNewTour;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleConfig.COLOR.WHITE,
    },
    content: {
        marginVertical: StyleConfig.countPixelRatio(10),
        // marginBottom: StyleConfig.countPixelRatio(150)
    },
    selectView: {
        // margin: StyleConfig.countPixelRatio(8),
    },
    tabContentStyle: {
        width: StyleConfig.responsiveWidth(100),
        paddingHorizontal: StyleConfig.countPixelRatio(4),
        backgroundColor: StyleConfig.COLOR.BACKGROUND
    },
})