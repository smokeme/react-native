import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class MyFooter extends Component {
  constructor(){
    super();
    this.state = {
      button: '',
    }
  }
  changeMe(button){
    let x = button + " " + this.state.button
    this.setState({button:x})
  }
  render() {
    return (
        <Footer>
          <FooterTab>
            <Button vertical disabled={this.state.button.includes('Button1')} onPress={this.changeMe.bind(this,'Button1')}>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical disabled={this.state.button.includes('Button2')} onPress={this.changeMe.bind(this,'Button2')}>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical disabled={this.state.button.includes('Button3')} onPress={this.changeMe.bind(this,'Button3')}>
              <Icon name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical disabled={this.state.button.includes('Button4')} onPress={this.changeMe.bind(this,'Button4')}>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}
