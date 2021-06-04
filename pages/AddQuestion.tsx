import * as React from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import VerticalCard from "../components/VerticalCard";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {addCardToDeck} from "../utils/helpers";
import {addCard} from "../actions";


export default function AddQuestion(props) {
    const dispatch = useDispatch();
    const title = props.route.params.title;

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');


    // change page title
    useEffect(() => {
        props.navigation.setOptions({title: `Add Q to ${title}`});
    }, []);

    const submit = () => {
        if (question && answer) {
            // redux
            dispatch(addCard(title, {question, answer}));

            // save to DB
            addCardToDeck(title, {question, answer})

            // go back to Deck
            props.navigation.goBack();
        }
    }

    return (
        <View style={styles.container}>
            <VerticalCard>
                <View style={styles.cardContent}>
                    <View>
                        <TextInput value={question} onChangeText={setQuestion} placeholder={'question'} style={styles.input} />
                        <TextInput value={answer} onChangeText={setAnswer} placeholder={'answer'} style={styles.input} />
                    </View>

                    <TouchableOpacity style={styles.btn} onPress={submit}>
                        <Text style={styles.btnText}>Submit</Text>
                    </TouchableOpacity>
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
    cardContent: {
        justifyContent: 'space-around',
        flex: 1,
    },
    input: {
        backgroundColor: 'white',
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 6,
    },
    btn: {
        backgroundColor: 'black',
        borderColor: '#f3cba9',
        borderStyle: 'solid',
        borderWidth: 2,
    },
    btnText: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        paddingVertical: 6
    }
});
