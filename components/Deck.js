import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import { getDecks } from '../utils/helpers'
import { pink, white, grey, darkGrey} from '../utils/colors'

export default class Deck extends Component {

  render() {
    const decks = getDecks()

    const { getIcon, title, questions } = decks['React']

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.deckTitle}>{title}</Text>
          <Text style={styles.deckSubtitle}>{questions.length} cards</Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => console.log('Add Card')}
            style={[styles.btn, styles.addBtn]}
          >
            <Text style={[styles.btnText, styles.addBtnText]}>Add Card</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log('Start Quiz')}
            style={[styles.btn, styles.quizBtn]}
          >
            <Text style={[styles.btnText, styles.quizBtnText]}>Start Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  deckTitle: {
    fontWeight: 'bold',
    fontSize: 40,
    color: darkGrey,
    marginBottom: 10,
    alignSelf: 'center'
  },
  deckSubtitle: {
    color: grey,
    fontSize: 20,
    alignSelf: 'center'
  },
  btn: {
    width: 200,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: pink,
    borderWidth: 1,
  },
  btnText: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontSize: 16
  },
  addBtn: {
    backgroundColor: white,
    marginBottom: 10
  },
  addBtnText: {
    color: pink
  },
  quizBtn: {
    backgroundColor: pink
  },
  quizBtnText: {
    color: white
  }
})
