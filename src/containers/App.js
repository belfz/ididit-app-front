import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class App extends React.Component {
    constructor (props) {
        super(props);
    }
    
    render () {
        return (
            <div>
                <ul>
                    <li>
                        <Link to={'/logout'}>logout</Link>
                    </li>
                    <li>    
                        <Link to={'/achievements'}>achievements</Link>
                    </li>
                    <li>    
                        <Link to={'/profile'}>profile</Link>
                    </li>
                </ul>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
