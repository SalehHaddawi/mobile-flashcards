import * as React from "react";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {Platform} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Decks from "./Decks";
import CreateDeck from "./CreateDeck";
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {useEffect} from "react";
import {getDecks} from "../utils/helpers";
import {receiveDecks} from "../actions";
import {useDispatch} from "react-redux";

export default function Home () {
    const dispatch = useDispatch();

    useEffect(() => {
        getDecks().then((data) => {
            dispatch(receiveDecks(data));
        });
    }, []);

    const Tab = Platform.OS === 'android' ?
        createMaterialTopTabNavigator():
        createBottomTabNavigator();

    return (
        <SafeAreaProvider>
            <Tab.Navigator>
                <Tab.Screen name="Decks" component={Decks}/>
                <Tab.Screen name="Create Deck" component={CreateDeck}/>
            </Tab.Navigator>
        </SafeAreaProvider>
    );
}
