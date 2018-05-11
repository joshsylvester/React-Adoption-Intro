  import React from 'react';

  class StateButtonCounter extends React.Component {
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
        <button
          onClick={() => this.updateCount()}
          className="slds-button slds-button--brand"
        >
          Clicked {this.state.count} times
        </button>
      );
    }
  }

  export default StateButtonCounter;
