import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { a: '', b: '' };
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({
      a: ReactDOM.findDOMNode(this.a).value,
      b: ReactDOM.findDOMNode(this.b).value,
    });
  }

  render() {
    return (
      <div>
        <Input
          ref={component => this.a = component}
          onChange={this.update}
        />
        {this.state.a}
        <hr />
        <Input
          ref={component => this.b = component}
          onChange={this.update}
        />
        {this.state.b}
      </div>
    );
  }
}

class Input extends React.Component {
  render() {
    return <input type="text" onChange={this.props.update} />;
  }
}

export default App;
