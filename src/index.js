import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ButtonExample } from './Button';
import { Welcome, ButtonCounter, StateButtonCounter } from './PropsState';
import { HelloJSX, HelloCompiled } from './JSX';
import './index.css';

const DemoApp = () => {
  return (
    <div>
      {/* <App /> */}
      {/* <Welcome /> */}
      {/* <StateButtonCounter /> */}
      {/* <ButtonCounter /> */}
      {/* <HelloJSX /> */}
      {/* <HelloCompiled /> */}
    </div>
  )
};

ReactDOM.render(<DemoApp />, document.getElementById('root'));
