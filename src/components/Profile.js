import React from 'react';
import { connect } from 'react-redux';

const Profile = ({dispatch, profile = {}, isAuthenticated}) => {
    return (
        <div>
        Profile: {profile.first_name}, {profile.last_name}
        </div>    
    );
};

export default connect((state) => ({
    profile: state.authReducer.profile,
    isAuthenticated: state.authReducer.isAuthenticated
}))(Profile);
