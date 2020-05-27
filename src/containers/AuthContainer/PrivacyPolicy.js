import React, { Component } from 'react'
import { View, ScrollView, StyleSheet, Text } from 'react-native'
import { privacy } from '../../assets/strings'
import StyleConfig from "../../assets/StyleConfig";
import CText from "../../components/CText";
import { CHeader } from "../../components/CHeader";
import CButton from "../../components/CButton";

const RENDER_DATA = [
    {
        label: privacy.us_privacy_policy,
        font: 'bold',
        style: {
            fontSize: StyleConfig.fontSizeH3_4,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: privacy.effective_date,
        font: 'medium',
        style: {
            fontSize: StyleConfig.fontSizeH3_4,
            marginTop: StyleConfig.countPixelRatio(4)
        }
    }, {
        label: privacy.paragraph1,
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(4)
        }
    }, {
        label: privacy.paragraph2,
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(4)
        }
    }, {
        label: privacy.heading1,
        font: 'medium',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: privacy.paragraph3,
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading1,
        label: privacy.paragraph4,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading2,
        label: privacy.paragraph5,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading3,
        label: privacy.paragraph6,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading4,
        label: privacy.paragraph7,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading5,
        label: privacy.paragraph8,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading6,
        label: privacy.paragraph9,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading7,
        label: privacy.paragraph10,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading8,
        label: privacy.paragraph11,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading9,
        label: privacy.paragraph12,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading10,
        label: privacy.paragraph13,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading11,
        label: privacy.paragraph14,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading12,
        label: privacy.paragraph15,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading13,
        label: privacy.paragraph16,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading14,
        label: privacy.paragraph17,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: privacy.heading2,
        font: 'medium',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: privacy.paragraph18,
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading15,
        label: privacy.paragraph19,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading16,
        label: privacy.paragraph20,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading17,
        label: privacy.paragraph21,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading19,
        label: privacy.paragraph23,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: privacy.paragraph24,
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: privacy.heading3,
        font: 'medium',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: privacy.paragraph25,
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading20,
        label: privacy.paragraph26,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading21,
        label: privacy.paragraph27,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading22,
        label: privacy.paragraph28,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading23,
        label: privacy.paragraph29,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading24,
        label: privacy.paragraph30,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading25,
        label: privacy.paragraph31,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading26,
        label: privacy.paragraph32,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading27,
        label: privacy.paragraph33,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading28,
        label: privacy.paragraph34,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading29,
        label: privacy.paragraph35,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        heading: privacy.subheading30,
        label: privacy.paragraph36,
        headingFont: 'medium',
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: privacy.heading4,
        font: 'medium',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: privacy.paragraph37,
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: privacy.heading5,
        font: 'medium',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: privacy.paragraph38,
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: privacy.heading6,
        font: 'medium',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: privacy.paragraph39,
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: privacy.heading7,
        font: 'medium',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: privacy.paragraph40,
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: privacy.heading8,
        font: 'medium',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: privacy.paragraph41,
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: privacy.heading9,
        font: 'medium',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: privacy.paragraph42,
        font: 'light',
        style: {
            fontSize: StyleConfig.fontSizeParagraph,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }
]

class PrivacyPolicy extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CHeader
                    showLeft
                    headerValue={'PrivacyPolicy'}
                ></CHeader>
                <ScrollView style={styles.content}>
                    <View>
                        {RENDER_DATA.map((item) =>
                            item.heading ?
                                <CText type={item.font} style={item.style}><CText type={item.headingFont}>{item.heading}</CText>{item.label}</CText>
                                :
                                <CText type={item.font} style={item.style}>{item.label}</CText>
                        )}
                    </View>
                </ScrollView>

            </View>
        )
    }
}

export default PrivacyPolicy;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleConfig.COLOR.WHITE_OFF
    },

    content: {
        paddingHorizontal: StyleConfig.countPixelRatio(20),
        marginBottom: StyleConfig.countPixelRatio(StyleConfig.iPhoneX ? 24 : 8)
    },
})