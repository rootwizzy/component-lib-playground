import React from 'react';
import PropTypes from 'prop-types';
import { Button, Label, Header } from 'seidr-components'

import '../assets/stylesheets/base.scss';


const App = ({ name }) => {
  return (
    <div>
      <Header size="1"> Component Libary</Header>
      <hr></hr>

      <Header size="2">Headers</Header>

      <Header size="5">Header 5</Header>
      <Header size="4">Header 4</Header>
      <Header size="3">Header 3</Header>
      <Header size="2">Header 2</Header>
      <Header size="1">Header 1</Header>

      <Header size="2">Labels</Header>
      <br></br>
      <Label size="small">Small Label</Label>
      <br></br>
      <Label size="medium">Medium Label</Label>
      <br></br>
      <Label size="large">Large Label</Label>


      {/* Add Button Group or non-inline default */}
      <Header size="2">Buttons </Header>
      <Button bgColor="green" size="small">
        Small Button
      </Button>

      <br></br>

      <Button bgColor="yellow" fontColor="black" size="medium">
        Medium Button
      </Button>

      <br></br>

      <Button bgColor="orange" size="large">
        Large Button
      </Button>

      <br></br>

      <Button bgColor="blue" size="wide">
        Wide Button
      </Button>

      <br></br>

      <Button bgColor="blue" size="extraWide">
        Extra Wide Button
      </Button>

      <Button bgColor="purple" size="fullWidth">
        Full Width Button
      </Button>
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
