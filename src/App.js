import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { increasing: false };
    this.update = this.update.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ increasing: nextProps.val > this.props.val });
  }

  shouldComponentUpdate(nextProps, _nextState) {
    return nextProps.val % 5 === 0;
  }

  componentDidUpdate(prevProps, _prevState) {
    console.log(`prevProps: ${prevProps.val}`);
  }

  update() {
    ReactDOM.render(
      <App val={this.props.val + 1} />,
      document.getElementById('root')
    );
  }

  render() {
    console.log(this.state.increasing);
    return (
      <button onClick={this.update}>{this.props.val}</button>
    );
  }
}

App.defaultProps = { val: 0 };

export default App;
