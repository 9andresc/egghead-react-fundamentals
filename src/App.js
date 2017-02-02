import React from 'react';

const HOC = (InnerComponent) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.update = this.update.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  update() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <InnerComponent
        {...this.props}
        {...this.state}
        update={this.update}
      />
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Button>button</Button>
        <hr />
        <LabelHOC>label</LabelHOC>
      </div>
    );
  }
}

const Button = HOC(props =>
  <button onClick={props.update}>{props.children} - {props.count}</button>
);

class Label extends React.Component {
  componentWillMount() {
    console.log('Label will mount');
  }

  render() {
    return (
      <label onMouseMove={this.props.update}>{this.props.children} - {this.props.count}</label>
    );
  }
}

const LabelHOC = HOC(Label);

export default App;
