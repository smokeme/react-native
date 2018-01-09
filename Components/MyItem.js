import React, { Component } from 'react';
import {  Card, CardItem, Body, Button, Text , CheckBox} from 'native-base';
import store from '../Store';

export default class MyItem extends Component {
  constructor(){
    super();
    this.state = {
      object: {}
    }
  }
  componentWillMount(){
    this.setState({object: this.props.object})
  }
  handleChange(){
    let x = this.state.object
    x.completed = !x.completed
    this.setState({object:x})
  }
  showDetail(){
    store.object = this.state.object
    store.showDetail = true
  }
  render(){
  return (
    <Card>
    <CardItem>
      <CheckBox checked={this.state.object.completed} onPress={this.handleChange.bind(this)}/>
    </CardItem>
    <CardItem>
      <Body>
        <Text>{this.state.object.title}</Text>
      </Body>
      <Button onPress={this.showDetail.bind(this)}>
      <Text>Detail</Text>
      </Button>
    </CardItem>
       </Card>

  )
}
}
