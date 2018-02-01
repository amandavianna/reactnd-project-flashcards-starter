import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { getDecks } from '../utils/helpers'
import { grey, ligthGrey, darkGrey } from '../utils/colors'

export default class ListDecks extends Component {

  render() {
    const decks = getDecks()

    return (
      <ScrollView>
        <View style={styles.container}>
          {Object.keys(decks).map((deck) => {
            const { getIcon, title, questions } = decks[deck]

            return (
              <View style={styles.deckSection} key={deck}>
                <TouchableOpacity
                  onPress={() => console.log('clicou')}
                >
                  <View style={styles.deckView}>
                    <View style={{alignSelf: 'center'}}>{getIcon()}</View>
                    <View style={{flex: 2, marginHorizontal: 10}}>
                      <Text style={styles.deckTitle}>{title}</Text>
                      <Text style={styles.deckSubtitle}>{questions.length} cards</Text>
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
            )
          })}
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
  deckSection: {
    borderBottomColor: ligthGrey,
    borderBottomWidth: 1
  },
  deckView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10
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
