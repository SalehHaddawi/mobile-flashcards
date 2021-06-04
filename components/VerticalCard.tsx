import * as React from "react";
import {StyleSheet, Text, View} from "react-native";
import FlipCard from 'react-native-flip-card'


export default function VerticalCard ({ style = {}, children = null, flip= false, onFlipEnd = () => {}}) {

    return (
        <FlipCard style={styles.container} flipHorizontal={true} flipVertical={false} clickable={false} useNativeDriver={true} flip={flip} onFlipEnd={onFlipEnd}>
            <View style={[styles.outerOutline, style]}>
                <View style={styles.outerOutline2}>
                    {children ? children : null}
                </View>
            </View>
            <View style={[styles.outerOutline, style]}>
                <View style={styles.outerOutline2}>
                    {children ? children : null}
                </View>
            </View>
        </FlipCard>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        alignItems: 'stretch',
    },
    outerOutline: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'black',
        // borderColor: '#f3cba9',
        borderStyle: 'solid',
        borderWidth: 8,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    outerOutline2: {
        flex: 1,
        flexGrow: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderColor: '#f3cba9',
        borderStyle: 'solid',
        borderWidth: 4,
        borderRadius: 8,
        margin: 2,
        padding: 6
    },
})
