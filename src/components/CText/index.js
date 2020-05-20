import React from 'react';
import { Text } from 'react-native';
import StyleConfig from '../../assets/StyleConfig';

const CText = ({ type, style, children, ...props }) => {
    console.log('props', props);
    return (
        <Text style={[{ fontFamily: StyleConfig.getFont(type) }, style]}{...props}>{children}</Text>
    )
};

export default CText;