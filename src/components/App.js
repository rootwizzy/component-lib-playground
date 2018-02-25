import React from 'react';
import PropTypes from 'prop-types';
import { Button, Label } from 'seidr-components'

import '../assets/stylesheets/base.scss';


const App = ({ name }) => {
  return (
    <div>
      <Label>Hello, {name}!</Label>
      <Button
        bgColor="orange"
        size="large"
      >
        Button
      </Button>
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string,
};

export default App;
