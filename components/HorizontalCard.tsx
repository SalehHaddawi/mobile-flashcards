import * as React from "react";
import {StyleSheet, Text, View} from "react-native";


interface CardProps {
    children?: any;
}

export default function HorizontalCard (props: CardProps) {
    const {children} = props;
    return (
        <View style={styles.outerOutline}>
            {children ? children : null}
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
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
});
