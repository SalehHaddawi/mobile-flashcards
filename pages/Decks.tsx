import * as React from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useEffect} from "react";
import HorizontalCard from "../components/HorizontalCard";
import {getDecks} from "../utils/helpers";
import {useDispatch, useSelector} from "react-redux";
import {receiveDecks, removeDeck} from "../actions";


export default function Decks(props) {
    const dispatch = useDispatch();
    const decks = useSelector((state) => state);

    useEffect(() => {
        getDecks().then((data) => {
            dispatch(receiveDecks(data));
        });
    }, []);

    const viewDeck = (title) => {
        props.navigation.navigate('View Deck', { title });
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
        <View style={{ flex: 1, flexDirection:'column', justifyContent: 'center', paddingHorizontal: 8, paddingTop: 40}}>
            <FlatList data={Object.keys(decks)} renderItem={_renderItem} keyExtractor={(item => item)}/>
        </View>
    );
}

const styles = StyleSheet.create({
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
    }
})
