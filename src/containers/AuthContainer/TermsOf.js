import React, { Component } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { terms } from '../../assets/strings'
import StyleConfig from "../../assets/StyleConfig";
import CText from "../../components/CText";
import { CHeader } from "../../components/CHeader";
import CButton from "../../components/CButton";

const TITLE_TEXT_FONT_SIZE = StyleConfig.fontSizeParagraph;
const DETAIL_TEXT_FONT_SIZE = StyleConfig.fontSizeH4;
const RENDER_DATA = [
    {
        label: terms.us_terms_of_use,
        font: 'bold',
        style: {
            fontSize: StyleConfig.fontSizeH3_4,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.effective_date,
        font: 'medium',
        style: {
            fontSize: StyleConfig.fontSizeH3_4,
            marginTop: StyleConfig.countPixelRatio(4)
        }
    }, {
        label: terms.title1,
        font: 'medium',
        style: {
            fontSize: TITLE_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph1,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(4)
        }
    }, {
        label: terms.sub_title,
        font: 'medium',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph2,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph3,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph4,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph5,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph6,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.title2,
        font: 'medium',
        style: {
            fontSize: TITLE_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph7,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.subheading1,
        font: 'medium',
        style: {
            fontSize: TITLE_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph8,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph9,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.subheading2,
        font: 'medium',
        style: {
            fontSize: TITLE_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph10,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph10,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }

    }, {
        label: terms.paragraph11,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }

    }, {
        label: terms.paragraph12,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }

    }, {
        label: terms.subheading3,
        font: 'medium',
        style: {
            fontSize: TITLE_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph13,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }

    }, {
        label: terms.subheading4,
        font: 'medium',
        style: {
            fontSize: TITLE_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph14,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.subheading5,
        font: 'medium',
        style: {
            fontSize: TITLE_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph15,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.subheading6,
        font: 'medium',
        style: {
            fontSize: TITLE_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph16,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.subheading7,
        font: 'medium',
        style: {
            fontSize: TITLE_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph17,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.subheading8,
        font: 'medium',
        style: {
            fontSize: TITLE_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph18,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.title3,
        font: 'medium',
        style: {
            fontSize: TITLE_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph19,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.subheading9,
        font: 'medium',
        style: {
            fontSize: TITLE_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph20,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.subheading10,
        font: 'medium',
        style: {
            fontSize: TITLE_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph21,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.subheading11,
        font: 'medium',
        style: {
            fontSize: TITLE_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph22,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.subheading12,
        font: 'medium',
        style: {
            fontSize: TITLE_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph23,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.subheading13,
        font: 'medium',
        style: {
            fontSize: TITLE_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph24,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.title4,
        font: 'medium',
        style: {
            fontSize: TITLE_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.subheading14,
        font: 'medium',
        style: {
            fontSize: TITLE_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph25,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.subheading15,
        font: 'medium',
        style: {
            fontSize: TITLE_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph26,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.subheading16,
        font: 'medium',
        style: {
            fontSize: TITLE_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }, {
        label: terms.paragraph27,
        font: 'light',
        style: {
            fontSize: DETAIL_TEXT_FONT_SIZE,
            marginTop: StyleConfig.countPixelRatio(8)
        }
    }
];

class TermsOf extends Component {
    render() {
        return (

            <View style={styles.container}>
                <CHeader
                    showLeft
                    headerValue={'Terms Of Use'}
                ></CHeader>
                <ScrollView style={styles.content}>
                    <View>
                        {RENDER_DATA.map((item) =>
                            <CText type={item.font} style={item.style}>{item.label}</CText>
                        )}
                    </View>
                </ScrollView>

            </View>
        )
    }
}

export default TermsOf;

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