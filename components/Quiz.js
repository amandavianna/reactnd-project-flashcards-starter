import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { red, green, white, grey, darkGrey, pink } from '../utils/colors'
import { FontAwesome, SimpleLineIcons } from '@expo/vector-icons'
import {
  clearLocalNotification,
  setLocalNotification
} from '../utils/helpers'

class Quiz extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: `Quiz: ${navigation.state.params.deck.title}`
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      cardNumber: 0,
      score: 0,
      showQuestion: true
    }
  }

  render() {
    const { deck, navigation } = this.props

    const { cardNumber, showQuestion, score } = this.state

    if (cardNumber < deck.questions.length) {
      return (
        <View style={styles.container}>
          <Text style={{alignSelf: 'flex-start', fontSize: 14}}>{cardNumber + 1} of {deck.questions.length}</Text>

          <View style={{alignItems: 'center', justifyContent: 'space-around', flex: 1}}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.quizTitle}>
                { showQuestion ? deck.questions[cardNumber].question : deck.questions[cardNumber].answer }
              </Text>

              <TouchableOpacity onPress={() => this.setState({ showQuestion: !showQuestion })} >
                <Text style={styles.quizLink}>
                  { showQuestion ? 'Answer' : 'Question' }
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    score: score + 1,
                    cardNumber: cardNumber + 1,
                    showQuestion: !showQuestion
                  })
                }}
                style={[styles.btn, { marginBottom: 10, backgroundColor: showQuestion ? green + '7F'  : green } ]}
                disabled={ showQuestion }
              >
                <Text style={styles.btnText}>Correct</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.setState({
                    cardNumber: cardNumber + 1,
                    showQuestion: !showQuestion
                  })
                }}
                style={[styles.btn, { backgroundColor: showQuestion ? red + '7F'  : red }]}
                disabled={ showQuestion }
              >
                <Text style={styles.btnText}>Incorrect</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.resultText}>Result: You got {score} out of {deck.questions.length}</Text>
          {score === deck.questions.length ?
            <FontAwesome
              name= 'flag-checkered'
              size={80}
              color={grey}
              style={{marginBottom: 20}}
            />
          :
            <SimpleLineIcons
              name= 'emotsmile'
              size={80}
              color={grey}
              style={{marginBottom: 20}}
            />
          }
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Quiz', {deck})
                clearLocalNotification().then(setLocalNotification)
              }}
              style={[styles.btn, {backgroundColor: pink, marginBottom: 10}]}
            >
              <Text style={styles.btnText}>Restart Quiz</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Deck', { deckTitle: deck.title })
                clearLocalNotification().then(setLocalNotification)
              }}
              style={[styles.btn, {backgroundColor: pink}]}
            >
              <Text style={styles.btnText}>Back to Deck</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10
  },
  quizTitle: {
    fontWeight: 'bold',
    fontSize: 40,
    color: darkGrey,
    marginBottom: 10,
    textAlign: 'center'
  },
  quizLink: {
    fontWeight: '400',
    color: red,
    fontSize: 20
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
  resultText: {
    fontSize: 28,
    marginBottom: 30
  }
})

const mapStateToProps = (state, ownProps) => {
  const deck = ownProps.navigation.state.params.deck

  return {
    deck
  }
}

export default connect(mapStateToProps)(Quiz)
