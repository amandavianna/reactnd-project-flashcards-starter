import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { pink, white, darkGrey } from '../utils/colors'

export default class AddDeck extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: ''
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
          style={styles.textInput}
        />
        <TouchableOpacity
          onPress={() => console.log('Add new deck')}
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
  title: {
    fontWeight: 'bold',
    fontSize: 42,
    color: darkGrey,
    marginBottom: 30,
    textAlign: 'center'
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
