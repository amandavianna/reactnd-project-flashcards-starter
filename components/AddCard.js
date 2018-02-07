import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard} from 'react-native'
import { connect } from 'react-redux'
import { pink, white, darkGrey, red } from '../utils/colors'
import { addCard } from '../actions'
import { addCardToDeck } from '../utils/api'

class AddCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      question: '',
      answer: '',
      textValidation: false
    }
  }

  handleSubmit = () => {
    const { question, answer, textValidation } = this.state
    const { title } = this.props.navigation.state.params.deck

    if(question && answer) {
      this.props.dispatch(addCard(title, { question, answer }))

      this.setState(() => ({
        question: '',
        answer: '',
        textValidation: false
      }))

      addCardToDeck(title, { question, answer })

      this.props.navigation.goBack()

    } else {
      this.setState({textValidation: true})
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <View style={{marginBottom: 20, alignSelf: 'stretch'}}>
          <Text style={styles.label}>Question:</Text>
          <TextInput
            onChangeText={(question) => this.setState({question})}
            value={this.state.question}
            placeholder='Add a new question'
            style={styles.textInput}
          />

          {this.state.textValidation && !this.state.question && (
            <Text style={styles.textValidation}>This field is required.</Text>
          )}
        </View>

        <View style={{marginBottom: 30, alignSelf: 'stretch'}}>
          <Text style={styles.label}>Answer:</Text>
          <TextInput
            onChangeText={(answer) => this.setState({answer})}
            value={this.state.answer}
            placeholder='Add a new answer'
            style={styles.textInput}
          />
          {this.state.textValidation && !this.state.answer && (
            <Text style={styles.textValidation}>This field is required.</Text>
          )}
        </View>

        <TouchableOpacity
          onPress={this.handleSubmit}
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
    alignItems: 'flex-start',
    paddingHorizontal: 10
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    color: darkGrey,
    marginBottom: 5
  },
  textInput: {
    borderRadius: 5,
    borderColor: darkGrey,
    borderWidth: 1,
    color: darkGrey,
    backgroundColor: white,
    padding: 10
  },
  textValidation: {
    marginTop: 5,
    color: red
  },
  btn: {
    alignSelf: 'center',
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

export default connect()(AddCard)
