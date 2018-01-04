import React, { Component } from 'react';

import { Form, Item, Input, Button,Icon, Text, View } from 'native-base';
import { NativeRouter,Route , Link } from 'react-router-native'

export default class MyForm extends Component {
  constructor(){
    super();
    this.state = {
      username: "",
      password: ""
    }
  }
  alertMe(){
    if ((this.state.username.length < 6) && (this.state.password.length < 9)) {
      alert('Username & Password are too short')
    }
    else if (this.state.username.length < 6) {
      alert('Username is too short')
    }
    else if (this.state.password.length < 9) {
      alert('Password is too short')
    } else {
    alert(this.state.username)
  }
  }
  render() {
    return (
          <Form>
            <Item>
              <Input placeholder="Username" onChangeText={(x) => this.setState({username: x}) }/>
            </Item>
            <Item last>
              <Input placeholder="Password" onChangeText={(x) => this.setState({password: x}) }/>
            </Item>
            <Button onPress={this.alertMe.bind(this)}>
            <Text>Login</Text>
            </Button>
          </Form>
    );
  }
}
