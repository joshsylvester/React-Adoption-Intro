
  import React from 'react';

  // Stateless / Functional Component
  const Button = ({children,type}) => {
    return (
      <button className={`slds-button slds-button--${type}`}>
        {children}
      </button>
    );
  }

  // Stateful Component
  class ButtonCounter extends React.Component {
    state = {
      count: 0,
    };

    updateCount() {
      this.setState((prevState, props) => {
        return { count: prevState.count + 1 }
      });
    }

    render() {
      return (
        <Button onClick={() => this.updateCount()} type="success">
          Clicked {this.state.count} times
        </Button>
      );
    }
  }

  export default ButtonCounter;
