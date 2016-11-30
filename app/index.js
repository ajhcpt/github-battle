var React = require('react');
var ReactDOM = require('react-dom');

const HelloWorld = ({name}) => {
   return (
    <div> Hello {name}. </div>
  )  
}; 

ReactDOM.render(
  <HelloWorld name="Andrew" />,
  document.getElementById('app')
);