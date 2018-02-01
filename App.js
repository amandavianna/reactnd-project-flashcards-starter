import React from 'react';
import { StyleSheet, View } from 'react-native';
// import ListDecks from './components/ListDecks'
// import Deck from './components/Deck'
// import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <ListDecks /> */}
        {/* <Deck /> */}
        {/* <AddDeck /> */}
        <AddCard />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
