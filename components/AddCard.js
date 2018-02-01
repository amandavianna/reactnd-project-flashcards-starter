import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import { pink, white, darkGrey } from '../utils/colors'

export default class AddDeck extends Component {
  constructor(props) {
    super(props)

    this.state = {
      question: '',
      answer: ''
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <TextInput
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
          placeholder='Add a new question'
          style={styles.textInput}
        />
        <TextInput
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
          placeholder='Add a new answer'
          style={styles.textInput}
        />
        <TouchableOpacity
          onPress={() => console.log('Add new card')}
          style={styles.btn}
        >
          <Text style={styles.btnText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  textInput: {
    borderRadius: 5,
    borderColor: darkGrey,
    borderWidth: 1,
    color: darkGrey,
    backgroundColor: white,
    alignSelf: 'stretch',
    padding: 10,
    marginBottom: 30
  },
  btn: {
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: pink,
  },
  btnText: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontSize: 16,
    color: white
  }
})
