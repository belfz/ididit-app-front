import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import Achievements from './Achievements';

const Profile = ({dispatch, profile = {}}) => {
    console.log('profile:', profile);
    return (
        <div>
            <Link to={'/logout'}>logout</Link>
            <p>Profile: {profile.email}</p>
            <Achievements list={profile.achievements} />
        </div>    
    );
};

export default connect((state) => ({
    profile: state.authReducer.profile
}))(Profile);
