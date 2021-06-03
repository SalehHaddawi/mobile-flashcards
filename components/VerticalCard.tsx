import * as React from "react";
import {StyleSheet, Text, View} from "react-native";


interface CardProps {
    title: string,
    subTitle: string
}

export default function VerticalCard (props: CardProps) {
    return (
        <View style={styles.outerOutline}>
            <View style={styles.outerOutline2}>
                <View style={styles.innerOutline}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.subTitle}>{props.subTitle}</Text>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    outerOutline: {
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderColor: '#f3cba9',
        borderStyle: 'solid',
        borderWidth: 8,
        borderRadius: 20,
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
        margin: 10
    },
    innerOutline: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'black',
        borderColor: '#91744c',
        borderStyle: 'solid',
        borderWidth: 4,
        borderRadius: 6,
        textAlign: 'center',
        margin: 30
    },
    title: {
        color: 'white',
        fontSize: 36,
        paddingTop: 30,
    },
    subTitle: {
        color: 'gray',
        fontSize: 24,
        paddingTop: 10,
    },
});
