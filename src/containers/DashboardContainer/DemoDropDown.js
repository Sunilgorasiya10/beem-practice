import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { CHeader } from '../../components/CHeader';
import StyleConfig from '../../assets/StyleConfig';
import CText from '../../components/CText';
import { tipYourGuide } from '../../assets/strings';
import CTextInput from '../../components/CTextInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CButton from '../../components/CButton';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class DemoDropDown extends Component {

    _renderItem = (item, index) => {
        const { name } = item;
        return (
            <View style={styles.inputContainer}>
                <CTextInput
                    {...item}
                    refField={ref => this[name] = ref}
                ></CTextInput>
            </View>
        )
    }

    _onSelectChange = (item) => {
        const { price } = this.props;
        if (item !== undefined && item !== null && getObjectSize(item) !== 0) {
            if (item[0] !== 'Custom Amount') {
                let per = item[0].split('%');
                if (price !== null && price !== undefined && Number(price) !== 0) {
                    let perData = (Number(price) * Number(per[0])) / 100;
                    this.props.change('payment_total', Number(perData));
                }
            }
        }
        this.props.change('tip_amount', item[0]);
    };

    render() {
        let FIELDS_DATA = [
            {
                name: 'tip_amount',
                inputType: 'dropdown',
                modalHeading: 'Select Tip Amount',
                subLabel: tipYourGuide.select_amount,
                onSelectChange: (item) => this._onSelectChange(item),
                label: tipYourGuide.tip_amount,
                returnKeyType: 'done',
                placeholder: (this.props.tip_amount && this.props.tip_amount) ? this.props.tip_amount : 'Select Amount',
                keyboardType: 'default',
                data: tipYourGuide.tip_amount_data,
                selectedData: (this.props.tip_amount && this.props.tip_amount !== null && this.props.tip_amount !== undefined) ? this.props.tip_amount : '',
                isType: 'singleSelect',
                isRequire: true,
            },
        ]

        return (
            <View style={{ paddingHorizontal: StyleConfig.countPixelRatio(20) }}>
                {FIELDS_DATA.map((value, key) => { return this._renderItem(value, key) })}
            </View>
        );
    }
}

const withForm = reduxForm({
    form: 'demoDropDownForm'
})

const mapStateToProps = (state) => {
    return {
        state
    }
}
export default connect(mapStateToProps, null)(withForm(DemoDropDown));

const styles = StyleSheet.create({
    inputContainer: {
        // width: StyleConfig.responsiveWidth(88),
        marginTop: StyleConfig.countPixelRatio(10),
    },
})