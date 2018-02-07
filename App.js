import React from 'react'
import { View, Platform, StatusBar } from 'react-native'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import { TabNavigator, StackNavigator } from 'react-navigation'
import { pink, white } from './utils/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Constants } from 'expo'

import { setLocalNotification } from './utils/helpers'

import ListDecks from './components/ListDecks'
import Deck from './components/Deck'
import Quiz from './components/Quiz'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'

function CardStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = TabNavigator({
  ListDecks: {
    screen: ListDecks,
    navigationOptions: {
      tabBarLabel: 'DECKS',
      tabBarIcon: ({tintColor}) => (
        <MaterialCommunityIcons name="format-list-bulleted" size={30} color={tintColor} />
      )
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECK',
      tabBarIcon: ({tintColor}) => (
        <MaterialCommunityIcons name="plus" size={30} color={tintColor} />
      )
    }
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? pink : white,
    style: {
      height: 56,
      backgroundColor: Platform.OS === 'ios' ? white : pink,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const MainNavigator = StackNavigator({
	ListDecks: {
		screen: Tabs,
		navigationOptions: {
      title: 'FlashCards'
    }
	},
	AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add Card'
    }
	},
	Deck: {
		screen: Deck
	},
	Quiz: {
    screen: Quiz
	}
}, {
  navigationOptions: {
    headerTintColor: white,
    headerStyle: {
      backgroundColor: pink
    }
  }
})

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <CardStatusBar
            backgroundColor={pink}
            barStyle='light-content'
          />
          <MainNavigator />
        </View>
      </Provider>
    )
  }
}
