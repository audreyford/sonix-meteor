import React from 'react';
import { Container, Menu, Icon, Image } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item><Image height="60px" src="https://cdn.shopify.com/s/files/1/2143/1155/files/Screen_Shot_2017-07-21_at_4.40.58_PM.png?v=1500680473"/></Menu.Item>
            <Menu.Item position="right"><Icon name="search"/></Menu.Item>
            <Menu.Item><Icon name="shopping bag"/></Menu.Item>
            <Menu.Item><Icon name="align justify"/></Menu.Item>
          </Container>
        </Menu>
    );
  }
}

