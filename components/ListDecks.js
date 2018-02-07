import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import { grey, ligthGrey, darkGrey, pink, white } from '../utils/colors'
import { connect } from 'react-redux'
import { getAllDecks } from '../actions'
import { getDecks } from '../utils/api'

class ListDecks extends Component {
  async componentDidMount() {
    const decks = await getDecks()
    this.props.dispatch(getAllDecks(decks))
  }

  render() {
    const { decks, navigation } = this.props

    if(!decks || Object.keys(decks).length === 0 && decks.constructor === Object) {
      return (
        <View style={styles.containerInfo}>
          <Text style={styles.info}>No deck found</Text>
          <SimpleLineIcons
            name= 'emotsmile'
            size={80}
            color={grey}
            style={{marginBottom: 20}}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('AddDeck')}
            style={styles.addBtn}
          >
            <Text style={styles.addBtnText}>Add New Deck</Text>
          </TouchableOpacity>
        </View>
      )
    }

    return (
      <ScrollView>
        <View style={styles.container}>
          {Object.keys(decks).map((deck) => (
              <View style={styles.deckSection} key={deck}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Deck', {
									  deckTitle: decks[deck].title
								  })}
                >
                  <View style={styles.deckView}>
                    <View style={{flex: 2, marginHorizontal: 10}}>
                      <Text style={styles.deckTitle}>{decks[deck].title}</Text>
                      <Text style={styles.deckSubtitle}>{decks[deck].questions.length} cards</Text>
                    </View>
                    <View style={{alignSelf: 'center'}}>
                      <MaterialCommunityIcons
                        name= 'chevron-right'
                        color= {grey}
                        size={32}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
          ))}
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch'
  },
  containerInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  info: {
    fontSize: 20,
    marginBottom: 20
  },
  addBtn: {
    width: 200,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: pink,
    marginBottom: 10
  },
  addBtnText: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontSize: 16,
    color: white
  },
  deckSection: {
    borderBottomColor: ligthGrey,
    borderBottomWidth: 1
  },
  deckView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  deckTitle: {
    fontWeight: '500',
    fontSize: 20,
    color: darkGrey,
    marginBottom: 1
  },
  deckSubtitle: {
    color: grey,
    fontSize: 16
  }
})

const mapStateToProps = (state) => {
  const decks = state

  return {
    decks
  }
}

export default connect(mapStateToProps)(ListDecks)
