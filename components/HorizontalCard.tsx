import * as React from "react";
import {StyleSheet, Text, View} from "react-native";


interface CardProps {
    title: string,
    subTitle: string
}

export default function HorizontalCard (props: CardProps) {
    return (
        <View style={styles.outerOutline}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.subTitle}>{props.subTitle}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    outerOutline: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderColor: '#d0a268',
        borderStyle: 'solid',
        borderWidth: 6,
        borderRadius: 20,
        marginVertical: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    title: {
        color: 'white',
        fontSize: 36,
        paddingTop: 4,
    },
    subTitle: {
        color: 'gray',
        fontSize: 16,
        paddingVertical: 10,
    },
});
