import React from 'react';
import { connect } from 'react-redux';

const Profile = ({dispatch, profile = {}}) => {
    return (
        <div>
            <p>Profile: {profile.email}</p>
        </div>    
    );
};

export default connect((state) => ({
    profile: state.authReducer.profile
}))(Profile);
