import React, { Component } from 'react';
import {  Card, CardItem, Body, Button, Text , CheckBox} from 'native-base';


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
    </CardItem>
       </Card>

  )
}
}
