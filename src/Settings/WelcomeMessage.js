import React from 'react';
import { AppContext } from '../App/AppProvider';

export default function ({firstVisit}) {
    return(
      <AppContext.Consumer>
        {({firstVisit}) =>
          firstVisit ? <div>
            <h1>Welcome to CryptoDash</h1>
          </div> : null
        }
      </AppContext.Consumer>
    ); 
  };