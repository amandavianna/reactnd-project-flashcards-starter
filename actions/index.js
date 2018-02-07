export const GET_ALL_DECKS = 'GET_ALL_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export const getAllDecks = decks => ({
  type: GET_ALL_DECKS,
  decks
})

export const addDeck = (title) => ({
  type: ADD_DECK,
  title
})

export const addCard = (title, deck) => ({
  type: ADD_CARD,
  title,
  deck
})
