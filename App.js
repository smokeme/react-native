import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {observer} from 'mobx-react';
import store from './Store';
import MyHeader from './Components/MyHeader'
import { Container, Content} from 'native-base';
import MyFooter from './Components/MyFooter'
import MyForm from './Components/MyForm'

const App = observer(class App extends Component {
  constructor(){
    super();
    this.state = {
      key: "not-value",
    }
  }
  render() {
    return (
      <Container >
        <MyHeader />
        <Content>
        <MyForm />
        </Content>
        <MyFooter />
      </Container>
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