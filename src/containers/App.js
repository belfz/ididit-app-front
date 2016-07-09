import React from 'react';
import Menu from '../components/Menu';

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Menu />
        <div>
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
