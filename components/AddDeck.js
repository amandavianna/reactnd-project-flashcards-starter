import React, { Component } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native'
import { connect } from 'react-redux'
import { pink, white, darkGrey, red } from '../utils/colors'
import { addDeck } from '../actions'
import { saveDeckTitle } from '../utils/api'

class AddDeck extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      textValidation: false
    }
  }

  handleSubmit = () => {
    const { title, textValidation } = this.state

    if(title) {
      this.props.dispatch(addDeck(title))
      saveDeckTitle(title)

      this.setState(() => ({
        title: '',
        textValidation: false
      }))

      this.props.navigation.navigate('Deck', {
        deckTitle: title
      })
    } else {
      this.setState({ textValidation: true })
    }
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <View style={{marginBottom: 30, alignSelf: 'stretch'}}>
          <Text style={styles.title}>What is the title of your new deck?</Text>
          <TextInput
            onChangeText={(title) => this.setState({title})}
            value={this.state.title}
            style={styles.textInput}
          />
          {this.state.textValidation && (
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
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
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

export default connect()(AddDeck)
