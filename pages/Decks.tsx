import * as React from "react";
import {Animated, FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import HorizontalCard from "../components/HorizontalCard";
import {useSelector} from "react-redux";
import {useState} from "react";


export default function Decks(props) {
    const decks = useSelector((state) => state);
    const [bounce, setBounce] = useState(new Animated.Value(1));

    const viewDeck = (title) => {
        Animated.sequence([
            Animated.timing(bounce, {toValue: 1.04, duration: 200, useNativeDriver: true}),
            Animated.spring(bounce, {toValue: 1, friction: 4, useNativeDriver: true}),
        ]).start();

        props.navigation.navigate('View Deck', {title});
    }

    function _renderItem({item, index}) {
        return (
            <HorizontalCard>
                {/*@ts-ignore*/}
                <TouchableOpacity onPress={() => viewDeck(item)} style={[{transform: [{scale: bounce}]}]}>
                    <Text style={styles.title}>{decks[item].title}</Text>
                    <Text style={styles.subTitle}>{`${decks[item].questions.length} cards`}</Text>
                </TouchableOpacity>
            </HorizontalCard>
        )
    }

    return (
        <View style={styles.container}>
            {Object.keys(decks).length > 0 &&
                <FlatList data={Object.keys(decks)} renderItem={_renderItem} keyExtractor={(item => item)}/>
            }

            {Object.keys(decks).length === 0 &&
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>
                        You Don't have any Decks start by creating one!
                    </Text>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingHorizontal: 8,
        paddingTop: 40
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
        textAlign: 'center'
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 32,
        textAlign: 'center',
    }
})
