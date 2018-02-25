import React from 'react';
import PropTypes from 'prop-types';
import { Button, Label } from 'seidr-components'

import '../assets/stylesheets/base.scss';


const App = ({ name }) => {
  return (
    <div>
      <h1> Component Library </h1>
      <hr></hr>

      <Label>Hello, {name}!</Label>

      {/* Add Button Group or non-inline default */}
      <h2> Buttons </h2>
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
        Wide Button
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
