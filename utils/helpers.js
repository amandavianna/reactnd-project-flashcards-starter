import React from 'react'
import { View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { grey } from './colors'

export function getDecks(deck) {
  const info = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'Primeira pergunta card 1?',
          answer: 'Primeira resposta card 1'
        },
        {
          question: 'Segunda pergunta card 1?',
          answer: 'Segunda resposta card 1'
        },
        {
          question: 'Terceira pergunta card 1?',
          answer: 'Terceira resposta card 1'
        }
      ],
      getIcon() {
        return (
          <View>
            <MaterialCommunityIcons
              name= 'react'
              color= {grey}
              size={50}
            />
          </View>
        )
      }
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'Primeira pergunta card 2?',
          answer: 'Primeira resposta card 2'
        }
      ],
      getIcon() {
        return (
          <View>
            <MaterialCommunityIcons
              name= 'language-javascript'
              color= {grey}
              size={50}
            />
          </View>
        )
      }
    },
    Android: {
      title: 'Android',
      questions: [
        {
          question: 'Primeira pergunta card 3?',
          answer: 'Primeira resposta card 3'
        }
      ],
      getIcon() {
        return (
          <View>
            <MaterialCommunityIcons
              name= 'android'
              color= {grey}
              size={50}
            />
          </View>
        )
      }
    },
    iOS: {
      title: 'iOS',
      questions: [
        {
          question: 'Primeira pergunta card 3?',
          answer: 'Primeira resposta card 3'
        }
      ],
      getIcon() {
        return (
          <View>
            <MaterialCommunityIcons
              name= 'apple'
              color= {grey}
              size={50}
            />
          </View>
        )
      }
    },
    Angular: {
      title: 'Angular',
      questions: [
        {
          question: 'Primeira pergunta card 3?',
          answer: 'Primeira resposta card 3'
        }
      ],
      getIcon() {
        return (
          <View>
            <MaterialCommunityIcons
              name= 'angular'
              color= {grey}
              size={50}
            />
          </View>
        )
      }
    }
  }
  return typeof deck === 'undefined'
    ? info
    : info[deck]
}
