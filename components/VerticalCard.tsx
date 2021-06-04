import * as React from "react";
import {StyleSheet, Text, View} from "react-native";


export default function VerticalCard (props) {
    return (
        <View style={styles.outerOutline}>
            <View style={styles.outerOutline2}>
                <View style={styles.innerOutline}>
                    {props.children ? props.children : null}
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
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
        margin: 2
    },
    innerOutline: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderColor: '#91744c',
        borderStyle: 'solid',
        borderWidth: 4,
        borderRadius: 6,
        textAlign: 'center',
        margin: 16,
        padding: 6
    },
    text: {
        color: 'white',
        fontSize: 36,
        textAlign: 'center',
    },
    title: {
        color: 'black',
        fontSize: 36,
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    btn: {
        color: 'white',
        fontSize: 24,
        backgroundColor: 'black',
        borderColor: '#f3cba9',
        borderStyle: 'solid',
        borderRadius: 20,
        borderWidth: 2,
    },

})
