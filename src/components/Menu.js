import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const Menu = ({isLoggedIn}) => {
    return (
        <ul>
          { isLoggedIn ?
            <li>
              <Link to={'/logout'}>logout</Link>
            </li>
          :
            <li>
              <Link to={'/login'}>login</Link>
            </li>
          }
          <li>
            <Link to={'/register'}>register</Link>
          </li>
          <li>    
            <Link to={'/achievements'}>achievements</Link>
          </li>
          <li>    
            <Link to={'/achievements/new'}>new achievement</Link>
          </li>
          <li>    
            <Link to={'/profile'}>profile</Link>
          </li>
        </ul> 
    );
};

export default connect((state) => ({
    isLoggedIn: state.authReducer.isLoggedIn
}))(Menu);
