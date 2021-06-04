import * as React from "react";
import AppStatusBar from "./components/AppStatusBar";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import Home from "./pages/Home";
import ViewDeck from "./pages/ViewDeck";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from './reducers';
import AddQuestion from "./pages/AddQuestion";
import Quiz from "./pages/Quiz";

export default function App() {
    const store = createStore(reducer);

    const Stack = createStackNavigator();

    return (
        <Provider store={store}>
            <NavigationContainer>
                <AppStatusBar backgroundColor="black"/>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="View Deck" component={ViewDeck} />
                    <Stack.Screen name="Add Question" component={AddQuestion} />
                    <Stack.Screen name="Quiz" component={Quiz} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
