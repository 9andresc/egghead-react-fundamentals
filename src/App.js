import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentEvent: '---' };
    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({ currentEvent: e.type });
  }

  render() {
    return (
      <div>
        <textarea
          onBlur={this.update}
          onCopy={this.update}
          onCut={this.update}
          onDoubleClick={this.update}
          onFocus={this.update}
          onKeyPress={this.update}
          onPaste={this.update}
          cols="30"
          rows="10"
        />
        <h1>{this.state.currentEvent}</h1>
      </div>
    );
  }
}

export default App;
