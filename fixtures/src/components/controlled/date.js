import React, { useState } from 'react';
import Date from 'carbon-react/lib/__experimental__/components/date';
import { LogConsumer } from '../log';

const ControlledDate = () => {
  const [state, setState] = useState('');
  return (
    <LogConsumer>
      {(log) => {
        const onChange = (e) => {
          setState(e.target.value.displayText);
          log(e, { method: 'onChange' });
        };
        const onBlur = e => log(e, { method: 'onBlur' });
        return (
          <React.Fragment>
            <div id='controlled_date'>
              <h1>Controlled Date</h1>
              <ul>
                <li>onChange handler should update the log when the value is changed, e.target.value should be the
                  users input
                </li>
                <li>onBlur handler should update the log when the date is blurred
                </li>
                <li>date has props value, name, id which should be reflected in both events</li>
              </ul>

              <Date
                onChange={ onChange }
                onBlur={ onBlur }
                id='controlled_date_id'
                name='controlled_date_name'
                label='Controlled Date'
                value={ state }
              />
            </div>
          </React.Fragment>
        );
      }}
    </LogConsumer>
  );
};

export default React.memo(ControlledDate, () => false);
