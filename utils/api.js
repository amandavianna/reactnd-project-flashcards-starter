import { AsyncStorage } from 'react-native'
import { getDecksData } from './helpers'

export const FLASHCARD_STORAGE_KEY = 'flashcard'

export const getDecks = () => {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then(results => {
    // if(!results){
		// 	return getDecksData()
		// }
    return JSON.parse(results)
  })
}

export const getDeck = (id) => {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then((results) => {
    const data = JSON.parse(results)
    const deck = data[id]
    return 'amanda'
  })
}

export const saveDeckTitle = (title) => {
  return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      'questions': []
    }
  }))
}

export const addCardToDeck = (title, card) => {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then((results) => {
    const data = JSON.parse(results)
    const questions = data[title].questions
    questions.push(card)

    AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify(data))
  })
}

export const verifyKey = () => {
  return AsyncStorage.getAllKeys().then((val) => console.log(val))
}
export const verifyFlash = () => {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then((val) => console.log(val))
}
export const clearFlash = () => {
  return AsyncStorage.clear()
}
