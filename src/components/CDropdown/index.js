import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity, Modal, TouchableHighlight, TouchableWithoutFeedback } from 'react-native'
import StyleConfig from '../../assets/StyleConfig'
import CButton from "../CButton";
import { landing, bookingConfirm } from "../../assets/strings";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CustomizableModal from "../../components/CModel/CustomizableModal";
import { getSelectedItem, getSelectedItemArr } from '../../common/global';
import CText from "../CText";
import PaymentRequest from '../../containers/HamburgerContainer/PaymentRequest'

class CDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focus: false,
            placeHolderValue: props.placeHolder ? props.placeHolder : landing.select_multiple,
            item: props.placeHolder ? props.placeHolder : landing.select_multiple,
            data: props.item,
            prev_data: [],
            showCancelModal: false,
            selectedData: (props.selectedData) ? props.selectedData : ''
        }
    }

    componentDidMount = async () => {
        const { data, selectedData } = this.state;
        const { isType } = this.props;
        const selectedDataPrev = this.props.selectedData;
        let count = 0;
        let newData = []
        let newDataArray = data;

        if (selectedDataPrev !== '' && selectedDataPrev !== null && selectedDataPrev !== undefined) {
            if (isType === 'singleSelect') {
                newData = data.map((item) => {
                    count++;
                    if (selectedDataPrev !== '' && selectedDataPrev !== null && selectedDataPrev !== undefined) {
                        return { ...item, id: count, selected: (selectedData === item.value) ? true : false };
                    } else {
                        return { ...item, id: count, selected: false };
                    }

                });
                this.setState({
                    data: newData
                })
            }
            else {
                if (getObjectSize(this.state.selectedData) !== 0) {
                    this.state.selectedData.map((itemData) =>
                        newDataArray = newDataArray.map((item) => {
                            count++;
                            if (selectedDataPrev !== '' && selectedDataPrev !== null && selectedDataPrev !== undefined) {
                                return {
                                    ...item,
                                    id: count,
                                    selected: item.selected ? true : (itemData === item.value) ? true : false
                                };
                            } else {
                                return { ...item, id: count, selected: false };
                            }
                        })
                    )
                }
                else {
                    newDataArray = newDataArray.map((item) => {
                        count++;
                        return { ...item, id: count, selected: false };
                    })
                }
                this.setState({
                    data: newDataArray
                })
            }
        }
        else {
            newDataArray = data.map((item) => {
                count++;
                return { ...item, id: count, selected: false };
            })
            this.setState({
                data: newDataArray
            })
        }
        let selectedItem = await getSelectedItemArr(this.state.data);
        this.props.selectedItem(selectedItem)
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
        // console.log("test", item)
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

    renderItems = (item) => {
        const { isCancelModal } = this.props
        if (isCancelModal) {
            return (
                <CButton
                    // key={item.id}
                    roundModalButton
                    isRightIcon
                    name={item.selected ? 'check' : null}
                    color={StyleConfig.COLOR.HEADER_ICON}
                    textStyle={item.selected ? { color: StyleConfig.COLOR.HEADER_ICON } : { color: StyleConfig.COLOR.GREY_DIM }}
                    size={25}
                    onPress={() => this.onDataPress(item.id)}
                    containerStyle={item.selected ? { borderColor: StyleConfig.COLOR.RED_REDICAL } : { borderColor: StyleConfig.COLOR.GREY_DIM }}>
                    {item.value}
                </CButton>
            )
        } else {
            return (
                <TouchableOpacity
                    style={[styles.renderItems, this.props.style,]}
                    onPress={() => this.onDataPress(item.id)}>
                    <Text
                        style={[{ fontSize: StyleConfig.fontSizeH3 }, item.selected ? { color: StyleConfig.COLOR.HEADER_ICON } : { color: StyleConfig.COLOR.GREY_DIM }]}>{item.value}</Text>
                    <Icon name={item.selected ? 'check' : null} size={20} color={StyleConfig.COLOR.HEADER_ICON} />
                </TouchableOpacity>
            );
        }
    };

    onDataPress = async (id) => {
        const { isType, selected } = this.props;
        const { data } = this.state;
        if (isType === 'singleSelect') {
            let newData = data.map((item) => {
                if (item.id == id) {
                    return { ...item, selected: true }
                } else {
                    return { ...item, selected: false };
                }
            });
            let selectedItem = await getSelectedItemArr(newData);
            this.props.selectedItem(selectedItem)
            if (selectedItem == bookingConfirm.create_new_trip) {
                this.setState({ showCancelModal: false })
            }
            this.setState({
                data: newData
            })
        } else {
            let newData = data.map((item) => {
                if (item.id == id) {
                    return { ...item, selected: !item.selected }
                } else {
                    return { ...item, selected: item.selected };
                }
            });
            let selectedItem = await getSelectedItemArr(newData);
            this.props.selectedItem(selectedItem)
            this.setState({
                data: newData
            })
        }
    };

    render() {
        const { data, focus, placeHolderValue, showCancelModal, showPaymentRequestModal } = this.state;
        const { modalHeading, containerStyle, isType, selectedItemPlaceHolder, displayImageBtn, disabled, textStyle, isChangeRightIcon } = this.props
        let itemData = getSelectedItem(data);
        let selectedData = getSelectedItemArr(data);
        if (selectedItemPlaceHolder !== '' && selectedItemPlaceHolder !== undefined) {
            selectedData = selectedItemPlaceHolder
        }
        return (
            <View styles={[styles.container]}>
                <CButton
                    dropdown
                    onPress={() => this.onButtonPress()}
                    isRightIcon
                    name={isChangeRightIcon ? isChangeRightIcon : 'chevron-down'}
                    size={isChangeRightIcon ? 20 : 30}
                    color={StyleConfig.COLOR.RED_REDICAL}
                    rightIconStyle={styles.dropdownArrowStyle}
                    textStyle={[styles.dropdownText, textStyle]}
                    containerStyle={[styles.dropdownContainer, containerStyle]}
                // disabled={disabled}
                >
                    {(isType === 'singleSelect' && selectedData.length > 0) ? selectedData : placeHolderValue}
                </CButton>
                {isType !== 'singleSelect' && (Object.keys(itemData).length > 0) &&
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {itemData.map((item) => {
                            return (
                                <View key={item.id} style={{ marginHorizontal: StyleConfig.countPixelRatio(5) }}>
                                    <CButton
                                        containerStyle={styles.itemButtonContainer}
                                        textStyle={styles.itemTextStyle}
                                        isRightIcon
                                        name={'close'}
                                        size={18}
                                        color={StyleConfig.COLOR.WHITE_OFF}
                                        imageStyle={{
                                            marginRight: StyleConfig.countPixelRatio(10),
                                            marginTop: StyleConfig.countPixelRatio(3)
                                        }}
                                        onPress={() => this.onDataPress(item.id)}
                                    >{item.value}</CButton>
                                </View>
                            )
                        }
                        )}
                    </View>
                }
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
                {/* <Modal
                    animationType="slideInDown"
                    transparent
                    visible={focus}>
                    <TouchableHighlight style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }} onPress={() => this.setState({ focus: false })}>
                        <TouchableWithoutFeedback onPress={() => {
                        }}>
                            <View>
                                {this.renderFlatList(data)}
                                <CButton containerStyle={{ width: StyleConfig.responsiveWidth(80), alignSelf: 'center' }}
                                    onPress={() => this.setState({ focus: false })}>Done</CButton>
                            </View>
                        </TouchableWithoutFeedback>
                    </TouchableHighlight>
                </Modal> */}

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

    container: {
        backgroundColor: StyleConfig.COLOR.RED_REDICAL,
        paddingHorizontal: StyleConfig.countPixelRatio(20),
        alignItems: 'center'
    },
    dropdownContainer: {
        backgroundColor: StyleConfig.COLOR.WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: StyleConfig.COLOR.WHITE,
        borderWidth: StyleConfig.countPixelRatio(0.8),
        zIndex: 3,
        height: 'auto',
        paddingVertical: StyleConfig.countPixelRatio(8)
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
    flatListContainer: {
        color: StyleConfig.COLOR.BLACK,
        width: StyleConfig.responsiveWidth(80),
        backgroundColor: StyleConfig.COLOR.WHITE,
        marginHorizontal: StyleConfig.countPixelRatio(12),
    },
    content: {
        height: StyleConfig.responsiveHeight(30),
        borderWidth: StyleConfig.countPixelRatio(1),
        borderColor: StyleConfig.COLOR.WHITE_OFF,
        borderRadius: StyleConfig.countPixelRatio(16),
        marginVertical: StyleConfig.countPixelRatio(20),
        backgroundColor: StyleConfig.COLOR.WHITE,
        shadowColor: StyleConfig.COLOR.WHITE_OFF,
        shadowOpacity: 0.5,
        elevation: 3,
        shadowOffset: {
            height: 0,
            width: 0
        },
        overflow: 'hidden',

    },
    renderItems: {
        width: StyleConfig.responsiveWidth(80),
        height: StyleConfig.responsiveHeight(5),
        backgroundColor: StyleConfig.COLOR.WHITE,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
})