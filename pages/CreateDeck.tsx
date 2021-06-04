import * as React from "react";
import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import {saveDeckTitle} from "../utils/helpers";
import VerticalCard from "../components/VerticalCard";
import {useDispatch} from "react-redux";
import {createDeck} from "../actions";


export default function CreateDeck(props: any) {
    const [title, setTitle] = useState<string>('');
    const dispatch = useDispatch();

    const submit = () => {
        if (title) {
            saveDeckTitle(title);

            dispatch(createDeck(title));

            props.navigation.navigate('View Deck', {title: title});

            setTitle('');
        }
    }

    return (
        <KeyboardAvoidingView behavior="height" style={styles.container}>
            <VerticalCard>
                <View style={styles.cardContent}>
                    <Text style={styles.text}>
                        What is the title of your new Deck?
                    </Text>
                    <TextInput value={title} onChangeText={(text => setTitle(text))} placeholder={'title'} style={styles.title}/>
                    <TouchableOpacity style={styles.btn} onPress={submit}>
                        <Text style={styles.text}>
                            Submit
                        </Text>
                    </TouchableOpacity>
                </View>
            </VerticalCard>
        </KeyboardAvoidingView>
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
        flex: 1,
        justifyContent: 'space-around'
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
