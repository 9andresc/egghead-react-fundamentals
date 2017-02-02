import React from 'react';

class App extends React.Component {
  render() {
    return (
      <Parent>
        <div className="childA" />
        <div className="childB" />
      </Parent>
    );
  }
}

class Parent extends React.Component {
  render() {
    // const items = React.Children.toArray(this.props.children);
    // console.log(items);
    React.Children.forEach(this.props.children, child => console.log(child.props.className));
    return null;
  }
}

export default App;
