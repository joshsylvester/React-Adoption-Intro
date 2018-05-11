
  import React from 'react';
  import './Button.css';

  function Button({type, children}) {
    return (
      <button className={`slds-button slds-button--${type}`}>
        {children}
      </button>
    );
  }

  function ButtonExample() {
    return (
      <div className="example">
        <Button type="neutral">Button Neutral</Button>
        <Button type="brand">Button Brand</Button>
        <Button type="destructive">Button Destructive</Button>
        <Button type="success">Button Success</Button>
      </div>
    );
  }

  export { Button, ButtonExample };
