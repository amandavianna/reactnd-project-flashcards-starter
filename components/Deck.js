import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { pink, white, grey, darkGrey} from '../utils/colors'
import { getDeck } from '../utils/api'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.deckTitle
    }
  }

  render() {
    const { deck, navigation } = this.props

    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.deckTitle}>{deck.title}</Text>
          <Text style={styles.deckSubtitle}>{deck.questions.length} cards</Text>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddCard', {deck})}
            style={[styles.btn, styles.addBtn]}
          >
            <Text style={[styles.btnText, styles.addBtnText]}>Add Card</Text>
          </TouchableOpacity>

          {(deck.questions.length > 0) &&
            <TouchableOpacity
              onPress={() => navigation.navigate('Quiz', {deck})}
              style={[styles.btn, styles.quizBtn]}
            >
              <Text style={[styles.btnText, styles.quizBtnText]}>Start Quiz</Text>
            </TouchableOpacity>
          }
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

const mapStateToProps = (state, ownProps) => {
  const deck = state[ownProps.navigation.state.params.deckTitle]

  return {
    deck
  }
}

export default connect(mapStateToProps)(Deck)
