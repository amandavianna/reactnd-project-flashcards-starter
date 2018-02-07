import {
  GET_ALL_DECKS,
  ADD_DECK,
  ADD_CARD
} from '../actions'

const decks = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      }
    case ADD_CARD:
      const { title, deck } = action
      return {
        ...state,
        [title]: {
          ...state[title],
          questions: [...state[title].questions, deck]
        }
      }
    default:
      return state
  }
}

export default decks
