import * as React from "react";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {Platform} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Decks from "./Decks";
import CreateDeck from "./CreateDeck";

export default function Home () {
    const Tab = Platform.OS === 'android' ?
        createMaterialTopTabNavigator():
        createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Decks" component={Decks}/>
            <Tab.Screen name="Create Deck" component={CreateDeck}/>
        </Tab.Navigator>
    );
}
