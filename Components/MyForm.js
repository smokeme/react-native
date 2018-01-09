import React, { Component } from 'react';
import { Form, Item, Input, Button,Icon, Text, View } from 'native-base';
import { NativeRouter,Route , Link } from 'react-router-native'
import store from '../Store';
import auth from '../auth';
import {observer} from 'mobx-react';

export default observer(class MyForm extends Component {
  constructor(){
    super();
    this.state = {
      username: "",
      password: ""
    }
  }
  alertMe(){
    if ((this.state.username.length < 1) && (this.state.password.length < 1)) {
      alert('Username & Password are too short')
    }
    else if (this.state.username.length < 1) {
      alert('Username is too short')
    }
    else if (this.state.password.length < 1) {
      alert('Password is too short')
    } else {
      auth.login(this.state.username,this.state.password)
  }
  }
  signUp(){
    auth.signup(this.state.username,this.state.password)
  }
  componentWillMount(){
    store.header = 'My Form'
  }
  render() {
    return (
          <Form>
            <Item>
              <Input autoCapitalize='none' placeholder="Username" onChangeText={(x) => this.setState({username: x}) }/>
            </Item>
            <Item last>
              <Input secureTextEntry placeholder="Password" onChangeText={(x) => this.setState({password: x}) }/>
            </Item>
            <Button onPress={this.alertMe.bind(this)}>
            <Text>Login</Text>
            </Button>
            <Button onPress={this.signUp.bind(this)}>
            <Text>Signup</Text>
            </Button>
          </Form>
    );
  }
})
