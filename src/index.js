import React from 'react';
import ReactDOM from 'react-dom';
import TestComponent from './test-component.js'

const Wrapper = (
  <div>
	<TestComponent />
  </div>
);

ReactDOM.render(Wrapper, document.getElementById('root'));
