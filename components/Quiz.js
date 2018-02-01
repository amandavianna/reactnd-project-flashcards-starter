import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import { getDecks } from '../utils/helpers'
import { red, green, white, grey, darkGrey} from '../utils/colors'

export default class Quiz extends Component {

  constructor(props) {
    super(props)

    this.state = {
      cardNumber: 0
    }
  }

  render() {
    const decks = getDecks()

    const { getIcon, title, questions } = decks['React']
    const { cardNumber } = this.state

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.cardNumber}>{cardNumber + 1} of {questions.length}</Text>
        </View>

        <View>
          <Text style={styles.quizTitle}>{questions[cardNumber].question}</Text>

          <TouchableOpacity onPress={() => console.log('Answer/Question')} >
            <Text style={styles.quizLink}>Answer/Question</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => console.log('Correct')}
            style={[styles.btn, styles.correctBtn]}
          >
            <Text style={styles.btnText}>Correct</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log('Incorrect')}
            style={[styles.btn, styles.incorrectBtn]}
          >
            <Text style={styles.btnText}>Incorrect</Text>
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
  cardNumber: {
  },
  quizTitle: {
    fontWeight: 'bold',
    fontSize: 40,
    color: darkGrey,
    marginBottom: 10,
    textAlign: 'center'
  },
  quizLink: {
    fontWeight: '200',
    color: red,
    fontSize: 20,
    alignSelf: 'center'
  },
  btn: {
    width: 200,
    alignItems: 'center',
    borderRadius: 5
  },
  btnText: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontSize: 16,
    color: white
  },
  correctBtn: {
    backgroundColor: green,
    marginBottom: 10
  },
  incorrectBtn: {
    backgroundColor: red
  }
})
