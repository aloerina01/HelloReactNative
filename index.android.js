/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container, Content, Button, Header, Body, Title, List, ListItem, 
        Card, CardItem, Badge, Icon, Left, Right, Text, H3 } from 'native-base';
import { AppRegistry } from 'react-native';

export default class HelloReactNative extends Component {
  render() {
    return (
      <Container>
        <Header>
            <Body>
              <Title>Component Sample</Title>
            </Body>
        </Header>
        <Content padder>
          <H3>Button</H3>
          <Button><Text>select</Text></Button>
          <H3>Budge</H3>
          <Badge><Text>2</Text></Badge>
          <H3>Card</H3>
          <Card>
            <CardItem>
                <Icon name="logo-twitter" style={{ color: '#55acee' }} />
                <Text>Twitter</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
            </CardItem>
            <CardItem>
                <Icon name="logo-googleplus" style={{ color: '#dd4b39' }} />
                <Text>Google Plus</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
            </CardItem>
            <CardItem>
              <Icon name="logo-facebook" style={{ color: '#315096' }} />
              <Text>Facebook</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

AppRegistry.registerComponent('HelloReactNative', () => HelloReactNative);
