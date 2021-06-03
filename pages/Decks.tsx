import * as React from "react";
import {FlatList, View} from "react-native";
import {useEffect} from "react";
import HorizontalCard from "../components/HorizontalCard";
import {getDecks} from "../utils/helpers";
import {useDispatch, useSelector} from "react-redux";
import {State} from "../types";
import {receiveDecks} from "../actions";


export default function Decks() {
    const dispatch = useDispatch();
    const decks = useSelector((state: State) => state);

    useEffect(() => {
        getDecks().then((data) => {
            dispatch(receiveDecks(data));
        });
    }, [decks]);

    function _renderItem({item, index}) {
        return (
            <HorizontalCard title={decks[item].title} subTitle={`${decks[item].questions.length} cards`}/>
        )
    }

    return (
        <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', paddingHorizontal: 8, paddingTop: 40}}>
            <FlatList data={Object.keys(decks)} renderItem={_renderItem} keyExtractor={(item => item)}/>
        </View>
    );
}
