import * as React from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import HorizontalCard from "../components/HorizontalCard";
import {useSelector} from "react-redux";


export default function Decks(props) {
    const decks = useSelector((state) => state);

    const viewDeck = (title) => {
        props.navigation.navigate('View Deck', {title});
    }

    function _renderItem({item, index}) {
        return (
            <HorizontalCard>
                <TouchableOpacity onPress={() => viewDeck(item)}>
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
