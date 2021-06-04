import * as React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useSelector} from "react-redux";
import {Decks} from "../types";
import {useEffect, useState} from "react";
import VerticalCard from "../components/VerticalCard";
import {clearLocalNotifications, setLocalNotification} from "../utils/helpers";


export default function Quiz(props) {
    const title = props.route.params.title;
    const decks = useSelector((state: Decks) => state);
    const questions = decks[title].questions;
    const [questionIndex, setQuestionIndex] = useState(0);
    const [flipCard, setFlipCard] = useState(false);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    // change page title
    useEffect(() => {
        props.navigation.setOptions({title: title + ' Quiz'});
    }, [decks]);

    const chooseAnswer = (points) => {
        setScore((score) => score + points);

        // last question
        if (questionIndex === questions.length - 1) {
            setFinished(true);

            // clear local notifications
            clearLocalNotifications().then(setLocalNotification);
        }
        // move to next question
        else {
            setFlipCard(false);
            setQuestionIndex((index) => index + 1);
        }
    }

    const restartQuiz = () => {
        setQuestionIndex(0);
        setScore(0);
        setFlipCard(false);
        setFinished(false);
    }

    const goBackToDeck = () => {
        props.navigation.goBack();
    }

    return (
        <View style={styles.container}>
            {/* IF NO QUESTIONS */}
            {questions.length === 0 &&
                <Text style={{fontSize: 18, padding: 10, textAlign: 'center'}}>You cannot take a Quiz because there are no cards in the deck</Text>
            }
            {/* IF QUESTIONS FOUND */}
            {questions.length > 0 && (
                <>
                    {/* IF QUIZ NOT FINISHED */ !finished &&
                    <View style={styles.quizContainer}>
                        <Text style={styles.questionCountText}>{`${questionIndex + 1} / ${questions.length}`}</Text>
                        <VerticalCard style={{padding: 10}} flip={flipCard}>
                            <View style={styles.card}>
                                <View>
                                    <Text style={styles.question}>
                                        {questions[questionIndex][flipCard ? 'answer' : 'question']}
                                    </Text>
                                    <TouchableOpacity onPress={() => setFlipCard((flip) => !flip)}>
                                        <Text style={styles.flip}>
                                            {flipCard ? 'Hide Answer' : 'Show Answer'}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.answerContainer}>
                                    <TouchableOpacity style={styles.correct} onPress={() => chooseAnswer(1)}>
                                        <Text style={styles.answerText}>Correct</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.incorrect} onPress={() => chooseAnswer(0)}>
                                        <Text style={styles.answerText}>Incorrect</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </VerticalCard>
                    </View>}

                    {/* IF QUIZ FINISHED */ finished &&
                    <View style={styles.quizContainer}>
                        <VerticalCard style={{padding: 10}}>
                            <View style={styles.card}>
                                <View>
                                    <Text style={styles.question}>
                                        Quiz Finished
                                    </Text>
                                    <Text style={styles.question}>
                                        Score: {score} of {questions.length}
                                    </Text>
                                </View>
                                <View style={styles.answerContainer}>
                                    <TouchableOpacity style={styles.correct} onPress={restartQuiz}>
                                        <Text style={styles.answerText}>Restart Quiz</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.incorrect} onPress={goBackToDeck}>
                                        <Text style={styles.answerText}>Back To Deck</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </VerticalCard>
                    </View>
                    }
                </>
            )}
            {/* IF QUESTIONS FOUND AND QUIZ IS FINISHED  */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    quizContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 8,
    },
    questionCountText: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: "",
        marginBottom: 20
    },
    card: {
        flex: 1,
        justifyContent: 'space-around',
        marginTop: 20
    },
    question: {
        color: 'white',
        fontSize: 32,
        fontFamily: "",
        textAlign: 'center'
    },
    flip: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center'
    },
    answerContainer: {
        paddingHorizontal: 80,
    },
    correct: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 5,
        marginVertical: 6,
    },
    incorrect: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        marginVertical: 6,
    },
    answerText: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center'
    },
    scoreContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
