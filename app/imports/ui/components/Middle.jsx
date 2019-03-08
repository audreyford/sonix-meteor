import React, { Component } from 'react';
import { Grid, Header, Image, Button } from 'semantic-ui-react';

class Middle extends Component {
  render() {
    const gridStyle = { height: "500px" };
    return (
        <div className="sonix-background">
          <Grid container verticalAlign="center" style={gridStyle}>
            <Grid.Row columns="two">
              <Grid.Column>
                <p>NEW ARRIVALS</p>
                <Header as="h1">
                  Carbie Girl
                </Header>
                <p>Indulge in our new Spring '19 cases and tech accessories now!</p>
                <Button color='black'>SHOP NOW</Button>

              </Grid.Column>
              <Grid.Column>
                <Image src="//cdn.shopify.com/s/files/1/2143/1155/files/SonixSpring19_0639_HiRes2_766c7c94-ca54-43de-be31-c88de84f2adf_1920x.jpg?v=1549927565"/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}

export default Middle;
