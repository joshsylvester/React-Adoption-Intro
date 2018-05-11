
  import React from 'react';

  // Simple component using JSX
  const HelloJSX = () => {
    return <span>Hello!</span>;
  };


  // The same component, compiled.
  var HelloCompiled = function() {
    return React.createElement(
      'span',
      {},
      'Hello!'
    );
  };

  export { HelloJSX, HelloCompiled };
