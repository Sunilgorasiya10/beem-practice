import React from 'react';
import { Text } from 'react-native';
import StyleConfig from '../../assets/StyleConfig';

const CText = ({ type, style, children, ...props }) => (
    <Text style={[{ fontFamily: StyleConfig.getFont(type) }, style]}>{children}</Text>
);

export default CText;