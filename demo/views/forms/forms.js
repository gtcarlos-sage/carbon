import React from 'react';
import TextboxDemo from './textbox-demo';
import DecimalDemo from './decimal-demo';
import DropdownDemo from './dropdown-demo';
import DateDemo from './date-demo';
import CheckboxDemo from './checkbox-demo';

class Forms extends React.Component {
  /**
   * @method render
   */
  render() {
    return (
      <div>
        <h1>Forms</h1>
        <CheckboxDemo />
        <DecimalDemo />
        <DateDemo />
        <DropdownDemo />
        <TextboxDemo />
      </div>
    );
  }
}

export default Forms;
