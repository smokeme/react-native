import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {observer} from 'mobx-react';
import store from './Store';
import MyHeader from './Components/MyHeader'
import { Container, Content} from 'native-base';
import MyFooter from './Components/MyFooter'
import { NativeRouter,Route , Link } from 'react-router-native'
import auth from './auth'
const App = observer(class App extends Component {
  constructor(){
    super();
    this.state = {
      key: "not-value",
    }
  }
  componentWillMount(){
    auth.firstLoad()
  }
  render() {
    return (
      <NativeRouter>
      <Container >
        <MyHeader />
        <MyFooter />
      </Container>
      </NativeRouter>

    );
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App
