import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity, Modal } from 'react-native'
import StyleConfig from '../../assets/StyleConfig'
import CButton from "../CButton";
import { dropDown } from "../../assets/strings";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomizableModal from "../../components/CModel/CustomizableModal";
import CText from "../CText";
import PaymentRequest from '../../containers/HamburgerContainer/PaymentRequest'

class CDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            showCancelModal: false,
            showPaymentRequestModal: false,
            placeHolderValue: props.placeHolder ? props.placeHolder : dropDown.select_multiple,
            selectedData: props.selectedDataPrev ? props.selectedDataPrev : ''
        }
    }

    onButtonPress() {
        const { isCancelModal } = this.props
        if (isCancelModal) {
            this.setState({ showCancelModal: !this.state.showCancelModal, prev_data: this.state.data });
        } else {
            this.setState({ focus: !this.state.focus });
        }
    }

    onPressDismiss() {
        const { isCancelModal } = this.props
        if (isCancelModal) {
            this.setState({ showCancelModal: !this.state.showCancelModal, data: this.state.prev_data });
        } else {
            this.setState({ focus: !this.state.focus });
        }
    }

    renderFlatList = (item) => {
        const { flatListContainerStyle, fltListStyle } = this.props
        return (
            <View style={[styles.content, {
                borderWidth: 0, shadowColor: StyleConfig.COLOR.WHITE,
                shadowOpacity: 0,
                elevation: 0,
                shadowOffset: {
                    height: 0,
                    width: 0
                },
            }, flatListContainerStyle]}>
                <FlatList
                    persistentScrollbar={true}
                    style={[styles.flatListContainer, fltListStyle]}
                    data={item}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => this.renderItems(item)} />
            </View>
        )
    };

    render() {
        const { data, focus, placeHolderValue, showCancelModal, showPaymentRequestModal } = this.state;
        const { modalHeading, containerStyle, isType, displayImageBtn, disabled, textStyle, isChangeRightIcon } = this.props
        // let selectedData = getSelectedItemArr(data);
        return (
            <View styles={[styles.container]}>
                <CButton
                    dropdown
                    onPress={() => this.onButtonPress()}
                    isRightIcon
                    rightIconName={isChangeRightIcon ? isChangeRightIcon : 'chevron-down'}
                    rightIconSize={isChangeRightIcon ? 20 : 30}
                    rightIconColor={StyleConfig.COLOR.RED_REDICAL}
                    rightIconStyle={styles.dropdownArrowStyle}
                    textStyle={[styles.dropdownText, textStyle]}
                    containerStyle={[styles.dropdownContainer, containerStyle]}
                // disabled={disabled}
                >
                    {(isType === 'singleSelect' && this.state.selectedData.length > 0) ? this.state.selectedData : placeHolderValue}
                </CButton>
                {/* {(isType !== 'singleSelect' && !displayImageBtn) &&
                    (Object.keys(itemData).length > 0) &&
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {sortData.map((item) => {
                            return (
                                <View key={item.id} style={{ marginHorizontal: StyleConfig.countPixelRatio(5) }}>
                                    <CButton
                                        containerStyle={styles.itemButtonContainer}
                                        textStyle={styles.itemTextStyle}
                                        isRightIcon
                                        rightIcon={'close'}
                                        size={18}
                                        color={StyleConfig.COLOR.WHITE_OFF}
                                        imageStyle={{
                                            marginRight: StyleConfig.countPixelRatio(10),
                                            marginTop: StyleConfig.countPixelRatio(3),
                                        }}
                                        onPress={() => this.onDataPress(item.id)}
                                    >{item.value}</CButton>
                                </View>
                            )
                        }
                        )}
                    </View>
                } */}
                {/* {(displayImageBtn && isType !== 'singleSelect') &&
                    (Object.keys(itemData).length > 0) &&
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {sortData.map((item) =>
                            <View style={[styles.displayImageBtnContainer]}>
                                <View style={styles.displayImageBtnSubContainer}>
                                    <Icon name={item.icon} size={StyleConfig.responsiveWidth(10)} color={StyleConfig.COLOR.BLACK} />
                                    <CText style={styles.displayImageText} type={'medium'}>{item.value}</CText>
                                </View>
                                <View style={styles.closeBtnContainer}>
                                    <TouchableOpacity style={styles.closeBtn} onPress={() => this.onDataPress(item.id)}>
                                        <CText type={'bold'} style={{ color: StyleConfig.COLOR.WHITE, alignSelf: 'center' }}>{'X'}</CText>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    </View>
                } */}
                {/* <Modal */}
                {/* animationType="slideInDown" */}
                {/* transparent */}
                {/* > */}
                {/* <View style={{ */}
                {/* flex: 1, */}
                {/* // backgroundColor: 'rgba(0,0,0,0.8)', */}
                {/* alignItems: 'center', */}
                {/* justifyContent: 'center' */}
                {/* }}> */}
                {/* {this.renderFlatList(data)} */}
                {/* <CButton containerStyle={{ width: StyleConfig.responsiveWidth(80) }}
                            onPress={() => alert('done')}>Done</CButton> */}
                {/* </View> */}
                {/* </Modal> */}


                <CustomizableModal
                    visible={showCancelModal}
                    onDismiss={() => this.onPressDismiss()}
                    onSubmit={() => this.setState({ showCancelModal: false })}
                    heading={modalHeading}
                >
                    {this.renderFlatList(data)}
                </CustomizableModal>

            </View>
        )
    }
}

export default CDropdown;

const styles = StyleSheet.create({

    dropdownContainer: {
        backgroundColor: StyleConfig.COLOR.WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: StyleConfig.COLOR.WHITE,
        borderWidth: StyleConfig.countPixelRatio(0.8),
        zIndex: 3,
        height: 'auto',
        // paddingVertical: StyleConfig.countPixelRatio(8)
    },
    dropdownArrowStyle: {
        flexDirection: 'row',
        marginRight: StyleConfig.countPixelRatio(12),
        // color: StyleConfig.COLOR.RED_REDICAL,
        // backgroundColor: StyleConfig.COLOR.RED_REDICAL
    },
    dropdownText: {
        // width: "100%",
        paddingHorizontal: StyleConfig.countPixelRatio(10),
        fontSize: StyleConfig.fontSizeH3,
        color: StyleConfig.COLOR.GREY_DIM,
        // backgroundColor: 'red',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: StyleConfig.countPixelRatio(12),
        zIndex: 1,
    },
})