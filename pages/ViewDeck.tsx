import * as React from "react";
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Decks} from "../types";
import VerticalCard from "../components/VerticalCard";
import * as helpers from "../utils/helpers";
import * as actions from "../actions";


export default function ViewDeck (props) {

    const title = props.route.params.title;
    const decks = useSelector<Decks>((state: Decks) => state);
    const dispatch = useDispatch();

    // change page title
    useEffect(() => {
        props.navigation.setOptions({ title: title });
    }, [decks]);

    const _removeDeck = () => {
        dispatch(actions.removeDeck(title));

        helpers.removeDeck(title);

        props.navigation.goBack();
    }

    const _addQuestion = () => {
        props.navigation.navigate('Add Question', { title: title });
    }

    const _takeQuiz = () => {
        props.navigation.navigate('Quiz', {title: title});
    }

    if (!decks[title]) {
        return <Text>{''}</Text>
    }

    const numOfQuestion = decks[title].questions.length;

    return (
        <View style={styles.container}>
            <VerticalCard>
                <View style={styles.cardContent}>
                    <View>
                        <Text style={styles.title}>
                            {title}
                        </Text>
                        <Text style={styles.text}>
                            {decks[title].questions.length} card{numOfQuestion > 1 || numOfQuestion === 0 ? 's' : null}
                        </Text>
                    </View>

                    <View>
                        <TouchableOpacity style={styles.btn} onPress={_addQuestion}>
                            <Text style={styles.btnText}>
                                Add Card
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={_takeQuiz}>
                            <Text style={styles.btnText}>
                                Start Quiz
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={_removeDeck}>
                            <Text style={styles.deleteDeck}>Delete Deck</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </VerticalCard>
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
    title: {
        color: 'white',
        fontSize: 36,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    text: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
    },
    btn: {
        color: 'white',
        fontSize: 24,
        backgroundColor: 'white',
        borderColor: '#f3cba9',
        borderStyle: 'solid',
        borderWidth: 2,
        marginVertical: 6,
        marginHorizontal: 4,
        paddingVertical: 6,
    },
    btnText: {
        color: 'black',
        marginVertical: 6,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    cardContent: {
        flex: 1,
        justifyContent: 'space-around'
    },
    deleteDeck: {
        color: 'red',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 30,
    }
})
