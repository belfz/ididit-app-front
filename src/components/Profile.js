import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'

const Profile = ({dispatch, profile = {}}) => {
    return (
        <div>
            <Link to={'/logout'}>logout</Link>
            <p>Profile: {profile.email}</p>
        </div>    
    );
};

export default connect((state) => ({
    profile: state.authReducer.profile
}))(Profile);
