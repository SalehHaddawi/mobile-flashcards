import AsyncStorage from "@react-native-async-storage/async-storage";
import {Question} from "../types";
import * as Notifications from 'expo-notifications';

export const DECKS_STORAGE_KEY = 'mobile-flashcards:deck';
export const NOTIFICATIONS_STORAGE_KEY = 'mobile-flashcards:notifications'

export function getDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(JSON.parse);
}

export function getDeck(id: string) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(JSON.parse).then((data) => data[id]);
}

export function saveDeckTitle(title: string) {
    AsyncStorage.getItem(DECKS_STORAGE_KEY).then(JSON.parse).then((data) => {
        if (!data) {
            data = {};
        }

        data[title] = {
            title,
            questions: []
        }

        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
    });
}

export function removeDeck(title: string) {
    AsyncStorage.getItem(DECKS_STORAGE_KEY).then(JSON.parse).then((data) => {
        if (!data) {
            data = {};
        }

        data[title] = undefined;

        delete data[title];

        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
    });
}

export function addCardToDeck(deckTitle: string, card: Question) {
    AsyncStorage.getItem(DECKS_STORAGE_KEY).then(JSON.parse).then((data) => {
        data[deckTitle].questions.push({
            question: card.question,
            answer: card.answer
        });

        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
    });
}

export function createNotification() {
    let time = new Date();

    time.setHours(20); // 8 PM
    time.setMinutes(0);

    return {
        content: {
            title: 'Quiz time',
            body: 'don\'t forget to take your daily Quiz!',
            sound: true,
            sticky: false,
            vibrate: [1],
            priority: 'high',
        },
        trigger: {
            hour: time.getHours(),
            minute: time.getMinutes(),
            repeats: true
        }
    }
}

export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATIONS_STORAGE_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Notifications.requestPermissionsAsync()
                    .then(({status}) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()
                                .catch((error) => console.warn('Error while cancelling all notifications:', error));

                            Notifications.scheduleNotificationAsync(
                                createNotification()
                            ).catch((error) => console.warn('Error while scheduleNotificationAsync :', error));

                            AsyncStorage.setItem(NOTIFICATIONS_STORAGE_KEY, 'true');
                        }
                    })
            }
        })
}

export function clearLocalNotifications() {
    return AsyncStorage.removeItem(NOTIFICATIONS_STORAGE_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync);
}
