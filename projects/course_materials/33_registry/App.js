import React, { Component } from 'react';
import { Container, Header, Title, Content, Separator, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class ListThumbnailExample extends Component {
  render() {
    return (
      <Container>
             <Header/>
        <Content>
          <List>
          <Separator bordered>
            <Text>Incidents</Text>
          </Separator>
                      <ListItem>
              
              <Body>
                <Text>Water Registry Down</Text>
                <Text note numberOfLines={3}>Server room has flooded and servers have been taken down . .</Text>
                <Text note>10:00AM Sep 11</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
                    <Separator bordered>
            <Text>News</Text>
          </Separator>
          
            <ListItem>
              <Body>
                <Text >Elmore Field Days Oct 1st,2nd & 3rd 2019</Text>
                <Text note numberOfLines={3}>This year, we will have staff at the Elmore Field Days to specifically provide information . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
              
          <ListItem>
              <Body>
                <Text >Victorian Water Accounts 2017-18 now available</Text>
                <Text note numberOfLines={3}>Victorian Water Accounts 2017-18 now available This report is the 15th in the annual series and . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}