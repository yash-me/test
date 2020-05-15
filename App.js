import React from 'react';
import { View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';


import History from './components/History'

<<<<<<< HEAD
export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{ flex: 1}}>
          <View style={{height:20}}/>
          <History/>
        </View>
      </Provider>
    );
  }
}
=======
  render () {
      return (
        <Provider store={{flex:1}}>
          <View style={styles.container}>
            <History/>
          </View>
        </Provider>
          
      )
  }
}



>>>>>>> 9d5cf04162641d4b454711d55734c482c9e29f86
